import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loading from "./Loading";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [numQuestions, setNumQuestions] = useState(10);
  const [language, setLanguage] = useState('english');
  const [animalImage, setAnimalImage] = useState(null);

  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    setLoading(true);
    setQuestions([]);
    setSelectedAnswers([]);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('numQuestions', numQuestions);
    formData.append('language', language);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      //   try {
      // const response = await fetch('https://server-dep-cwjr.onrender.com/upload', {
      //   method: 'POST',
      //   body: formData,
      // });


      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      setQuestions(result.questions || []);
      localStorage.setItem('questions', JSON.stringify(result.questions || []));
      navigate('/Quizpage');
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Brightways - Quiz";

    const fetchAnimalImage = async () => {
      try {
        const headers = new Headers({
          "Content-Type": "application/json",
          "x-api-key": "live_WjADtSjrq2TUQTPG6bm453kK81GVLdbYCOItFRi3scR2KH0kFjrzmtVpKXPdYsdL"
        });

        const requestOptions = {
          method: "GET",
          headers: headers,
          redirect: "follow"
        };

        const response = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions);
        const data = await response.json();
        setAnimalImage(data[0]?.url);
      } catch {
        setAnimalImage(null);
      }
    };

    fetchAnimalImage();
    const interval = setInterval(fetchAnimalImage, 1000);
    const timer = setTimeout(() => setIsLoading(false), 300);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer); 
    };
  }, []);

  if (loading) {
    return (
      <div>
        <br/><br/><br/>
        <h2>Loading...</h2>
        {animalImage && (
          <img src={animalImage} alt="Random Animal" className="animal-img animated-blink" />
        )}
        <style>{`
          .animal-img {
            width: 250px;
            height: 250px;
            border-radius: 30px;
            margin: 10px;
            transition: opacity 0.2s ease-in-out;
          }
        `}</style>
      </div>
    );
  }
  return (
    <div>


      <section className="quiz-section">
        <h1 className="quizgen">Quiz Generator</h1>
        <form className="quiz-form" onSubmit={handleSubmit}>
          <label className="pdf">Upload File (PDF or Image):</label>
          <input type="file" accept=".pdf, image/*" onChange={handleFileChange} />

          <label className="ques">Number of Questions:</label>
          <input type="number" value={numQuestions} onChange={handleNumQuestionsChange} placeholder="Example: 10" />

          <label className="lang">Preferred Language:</label>
          <input type="text" value={language} onChange={handleLanguageChange} placeholder="Example: Hindi, Spanish" />

          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Quiz;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Grammer.css';

function Grammer() {
  const [pdfFile, setPdfFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [animalImage, setAnimalImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
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
    const interval = setInterval(fetchAnimalImage, 1000);
    return () => clearInterval(interval);
}, []);


  const handlePdfChange = (event) => setPdfFile(event.target.files[0]);

  const handleJobDescriptionChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    if (words.length <= 200) {
      setJobDescription(text);
      setWordCount(words.length);
    }
  };

  const handleJobRoleChange = (event) => setJobRole(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (wordCount < 120) {
      alert('Word count must be at least 120.');
      return;
    }
    setSubmitting(true);
    setLoading(true);

    const formData = new FormData();
    formData.append('resume', pdfFile);
    formData.append('jd', jobDescription);
    formData.append('role', jobRole);

    setTimeout(() => {
      fetch('https://ai-mocker-backend.onrender.com/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          navigate('/grammerresponse', {
            state: {
              atsScore: data.atsScore,
              suggestions: data.suggestions,
              profileSummary: data.profileSummary,
            },
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        })
        .finally(() => setLoading(false));
    }, 1500);
  };

  if (loading) {
    return (
      <div><br/><br/><br/>
        <h2>Loading...</h2>
        {animalImage && <img src={animalImage} alt="Random Animal" className="animal-img" />}
        <style>{`
          .animal-img {
            width: 250px;
            height: 250px;
            border-radius: 30px;
            margin: 10px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div>
      <div className="note-section">
        <h1 className="notegen">Evaluate Your Essay</h1>
        <form onSubmit={handleSubmit} className="note-form">
          <label>
            <textarea
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              className="input"
              placeholder="Write your essay, paragraph here.."
              required
            />
          </label>
          <div className={`headr ${wordCount < 120 || wordCount > 200 ? 'warning' : ''}`}>
            {200 - wordCount} words remaining..
          </div>
          <button type="submit" className="note-form button" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Grammer;

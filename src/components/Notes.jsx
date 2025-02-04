import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notes.css";

const Notes = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [animalImage, setAnimalImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Brightways - Enhancer";
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
    const handleImageChange = (event) => setImageFile(event.target.files[0]);
    const handlePromptChange = (event) => setPrompt(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setSubmitting(true);

        const formData = new FormData();
        if (pdfFile) formData.append("notes", pdfFile);
        if (imageFile) formData.append("image", imageFile);
        formData.append("prompt", prompt || "English");

        fetch("https://server-deploy-nw8p.onrender.com/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) return response.blob();
                throw new Error("Error generating PDF");
            })
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                setPdfUrl(url);
                setSubmitting(false);
                setLoading(false); 
                navigate("/response", { state: { pdfUrl: url } });
            })
            .catch((error) => {
                console.error("Error:", error);
                setSubmitting(false);
                setLoading(false);
            });
    };

    if (loading) {
        return (
            <div>
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
            {/* <nav className="navbar">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1725003949/logo_rhifri.png" alt="Brightways Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="/" className="headr">Home</a></li>
                    <li><a href="/enhancer" className="headr">Note Enhancer</a></li>
                    <li><a href="quiz" className="headr">Quiz</a></li>
                    <li><a href="task" className="headr">Task</a></li>
                    <li><a href="#" className="headr">Grammar</a></li>
                </ul>
                <a href="#" className="register-btn">Register</a>
            </nav> */}

            <section className="note-section">
                <h1 className="notegen">Enhance Begins Here</h1>
                <form className="note-form" onSubmit={handleSubmit}>
                    <label className="pdf">Upload Your Notes (PDF Only):</label>
                    <input type="file" accept=".pdf" onChange={handlePdfChange} />

                    <label className="ques">Upload An Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />

                    <label className="lang">Preferred Language (Optional, Default: English):</label>
                    <input type="text" placeholder="Enter Your Language Here" value={prompt} onChange={handlePromptChange} />

                    <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit"}</button>
                </form>
            </section>
        </div>
    );
};

export default Notes;

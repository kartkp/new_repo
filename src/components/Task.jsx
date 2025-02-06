import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Task.css";
import Navbar from "./Navbar";

const Task = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [watermark, setWatermark] = useState("color");
    const [animalImage, setAnimalImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Your Own Task Solver";
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
        const timer = setTimeout(() => setLoading(false), 300);
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    const handlePdfChange = (event) => setPdfFile(event.target.files[0]);
    const handleImageChange = (event) => setImageFile(event.target.files[0]);
    const handlePromptChange = (event) => setPrompt(event.target.value);
    const handleWatermarkChange = (event) => setWatermark(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setSubmitting(true);

        const formData = new FormData();
        if (pdfFile) formData.append("notes", pdfFile);
        if (imageFile) formData.append("image", imageFile);
        formData.append("prompt", prompt || "English");
        formData.append("watermark", watermark);

        // fetch("http://localhost:3000/upload", {
        //     method: "POST",
        //     body: formData,
        // })
                fetch("https://random-prompt.onrender.com/upload", {
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
                navigate("/response", { state: { pdfUrl: url } });
            })
            .catch((error) => {
                console.error("Error:", error);
                setSubmitting(false);
            });
    };

    if (loading) {
        return (
            <div><br/><br/><br/>
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

            <section className="task-section">
                <h1 className="taskgen">Your Own Task Solver</h1>
                <form className="task-form" onSubmit={handleSubmit}>
                    <label className="pdf">Upload Your Notes (Optional):</label>
                    <input type="file" onChange={handlePdfChange} />

                    <label className="ques">Upload An Image (Optional):</label>
                    <input type="file" onChange={handleImageChange} />

                    <label className="lang">Enter Your Prompt:</label>
                    <input type="text" placeholder="Enter Your Prompt Here" value={prompt} onChange={handlePromptChange} />

                    <label className="watermark">Select a Watermark for PDF:</label>
                    <select name="colr" id="colr" value={watermark} onChange={handleWatermarkChange}>
                        <option value="color">Color</option>
                        <option value="bnw">Black and White</option>
                        <option value="none">None</option>
                    </select>

                    <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Submit"}</button>
                </form>
            </section>
        </div>
    );
};

export default Task;

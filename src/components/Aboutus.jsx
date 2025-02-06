import React from "react";

const Aboutus = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796188d45e60c0226977f35_HERO%20Bckground%20image.png')",
      }}
    >
      <div className="p-8 bg-white bg-opacity-20 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white w-[40%] max-w-md">
        <div className="flex justify-center gap-6">
          <img
            src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1738867469/BrightWays_pzlwe7.png"
            alt="Album 1"
            className="w-48 h-48 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
          />
          <img
            src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1738867467/team.png_lyt8n5.jpg"
            alt="Album 2"
            className="w-48 h-48 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
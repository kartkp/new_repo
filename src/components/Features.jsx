import { motion } from "framer-motion";

const Features = () => {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/67892ad20b79c099e7f3f24f/6796188d45e60c0226977f35_HERO%20Bckground%20image.png')",
      }}
    >
      <div className="flex gap-6 p-6 w-[80vw] max-w-4xl">
        <motion.img
          src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1738867469/BrightWays_pzlwe7.png"
          alt="BrightWays"
          className="w-1/2 rounded-2xl shadow-lg"
          whileHover={{ scale: 1.01 }}
        />
        <motion.img
          src="https://res.cloudinary.com/dnsjdvzdn/image/upload/v1738867469/features_vtdnaw.png"
          alt="Features"
          className="w-1/2 rounded-2xl shadow-lg"
          whileHover={{ scale: 1.01 }}
        />
      </div>
    </div>
  );
};

export default Features;

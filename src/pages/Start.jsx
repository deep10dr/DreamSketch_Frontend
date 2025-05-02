import React, { useState, useEffect } from 'react';
import { FaMagic, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Data from '../assets/imageData.json';

function Start() {
  const images = Data;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleNavigate = () => {
    navigate('/generation'); // Use navigate to go to the generation page
  };

  return (
    <div className=" h-full md:h-screen w-screen  bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-center items-center">
      <div className="w-full md:w-[90%] md:h-[70%] h-screen flex flex-col-reverse md:flex-row gap-4 p-4">
        
        {/* Left Section */}
        <div className="flex-[0.5] h-full rounded-xl shadow-2xl text-white flex flex-col justify-center items-center p-6">
          <div className="flex items-center gap-3 mb-4">
            <FaMagic className="text-4xl text-blue-400 animate-pulse" />
            <h1 className="text-4xl font-bold text-center">DreamSketch</h1>
          </div>
          <p className="text-lg mb-6 text-center text-gray-300">
            Turn your imagination into art with just a click!
          </p>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 cursor-pointer"
            onClick={handleNavigate} // Trigger navigate on click
          >
            Let’s Go <FaArrowRight />
          </motion.button>
        </div>

        {/* Right Section */}
        <div className="flex-[0.45] h-full rounded-xl shadow-2xl relative overflow-hidden">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="w-full h-full relative"
          >
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Waveform animation effect */}
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent animate-pulseWave z-10" />
          </motion.div>

          {/* Hover content */}
          <div className="absolute inset-0 flex justify-center items-center flex-col bg-opacity-60 text-white opacity-0 hover:opacity-90 transition-opacity duration-500 ease-in-out z-20">
            <h2 className="text-2xl font-semibold text-center">Explore Your Imagination!</h2>
            <p className="mt-2 text-lg">Unleash your creativity with every click.</p>
          </div>
        </div>
       
      </div>
      <div className="w-full text-white text-center mt-10">
  <button
    onClick={() => window.location.href = "/about"}
    className="text-xl font-bold underline hover:text-blue-400 transition duration-300 cursor-pointer"
  >
    About
  </button>
</div>

      {/* Add the wave animation using Tailwind custom animation */}
      <style>
        {`
          @keyframes pulseWave {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.1); }
          }
          .animate-pulseWave {
            animation: pulseWave 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Start;

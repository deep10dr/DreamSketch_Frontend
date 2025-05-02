import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col justify-center items-center gap-6 px-4 text-center">
      <FaExclamationTriangle className="text-yellow-400 text-6xl animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg md:text-xl text-white max-w-xl">
        The page you’re looking for doesn’t exist, or an error occurred.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 cursor-pointer"
      >
        Go Back Home
      </button>
    </div>
  );
}

export default Error;

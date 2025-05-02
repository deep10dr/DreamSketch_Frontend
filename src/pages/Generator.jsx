import React, { useState } from 'react';
import { FaMagic } from 'react-icons/fa';
import { FiDownload, FiEdit3, FiImage } from 'react-icons/fi';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function Generator() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [dimension, setDimension] = useState('Select Image Size');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePromptChange = (e) => setPrompt(e.target.value);
  const handleDimensionChange = (e) => setDimension(e.target.value);

  const generateImage = async () => {
    if (dimension === 'Select Image Size') {
      Swal.fire({
        title: 'Oops!',
        text: 'Please select an image size before generating.',
        icon: 'warning',
        confirmButtonText: 'Got it!',
        background: '#1e293b',
        color: '#f1f5f9',
        confirmButtonColor: '#3b82f6',
      });
      return;
    }

    setLoading(true);
    setErrorMsg('');
    try {
      const [width, height] = dimension.split('x').map(Number);

      const response = await fetch(' https://dreamsketch-backend.up.railway.app/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          width,
          height,
          model: 'Flux-1',
        }),
      });

      if (!response.ok) throw new Error('Image generation failed');

      const resultBlob = await response.blob();
      const imageURL = URL.createObjectURL(resultBlob);
      setGeneratedImage(imageURL);
    } catch (error) {
      console.error('Error during generation:', error);
      setErrorMsg('Failed to generate image. Please try again or check the server.');
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'generated_image.png';
    link.click();
  };

  return (
    <div className="h-full w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col justify-center items-center py-8 px-4">
      <div className="flex items-center gap-3 mb-6">
        <FaMagic className="text-4xl text-blue-400 animate-pulse" />
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
          DreamSketch
        </h1>
      </div>

      <div className="w-full max-w-3xl bg-[#1e293b] rounded-3xl shadow-2xl p-6 flex flex-col gap-6">
        <div className="p-4 rounded-xl shadow-inner backdrop-blur-sm bg-[#0f172a]/70 flex flex-col gap-4">

          {/* Prompt input with icon */}
          <div className="flex items-center gap-2 text-slate-100 font-semibold text-lg">
            <FiEdit3 />
            <span>Describe your dream scene</span>
          </div>
          <textarea
            placeholder="Type your dream..."
            value={prompt}
            onChange={handlePromptChange}
            className="w-full h-32 p-4 bg-[#0f172a] rounded-lg resize-none focus:outline-none focus:ring-2 ring-blue-100 focus:ring-blue-200 text-slate-100 text-lg transition-all duration-200"
          />

          {/* Size + Generate */}
          <div className="flex flex-col md:flex-row gap-4 shadow-lg">
            <div className="relative w-full md:w-[50%]">
              <FiImage className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
              <select
                value={dimension}
                onChange={handleDimensionChange}
                className="w-full pl-12 pr-4 py-3 bg-[#0f172a] text-slate-100 rounded-2xl font-semibold shadow-md focus:outline-none transition-all duration-300 text-base appearance-none cursor-pointer"
              >
                <option disabled>Select Image Size</option>
                <option value="256x256">256x256</option>
                <option value="512x512">512x512</option>
                <option value="768x768">768x768</option>
                <option value="1024x1024">1024x1024</option>
                <option value="1280x720">1280x720 (HD)</option>
                <option value="1920x1080">1920x1080 (Full HD)</option>
              </select>
            </div>

            <button
              onClick={generateImage}
              disabled={loading}
              className={`w-full md:w-44 py-3 rounded-xl font-semibold transition-all duration-300 flex justify-center items-center cursor-pointer ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-700 to-purple-600 hover:from-blue-800 hover:to-purple-700 text-white'
              }`}
            >
              {loading ? 'Generating...' : (
                <>
                  Generate <FaMagic className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>

        {errorMsg && (
          <div className="text-red-400 text-center font-semibold">{errorMsg}</div>
        )}

        {generatedImage && (
          <div className="flex flex-col items-center gap-4 mt-4">
            <img
              src={generatedImage}
              alt="Generated"
              className="rounded-2xl shadow-lg w-auto h-60 object-contain animate-fade-in"
            />
            <button
              onClick={downloadImage}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-gradient-to-r from-red-400 to-yellow-500 text-white rounded-lg font-medium shadow-md transition-all duration-300"
            >
              <FiDownload className="text-xl" />
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Generator;

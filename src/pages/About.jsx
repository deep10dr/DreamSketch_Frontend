import React from 'react';
import { FaBrain, FaImage, FaTools, FaRocket, FaCode, FaCloud } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-12 px-4 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-[#1e293b] rounded-3xl shadow-2xl p-10 text-slate-100 backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-10 animate-gradient">
          About DreamSketch
        </h1>

        <div className="grid md:grid-cols-2 gap-10 text-lg">
          <div className="flex items-start gap-4">
            <FaBrain className="text-3xl text-blue-400 mt-1 animate-pulse" />
            <div>
              <h2 className="font-semibold text-xl mb-1">AI-Powered Imagination</h2>
              <p>
                DreamSketch allows users to transform their thoughts into vivid visuals using just text. Describe your idea, and see it come to life through the power of AI.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaImage className="text-3xl text-purple-400 mt-1" />
            <div>
              <h2 className="font-semibold text-xl mb-1">Flux-1 Model Integration</h2>
              <p>
                We use the <strong>Flux-1 model</strong> via a third-party API. While we didn’t build the model, our interface makes it easy and efficient to harness its capabilities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaTools className="text-3xl text-yellow-400 mt-1" />
            <div>
              <h2 className="font-semibold text-xl mb-1">Modern Tech Stack</h2>
              <p>
                Built using <strong>ReactJS and Tailwind CSS</strong>, DreamSketch is lightweight, responsive, and performance-focused — perfect for creative workflows.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaRocket className="text-3xl text-pink-500 mt-1" />
            <div>
              <h2 className="font-semibold text-xl mb-1">Fast & Responsive</h2>
              <p>
                Generate high-quality images in seconds. Choose from different resolutions including HD and Full HD. Everything is optimized for speed and clarity.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCode className="text-3xl text-green-400 mt-1" />
            <div>
              <h2 className="font-semibold text-xl mb-1">Frontend Focus</h2>
              <p>
                As a frontend developer, my focus was on designing a clean, intuitive interface that lets users create stunning images without technical complexity.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCloud className="text-3xl text-cyan-400 mt-1" />
            <div>
              <h2 className="font-semibold text-xl mb-1">Cloud API Access</h2>
              <p>
                The image generation requests are sent to a backend server which connects to the Flux-1 model hosted on the cloud. No local model training required.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center mt-10 italic text-slate-400">
          “DreamSketch is made for imagination – powered by AI, styled by you.”
        </p>
      </div>
    </div>
  );
}

export default About;

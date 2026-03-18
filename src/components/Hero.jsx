import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white px-6 md:px-12 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/workplace.jpg"
          alt="Workspace"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-b from-black/70 via-black/60 to-[#0f0f0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center md:text-left">

        {/* Last Name */}
        <h2 className="text-sm md:text-lg tracking-[0.4em] uppercase text-gray-400 mb-2">
          DUSINGIZIMANA
        </h2>

        {/* First Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Isaac
        </h1>

        {/* Role */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 font-light border-t border-gray-600 pt-4 inline-block">
          Web & Mobile Developer
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          <button
            onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full border border-gray-500 text-sm tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105"
          >
            View Projects
          </button>

          <button
            onClick={() => document.getElementById('contactMe')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full border border-gray-500 text-sm tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105"
          >
            Contact Me
          </button>

        </div>
      </div>
    </section>
  );
}
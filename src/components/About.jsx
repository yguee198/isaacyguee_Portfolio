import React from "react";

export default function About() {
  return (
    <section className="bg-[#0f0f0f] text-white py-24 px-6 md:px-16">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Hi, I'm <span className="text-white font-semibold">Isaac</span>, a 
            Software Developer and IT student passionate about building modern 
            web and mobile applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I enjoy working with technologies like React, React Native, and other 
            modern tools to create fast, scalable, and user-friendly applications. 
            My goal is to become a professional software engineer and build 
            impactful digital products.
          </p>

          {/* Location */}
          <div className="text-sm text-gray-500 space-y-1 border-t border-gray-800 pt-6">
            <p>Kigali, Rwanda</p>
            <p>Nyamirambo</p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

            {/* Image */}
            <img
              src="/profile_pic.png"
              alt="Isaac profile"
              className="relative w-64 md:w-80 rounded-full object-cover border border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
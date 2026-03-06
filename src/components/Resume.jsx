import { useEffect, useState } from "react";

const SkillBar = ({ label, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 300);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300 font-medium">{label}</span>
        <span className="text-gray-500">{level}%</span>
      </div>

      <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gray-400 to-gray-200 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default function Resume() {
  return (
    <section className="bg-[#0f0f0f] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            Resume
          </h2>
          <p className="text-gray-500 mt-2">
            Skills, experience, Hobbies and what I can offer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Skills */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-white font-semibold text-lg mb-8 tracking-wide">
              Software Skills
            </h3>

            <SkillBar label="Node JS" level={90} />
            <SkillBar label="React JS" level={90} />
            <SkillBar label="MongoDB" level={70} />
            <SkillBar label="PostgreSQL" level={70} />
            <SkillBar label="MySQL" level={95} />
            <SkillBar label="PHP" level={80} />
            <SkillBar label="React Native" level={60} />
            <SkillBar label="Tailwind CSS" level={75} />
          </div>

          {/* Experience */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-white font-semibold text-lg mb-8 tracking-wide">
              Experience
            </h3>

            <div className="relative border-l border-zinc-700 pl-6 space-y-10">

              <div className="relative">
                <div className="absolute -left-[22px] top-1 w-4 h-4 bg-white rounded-full border-4 border-[#0f0f0f]"></div>
                <h4 className="font-semibold text-white">
                  Dynasoft
                </h4>
                <p className="text-sm text-gray-500">
                  2025 – Present • Junior Developer
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[22px] top-1 w-4 h-4 bg-white rounded-full border-4 border-[#0f0f0f]"></div>
                <h4 className="font-semibold text-white">
                  ICT Chamber
                </h4>
                <p className="text-sm text-gray-500">
                  2025 – Present • Data Analysis & Visualization
                </p>
              </div>

            </div>
          </div>

          {/* Services */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-white font-semibold text-lg mb-8 tracking-wide">
              What I Can Do
            </h3>

            <ul className="space-y-5 text-gray-400 text-sm">

              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-gray-300 rounded-full"></span>
                Build responsive web & mobile applications
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-gray-300 rounded-full"></span>
                Develop REST APIs and backend systems
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-gray-300 rounded-full"></span>
                Design scalable UI using React and Tailwind
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-gray-300 rounded-full"></span>
                Implement authentication and database systems
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-gray-300 rounded-full"></span>
                Optimize performance and user experience
              </li>

          
           <h3 className="text-white font-semibold text-lg mb-8 tracking-wide mt-[90px]">
             Hobbies
            </h3>
              <li>1.Listening to music</li>
              <li>2.Playing basketball</li>
              <li>3.Watching movies</li>
              <li>4.Building Mob apps</li>
           

            </ul>
           
          </div>

        </div>
      </div>
    </section>
  );
}
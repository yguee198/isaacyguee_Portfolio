const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm border border-zinc-700 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm border border-zinc-700 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300"
          >
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
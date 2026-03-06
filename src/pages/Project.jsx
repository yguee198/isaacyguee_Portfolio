import ProjectCard from "../components/ProjectCard";
import projects from "../data/project";

const Projects = () => {
  return (
    <section className="bg-black text-white min-h-screen px-10 py-20">

      <h1 className="text-6xl font-bold mb-16 text-center">
        My Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>

    </section>
  );
};

export default Projects;
function Projects() {
  const projects = [
    {
      title: "Agent Portal",
      description:
        "One of the main projects I worked on as a System Analyst at Seymour Systems was building a custom order management system for a retail client",
      tech: ["React", "Redux", "Chart.js", "Firebase"],
      image: "xyz",
      demo: "xyz.com",
    },
    {
      title: "Agent Portal",
      description:
        "One of the main projects I worked on as a System Analyst at Seymour Systems was building a custom order management system for a retail client",
      tech: ["React", "Redux", "Chart.js", "Firebase"],
      image: "xyz",
      demo: "xyz.com",
    },
    {
      title: "Agent Portal",
      description:
        "One of the main projects I worked on as a System Analyst at Seymour Systems was building a custom order management system for a retail client",
      tech: ["React", "Redux", "Chart.js", "Firebase"],
      image: "xyz",
      demo: "xyz.com",
    },
    
  ];
  return (
    <section id="projects" className="scroll-mt-8">
      <h1 className="text-3xl font-bold text-center p-16">Projects</h1>
      <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform hover:-translate-y-2"
          >
            <img
              className="w-full h-48 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="p-6 flex flex-col justify-between h-64">
              <div>
                <h2 className="text-xl font-semibold text-gray-200 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-400 text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <a href={project.demo} target="blank" rel="noopener noreferrer" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

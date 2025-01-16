export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "TypeScript"],
      link: "#"
    },
    // Voeg meer projecten toe
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-6 border rounded-lg dark:border-gray-800"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link}
              className="text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
} 
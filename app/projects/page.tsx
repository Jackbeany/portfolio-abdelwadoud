export default function Projects() {
  const projects = [
    {
      id: "1",
      title: "Image viewer",
      description: "Dit is een simpele image viewer die gemaakt is met Javascript",
      technologies: ["Javascript"],
      link: "/projects/1",
      image: "/image viewer.png",
      fullDescription: "Dit is een simpele image viewer die gemaakt is met Javascript. De applicatie stelt gebruikers in staat om afbeeldingen te bekijken en te beheren in een gebruiksvriendelijke interface. Het project is volledig ontwikkeld in vanilla Javascript, wat aantoont dat krachtige functionaliteit ook zonder frameworks gerealiseerd kan worden. Gebruikers kunnen door afbeeldingen navigeren, in- en uitzoomen, en de weergave aanpassen naar hun voorkeuren."
    },
  ];

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
  );
} 
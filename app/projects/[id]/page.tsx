import { notFound } from 'next/navigation';
import Image from 'next/image';

const projects = [
    {
        id: "1",
        title: "Image viewer",
        description: "Dit is een simpele image viewer die gemaakt is met Javascript",
        technologies: ["Javascript"],
        link: "/projects/1",
        image: "/images/image viewer.png",
        fullDescription: "Dit is een simpele image viewer die gemaakt is met Javascript. De applicatie stelt gebruikers in staat om afbeeldingen te bekijken en te beheren in een gebruiksvriendelijke interface. Het project is volledig ontwikkeld in vanilla Javascript, wat aantoont dat krachtige functionaliteit ook zonder frameworks gerealiseerd kan worden. Gebruikers kunnen door afbeeldingen navigeren, in- en uitzoomen, en de weergave aanpassen naar hun voorkeuren."
    },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
        {project.fullDescription}
      </p>
    </div>
  );
} 
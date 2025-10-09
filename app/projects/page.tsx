'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  images: string[]
  githubLink?: string
  liveLink?: string
  features: string[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      shortDescription: "A modern portfolio website built with Next.js and Tailwind CSS",
      fullDescription: "This is my personal portfolio website where I showcase my projects, skills and experience. The website is fully responsive and features a modern design with dark/light mode support.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      images: ["/projects/portfolio/portfolio-1.svg", "/projects/portfolio/portfolio-2.svg"],
      githubLink: "https://github.com/jackbeany/portfolio-abdelwadoud",
      features: [
        "Responsive design",
        "Dark/Light mode",
        "Animations and transitions",
        "SEO optimized",
        "Contact form"
      ]
    },
    {
      id: 2,
      title: "OnlineAssistants.nl",
      shortDescription: "A professional WordPress website for online marketing services",
      fullDescription: "During an internship we collaboratively developed a comprehensive WordPress website for OnlineAssistants.nl, a company offering online marketing services. The website features a modern design, service showcases, client testimonials, and contact functionality to help the business connect with potential clients. Make sure to check out the live demo for the full experience!",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript", "HTML"],
      images: ["/projects/onlineassistants/onlineassistants-1.svg", "/projects/onlineassistants/onlineassistants-2.svg"],
      liveLink: "https://onlineassistants.nl",
      features: [
        "Professional WordPress theme customization",
        "Service pages and descriptions",
        "Client testimonials section",
        "Contact forms and inquiry system",
        "SEO optimization",
        "Mobile responsive design",
        "Team collaboration and version control"
      ]
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="p-6 border rounded-lg dark:border-gray-800 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.shortDescription}
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
            <button 
              className="text-blue-600 hover:underline"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedProject(project)
              }}
            >
              More details →
            </button>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Images */}
              {selectedProject.images.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Project Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <div key={index} className="relative border-2 border-gray-200 dark:border-gray-800 h-64 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
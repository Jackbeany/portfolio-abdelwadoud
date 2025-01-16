'use client'

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      
      <div className="max-w-lg space-y-8">
      <p className="text-gray-600 dark:text-gray-400 text-center">
        I am open to new opportunities and interesting projects. 
        Feel free to contact me!
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">E-mail</h2>
              <a 
                href="mailto:abdelwadoud-jalloul@hotmail.com"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                abdelwadoud-jalloul@hotmail.com
              </a>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
              <a 
                href="https://www.linkedin.com/in/abdelwadoud-jalloul-643030261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Bekijk mijn LinkedIn profiel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
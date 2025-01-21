'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const skills = [
    'C#', 'PHP', 'JavaScript', 'Python', 'SQL', 'HTML & CSS',
    'Laravel', 'Next.js', 'Git', 'Adobe XD'
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 mb-16"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold"
        >
          Hi, I&#39;m Abdelwadoud
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
        Welcome to my website! Feel free to explore and don&#39;t hesitate to reach out if you have any questions.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.section>

      {/* Quick About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-12"
      >

        {/* Skills Overview */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in collaborating or want to see more of my work?
          </p>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

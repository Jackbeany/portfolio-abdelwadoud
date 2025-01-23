'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '../ui/ThemeToggle'
import { motion } from 'framer-motion'

const Navbar = () => {
  const pathname = usePathname()
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ]

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between"
    >
      <nav className="flex items-center gap-6">
        {navItems.map((item) => (
          <motion.div
            key={item.path}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link
              href={item.path}
              className={`${
                pathname === item.path 
                  ? 'text-blue-600' 
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300'
              } transition-colors`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
        <ThemeToggle />
      </nav>
    </motion.div>
  )
}

export default Navbar 
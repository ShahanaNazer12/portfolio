import { useState } from "react"
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md dark:bg-black/30 px-6 py-4">
      
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-lg text-black dark:text-white">
          Shahana Sherin
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-black dark:text-white">
          <Link to="home" smooth className="cursor-pointer hover:text-purple-500">Home</Link>
          <Link to="about" smooth className="cursor-pointer hover:text-purple-500">About</Link>
          <Link to="projects" smooth className="cursor-pointer hover:text-purple-500">Projects</Link>
          <Link to="contact" smooth className="cursor-pointer hover:text-purple-500">Contact</Link>

          <a href="https://github.com/ShahanaNazer12" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/shahana-nazer-529216279" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-black dark:text-white text-xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            md:hidden mt-4 flex flex-col gap-4 
            bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg
            text-black dark:text-white
          "
        >
          <Link onClick={() => setOpen(false)} to="home" smooth>Home</Link>
          <Link onClick={() => setOpen(false)} to="about" smooth>About</Link>
          <Link onClick={() => setOpen(false)} to="projects" smooth>Projects</Link>
          <Link onClick={() => setOpen(false)} to="contact" smooth>Contact</Link>

          <div className="flex gap-4 mt-2">
            <a href="https://github.com/ShahanaNazer12" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/shahana-nazer-529216279" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          <ThemeToggle />
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
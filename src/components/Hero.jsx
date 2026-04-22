import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { FaGithub, FaLinkedin } from "react-icons/fa"


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen flex flex-col justify-center items-center text-center px-6
      bg-gray-100 text-black 
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 
      dark:text-white
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-purple-500 dark:text-purple-400">
            Shahana Sherin K
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl"
        >
          Full Stack Developer building modern, scalable web applications using
          React, Node.js, and MongoDB.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="
              px-6 py-2 bg-purple-600 hover:bg-purple-700 
              text-white rounded cursor-pointer
              transition duration-300 hover:scale-105
            "
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            download
            className="
              px-6 py-2 border border-gray-400 dark:border-gray-600 
              rounded hover:bg-gray-200 dark:hover:bg-gray-700
              transition duration-300 hover:scale-105
            "
          >
            Download Resume
          </a>
        </motion.div>

        {/*  Icons */}
        <motion.div
          variants={item}
          className="flex gap-6 mt-8 text-2xl"
        >
          <a
            href="https://github.com/ShahanaNazer12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shahana-nazer-529216279"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
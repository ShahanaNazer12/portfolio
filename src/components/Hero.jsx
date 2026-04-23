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
      relative min-h-screen flex flex-col justify-center items-center text-center px-6
      bg-gradient-to-br from-gray-100 via-white to-gray-200
      dark:from-gray-900 dark:via-black dark:to-gray-800
      overflow-hidden
      "
    >
      {/* Soft gradient overlay (instead of dots) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-transparent to-pink-200/20 dark:from-purple-900/20 dark:to-pink-900/20"></div>

      {/* Animated Background Glow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center relative z-10"
      >
        {/* Heading */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
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
              px-6 py-3 rounded-md
              bg-gradient-to-r from-purple-600 to-pink-500
              text-white font-medium
              shadow-lg shadow-purple-500/30
              hover:shadow-xl hover:shadow-purple-500/50
              transition duration-300 hover:scale-105
              cursor-pointer
            "
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            download
            className="
              px-6 py-3 rounded-md
              border border-gray-400 dark:border-gray-600
              backdrop-blur-sm
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition duration-300 hover:scale-105
            "
          >
            Download Resume
          </a>
        </motion.div>

        {/* Icons */}
        <motion.div
          variants={item}
          className="flex gap-6 mt-10 text-2xl"
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
            className="hover:text-pink-500 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-12 text-gray-500 dark:text-gray-400 text-sm"
        >
          ↓ Scroll Down
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
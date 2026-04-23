import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "CleanCity360",
    desc: "Built a MERN-based garbage management system with role-based access, enabling worker assignment and real-time request tracking.",
    tech: ["MERN", "JWT", "REST API", "MongoDB"],
    github: "https://github.com/ShahanaNazer12/CleanCity360",
  },
  {
    title: "Task Manager Application",
    desc: "A full-stack task management application with priority levels, due dates, progress tracking, and search functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ShahanaNazer12/task-manager",
  },
  {
    title: "Photography Hub",
    desc: "Full-stack photography platform with booking, scheduling, and role-based authentication.",
    tech: ["Python", "HTML", "CSS"],
    github: "https://github.com/ShahanaNazer12/photography-hub",
  },
  {
    title: "Event Management System",
    desc: "MERN-based system with authentication, event creation, editing, and protected routes.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    github: "https://github.com/ShahanaNazer12/event-management",
  },
  {
    title: "Shop Smart",
    desc: "Frontend product management app using React and Redux with state handling.",
    tech: ["React", "Redux", "Vite"],
    github: "https://github.com/ShahanaNazer12/Shop-Smart",
  },
  {
    title: "Product Inventory System",
    desc: "Inventory system with product and stock management using Django and MySQL.",
    tech: ["Python", "Django", "MySQL"],
    github: "https://github.com/ShahanaNazer12/product-inventory-system",
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center text-black dark:text-white"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -10, scale: 1.02 }}
              className="
                relative group p-6 rounded-xl
                bg-white dark:bg-gray-800
                shadow-md hover:shadow-2xl
                transition duration-300
                border border-transparent
                hover:border-purple-500/30
              "
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl"></div>

              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t, index) => (
                    <span
                      key={index}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-purple-100 text-purple-600
                        dark:bg-purple-900/40 dark:text-purple-300
                        transition
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 text-sm
                      hover:text-purple-500 transition
                    "
                  >
                    <FaGithub className="group-hover:rotate-6 transition" />
                    Code
                  </a>

                  {p.live && p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2 text-sm
                        hover:text-pink-500 transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
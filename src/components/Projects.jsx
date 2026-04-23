import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "Hospital Management System",
    desc: "Developed a hospital management system with React.js, integrating Node.js and MongoDB for efficient data handling and seamless backend communication.",
    tech: ["React", "Node.js", "MongoDB"],
    // github: "#",
    // live: "#",
  },
  {
    title: "CleanCity360",
    desc: "Built a MERN-based garbage management system with role-based access, enabling worker assignment and real-time request tracking.",
    tech: ["MERN", "JWT", "REST API","MongoDB"],
    // github: "https://github.com/ShahanaNazer12/CleanCity360",
    // live: "https://cleancity360-frontend.vercel.app/",
  },
  {
    title: "Photography Hub",
    desc: "Developed a full-stack photography platform using Python with booking, scheduling, and role-based authentication features.",
    tech: ["Python", "HTML", "CSS"],
    // github: "https://github.com/ShahanaNazer12/photography-hub",
    // live: "#",
  },
  {
    title: "Medizone",
    desc: "Created a web application for generic medicine awareness with location-based services, secure authentication, and appointment booking functionality.",
    tech: ["Python", "HTML", "CSS"],
    // github: "#",
    // live: "#",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="p-10 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <h2 className="text-3xl font-bold mb-10 text-black dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="
              p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md 
              hover:shadow-xl transition text-left
            "
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {p.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {p.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-purple-500 text-white rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-5">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-purple-500 transition"
              >
                {/* <FaGithub /> Code */}
              </a>

              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm hover:text-purple-500 transition"
              >
                {/* <FaExternalLinkAlt /> Live */}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
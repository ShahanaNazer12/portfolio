import { motion } from "framer-motion"

const groups = [
  {
    title: "Frontend",
    skills: ["React.js", "Redux", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "React-Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "REST API", "JWT"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Team Collaboration",
      "Problem Solving",
      "Time Management",
      
      "Quick Learning",
    ],
  },
]
function Skills() {
  return (
    <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-14 text-black dark:text-white text-center"
        >
          Skills
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-500 pl-6 space-y-12">
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[22px] top-1 w-4 h-4 bg-purple-500 rounded-full"></span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-purple-500 mb-3">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="
                      text-sm px-3 py-1 rounded-md
                      border border-gray-300 dark:border-gray-700
                      text-gray-700 dark:text-gray-300
                      hover:border-purple-500 hover:text-purple-500
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
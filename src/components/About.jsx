import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-14"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a <span className="text-purple-500 font-semibold">Full Stack Developer </span> 
              with hands-on experience building scalable and user-friendly web applications 
              using <span className="font-medium">React.js</span>,{" "}
              <span className="font-medium">Node.js</span>, and{" "}
              <span className="font-medium">MongoDB</span>.
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              I work across both <span className="text-purple-500 font-medium"> frontend </span> 
              and <span className="text-purple-500 font-medium"> backend </span>, focusing on 
              clean architecture, REST API integration, and smooth user experiences. 
              I enjoy building complete end-to-end applications and solving real-world problems.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-5 cursor-pointer"
          >
            {/* Card */}
            {[
              {
                title: " Education",
                text: "Master of Computer Applications (MCA)",
              },
              {
                title: " Experience",
                text: "Full Stack Intern at Bairuhatech",
              },
              {
                title: " Projects",
                text: "Developed multiple MERN & Python-based applications",
              },
              {
                title: " Strength",
                text: "Frontend + Backend integration & clean scalable code",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="
                  relative p-5 rounded-lg
                  bg-white dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  shadow-sm hover:shadow-lg
                  transition duration-300
                "
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-l"></div>

                <h4 className="font-semibold text-purple-500 ml-2">
                  {item.title}
                </h4>
                <p className="text-sm mt-1 ml-2 text-gray-600 dark:text-gray-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
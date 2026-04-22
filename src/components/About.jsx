import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

      
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
         
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a <span className="text-purple-500 font-medium">Full Stack Developer</span> 
              with hands-on experience building responsive and user-friendly web applications 
              using <span className="font-medium">React.js</span>,{" "}
              <span className="font-medium">Node.js</span>, and{" "}
              <span className="font-medium">MongoDB</span>.
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              I focus on writing clean code, integrating REST APIs, and creating smooth user 
              experiences. I enjoy solving real-world problems and continuously improving my skills.
            </p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="p-4 border rounded-lg dark:border-gray-700">
              <h4 className="font-semibold text-purple-500"> Experience</h4>
              <p className="text-sm mt-1">Full Stack Intern at Bairuhatech</p>
            </div>

            <div className="p-4 border rounded-lg dark:border-gray-700">
              <h4 className="font-semibold text-purple-500"> Projects</h4>
              <p className="text-sm mt-1">Built multiple MERN & Python-based applications</p>
            </div>

            <div className="p-4 border rounded-lg dark:border-gray-700">
              <h4 className="font-semibold text-purple-500"> Focus</h4>
              <p className="text-sm mt-1">Frontend performance & clean UI design</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
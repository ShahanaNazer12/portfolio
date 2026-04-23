import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

function Contact() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg(false)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      )
      .then(() => {
        setSuccess(true)
        setLoading(false)
        formRef.current.reset()

        // auto reset success message
        setTimeout(() => setSuccess(false), 3000)
      })
      .catch((error) => {
        console.log(error)
        setErrorMsg(true)
        setLoading(false)
      })
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm open to job opportunities, collaborations, or freelance work.
          </p>

          <div className="p-5 rounded-xl bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-500" />
              <a
                href="mailto:shahananasarkk@gmail.com"
                className="hover:text-purple-500 transition"
              >
                shahananasarkk@gmail.com
              </a>
            </div>

            <div className="flex gap-4 text-xl">
              <a href="https://github.com/ShahanaNazer12" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/shahana-nazer-529216279" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-6 rounded-xl bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:border-purple-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:border-purple-500 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-transparent border border-gray-300 dark:border-gray-700 focus:border-purple-500 outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium transition duration-300 hover:scale-[1.02]"
          >
            {loading ? "Sending..." : success ? "Sent ✔" : "Send Message"}
          </button>

          {/* SUCCESS */}
          {success && (
            <p className="text-green-500 text-sm text-center">
              Message sent successfully!
            </p>
          )}

          {/* ERROR */}
          {errorMsg && (
            <p className="text-red-500 text-sm text-center">
              Failed to send message. Try again.
            </p>
          )}
        </motion.form>

      </div>
    </section>
  )
}

export default Contact
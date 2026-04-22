import { useState } from "react"
import { FaEnvelope } from "react-icons/fa"

function Contact() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setTimeout(() => {
      setSuccess(true)
    }, 500)
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-black text-center"
    >
      <div className="max-w-xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Get In Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Feel free to reach out for opportunities, collaborations, or just a quick hello.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent outline-none focus:border-purple-500 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent outline-none focus:border-purple-500 transition"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent outline-none focus:border-purple-500 transition"
          ></textarea>

          <button
            disabled={success}
            className="
              bg-purple-600 hover:bg-purple-700 
              text-white py-3 rounded-md 
              transition duration-300 
              hover:scale-[1.02]
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {success ? "Sent ✔" : "Send Message"}
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="text-green-500 mt-4">
            Message sent successfully!
          </p>
        )}

        {/* Email Section */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <FaEnvelope className="text-purple-500" />

          <a
            href="mailto:shahananasarkk@gmail.com"
            className="text-purple-500 hover:underline hover:scale-105 transition"
          >
            shahananasarkk@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
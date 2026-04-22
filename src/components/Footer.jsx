import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      
      <p className="text-sm">
        © {new Date().getFullYear()} Shahana Sherin. All rights reserved.
      </p>

      <div className="flex justify-center gap-4 mt-3 text-lg">
        <a
          href="https://github.com/ShahanaNazer12"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/shahana-nazer-529216279"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
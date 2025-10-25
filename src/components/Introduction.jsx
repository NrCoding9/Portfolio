import { FaLinkedin, FaGithub } from "react-icons/fa";

function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-6xl text-gray-400 font-semibold mb-2">Narasimha M</h2>
      <p className="text-xl text-gray-200">Front End Developer</p>
      <p className="text-xl text-gray-200 mt-2 mb-4">JavaScript | React | Redux | Tailwindcss | AWS</p>

      <div className="flex space-x-4 mt-2 text-gray-400">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaGithub size={25} />
        </a>
      </div>
    </div>
  );
}

export default Introduction;

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm text-center py-6 border-t border-gray-700">
      <p className="text-sm text-gray-400">
        Designed and Developed by Vishal Manchikanti.
      </p>

      <div className="mt-3 flex justify-center gap-6 text-blue-400 text-xl">
        <a
          href="https://www.linkedin.com/in/vishal-manchikanti/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/vishalmanchikanti"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:vishalmanchikanti3101@gmail.com"
          className="hover:text-blue-500 transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

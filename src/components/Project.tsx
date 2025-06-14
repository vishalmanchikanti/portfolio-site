import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  github: string;
  stack: string[];
  summaryShort: string;
  summaryLong: string;
};

const projects: Project[] = [
  {
    title: "Smart TaskFlow",
    github: "https://github.com/vishalmanchikanti/smart-taskflow",
    stack: ["React", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    summaryShort: "AI-powered task manager with OpenAI integration.",
    summaryLong:
      "Built a full-stack productivity platform that enables users to create, organize, and track tasks. Integrated OpenAI API to provide smart suggestions and productivity insights. Features JWT auth, role-based access, and real-time analytics. Deployed on AWS using Docker and PostgreSQL.",
  },
  {
    title: "DevConnect",
    github: "https://github.com/vishalmanchikanti/devconnect",
    stack: ["Next.js", "Firebase", "Tailwind", "TypeScript"],
    summaryShort: "A social network for developers to connect and collaborate.",
    summaryLong:
      "Created a developer-focused social platform with profile creation, post feeds, and real-time messaging. Utilized Firebase for authentication and storage, and Next.js for a highly responsive frontend. Designed to foster tech collaboration and open-source contributions.",
  },
  {
    title: "Tic-Tac-Toe",
    github: "https://github.com/vishalmanchikanti/tic-tac-toe-react",
    stack: ["React", "HTML", "CSS", "Vite"],
    summaryShort: "Responsive two player tic-tac-toe game using React .",
    summaryLong: "This Tic-Tac-Toe project is a React and Vite-based web application featuring a responsive, two-player interface. It uses modular components, React Hooks, and clean CSS styling to manage game logic and UI. Deployed via GitHub Pages, it demonstrates effective front-end development practices and streamlined deployment for interactive browser-based gameplay.",
  },
  {
    title: "HealthBridge",
    github: "https://github.com/vishalmanchikanti/healthbridge",
    stack: ["React", "RabbitMQ", "FastAPI", "MongoDB"],
    summaryShort: "A healthcare portal with real-time appointment syncing.",
    summaryLong:
      "Engineered a healthcare scheduling system where users can book and sync appointments across multiple hospitals. Used RabbitMQ for real-time communication between microservices. MongoDB stored user and appointment data. Built with a clean, intuitive UI using React.",
  },
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold mb-6 tracking-tight leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Projects
        </span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {projects.map((proj, index) => (
          <div
            key={index}
            onClick={() => setSelected(proj)}
            className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-200 cursor-pointer w-full max-w-sm"
          >
            <h3 className="text-xl font-semibold text-blue-400">
              {proj.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              {proj.stack.join(", ")}
            </p>
            <p className="text-gray-400 text-sm mt-2">{proj.summaryShort}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 text-white rounded-xl shadow-xl p-8 max-w-xl w-full relative"
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-red-400 text-2xl"
              >
                ×
              </button>

              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-400">
                  {selected.title}
                </h3>
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-400"
                  title="View on GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>

              {/* Stack */}
              <h4 className="text-base font-semibold text-gray-300 mb-2">
                Tech Stack Used:
              </h4>
              <ul className="flex flex-wrap gap-3 text-sm text-blue-300 mb-4">
                {selected.stack?.map((tech, i) => (
                  <li key={i} className="bg-gray-700 px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Long Summary */}
              <p className="text-gray-300 leading-relaxed">
                {selected.summaryLong}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

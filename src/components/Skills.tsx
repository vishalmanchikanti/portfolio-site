import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFastapi,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={32} className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-white" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={32} className="text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={32} className="text-sky-400" />,
  },
  { name: "Python", icon: <FaPython size={32} className="text-yellow-400" /> },
  { name: "FastAPI", icon: <SiFastapi size={32} className="text-teal-300" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-500" /> },
  { name: "Express", icon: <FaNodeJs size={32} className="text-gray-400" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={32} className="text-blue-300" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-400" /> },
  { name: "Docker", icon: <FaDocker size={32} className="text-blue-400" /> },
  {
    name: "AWS (EC2/S3)",
    icon: <FaAws size={32} className="text-orange-400" />,
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold mb-6 tracking-tight leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Skills
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {skill.name}
            </h3>
            <div className="flex justify-center">{skill.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

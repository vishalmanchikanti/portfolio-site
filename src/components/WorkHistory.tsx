import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  timeline: string;
  stack: string[];
  summary: string;
};

const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Texas Tech University – IT Help Central",
    timeline: " Oct 2023 – May 2025",
    stack: ["SQL", "HTML/CSS", "React.js", "ServiceNow", "Power BI"],
    summary:
      "At Texas Tech University, I modernized internal IT systems used by faculty and staff. I automated ticketing workflows, refactored SQL queries, and improved performance across legacy systems. I designed responsive UI components using HTML/CSS and React.js and built dashboards to visualize data insights using Power BI. My work enhanced operational efficiency and reduced manual processing time. I also trained new student assistants and contributed to knowledge base documentation. This role showcased my ability to apply full-stack skills in a collaborative university IT environment focused on reliability and support.",
  },
  {
    role: "Software Engineer Intern",
    company: "LTI Mindtree",
    timeline: "May 2022 – Jun 2022",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Jenkins",
      "JUnit",
    ],
    summary:
      "At LTI Mindtree, I developed backend APIs for enterprise-grade applications using Java and Spring Boot. I implemented RESTful services, optimized PostgreSQL queries, and containerized microservices with Docker. I participated in CI/CD pipeline creation using Jenkins and collaborated in Agile sprints to deliver tested, production-ready features. My role also included writing unit and integration tests, debugging service interactions, and ensuring scalable deployments on AWS. This experience enhanced my understanding of service-oriented architecture and backend reliability in high-traffic enterprise environments.",
  },
];

const WorkHistory: React.FC = () => {
  const [selected, setSelected] = useState<Experience | null>(null);

  return (
    <section id="work-history" className="w-full max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold mb-6 tracking-tight leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Professional Experience
        </span>
      </h2>

      {/* Grid of job cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-35 text-center">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(exp)}
              className="bg-gray-800 p-10 rounded-xl shadow-g hover:scale-105 transition-transform duration-200 cursor-pointer w-full max-w-xs"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {exp.role}
              </h3>
              <p className="text-white">{exp.company}</p>
              <p className="text-gray-400 text-sm mt-1">{exp.timeline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal popup with animation */}
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
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-red-400 text-2xl"
              >
                ×
              </button>

              {/* Modal Header */}
              <h3 className="text-2xl font-bold text-blue-400 mb-1">
                {selected.role}
              </h3>
              <p className="text-lg text-white font-medium">
                {selected.company}
              </p>
              <p className="text-sm text-gray-400 mb-4">{selected.timeline}</p>

              {/* Tech Stack */}
              <h4 className="text-base font-semibold text-gray-300 mb-2">
                Tech Stack Used:
              </h4>
              <ul className="flex flex-wrap gap-3 text-sm text-blue-300 mb-4">
                {selected.stack.map((tech, i) => (
                  <li key={i} className="bg-gray-700 px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Summary */}
              <p className="text-gray-300 leading-relaxed">
                {selected.summary}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkHistory;

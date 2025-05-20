import React, { useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`${inter.className} w-full max-w-4xl mx-auto px-6 py-20`}
    >
      <h2 className="text-6xl sm:text-5xl text-center mb-6 font-extrabold leading-tight tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Know About Me...
        </span>
      </h2>

      <p className="text-lg leading-relaxed text-gray-300">
        I'm a dedicated
        <span className="text-emerald-400 font-semibold">
          {" "}
          full-stack developer
        </span>{" "}
        with a Master’s degree in Computer Science from Texas Tech University. I
        take pride in building
        <span className="text-emerald-400 font-semibold"> scalable</span> and
        <span className="text-emerald-400 font-semibold"> modern</span> web
        applications that are optimized for performance and maintainability.
        <br />
        <br />
        My frontend experience includes crafting intuitive UIs using
        <span className="text-emerald-400 font-semibold"> React</span>,
        <span className="text-emerald-400 font-semibold"> Next.js</span>, and
        <span className="text-emerald-400 font-semibold"> TypeScript</span>,
        styled with
        <span className="text-emerald-400 font-semibold">
          {" "}
          Tailwind CSS
        </span>{" "}
        for rapid and responsive design. On the backend, I build robust APIs
        with
        <span className="text-emerald-400 font-semibold"> FastAPI</span> and
        <span className="text-emerald-400 font-semibold"> Spring Boot</span>,
        paired with databases like
        <span className="text-emerald-400 font-semibold"> PostgreSQL</span> and
        <span className="text-emerald-400 font-semibold"> MongoDB</span> to
        manage data effectively.
        <br />
        <br />
        I’m passionate about solving
        <span className="text-emerald-400 font-semibold">
          {" "}
          real-world challenges
        </span>
        , scaling applications using
        <span className="text-emerald-400 font-semibold"> Docker</span>,
        <span className="text-emerald-400 font-semibold"> AWS</span>, and
        <span className="text-emerald-400 font-semibold"> Redis</span>, and
        exploring
        <span className="text-emerald-400 font-semibold">
          {" "}
          emerging technologies
        </span>{" "}
        through continuous learning and
        <span className="text-emerald-400 font-semibold">
          {" "}
          open-source contributions
        </span>
        .
      </p>
    </section>
  );
};

export default About;

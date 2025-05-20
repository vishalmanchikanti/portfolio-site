import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Link } from "react-scroll";

import Header from "../components/Header";
import About from "../components/About";
import WorkHistory from "../components/WorkHistory";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import Hero from "../components/herosection";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      id="top"
      className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col justify-between font-[var(--font-geist-sans)]`}
    >
      {/* Header */}
      <Header />

      {/* Sections */}
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work-history">
        <WorkHistory />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />

      <div id="bottom" />

      {/* Scroll Buttons */}
      <Link
        to="bottom"
        smooth={true}
        duration={500}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 cursor-pointer"
      >
        ↓
      </Link>
      <Link
        to="top"
        smooth={true}
        duration={500}
        className="fixed bottom-4 left-4 bg-blue-500 text-white rounded-full p-2 shadow-lg hover:bg-blue-600 cursor-pointer"
      >
        ↑
      </Link>
    </div>
  );
}

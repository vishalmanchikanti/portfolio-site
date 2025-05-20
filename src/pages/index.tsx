import React from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Link } from "react-scroll";

import Header from "../components/Header";
import About from "../components/About";
import WorkHistory from "../components/WorkHistory";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import Hero from "../components/herosection";
import Contact from "../components/Contact";
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
      className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col justify-between font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Header */}
      <Header />
      {/* Sections */}
      <section id="hero" scroll-mt-32>
        <Hero />
      </section>
      <section id="about" scroll-mt-24>
        <About />
      </section>
      <section id="skills" scroll-mt-24>
        <Skills />
      </section>
      <section id="work-history" scroll-mt-24>
        <WorkHistory />
      </section>
      <section id="projects" scroll-mt-24>
        <Projects />
      </section>
      <Footer />

      {/* <footer id="contact"><footer /></footer> */}
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

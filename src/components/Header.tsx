import React, { useEffect, useRef, useState } from "react";
import { FaTimes, FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [tracerX, setTracerX] = useState(0);
  const [tracerWidth, setTracerWidth] = useState(0);
  const [showTracer, setShowTracer] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const navLinks = [
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Experience", target: "work-history" },
    { label: "Projects", target: "projects" },
    { label: "Resume", target: "resume" },
  ];

    // ✅ Prevent default browser scroll-to-anchor
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      const hero = document.getElementById("hero");
      if (hero && hero.offsetTop <= scrollY && scrollY < hero.offsetTop + hero.offsetHeight) {
        setShowTracer(false);
        setActiveLink(null);
      } else {
        setShowTracer(true);
        for (const { target } of navLinks) {
          const el = document.getElementById(target);
          if (
            el &&
            el.offsetTop <= scrollY &&
            el.offsetTop + el.offsetHeight > scrollY
          ) {
            setActiveLink(target);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current || !activeLink) return;
    const el = navRef.current.querySelector(`[data-id="${activeLink}"]`) as HTMLElement;
    if (el) {
      const rect = el.getBoundingClientRect();
      const navLeft = navRef.current.getBoundingClientRect().left;
      setTracerX(rect.left - navLeft);
      setTracerWidth(rect.width);
    }
  }, [activeLink]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerHeight / 2 - el.clientHeight / 2;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      // No need to setActiveLink manually
    }
  };

  const handleHover = (e: React.MouseEvent) => {
    const rect = navRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    setHoverX(x);
  };

  const handleLeave = () => setHoverX(null);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-gray-900/95 shadow-md" : "bg-gray-900/60 backdrop-blur-sm"
        }`}
      >
        <nav className="relative flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <span
            className="text-blue-400 font-medium text-[1.55rem] cursor-pointer hover:text-blue-300 transition"
            onClick={() => scrollToSection("hero")}
          >
            VM.
          </span>

          {/* Navigation */}
          <ul
            ref={navRef}
            className="relative flex gap-8 text-[1.25rem] font-medium"
            onMouseMove={handleHover}
            onMouseLeave={handleLeave}
          >
            {navLinks.map(({ label, target }) => (
              <li key={label}>
                <button
                  data-id={target}
                  onClick={() =>
                    target === "resume"
                      ? setShowResume(true)
                      : scrollToSection(target)
                  }
                  className={`text-blue-300 hover:text-blue-400 transition-colors duration-200 ${
                    activeLink === target ? "text-blue-400" : ""
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}

            {/* Tracer Line */}
            {showTracer && activeLink && (
              <motion.div
                className="absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded"
                animate={{
                  x: hoverX !== null ? hoverX - tracerWidth / 2 : tracerX,
                  width: tracerWidth,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </ul>
        </nav>
      </header>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-6 rounded-lg max-w-4xl w-full relative shadow-xl"
            >
              {/* Close & Download */}
              <div className="absolute top-3 right-4 flex gap-4 text-white text-xl">
                <a
                  href="/resume.pdf"
                  download
                  className="hover:text-blue-400 transition"
                  title="Download Resume"
                >
                  <FaDownload />
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  className="hover:text-red-400 transition"
                  title="Close"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Embedded Resume */}
              <iframe
                src="/resume.pdf"
                className="w-full h-[80vh] mt-8 rounded-md"
                title="Resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

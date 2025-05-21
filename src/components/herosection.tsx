import React, { useState } from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Inter } from "next/font/google";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const Hero: React.FC = () => {
  const [modalType, setModalType] = useState<
    "phone" | "email" | "linkedin" | null
  >(null);

  const phoneNumber = "+1 806-544-0857";
  const email = "vishalmanchikanti3101@gmail.com";
  const linkedin = "https://www.linkedin.com/in/vishal-manchikanti/";

  const closeModal = () => setModalType(null);

  const renderModalContent = () => {
    let label = "";
    let value = "";
    let buttonText = "";
    let href = "";

    if (modalType === "phone") {
      label = "Call 📞";
      value = phoneNumber;
    } else if (modalType === "email") {
      label = "Send an Email ✉️";
      value = email;
      buttonText = "Open Email";
      href = `mailto:${email}`;
    } else if (modalType === "linkedin") {
      label = "Connect on LinkedIn 🔗";
      value = linkedin;
      buttonText = "Open LinkedIn";
      href = linkedin;
    }

    return (
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-400 text-2xl"
          title="Close"
        >
          <FaTimes />
        </button>

        <h3 className="text-2xl font-bold mb-4 text-emerald-400">{label}</h3>

        <input
          type="text"
          readOnly
          value={value}
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none cursor-text mb-4"
        />

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold py-2 rounded"
          >
            {buttonText}
          </a>
        )}
      </motion.div>
    );
  };

  return (
    <section
      id="hero"
      className={`${inter.className} w-full text-black dark:text-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 pt-28 md:py-32`}
    >
      {/* LEFT: Image + Contact Icons */}
      <div className="flex flex-col items-center justify-center w-[280px] space-y-6 mb-8 md:mb-0 md:mr-12">
        <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/profile.jpeg"
            alt="Vishal Manchikanti profile photo"
            width={264}
            height={264}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex justify-center gap-6 text-2xl text-emerald-400">
          <button
            onClick={() => setModalType("phone")}
            className="hover:text-emerald-300 transition"
          >
            <FaPhoneAlt />
          </button>
          <button
            onClick={() => setModalType("email")}
            className="hover:text-emerald-300 transition"
          >
            <FaEnvelope />
          </button>
          <button
            onClick={() => setModalType("linkedin")}
            className="hover:text-emerald-300 transition"
          >
            <FaLinkedin />
          </button>
        </div>
      </div>

      {/* RIGHT: Intro */}
      <div className="flex flex-col items-start md:items-start text-left md:text-left text-center w-full max-w-xl space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-black dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Hi, I&apos;m <br /> Vishal Manchikanti
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-black dark:text-blue-300">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Cloud Enthusiast",
              "Open-Source Contributor",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-lg sm:text-xl text-black dark:text-white leading-relaxed">
          I specialize in building
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            {" "}
            scalable{" "}
          </span>
          and
          <span className="text-purple-600 dark:text-purple-400 font-semibold">
            {" "}
            modern{" "}
          </span>
          web applications. I&apos;m passionate about solving
          <span className="text-blue-600 dark:text-blue-300 font-medium">
            {" "}
            real-world problems
          </span>
          , exploring
          <span className="text-purple-600 dark:text-purple-300 font-medium">
            {" "}
            new technologies
          </span>
          , and contributing to
          <span className="text-indigo-600 dark:text-indigo-300 font-medium">
            {" "}
            open-source communities
          </span>
          .
        </p>
      </div>

      <AnimatePresence>
        {modalType && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {renderModalContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const phoneNumber = '+1 806-544-0857';
  const email = 'vishalmanchikanti3101@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/vishal-manchikanti/';

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-6xl sm:text-5xl text-center mb-6 font-extrabold leading-tight tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Contact Me...
        </span>
      </h2>

      <div className="flex justify-center gap-10 text-blue-400 text-3xl">
        {/* Phone */}
        <button
          onClick={() => setShowPhoneModal(true)}
          title="Call Me"
          className="hover:text-blue-500 cursor-pointer transition"
        >
          <FaPhoneAlt />
        </button>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          title="Send Email"
          className="hover:text-blue-500 transition"
        >
          <FaEnvelope />
        </a>

        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="View LinkedIn"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Phone Modal */}
      <AnimatePresence>
        {showPhoneModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPhoneModal(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPhoneModal(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-red-400 text-2xl"
                title="Close"
              >
                <FaTimes />
              </button>

              {/* Modal Content */}
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Call Me 📞
              </h3>
              <input
                type="text"
                readOnly
                value={phoneNumber}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none cursor-text"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

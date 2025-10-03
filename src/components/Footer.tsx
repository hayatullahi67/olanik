import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <footer className="bg-white font-['Inter'] pt-[50px]">
      {/* CTA Section with Background Image */}
      <motion.div
        className="relative bg-cover bg-center bg-no-repeat mx-4 sm:mx-8 lg:mx-16 rounded-3xl overflow-hidden"
        style={{ backgroundImage: 'url("/src/assets/footer-bg.png")' }}
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 px-8 py-16 sm:py-20 lg:py-24 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Interested in<br />
            working together?
          </motion.h2>
          <motion.button
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a project
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Content */}
      <motion.div
        className="px-4 sm:px-8 lg:px-16 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-[70px] lg:gap-16"
            variants={containerVariants}
          >

            {/* Logo and Description */}
            <motion.div
              className="md:col-span-1"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/olanik-logo.png"
                  alt="Olanik"
                  className="h-8 w-auto mr-3"
                />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Innovation Solutions, Driving<br />
                Growth
              </p>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-gray-900 font-medium mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#service" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                    About
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-gray-900 font-medium mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#web-development" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#software-development" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#data-analytics" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                    Data & Analytics
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-gray-900 font-medium mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-4 h-4 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:olaniktech@gmail.com" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                    olaniktech@gmail.com
                  </a>
                </div>

                <div className="flex items-start">
                  <svg className="w-4 h-4 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div className="text-gray-500 text-sm">
                    <div>234 9062 041 051,</div>
                    <div>+234 916 712 6413</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-4 h-4 text-gray-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-500 text-sm">
                    83A Ebute metta East Lagos.<br />
                    12, Toyin Modupe street,<br />
                    Sanni, Lafenwa, Abeokuta
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="mt-16 pt-8 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-sm">
              © 2025 Olanik Technology Limited. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
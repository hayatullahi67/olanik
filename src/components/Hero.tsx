import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.6
      }
    }
  };

  return (
    <div className="bg-[#FAFAFA] py-16 px-6 lg:px-8 font-['Inter']">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Available Badge */}
        <motion.div
          className="inline-flex items-center px-3 sm:px-4 py-2 border border-[#F1F1F1] rounded-full mb-6 sm:mb-8"
          variants={badgeVariants}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span className="text-[#484848] text-xs sm:text-sm font-medium">Available for New Projects</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          variants={itemVariants}
        >
          Websites Made Simple.
          <br />
          Impact Made Big.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0"
          variants={itemVariants}
        >
          Clean, responsive, and conversion-driven design
          <br />
          tailored for your business growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View our Works
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={imageVariants}
        >
          <img
            src="/src/assets/dashboard-screenshot.png"
            alt="Support Ticket Dashboard Preview"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
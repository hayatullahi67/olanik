import React, { useState } from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "I hired OLanikTech to help in the branding efforts of our new company TechGrid Limited. His role was to deliver the UX/UI designs for the company's new website and then collaborate with others to ensure the website comes to life. The result was exceptional.",
    author: "Essien Amas",
    position: "C.E.O, TechGrid",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 2,
    rating: 5,
    text: "Working with OLanikTech was an absolute pleasure. Their attention to detail and creative approach transformed our digital presence completely. The team delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director, InnovateCorp",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 3,
    rating: 5,
    text: "Outstanding service and exceptional results. The project was delivered on time and exceeded all our requirements. I would highly recommend OLanikTech for any design needs.",
    author: "Michael Chen",
    position: "Founder, StartupHub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

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

  const cardVariants = {
    enter: {
      x: 0,
      opacity: 1,
      rotate: -3,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    exit: {
      x: -100,
      opacity: 0,
      rotate: -10,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 1, 1] as const
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-20 font-['Inter']">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={badgeVariants}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Testimonials
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight px-4"
            variants={itemVariants}
          >
            What our happy<br />
            clients says
          </motion.h2>
        </div>

        {/* Testimonials Stack */}
        <motion.div
          className="relative max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <div className="relative mx-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
            {/* Background cards for stacking effect */}
            <motion.div
              className="absolute inset-0 transform rotate-[10deg] translate-x-[8px] sm:translate-x-[10px] translate-y-2 w-[280px] sm:w-[320px] md:w-[350px]"
              initial={{ opacity: 0, rotate: 20, scale: 0.8 }}
              animate={{ opacity: 0.6, rotate: 10, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl h-full"></div>
            </motion.div>
            <motion.div
              className="absolute inset-0 transform rotate-[-10deg] translate-x-[-8px] sm:translate-x-[-10px] translate-y-1 w-[280px] sm:w-[320px] md:w-[350px]"
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              animate={{ opacity: 0.7, rotate: -10, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl h-full"></div>
            </motion.div>

            {/* Main testimonial card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 rotate-[-3deg] transform w-[280px] sm:w-[320px] md:w-[350px]"
                variants={cardVariants}
                initial="exit"
                animate="enter"
                exit="exit"
                whileHover={{
                  rotate: 0,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Stars */}
                <motion.div
                  className="flex gap-1 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {renderStars(testimonials[currentIndex].rating)}
                </motion.div>

                {/* Testimonial text */}
                <motion.blockquote
                  className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonials[currentIndex].text}"
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentIndex].position}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <motion.div
            className="flex justify-center gap-[40px] sm:gap-[60px] md:gap-[80px] mt-[60px] sm:mt-[75px] md:mt-[90px]"
            variants={itemVariants}
          >
            <motion.button
              onClick={prevTestimonial}
              className="flex items-center justify-center w-[56px] sm:w-[60px] md:w-[66px] h-10 sm:h-11 md:h-12 bg-gray-900 text-white rounded-[60px] hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoArrowBack className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="flex items-center justify-center w-[56px] sm:w-[60px] md:w-[66px] h-10 sm:h-11 md:h-12 bg-gray-200 text-gray-700 rounded-[60px] hover:bg-gray-300 transition-colors"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoArrowForward className="w-4 sm:w-5 h-4 sm:h-5" />
            </motion.button>
          </motion.div>

          {/* Dots indicator */}
          <motion.div
            className="flex justify-center gap-2 mt-6"
            variants={itemVariants}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
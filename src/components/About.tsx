import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
        hidden: { opacity: 0, scale: 0.9, y: 50 },
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
        <div className="bg-[#FAFBFC] pb-[40px] font-['Inter']">
            <motion.div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* About Badge */}
                <div className="text-center mb-8">
                    <motion.div 
                        className="inline-flex items-center px-4 py-2 border border-[#F1F1F1] rounded-full mb-6"
                        variants={badgeVariants}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-[#484848] text-sm font-medium">About</span>
                    </motion.div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl sm:text-[48px] lg:text-6xl font-bold text-[#161616] mb-6"
                        variants={itemVariants}
                    >
                        What's the deal
                        <br />
                        with Olanik?
                    </motion.h2>
                    <motion.p 
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={itemVariants}
                    >
                        Combining our user-centric philosophy with composable
                        <br className="hidden sm:block" />
                        architecture, gorgeous design, and raw innovation, we're on a
                        <br className="hidden sm:block" />
                        quest to change the way sites are built.
                    </motion.p>
                </div>

                {/* About Image */}
                <motion.div 
                    className="flex justify-center mb-16"
                    variants={imageVariants}
                >
                    <img
                        src="/about-section.png"
                        alt="About Olanik - Design Philosophy"
                        className="w-full max-w-4xl h-auto"
                    />
                </motion.div>

                {/* Get in touch Button */}
                <motion.div 
                    className="text-center"
                    variants={itemVariants}
                >
                    <motion.button 
                        className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get in touch
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Works: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'TechGrid',
            description: 'Full web development for a Software company',
            image: '/project1.png',
            category: 'Web Development'
        },
        {
            id: 2,
            title: 'Ovote System',
            description: 'Web Application',
            image: '/project2.png',
            category: 'Web Development'
        },
        {
            id: 3,
            title: 'Ceadese',
            description: 'Web Application',
            image: '/project3.png',
            category: 'Web Development'
        },
        {
            id: 4,
            title: 'FCE Award Voting System',
            description: 'Web Application',
            image: '/project1.png',
            category: 'Web Development'
        }
    ];

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

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
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

    return (
        <div id="works" className="bg-[#FAFAFA] py-16 sm:py-20 lg:py-24 font-['Inter']">
            <motion.div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Work Badge */}
                <div className="text-center mb-8">
                    <motion.div 
                        className="inline-flex items-center px-4 py-2 border border-[#F1F1F1] rounded-full mb-6"
                        variants={badgeVariants}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-[#484848] text-sm font-medium">Work</span>
                    </motion.div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2 
                        className="text-3xl sm:text-[48px] lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 px-2"
                        variants={itemVariants}
                    >
                        Some of our Works
                    </motion.h2>
                    <motion.p 
                        className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                        variants={itemVariants}
                    >
                        Take a look at some of the innovative solutions
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>we've delivered for our clients.
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="bg-[#F1F1F1] rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10, 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            custom={index}
                        >
                            {/* Project Image */}
                            <div className="mb-4 sm:mb-6 overflow-hidden bg-white rounded-lg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 sm:h-64 object-cover"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="flex items-start justify-between">
                                <div className="flex-1 pr-2">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Arrow Icon */}
                                <button className="ml-2 sm:ml-4 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0">
                                    <svg
                                        className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 17L17 7M17 7H7M17 7V17"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <motion.div 
                    className="text-center"
                    variants={itemVariants}
                >
                    <Link
                        to="/projects"
                        className="inline-block bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors duration-200"
                    >
                        View more projects
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Works;
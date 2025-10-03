import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
    const [expandedService, setExpandedService] = useState<number | null>(null);

    const services = [
        {
            title: 'Web Development',
            description: 'Crafting responsive, high-performance websites and web applications tailored to your business needs.'
        },
        {
            title: 'Software Development',
            description: 'Building custom software solutions to streamline your operations and enhance productivity.'
        },
        {
            title: 'Data & Analytics',
            description: 'Transforming raw data into actionable insights to help you make smarter business decisions.'
        },
        {
            title: 'IT Consulting',
            description: 'Providing expert guidance to optimize your IT infrastructure and technology strategy.'
        }
    ];

    const toggleService = (index: number) => {
        setExpandedService(expandedService === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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

    return (
        <div className="bg-[#FAFAFA] py-16 sm:py-20 lg:py-24 font-['Inter']">
            <motion.div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Services Badge */}
                <div className="text-center mb-8">
                    <motion.div 
                        className="inline-flex items-center px-4 py-2 border border-[#F1F1F1] rounded-full mb-6"
                        variants={badgeVariants}
                    >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-#484848 text-sm font-medium">Services</span>
                    </motion.div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                        variants={itemVariants}
                    >
                        Design & Strategy.
                    </motion.h2>
                    <motion.p 
                        className="text-base sm:text-lg lg:text-xl text-gray-600"
                        variants={itemVariants}
                    >
                        That's what we do best.
                    </motion.p>
                </div>

                {/* Services Accordion */}
                <motion.div 
                    className="space-y-0"
                    variants={containerVariants}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="border-b border-gray-200 last:border-b-0"
                            variants={itemVariants}
                            whileHover={{ x: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Service Header - Always Visible */}
                            <div
                                className="flex items-center justify-between py-6 sm:py-8 cursor-pointer group"
                                onClick={() => toggleService(index)}
                            >
                                <h3 className="text-lg sm:text-[20px] font-semibold text-[#161616] transition-colors pr-4">
                                    {service.title}
                                </h3>
                                <button
                                    className="flex items-center justify-center w-[25px] h-[25px] rounded-full border-2 border-[#484848] transition-all duration-300 flex-shrink-0"
                                    aria-label={`${expandedService === index ? 'Collapse' : 'Expand'} ${service.title}`}
                                >
                                    {expandedService === index ? (
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-[#484848]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18 12H6"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5 text-[#484848]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* Service Description - Expandable */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedService === index
                                    ? 'max-h-40 opacity-100 pb-6 sm:pb-8'
                                    : 'max-h-0 opacity-0 pb-0'
                                    }`}
                            >
                                <p className="text-base sm:text-lg lg:text-[20px] text-[#484848] max-w-full sm:max-w-[550px] lg:max-w-[600px] pr-4 sm:pr-16">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Services;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <motion.header 
                className="bg-[white] font-['Inter']"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
                <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[72%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3 sm:py-4">
                      <div className='flex gap-[12px] sm:gap-[16px] md:gap-[20px]'>
                        
                         {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img 
                                    src="/olanik-logo.png" 
                                    alt="Olanik Logo" 
                                    className="h-6 sm:h-7 md:h-8 w-auto"
                                />
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
                            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium">
                                Services
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium">
                                Work
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium">
                                About
                            </a>
                        </nav>

                      </div>
                     
                       
                        {/* Desktop CTA Button */}
                        <div className="hidden md:flex items-center">
                            <button className="bg-black text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                                Get in touch
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-md text-gray-600 hover:text-black focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        {/* Overlay */}
                        <motion.div 
                            className="fixed inset-0 bg-black bg-opacity-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                        
                        {/* Sidebar */}
                        <motion.div 
                            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="flex items-center justify-between p-4 border-b">
                                <span className="text-lg font-semibold">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-md text-gray-600 hover:text-black"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <nav className="p-4">
                                <motion.div 
                                    className="space-y-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, staggerChildren: 0.1 }}
                                >
                                    <motion.a 
                                        href="#" 
                                        className="block text-gray-600 hover:text-black transition-colors duration-200 text-base font-medium py-2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        Services
                                    </motion.a>
                                    <motion.a 
                                        href="#" 
                                        className="block text-gray-600 hover:text-black transition-colors duration-200 text-base font-medium py-2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        Work
                                    </motion.a>
                                    <motion.a 
                                        href="#" 
                                        className="block text-gray-600 hover:text-black transition-colors duration-200 text-base font-medium py-2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        About
                                    </motion.a>
                                    
                                    {/* Mobile CTA Button */}
                                    <motion.div 
                                        className="pt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <button className="w-full bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                                            Get in touch
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectFormData {
  // Step 1: Project Type
  projectType: string;
  
  // Step 2: Project Details
  projectName: string;
  projectDescription: string;
  timeline: string;
  budget: string;
  
  // Step 3: Contact Information
  name: string;
  email: string;
  phone: string;
  company?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProjectFormData>({
    projectType: '',
    projectName: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const projectTypes = [
    'Web Development',
    'Software Development',
    'Data & Analytics',
    'Mobile App Development',
    'UI/UX Design',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0
    },
    exit: { 
      opacity: 0,
      y: 50
    }
  };

  const springTransition = {
    type: "spring" as const,
    duration: 0.6,
    bounce: 0.3
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">What type of project do you need?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <motion.button
                  key={type}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, projectType: type }));
                    handleNext();
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-xl transition-all shadow-sm hover:shadow-md ${
                    formData.projectType === type
                      ? 'bg-blue-500 text-white border-transparent'
                      : 'bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="text-lg font-medium mb-2">{type}</div>
                  <div className={`text-sm ${formData.projectType === type ? 'text-blue-100' : 'text-gray-500'}`}>
                    Click to select
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                Tell us about your project
              </h3>
              <p className="text-gray-600">Help us understand your vision better</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-50 px-3 py-1 rounded-full">
                    Project Name
                  </label>
                  <motion.input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all hover:border-blue-200"
                    required
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Enter a memorable name for your project"
                  />
                </div>
                <div>
                  <label className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-50 px-3 py-1 rounded-full">
                    Project Description
                  </label>
                  <motion.textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all hover:border-blue-200"
                    required
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Describe your project goals, features, and requirements"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-50 px-3 py-1 rounded-full">
                    Timeline
                  </label>
                  <motion.select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all hover:border-blue-200"
                    required
                    whileFocus={{ scale: 1.01 }}
                  >
                    <option value="">Select project timeline</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </motion.select>
                </div>
                <div>
                  <label className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-50 px-3 py-1 rounded-full">
                    Budget Range
                  </label>
                  <motion.select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all hover:border-blue-200"
                    required
                    whileFocus={{ scale: 1.01 }}
                  >
                    <option value="">Select budget range</option>
                    <option value="$5k-$10k">$5k-$10k</option>
                    <option value="$10k-$25k">$10k-$25k</option>
                    <option value="$25k-$50k">$25k-$50k</option>
                    <option value="$50k+">$50k+</option>
                  </motion.select>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between pt-4">
              <motion.button
                type="button"
                onClick={handleBack}
                className="w-full sm:w-auto px-8 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-all shadow-sm hover:shadow-md order-2 sm:order-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ← Back
              </motion.button>
              <motion.button
                type="button"
                onClick={handleNext}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md order-1 sm:order-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Next →
              </motion.button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                Your Contact Information
              </h3>
              <p className="text-gray-600">Let us know how to reach you</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="col-span-1 sm:col-span-2">
                  <label className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-50 px-3 py-1 rounded-full">
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all hover:border-blue-200"
                    required
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-50 px-3 py-1 rounded-full">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all hover:border-blue-200"
                    required
                    whileFocus={{ scale: 1.01 }}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-50 px-3 py-1 rounded-full">
                    Phone Number
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all hover:border-blue-200"
                    required
                    whileFocus={{ scale: 1.01 }}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="col-span-2">
                  <label className="inline-block text-sm font-semibold text-gray-700 mb-2 bg-gray-50 px-3 py-1 rounded-full">
                    Company (Optional)
                  </label>
                  <motion.input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all hover:border-blue-200"
                    whileFocus={{ scale: 1.01 }}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-700">
                  <span className="font-medium">Privacy Note:</span> Your information is safe with us. We'll only use it to contact you about your project.
                </p>
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <motion.button
                type="button"
                onClick={handleBack}
                className="px-8 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-all shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ← Back
              </motion.button>
              <motion.button
                type="submit"
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Submit Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={springTransition}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative border border-gray-100"
              >
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Start Your Project</h2>
                    <div className="flex items-center">
                      <span className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                      <div className={`w-8 h-0.5 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                      <span className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                      <div className={`w-8 h-0.5 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                      <span className={`w-3 h-3 rounded-full ${step >= 3 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Step {step} of 3: {step === 1 ? 'Project Type' : step === 2 ? 'Project Details' : 'Contact Information'}
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  {renderStep()}
                </form>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
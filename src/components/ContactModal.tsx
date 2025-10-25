import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLElement | null>;
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const dialogVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const ContactModal: React.FC<Props> = ({ isOpen, onClose, returnFocusRef }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', onKey);
      // lock scroll behind modal
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstFieldRef.current?.focus(), 50);
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      // restore focus to opener
      if (returnFocusRef?.current) {
        try {
          (returnFocusRef.current as HTMLElement).focus();
        } catch (e) {
          /* ignore */
        }
      }
    };
  }, [isOpen, onClose, returnFocusRef]);

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = 'Please enter your name';
    if (!email.trim()) e.email = 'Please enter your email';
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Please enter a valid email';
    if (!message.trim()) e.message = 'Please enter a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSending(true);

    // Simulate sending. Replace with real endpoint in future.
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setIsSent(false);
        onClose();
      }, 1200);
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close contact form"
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative z-60 w-[95%] sm:w-full max-w-2xl mx-auto px-2 sm:px-4"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
              <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Get in touch
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">Send a message and I&apos;ll get back to you shortly.</p>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="sr-only">Name</label>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black transition-colors ${errors.name ? 'border-red-300' : 'border-gray-200 hover:border-gray-300'}`}
                    placeholder="Your name"
                  />
                  {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                </div>

                <div>
                  <label className="sr-only">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black transition-colors ${errors.email ? 'border-red-300' : 'border-gray-200 hover:border-gray-300'}`}
                    placeholder="Your email"
                  />
                  {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                </div>

                <div>
                  <label className="sr-only">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full border rounded-xl px-4 py-2.5 h-24 sm:h-32 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black transition-colors ${errors.message ? 'border-red-300' : 'border-gray-200 hover:border-gray-300'}`}
                    placeholder="Tell me about your project"
                  />
                  {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
                </div>

                <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto text-gray-600 hover:text-gray-900 text-sm px-5 py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-full font-medium disabled:opacity-60 hover:bg-gray-800 transition-colors"
                  >
                    {isSending ? 'Sending…' : 'Send message'}
                  </button>
                </div>
              </form>

              {isSent && (
                <div className="mt-4 rounded-md bg-green-50 text-green-700 px-4 py-2 text-sm">Thanks — message sent!</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

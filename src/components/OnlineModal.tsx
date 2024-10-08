import React, { useState, useEffect } from 'react';
import ReactDOM  from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

interface AppointmentModalProps {
  isOpen2: boolean;
  onClose2: () => void;
}

const OnlineModal: React.FC<AppointmentModalProps> = ({ isOpen2, onClose2 }) => {
  const [state, handleSubmit] = useForm('mnnavbrr');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    appointment: 'offline',
    text: '',
  
  });

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose2();
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          appointment: 'offline',
          text: ''
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose2]);

  if (!isOpen2) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    sendWhatsAppMessage();
    
  };

  const sendWhatsAppMessage = () => {
    const message = `New Appointment Request:
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Date: ${formData.date}
    Message: ${formData.text}`;

    const whatsappNumber = '919310330922';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="relative bg-peacher rounded-lg p-6 w-full max-w-md my-8 mx-auto"
          >
            <div className="max-h-[85vh] overflow-y-auto px-2">
              <h2 className="text-2xl font-bold mb-4 text-center font-fraunces-slab text-foreground sticky top-0 bg-peacher pt-2">Book Online Appointment</h2>
              {state.succeeded ? (
                <p className="text-new text-center font-work-sans">Your appointment has been booked successfully!</p>
              ) : (
                <form onSubmit={handleFinalSubmit} className="space-y-4 font-work-sans">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full border border-new rounded-md shadow-sm p-2 bg-background text-foreground" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border border-new rounded-md shadow-sm p-2 bg-background text-foreground" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-new rounded-md shadow-sm p-2 bg-background text-foreground" />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground">Preferred Date</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full border border-new rounded-md shadow-sm p-2 bg-background text-foreground" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full border border-new rounded-md shadow-sm p-2 bg-background text-foreground"></textarea>
                  </div>
                
                  <div className="flex justify-end space-x-2 sticky bottom-0 bg-peacher pt-4">
                    <button type="button" onClick={onClose2} className="px-4 py-2 border border-new rounded-md text-sm font-medium text-foreground hover:bg-cardish transition-colors duration-300">
                      Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-foreground bg-buttonish transition-colors duration-300">
                      Book Appointment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,  
    document.body 
  );
};

export default OnlineModal;
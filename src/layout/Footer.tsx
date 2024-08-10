// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-foreground text-background py-12 px-6 rounded-lg shadow-md">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="space-y-4">
//             <h3 className="font-fraunces text-2xl mb-4">Dr. Bushra Zahoor</h3>
//             <p className="font-work-sans-slab text-sm">Mind Craft Neuro-Psychiatry Clinic</p>
//             <p className="font-work-sans-slab text-sm">Gold Medalist MBBS</p>
//           </div>
//           <div className="space-y-4">
//             <h3 className="font-fraunces text-xl mb-4">Contact</h3>
//             <p className="font-work-sans-slab text-sm">E-20, basement, Block E,</p>
//             <p className="font-work-sans-slab text-sm">Nizamuddin West, New Delhi,</p>
//             <p className="font-work-sans-slab text-sm">Delhi 110013</p>
//           </div>
//           <div className="space-y-4">
//             <h3 className="font-fraunces text-accent text-xl mb-4">Business Hours</h3>
//             <p className="font-work-sans-slab text-sm">Mon, Tue, Wed, Fri: 6–9 pm</p>
//             <p className="font-work-sans-slab text-sm">Thu: 6–9 pm (Hours might differ)</p>
//             <p className="font-work-sans-slab text-sm">Sat: 6–9 pm</p>
//             <p className="font-work-sans-slab text-sm">Sun: 11 am–2 pm</p>
//           </div>
//           <div className="space-y-4">
//             <h3 className="font-fraunces text-xl mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/about" className="font-work-sans-slab text-sm hover:text-accent transition-colors">Who I am</Link></li>
//               <li><Link to="/services" className="font-work-sans-slab text-sm hover:text-accent transition-colors">What We Treat</Link></li>
//               <li><Link to="/contact" className="font-work-sans-slab text-sm hover:text-accent transition-colors">Contact</Link></li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-12 pt-8 border-t border-background flex flex-col md:flex-row justify-between items-center">
//           <div className="font-work-sans-slab text-sm mb-4 md:mb-0">
//             © {currentYear} Dr. Bushra Zahoor. All rights reserved.
//           </div>
//           <div className="font-work-sans-slab text-sm">
//             Website by RNAHealthTech
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from  "react-icons/fa";
import {motion} from 'framer-motion';

const Footer: React.FC = () => {
  
  
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <footer className="bg-foreground text-background py-12 px-6 rounded-lg shadow-md">
      <motion.div className={`container mx-auto ${isMobile ? 'flex flex-col h-[70vh]' : ''}`}>
        <motion.div className={`${isMobile ? 'flex-shrink-0' : ''}`}>
          <h3 className="font-fraunces text-2xl mb-4">Dr. Bushra Zahoor</h3>
          <p className="font-work-sans-slab text-sm mb-4">MBBS(Gold Medalist), MD, DNB, Psychiatry</p>
          <p className="font-work-sans-slab text-sm mb-4">Mind Craft Neuro-Psychiatry Clinic</p>
         
        </motion.div>

        <motion.div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isMobile ? 'flex-grow overflow-y-auto' : ''
          }`}>
          <motion.div className="space-y-4">
            <h3 className="font-fraunces text-xl mb-4">Contact</h3>
            <motion.div className="flex items-center space-x-2">
              <FaPhone className="text-accent" />
              <p className="font-work-sans-slab text-sm">+91 9717288672</p>
            </motion.div>
            <motion.div className="flex items-center space-x-2">
              <FaEnvelope className="text-accent" />
              <p className="font-work-sans-slab text-sm">bushra.zhr07@gmail.com</p>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4">
            <h3 className="font-fraunces text-xl mb-4">Address</h3>
            <p className="font-work-sans-slab text-sm">E-20, basement, Block E,</p>
            <p className="font-work-sans-slab text-sm">Nizamuddin West, New Delhi,</p>
            <p className="font-work-sans-slab text-sm">Delhi 110013</p>
          </motion.div>
          <motion.div className="space-y-4">
            <h3 className="font-fraunces text-accent text-xl mb-4">Business Hours</h3>
            <p className="font-work-sans-slab text-sm">Mon, Tue, Wed, Fri: 6–9 pm</p>
            <p className="font-work-sans-slab text-sm">Thu: 6–9 pm (Hours might differ)</p>
            <p className="font-work-sans-slab text-sm">Sat: 6–9 pm</p>
            <p className="font-work-sans-slab text-sm">Sun: 11 am–2 pm</p>
          </motion.div>
          <motion.div className="space-y-4">
            <h3 className="font-fraunces text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="font-work-sans-slab text-sm hover:text-accent transition-colors">Who I am</Link></li>
              <li><Link to="/services" className="font-work-sans-slab text-sm hover:text-accent transition-colors">What We Treat</Link></li>
              <li><Link to="/contact" className="font-work-sans-slab text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div className={`mt-12 pt-8 border-t border-background flex flex-col md:flex-row justify-between items-center ${isMobile ? 'flex-shrink-0' : ''}`}>
          <motion.div className="font-work-sans-slab text-sm mb-4 md:mb-0">
            © {currentYear} Dr. Bushra Zahoor. All rights reserved.
          </motion.div>
          <motion.div className="font-work-sans-slab text-sm">
            Website by <a href='https://rnahealthtech.com' className='text-white'>RNA HealthTech</a>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
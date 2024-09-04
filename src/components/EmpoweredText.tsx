import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EmpowermentText: React.FC = () => (
  <motion.div 
    className="w-full lg:w-1/2 px-4 lg:px-8 text-left lg:order-1 space-y-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h3 className="text-2xl sm:text-3xl font-bold font-fraunces-slab text-pink-600 text-center lg:text-left">
      Empowering Women Through Mental Wellness
    </h3>
    
    <div className="space-y-4 text-gray-700">
      <p className="leading-relaxed text-sm sm:text-base">
        <span className="font-semibold text-pink-500">Dr. Bushra Zahoor</span> stands as a beacon of hope and strength for women in our community. As a dedicated psychologist, she has made it her mission to uplift and empower women, especially in the face of societal repression and cultural barriers.
      </p>
      
      <p className="leading-relaxed text-sm sm:text-base">
        Understanding the unique challenges women face, Dr. Zahoor provides a <span className="font-semibold text-pink-500">safe space</span> where women can freely express their:
      </p>
      
      <ul className="list-none pl-4 space-y-2">
        {['Desires', 'Ambitions', 'Concerns'].map((item, index) => (
          <li key={index} className="flex items-center text-sm sm:text-base">
            <ArrowRight className="text-pink-500 mr-2 flex-shrink-0" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <p className="leading-relaxed text-sm sm:text-base">
        Her services are tailored to address the mental health needs of women who often find their voices silenced by societal norms.
      </p>
    </div>
    
    <div className="bg-pink-50 p-4 rounded-lg shadow-inner">
      <p className="leading-relaxed text-gray-800 text-sm sm:text-base">
        Through her work, Dr. Zahoor not only helps individuals but also contributes to <span className="font-semibold text-pink-600">breaking the stigma</span> surrounding mental health in our society. She believes that by empowering women to prioritize their mental well-being, we can create a ripple effect of positive change in families and communities.
      </p>
    </div>
    
    <div className="mt-6">
      <p className="text-base sm:text-lg font-semibold text-pink-600">
        Discover how Dr. Zahoor's empowering approach can help you:
      </p>
      <ul className="list-none pl-4 space-y-2 mt-2">
        {["Navigate life's challenges", 'Embrace your true potential', 'Thrive in the face of adversity'].map((item, index) => (
          <li key={index} className="flex items-center text-sm sm:text-base">
            <ArrowRight className="text-pink-500 mr-2 flex-shrink-0" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default EmpowermentText;
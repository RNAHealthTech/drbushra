import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceTemplatePage from './services/ServiceTemplatePage';

import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';

// locations
import LeadingPsychiatristLajpatNagar from './pages/LajpatNagar';
import TopPsychologistGreenPark from './pages/GreenParkPage';
import BestMentalHealthDoctorDelhiNCR from './pages/NCRPage';
import ExpertPsychiatristSouthDelhi from './pages/SouthDelhiPage';
import BestPsychiatristNizzamundin from './pages/NizzamundinPage';
import BestPsychiatristKhanMarket from './pages/KhanMarketPage';



const App: React.FC = () => {
  return (
   <ParallaxProvider>
     <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/best-psychiatrist-in-nizzamundin' element={<BestPsychiatristNizzamundin />} />
          <Route path='/expert-psychiatrist-south-delhi' element={<ExpertPsychiatristSouthDelhi />} />
          <Route path='/best-mental-health-doctor-delhi-ncr' element={<BestMentalHealthDoctorDelhiNCR />} />
          <Route path='/top-psychologist-in-green-park' element={<TopPsychologistGreenPark />} />
          <Route path='/leading-psychiatrist-lajpat-nagar' element={<LeadingPsychiatristLajpatNagar />} />
          <Route path='/best-psychiatrist-in-khan-market' element={<BestPsychiatristKhanMarket />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path='/services/:serviceId' Component={ServiceTemplatePage} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
   </ParallaxProvider>
     
  )
}

export default App;

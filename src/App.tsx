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

const App: React.FC = () => {
  return (
   <ParallaxProvider>
     <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/best-psychiatrist-in-nizzamundin' element={<Home />} />
          <Route path='/expert-psychiatrist-south-delhi' element={<Home />} />
          <Route path='/best-mental-health-doctor-delhi-ncr' element={<Home />} />
          <Route path='/top-psychologist-in-nizzamudin-east' element={<Home />} />
          <Route path='/leading-psychiatrist-lajpat-nagar' element={<Home />} />
          <Route path='/best-psychiatrist-in-khan-market' element={<Home />} />
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

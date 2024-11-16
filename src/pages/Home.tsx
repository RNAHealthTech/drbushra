import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQItem from '../components/FAQItem';
import ServicesPreview from '../services/ServicesPreview';
import AppointmentModal from '../components/AppointmentModal';
import InViewWrapper from '../components/InViewWrapper';
import Testimonials from '../components/Testimonials';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/ImageCarousel';
import VimeoEmbed from '../components/VideoEmbed';
import SEOHelmet from '../SEOHelmet';
import OnlineModal from '../components/OnlineModal';
import MediaGallerySection from '../components/MediaGallerySection';

type CardKey = 'mentalHealth' | 'addiction' | 'migraine';

interface Cardprops {
  title: string;
  image: string;
  content: string;
}

const Map = lazy(() => import('../map/index'));

const cards: Record<CardKey, Cardprops> = {
  mentalHealth: {
    title: 'Mental Health',
    image: '/images/mental-health.jpg',
    content: `Struggling with anxiety, depression, or overwhelming stress? You're not alone. Our expert-led mental health support offers a path to inner peace and emotional balance. Discover personalized strategies to manage your thoughts, boost your mood, and reclaim control of your life. From mindfulness techniques to cognitive behavioral therapy, we're here to guide you towards a brighter, more resilient you. Take the first step towards mental wellness today – your future self will thank you.`,
  },
  addiction: {
    title: 'Addiction & Recovery',
    image: '/images/addiction-colour.png',
    content: `Breaking free from addiction is a journey, and you don't have to walk it alone. Our compassionate recovery program combines cutting-edge treatments with unwavering support to help you reclaim your life. Whether you're battling substance abuse, behavioral addictions, or co-occurring disorders, we offer tailored solutions that address the root causes of addiction. Embrace a future free from the chains of dependency – your story of transformation starts here. Let's turn the page together towards lasting recovery and renewed purpose.`,
  },
  migraine: {
    title: 'Migraine Management',
    image: '/images/migraine-colour.jpg',
    content: `Tired of migraines dictating your life? Our comprehensive migraine management program offers hope and relief. We combine the latest in neurological research with holistic approaches to not just treat symptoms, but prevent attacks before they start. From identifying triggers to exploring innovative therapies, we're committed to reducing the frequency and intensity of your migraines. Imagine a life with fewer disruptions and more clarity. It's possible, and we're here to guide you every step of the way. Don't let migraines hold you back any longer – discover your personalized path to freedom today.`,
  },
};


interface CardProps {
  card: Cardprops;
}


const Card: React.FC<CardProps> = ({ card }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full max-w-7xl">
      <div className="lg:flex">
        <div className="lg:w-2/5">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="lg:w-3/5 p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-900">
            {card.title}
          </h3>
          {isMobile ? (
            <>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {showFullContent ? card.content : `${card.content.slice(0, 100)}...`}
              </p>
              <button
                onClick={() => setShowFullContent(!showFullContent)}
                className="mt-4 text-zinc-600 font-semibold"
              >
                {showFullContent ? 'Show Less' : 'Read More'}
              </button>
            </>
          ) : (
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {card.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );

};

const Home: React.FC = () => {

  const [activeCard, setActiveCard] = useState<CardKey>('mentalHealth');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, []);

  const carouselImages = [
    "/images/doctor-1.jpg",
    "/images/doctor-2.jpg",
    "/images/doctor-3.jpg"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const mapVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };


  return (
    <>
      <SEOHelmet />
      <main className="flex-grow px-6 py-8">

        {/* home hero section */}

        <motion.section id='hero' className="relative w-full mb-12 flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 lg:pt-32 pb-20 overflow-hidden">
          <div className='relative z-10 max-w-7xl mx-auto'>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">

              <motion.div
                className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces-slab leading-tight mb-6 text-pink-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  {/* Updated headline to be more inclusive while highlighting women's mental health */}
                  Empowering Minds, Embracing Wellness
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl md:text-2xl text-pink-700 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Updated subheading to reflect a broader focus while emphasizing expertise in women's mental health */}
                  Nurturing mental wellness for all, with specialized care and understanding for women's unique experiences.
                </motion.p>

                <motion.div className="flex flex-col items-center md:flex-row md:justify-center">
                  <motion.button
                    className="mt-8 mr-0 md:mr-6 inline-flex items-center px-6 py-3 text-md md:text-lg font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openModal}
                  >
                    Schedule a Consultation
                  </motion.button>
                  <motion.button
                    className="mt-8 inline-flex items-center px-6 py-3 text-md md:text-lg font-semibold text-pink-500 bg-white rounded-full hover:bg-white/50 transition duration-300 ease-in-out transform hover:scale-105 shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openModal2}
                  >
                    Online Appointment
                  </motion.button>
                </motion.div>

                <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
                <OnlineModal isOpen2={isModalOpen2} onClose2={closeModal2} />

                <motion.div
                  className="mt-8 flex items-center justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {/* Updated trust indicator to be more inclusive */}
                    <span className="ml-2 text-lg font-semibold text-pink-800">
                      Trusted by 1000+ clients
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Image Content */}
              <div className="w-full lg:w-1/2">
                <Parallax translateY={[-20, 20]}>
                  <div className="relative aspect-[4/3] max-w-md mx-auto lg:max-w-xl xl:max-w-2xl">
                    <motion.div
                      className="absolute top-0 left-0 w-2/3 h-4/5 bg-white rounded-3xl overflow-hidden shadow-2xl"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <img
                        src="/images/psychologist-session.jpg"
                        alt="Psychologist in session"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-0 right-0 w-2/3 h-4/5 bg-white rounded-3xl overflow-hidden shadow-2xl"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <img
                        src="/images/empowered-women.jpg"
                        alt="Empowered women"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </motion.div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </motion.section>

        {/* home intro  */}

        <motion.section id='intro' className='relative bg-white mb-12 flex flex-col items-center text-center px-4 sm:px-6 py-16 lg:px-8 overflow-hidden'>
          {/* White curvy shape on the right */}
          <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FFFFFF" d="M39.5,-65.3C50.2,-56.7,57.1,-43.9,62.6,-30.6C68.1,-17.3,72.2,-3.5,70.8,9.7C69.4,22.8,62.5,35.3,52.6,44.3C42.7,53.3,29.8,58.8,16.1,63.1C2.4,67.4,-12.1,70.5,-24.8,67.2C-37.5,63.9,-48.3,54.2,-56.8,42.6C-65.3,31,-71.4,17.5,-73.3,3C-75.2,-11.5,-72.9,-26.1,-65.3,-37.1C-57.7,-48.1,-44.8,-55.6,-32,-62.1C-19.1,-68.6,-6.3,-74.1,5.4,-72.7C17.1,-71.3,28.8,-73.9,39.5,-65.3Z" transform="translate(100 100)" />
            </svg>
          </div>

          {/* Pink curvy shape on the bottom-left */}
          <div className="absolute bottom-0 left-0 w-full sm:w-1/2 h-1/2 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FECDD3" d="M45.7,-78.3C58.9,-71.1,69.2,-58.7,76.6,-44.7C84,-30.7,88.5,-15.4,88.7,-0.1C88.9,15.2,84.8,30.3,77.4,44.2C70,58.1,59.3,70.7,46.1,78.5C32.8,86.3,16.4,89.3,0.2,88.9C-15.9,88.5,-31.8,84.8,-46.4,77.4C-61,70,-74.2,58.9,-82.7,44.5C-91.2,30.1,-95,15,-92.6,1.4C-90.2,-12.3,-81.6,-24.6,-72.5,-35.8C-63.3,-47,-53.6,-57,-41.8,-64.9C-30,-72.8,-15,-78.5,0.9,-79.9C16.8,-81.4,33.5,-78.6,45.7,-78.3Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 sm:mb-20 text-center text-foreground font-fraunces-slab"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Mantra from the Other Side
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="w-full h-96 md:w-1/3 mb-8 md:mb-0"

              >
                <ImageCarousel images={carouselImages} />
              </motion.div>
              <div className="w-full md:w-2/3 md:pl-8 lg:pl-12">
                <motion.h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-2 sm:mb-4 text-foreground font-fraunces-slab"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Embrace Your Unique Journey with
                </motion.h3>
                <motion.h3
                  className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold mb-2 sm:mb-4 text-foreground font-fraunces-slab"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Dr. Bushra Zahoor
                </motion.h3>
                <motion.p
                  className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-pink-400 font-work-sans'
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  MBBS (Gold Medalist),MD, DNB (Psychiatry)
                </motion.p>
                <InViewWrapper>
                  <blockquote className="border-l-4 border-buttonish pl-4 italic text-gray-600 my-4 sm:mb-6 text-sm sm:text-base">
                    "In the tapestry of life, your struggles are not flaws, but threads that add depth and character to your unique story. Let's work together to weave a narrative of resilience, growth, and self-discovery." - Dr. Bushra Zahoor
                  </blockquote>
                  <p className="hidden text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 font-work-sans lg:block">
                    With over a decade of experience in psychiatry, I'm here to guide you through the complexities of your mind. My approach combines evidence-based practices with compassionate care, tailored to your individual needs.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 font-work-sans">
                    Whether you're dealing with anxiety, depression, or life transitions, remember: seeking help is not a sign of weakness, but a courageous step towards a brighter future. Let's embark on this healing journey together.
                  </p>
                </InViewWrapper>
                <motion.button
                  onClick={() => navigate("/about")}
                  className="mt-2 sm:mt-4 mb-4 sm:mb-6 bg-cardish text-sm lg:text-lg text-foreground font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-[30px] shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Dr. Zahoor
                </motion.button>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl md:text-4xl font-semibold mb-6 text-foreground font-fraunces-slab">Featured Videos</h3>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <VimeoEmbed
                    videoId="1007912813"
                    title="Dr. Bushra Zahoor"
                    aspectRatio="56.25%"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <VimeoEmbed
                    videoId="1007913819"
                    title="Doc Speak"
                    aspectRatio="56.25%"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/*  overview section */}

        <motion.section
          className="mb-24 flex flex-col items-center text-center px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center mb-8 w-full"
            variants={itemVariants}
          >
            <svg
              className="w-full h-auto max-w-[336.4px] sm:max-w-[300px] md:max-w-[370px]"
              viewBox="0 0 370 145"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Your SVG content here */}
              <rect width="100%" height="100%" fill="#F9E5E5" />
              <g transform='translate(135,10)'>
                <g id="SvgjsG2747"
                  transform="matrix(1.2178828599842617,0,0,1.2178828599842617,-5.657248791915247,18)"
                  fill="#111111">
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M51.1,39.7C51.1,39.7,51.1,39.7,51.1,39.7C51.1,39.7,51.1,39.7,51.1,39.7z"></path>
                    <path d="M51.2,39.7C51.1,39.7,51.1,39.7,51.2,39.7C51.1,39.7,51.1,39.7,51.2,39.7z"></path>
                    <path
                      d="M85.7,51.4c-0.4-0.6-0.9-1.2-1.3-1.8c-3-4.1-3.5-8.5-1.9-13.4c2.4-7.3,0.5-19.8-3.7-26.2c-0.3-0.5-0.7-0.9-1-1.3   c1,2.2,2.1,4.3,2.8,6.6c0.8,2.3,1,4.8-0.6,7.1c0-12.1-7.1-18.2-17.5-21.6C69.3,3.3,74.7,7.4,77,14.9c1.2,4.2,0.6,10-1.5,13.4   c0-1.1,0-1.8,0-2.5c0.8-9.3-3.5-15.8-11.4-20.4C58.1,2,53.8,0.6,44.1,1.8c-7.5,0.9-14,3.9-19.2,9.4c-8.6,8.9-9.3,23.5-1.5,33.2   c0.3,0.4,0.7,0.8,1,1.2c0,0,0,0,0,0c2.3,2.2,5.9,4.7,5.9,4.7l0,0c0.1,0.1,0.2,0.2,0.3,0.2c14.6,7.7,28-2.8,30.6-7.8c0,0,0,0,0-0.1   c2.9-5.3,3.8-10.7,2.1-16.4c-2.1-7.1-6.9-11.5-13.2-13.3c1.8,1.3,4.4,2.8,6.4,4.8c6.6,6.8,5.7,17.4,4.3,21.1   c-0.2,0.5-0.4,0.9-0.5,1.3c0,0,0,0,0,0c-5.2,10.7-21.1,13.1-26.7,9.3c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0l0,0c0,0-0.1,0-0.1-0.1   c-4.5-2.2-8.7-7.2-8.7-7.2l-0.1,0c-0.2-0.3-0.4-0.6-0.6-0.9c-6-8.8-4.2-21.9,3.9-29.2c10.8-9.7,26.7-9.7,37.3,0   c5.3,4.9,7.6,11.2,7.1,18.3c-0.2,3.7-0.7,10.7-6.8,20.5c-0.8,1.2-1.7,2.7-2.7,4.1c-2.5,3.3-5,6.4-7.6,9.6c-5.1,6.2-4.9,13.4,0.8,19   c2.5,2.4,5.4,4.4,8.1,6.6c0.2-0.2,0.3-0.3,0.5-0.5c-0.7-0.9-1.5-1.9-2.2-2.8c-2.2-3-3.6-6.1-2.9-9.9c0.6-3,1.3-3.5,4.1-2.5   c2.4,0.8,4.8,1.6,7.2,2.2c1.2,0.3,2.6,0.2,3.9,0c3-0.6,4.4-3,4-6c-0.1-0.9,0.1-2.1,0.6-2.9c0.7-1.1,1-2,0.6-3.4   c-0.2-0.5,0.3-1.6,0.8-1.9c1.1-0.6,1.5-1.3,1.3-2.5c-0.2-1.3,0.4-2.2,1.6-2.7c0.3-0.1,0.6-0.3,0.9-0.5   C87.1,55.1,87.4,53.8,85.7,51.4z"></path>
                    <path
                      d="M53.1,18.8c4.1,4.3,4.7,8,4,12.7c-0.9,5.9-4.5,8.3-4.5,8.3C45.1,46,33.4,43.2,31,35c-1.4-4.7-0.5-8.8,3.1-12.1   c3.4-3.2,7.4-4,11.8-2.2c4.6,1.9,7,7,5.8,11.6c-1.2,4.5-5.3,7.3-10.1,6.8c-3.9-0.4-7-4-7.1-8.1c0-3.8,2.9-7,6.8-7.4   c3.5-0.4,6.7,2.2,7.3,5.9c0.5,3.2-1.8,6.1-5,6.7c-2.8,0.5-5.6-1.4-6.2-4.2c-0.6-2.7,1-5.1,3.7-5.7c1.8-0.4,3.1,0.2,4.2,1.6   c0.8,1.1,0.3,2.3,0.2,2.4c-0.9,1.4-2.9,2.3-4.6,1.9C40.1,32,39.2,31,40.2,30c-0.8,0.3-1.4,1.5,0.2,2.2c1.9,0.9,4.2,0.2,5.5-1.2   c1.3-1.4,1.2-3.5-1-4.9c-2-1.2-3.7-1.2-5.7-0.1c-2.1,1.2-2.9,3.1-2.7,5.4c0.3,3.6,3.4,6,7,5.6c3.9-0.5,6.6-3.9,6.1-7.8   c-0.5-3.8-3.4-6.6-7.1-6.8c-4.2-0.2-7.9,2.4-8.9,6.4c-0.9,4,0.8,8.1,4.3,10.3c3.5,2.2,8.5,1.7,11.8-1.1c3.8-3.2,4.9-8.8,2.6-13.3   c-2.4-4.8-7.9-7.4-13.2-6.2c-5.4,1.2-9.4,5.4-10.2,10.9c-0.8,5.1,1.9,11.5,6.4,13.8c10.6,5.6,18.9-2.3,19.4-2.7c0,0,0,0,0,0   C59.8,35.3,60.2,23.4,53.1,18.8z"></path>
                  </g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.2,39C40.2,39,40.2,39,40.2,39C40.3,39,40.2,39,40.2,39z"></path>
                    <path d="M40.2,39C40.2,39,40.3,39,40.2,39C40.3,39,40.2,39,40.2,39z"></path>
                    <path
                      d="M5.7,50.7c0.4-0.6,0.9-1.2,1.3-1.8c3-4.1,3.5-8.5,1.9-13.4c-2.4-7.3-0.5-19.8,3.7-26.2c0.3-0.5,0.7-0.9,1-1.3   c-1,2.2-2.1,4.3-2.8,6.6c-0.8,2.3-1,4.8,0.6,7.1C11.3,9.5,18.5,3.4,28.9,0c-6.8,2.6-12.3,6.8-14.5,14.2c-1.2,4.2-0.6,10,1.5,13.4   c0-1.1,0-1.8,0-2.5c-0.8-9.3,3.5-15.8,11.4-20.4c6.3-3.6,16.2-5.3,26.1-3.3c7.4,1.5,13.1,10.2,6.5,6.4c-6.7-3.9-23-6.4-33.6,3.4   c-5.3,4.9-7.6,11.2-7.1,18.3c0.2,3.7,0.7,10.7,6.8,20.5c0.8,1.2,1.7,2.7,2.7,4.1c2.5,3.3,5,6.4,7.6,9.6c5.1,6.2,4.9,13.4-0.8,19   c-2.5,2.4-5.4,4.4-8.1,6.6c-0.2-0.2-0.3-0.3-0.5-0.5c0.7-0.9,1.5-1.9,2.2-2.8c2.2-3,3.6-6.1,2.9-9.9c-0.6-3-1.3-3.5-4.1-2.5   c-2.4,0.8-4.8,1.6-7.2,2.2c-1.2,0.3-2.6,0.2-3.9,0c-3-0.6-4.4-3-4-6c0.1-0.9-0.1-2.1-0.6-2.9c-0.7-1.1-1-2-0.6-3.4   c0.2-0.5-0.3-1.6-0.8-1.9c-1.1-0.6-1.5-1.3-1.3-2.5c0.2-1.3-0.4-2.2-1.6-2.7c-0.3-0.1-0.6-0.3-0.9-0.5C4.3,54.4,4,53.1,5.7,50.7z"></path>
                  </g>
                </g>
              </g>

            </svg>
          </motion.div>

          <InViewWrapper>
            <motion.h2
              className="font-fraunces-slab text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 max-w-2xl sm:max-w-3xl lg:max-w-4xl leading-tight sm:leading-snug lg:leading-normal"
              variants={itemVariants}
            >
              Start your journey towards well-being.
              <motion.span
                className='font-fraunces-slab text-lg lg:text-2xl mb-8'
                variants={itemVariants}
              >
                <br />
                Get the best guidance from Gold Medalist Dr. Zahoor. Get rid of the challenges you're facing—be it mental, physical, or emotional pain.
              </motion.span>
            </motion.h2>
          </InViewWrapper>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            {['mentalHealth', 'addiction', 'migraine'].map((cardType) => (
              <motion.button
                key={cardType}
                className={`px-6 py-3 rounded-full text-md font-semibold md:text-xl transition-colors ${activeCard === cardType ? 'bg-buttonish text-foreground' : 'bg-peacher text-foreground'
                  }`}
                onClick={() => setActiveCard(cardType as CardKey)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cardType === 'mentalHealth' ? 'Mental Health' :
                  cardType === 'addiction' ? 'Addiction & Recovery' : 'Migraine'}
              </motion.button>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card card={cards[activeCard]} />
          </motion.div>
        </motion.section>



        {/*  home services  */}

        <ServicesPreview />

        <MediaGallerySection />

        {/* patients testimonials */}

        <Testimonials />
        <motion.section
          id="faqs"
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <motion.div className="w-full lg:w-2/5 px-6 py-16 lg:px-8" variants={itemVariants}>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-foreground font-fraunces-slab text-center"
                variants={itemVariants}
              >
                FAQ
              </motion.h2>
              <motion.div className="w-full max-w-2xl mx-auto lg:mx-0 space-y-6" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <FAQItem question="What are Dr. Bushra Zahoor's qualifications?">
                    Dr. Bushra Zahoor is highly qualified with MBBS, MD (Psychiatry), and DNB (Psychiatry) degrees. She is a Gold Medalist in MBBS and currently serves as an Assistant Professor in the Department of Psychiatry.
                  </FAQItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FAQItem question="What are Dr. Zahoor's areas of specialization?">
                    Dr. Zahoor specializes in Women's Mental Health, Child and Adolescent Mental Health. She offers a wide range of services including treatment for anxiety, depression, bipolar disorder, psychosis, and internet & technology addiction.
                  </FAQItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FAQItem question="What types of services does Dr. Zahoor provide?">
                    Dr. Zahoor provides various services including headache & migraine treatment, anger and stress management, counseling for anxiety and depression, child & adolescent guidance, and psychotherapy. She also offers sex education, wellness counseling, and help with lifestyle & relationship issues.
                  </FAQItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <FAQItem question="How can I schedule an appointment with Dr. Zahoor?">
                    You can contact Dr. Zahoor at 9717288672. Her clinic timings are from 6-8pm. The clinic is located at E-20, basement, Nizamuddin West, New Delhi- 110013.
                  </FAQItem>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 h-[500px] lg:h-auto lg:py-16 lg:pr-8"
              variants={mapVariants}
            >
              <Suspense fallback={<div>Loading map...</div>}>
                <Map />
              </Suspense>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative shadow-md rounded-[40px] w-full max-w-[1200px] overflow-hidden">
            <img
              src="/images/mentalhealth-pink.png"
              alt="Hero"
              className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.h1
                className="font-fraunces-slab text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <span className="text-yellow-300">Your Mental Well-being,</span><br />
                <span className="text-yellow-300 font-bold">Our Responsibility</span>
              </motion.h1>
              <motion.p
                className="font-work-sans text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-5 md:mb-6 max-w-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Embark on a journey of self-discovery and healing. Let us guide you towards inner peace, resilience, and a brighter tomorrow. Your mental health matters, and we're here to support you every step of the way.
              </motion.p>
              <motion.button
                className="bg-white text-zinc-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center text-sm sm:text-base transition-colors hover:bg-foreground hover:text-white"
                onClick={openModal}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/images/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                Book a Consultation Session
              </motion.button>
              <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
            </motion.div>
          </div>
        </motion.section>


      </main >
    </>
  );
};

export default Home;
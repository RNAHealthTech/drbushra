import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FAQItem from '../components/FAQItem';
import ServicesPreview from '../services/ServicesPreview';
//import Testimonials from '../components/Testimonials';
import Map from '../map';
import { Helmet } from 'react-helmet';

type CardKey = 'mentalHealth' | 'addiction' | 'migraine';

interface Card {
  title: string;
  image: string;
  content: string;
}


const cards: Record<CardKey, Card> = {
  mentalHealth: {
    title: 'Mental Health',
    image: '/images/counseling.jpg',
    content: `Struggling with anxiety, depression, or overwhelming stress? You're not alone. Our expert-led mental health support offers a path to inner peace and emotional balance. Discover personalized strategies to manage your thoughts, boost your mood, and reclaim control of your life. From mindfulness techniques to cognitive behavioral therapy, we're here to guide you towards a brighter, more resilient you. Take the first step towards mental wellness today – your future self will thank you.`,
  },
  addiction: {
    title: 'Addiction & Recovery',
    image: '/images/addiction.jpg',
    content: `Breaking free from addiction is a journey, and you don't have to walk it alone. Our compassionate recovery program combines cutting-edge treatments with unwavering support to help you reclaim your life. Whether you're battling substance abuse, behavioral addictions, or co-occurring disorders, we offer tailored solutions that address the root causes of addiction. Embrace a future free from the chains of dependency – your story of transformation starts here. Let's turn the page together towards lasting recovery and renewed purpose.`,
  },
  migraine: {
    title: 'Migraine Management',
    image: '/images/migraine.jpg',
    content: `Tired of migraines dictating your life? Our comprehensive migraine management program offers hope and relief. We combine the latest in neurological research with holistic approaches to not just treat symptoms, but prevent attacks before they start. From identifying triggers to exploring innovative therapies, we're committed to reducing the frequency and intensity of your migraines. Imagine a life with fewer disruptions and more clarity. It's possible, and we're here to guide you every step of the way. Don't let migraines hold you back any longer – discover your personalized path to freedom today.`,
  },
};


interface CardProps {
  card: Card;
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
    <div className="bg-orange-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl w-full max-w-7xl">
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

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, []);


  return (
    <>
      <Helmet>
        <title>Dr. Bushra Zahoor | Mind Craft Neuro-Psychiatry Clinic | Delhi NCR</title>
        <meta name="description" content="Welcome to Mind Craft Neuro-Psychiatry Clinic. Dr. Bushra Zahoor, Gold Medalist MBBS and expert psychiatrist, offers comprehensive mental health care in Delhi NCR. Let's talk, let's heal." />
        <meta name="keywords" content="Dr. Bushra Zahoor, psychiatrist Delhi, Mind Craft Neuro-Psychiatry Clinic, mental health, MBBS, MD Psychiatry, DNB Psychiatry, Delhi NCR" />
      </Helmet>
      <main className="flex-grow px-6 py-8">
        <section className="mb-12 flex justify-center">
          <div className="relative shadow-md rounded-[40px] w-full max-w-[1200px] overflow-hidden">
            <img
              src="/images/hero-home.jpg"
              alt="Hero"
              className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center  px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
              <h1 className="font-fraunces-slab text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4">
                <span className="text-yellow-300">We care for your</span><br />
                <span className="text-yellow-300 font-bold">Mental Well-being</span>
              </h1>
              <p className="font-work-sans text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-5 md:mb-6 max-w-xl">
                Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.
              </p>
              <button className="bg-white text-zinc-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center text-sm sm:text-base transition-colors hover:bg-foreground hover:text-white">
                <img src="/images/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                Book a Consultation Session
              </button>
            </div>
          </div>
        </section>


        <section className="mb-12 flex flex-col items-center text-center px-6 lg:px-8">
          <div className="flex justify-center mb-8 w-full">
            <svg
              className="w-full h-auto max-w-[336.4px] sm:max-w-[300px] md:max-w-[370px]"
              viewBox="0 0 370 145"
              preserveAspectRatio="xMidYMid meet"
            >
              <rect width="100%" height="100%" fill="#F7EED9" />
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
          </div>
          <h2 className="font-fraunces-slab text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 max-w-2xl sm:max-w-3xl lg:max-w-4xl leading-tight sm:leading-snug lg:leading-normal">
            Start your journey towards well-being. I'm here to guide you through the challenges you're facing—be it mental, physical, or emotional pain.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              className={`px-6 py-3 rounded-full text-md font-semibold md:text-xl transition-colors ${activeCard === 'mentalHealth' ? 'bg-buttonish text-foreground' : 'bg-peacher text-foreground'
                }`}
              onClick={() => setActiveCard('mentalHealth')}
            >
              Mental Health
            </button>
            <button
              className={`px-6 py-3 rounded-full text-md font-semibold md:text-xl transition-colors ${activeCard === 'addiction' ? 'bg-buttonish text-foreground' : 'bg-peacher text-foreground'
                }`}
              onClick={() => setActiveCard('addiction')}
            >
              Addiction & Recovery
            </button>
            <button
              className={`px-6 py-3 rounded-full text-md font-semibold md:text-xl transition-colors ${activeCard === 'migraine' ? 'bg-buttonish text-foreground' : 'bg-peacher text-foreground'
                }`}
              onClick={() => setActiveCard('migraine')}
            >
              Migraine
            </button>
          </div>
          <Card card={cards[activeCard]} />
        </section>

        <section className='bg-gradient-to-r from-peacher to-orange-100 mb-12 flex rounded-[40px] flex-col items-center text-center px-6 py-16 lg:px-8'>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 text-center text-foreground font-fraunces-slab">Dr. Bushra's Mantra for You</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img
                  src="/images/doctor.jpg"
                  alt="Dr. Bushra Zohra"
                  className="rounded-full shadow-xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto object-cover border-4 border-buttonish"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-foreground font-fraunces-slab">Embrace Your Unique Journey</h3>
                <blockquote className="border-l-4 border-buttonish pl-4 italic text-gray-600 mb-6">
                  "In the tapestry of life, your struggles are not flaws, but threads that add depth and character to your unique story. Let's work together to weave a narrative of resilience, growth, and self-discovery." - Dr. Bushra Zohra
                </blockquote>
                <p className="hidden text-lg text-gray-700 mb-6 font-work-sans lg:block">
                  With over a decade of experience in psychiatry, I'm here to guide you through the complexities of your mind. My approach combines evidence-based practices with compassionate care, tailored to your individual needs.
                </p>
                <p className="text-lg text-gray-700 mb-8 font-work-sans">
                  Whether you're dealing with anxiety, depression, or life transitions, remember: seeking help is not a sign of weakness, but a courageous step towards a brighter future. Let's embark on this healing journey together.
                </p>
                <button onClick={() => navigate("/about")} className="mt-4 mb-6 bg-buttonish text-md text-foreground font-semibold px-6 py-3 rounded-lg">
                  About Dr. Zahoor
                </button>
              </div>
            </div>
          </div>
        </section>
        <ServicesPreview />
        {/* <Testimonials /> */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="w-full lg:w-2/5 px-6 py-16 lg:px-8">
              <h2 className="font-fraunces-slab text-3xl mb-8 text-center lg:text-left">FAQ</h2>
              <div className="w-full max-w-2xl mx-auto lg:mx-0 space-y-6">
                <FAQItem question="What are Dr. Bushra Zahoor's qualifications?">
                  Dr. Bushra Zahoor is highly qualified with MBBS, MD (Psychiatry), and DNB (Psychiatry) degrees. She is a Gold Medalist in MBBS and currently serves as an Assistant Professor in the Department of Psychiatry.
                </FAQItem>
                <FAQItem question="What are Dr. Zahoor's areas of specialization?">
                  Dr. Zahoor specializes in Women's Mental Health, Child and Adolescent Mental Health. She offers a wide range of services including treatment for anxiety, depression, bipolar disorder, psychosis, and internet & technology addiction.
                </FAQItem>
                <FAQItem question="What types of services does Dr. Zahoor provide?">
                  Dr. Zahoor provides various services including headache & migraine treatment, anger and stress management, counseling for anxiety and depression, child & adolescent guidance, and psychotherapy. She also offers sex education, wellness counseling, and help with lifestyle & relationship issues.
                </FAQItem>
                <FAQItem question="How can I schedule an appointment with Dr. Zahoor?">
                  You can contact Dr. Zahoor at 9717288672. Her clinic timings are from 6-8pm. The clinic is located at E-20, basement, Nizamuddin West, New Delhi- 110013.
                </FAQItem>

              </div>
            </div>
            <div className="w-full lg:w-3/5 h-[500px] lg:h-auto lg:py-16 lg:pr-8">
              <Map />
            </div>
          </div>
        </section>
      </main >
    </>
  );
};

export default Home;
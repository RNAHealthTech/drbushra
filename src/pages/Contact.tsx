import React, { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import 'leaflet/dist/leaflet.css';
 
import { Helmet } from 'react-helmet';
import Map from "../map";


const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
 
    const mapRef = useRef<HTMLDivElement>(null);


    const scrollToMap = () => {
        mapRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: "smooth" });
        }
    }

    const [state, handleSubmit] = useForm('xblrdjdp');
    console.log(state);

    return (
      <>
      <Helmet>
  <title>Contact Dr. Bushra Zahoor | Mind Craft Neuro-Psychiatry Clinic</title>
  <meta name="description" content="Get in touch with Dr. Bushra Zahoor, a highly qualified psychiatrist in Delhi. Schedule appointments at Mind Craft Neuro-Psychiatry Clinic in Nizamuddin, Delhi NCR." />
  <meta name="keywords" content="Dr. Bushra Zahoor, contact, appointment, psychiatrist Delhi, Mind Craft Neuro-Psychiatry Clinic, Nizamuddin, Delhi NCR" />
</Helmet>

        <main className="flex-grow px-6 py-8">
            <section className="mb-12 flex justify-center">
                <motion.div className="relative shadow-md rounded-[40px] w-full max-w-[1200px] overflow-hidden">
                    <img
                        src="/images/contact-hero.jpg"
                        alt="Hero"
                        className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                    <motion.div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center  px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
                        <h1 className="font-fraunces-slab text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4">
                            <span className="text-yellow-300">Your Mental Health,</span><br />
                            <span className="text-yellow-300 font-bold">Our Priority</span>
                        </h1>

                        <button className="bg-white text-zinc-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center text-sm sm:text-base transition-colors hover:bg-foreground hover:text-white">
                            <img src="/images/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                            Reach Out Today!
                        </button>
                    </motion.div>
                </motion.div>
            </section>
            <section className="contact-info py-24">
                <motion.div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Contact Dr. Bushra Zahoor</h2>
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <ContactItem
                            icon={<FaMapMarkerAlt className="text-blue-500" />}
                            title="Address"
                            content="E-20, basement, Block E,
                            Nizamuddin West, New Delhi, Delhi-110013"
                            gradientClass="from-cardish to-peacher"
                            action={scrollToMap}
                        />
                        <ContactItem
                            icon={<FaPhone className="text-green-500" />}
                            title="Phone"
                            content="+91-9717288672"
                            gradientClass="from-cardish to-peacher"
                            action={() => window.location.href = 'tel:+919717288672'}
                        />
                        <ContactItem
                            icon={<FaEnvelope className="text-purple-500" />}
                            title="Email"
                            content="bushra.zhr07@gmail.com"
                            gradientClass="from-cardish to-peacher"
                            action={() => window.location.href = 'mailto:bushra.zhr07@gmail.com'}
                        />
                    </motion.div>
                </motion.div>
            </section>
            <section id="contact-form" className="contact-form py-20">
          <motion.div className="container mx-auto px-4">
            <motion.div className="max-w-6xl mx-auto">
              <motion.div className="flex flex-col lg:flex-row items-center">
                {/* Image section */}
                <motion.div className="w-full lg:w-1/2 lg:pl-8 mb-8 lg:mb-0 order-1 lg:order-2">
                  <img
                    src="/images/contact-doctor.png"
                    alt="Doctor consultation"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                {/* Form section */}
                <motion.div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                  {state.succeeded ? (
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left mt-4 sm:mt-6 lg:mt-0 px-4 lg:px-0">
                      Your Form has been sent successfully!
                    </h3>
                  ) : (
                    <motion.div>
                      <h3 className="text-3xl font-bold mb-8 text-center lg:text-left mt-8 lg:mt-0">Schedule Your Appointment</h3>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div className="mb-8">
                          <label htmlFor="name" className="block text-oxford-blue text-sm font-semibold mb-2">Name </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Type Name"
                            className="border-b  bg-peacher  border-platinum py-2 text-lg w-full"
                          />
                        </motion.div>

                        <motion.div className="mb-8">
                          <label htmlFor="phone" className="block text-oxford-blue text-sm font-semibold mb-2">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Type Phone Number"
                            className="border-b  bg-peacher  border-platinum py-2 text-lg w-full"
                          />
                        </motion.div>

                        <motion.div className="mb-8">
                          <label htmlFor="email" className="block text-oxford-blue text-sm font-semibold mb-2">Email Address </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Type Email Address"
                            className="border-b  bg-peacher  border-platinum py-2 text-lg w-full"
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </motion.div>
                        <motion.div className="mb-8">
                          <label htmlFor="date" className="block text-oxford-blue text-sm font-semibold mb-2">Date</label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            required
                            placeholder="Select Date"
                            className="border-b bg-peacher border-platinum py-2 text-lg w-full"
                          />
                          <ValidationError prefix="Date" field="date" errors={state.errors} />
                        </motion.div>

                        <motion.div className="mb-8">
                          <label htmlFor="message" className="block text-oxford-blue text-sm font-semibold mb-2">How can I help You?</label>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Type Description"
                            required
                            className="border-b bg-peacher border-platinum py-2 text-lg w-full max-h-72 min-h-24 h-24 resize-vertical"
                          ></textarea>
                        </motion.div>

                        <button
                          type="submit"
                          className="w-full bg-new text-white font-semibold py-3 px-6 rounded-md hover:text-zinc-900 hover:bg-peacher transition duration-300 ease-in-out transform hover:scale-105"
                        >
                          Schedule Appointment
                        </button>
                      </form>
                    </motion.div>)}
                </motion.div>


              </motion.div>
            </motion.div>
          </motion.div>
        </section>

            <section ref={mapRef} className="map-section py-10">
                <motion.div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
                  
                         <Map />
                  
                </motion.div>
            </section>

        </main>
        </>
    )
}


interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
    gradientClass: string;
    action: () => void;
}

const ContactItem: React.FC<ContactCardProps> = ({ icon, title, content, gradientClass, action }) => (
    <motion.div
        className={`rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300 bg-gradient-to-br ${gradientClass} relative overflow-hidden group cursor-pointer`}
        onClick={action}
    >
        <motion.div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-95 transition-opacity duration-300"></motion.div>
        <motion.div className="relative z-10 flex flex-col items-center justify-center h-full">
            <motion.div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">{content}</p>
        </motion.div>
    </motion.div>

);


export default Contact;
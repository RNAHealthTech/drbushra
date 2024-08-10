import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import servicesData from "./services";
import { ServiceCard } from "../pages/Services";

const ServicesPreview: React.FC = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedService, setSelectedService] = useState(Object.entries(servicesData)[9]);

    const serviceEntries = Object.entries(servicesData);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % serviceEntries.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [serviceEntries.length]);

    return (
        <section className="mb-12 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold mb-8 text-foreground font-fraunces-slab">Our Services</h2>

            {/* Mobile view */}
            <div className="md:hidden w-full max-w-sm overflow-hidden">
                <AnimatePresence initial={false} custom={1}>
                    <motion.div>
                        <ServiceCard
                            title={serviceEntries[currentIndex][1].title}
                            description={serviceEntries[currentIndex][1].description}
                            imageSrc={serviceEntries[currentIndex][1].heroImage}
                            path={`/services/${serviceEntries[currentIndex][0]}`}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex gap-6 mb-8 mt-8">
                <div className="w-1/2 grid grid-cols-2 gap-6">
                    {serviceEntries.slice(5, 9).map(([key, service], index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedService([key, service])}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                imageSrc={service.heroImage}
                                path={`/services/${key}`}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="w-1/2">
                    <motion.div
                        key={selectedService[0]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={selectedService[1].heroImage} alt={selectedService[1].title} className="w-full h-64 object-cover mb-4 rounded-[30px]" />
                        <h3 className="text-xl font-bold mb-2">{selectedService[1].title}</h3>
                        <p className="mb-4">{selectedService[1].description}</p>
                        <h4 className="font-bold mb-2">Symptoms:</h4>
                        <ul className="list-disc list-inside">
                            {selectedService[1].symptoms.map((symptom, index) => (
                                <li key={index}>{symptom}</li>
                            ))}
                        </ul>
                       
                        <h4 className="font-bold mb-2">Therapies:</h4>
                        <ul className="list-disc list-inside">
                            {selectedService[1].therapies.map((therapy, index) => (
                                <li key={index}>{therapy}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            <motion.button
                onClick={() => navigate("/services")}
                className="mt-4 bg-buttonish text-xl text-foreground font-semibold px-6 py-3 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                View Our Services
            </motion.button>
        </section>
    );
};

export default ServicesPreview;
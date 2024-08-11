import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData, { ServiceData } from "./services";
import AppointmentModal from "../components/AppointmentModal";
import InViewWrapper from "../components/InViewWrapper";
const ServiceTemplatePage: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, [])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { serviceId } = useParams<{ serviceId: string }>();
  const service: ServiceData | undefined = servicesData[serviceId as keyof typeof servicesData];

  if (!service) {
    return <div>Service not found</div>;
  }



  return (
    <main className="flex-grow px-6 py-8">
      <section className="mb-12 flex justify-center">
        <div className="relative shadow-md rounded-[40px] w-full max-w-[1200px] overflow-hidden">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <h1 className="font-fraunces-slab text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4">
              <span className="text-yellow-300">{service.title}</span>
            </h1>
            <p className="font-work-sans text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-5 md:mb-6 max-w-xl">
              {service.description}
            </p>
            <Link
              to='#'
              onClick={(e) => {
                e.preventDefault();
                openModal()
              }}
              className="bg-white text-zinc-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center text-sm sm:text-base transition-colors hover:bg-foreground hover:text-white"
            >
              Book Your Appointment Now
            </Link>
            <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 py-8 mt-12 bg-background">
        <InViewWrapper>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-foreground font-fraunces-slab">Symptoms</h2>
            <ul className="list-disc pl-5 mb-8">
              {service.symptoms.map((symptom, index) => (
                <li key={index} className="mb-2 font-work-sans">{symptom}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-foreground font-fraunces-slab">Causes</h2>
            <ul className="list-disc pl-5 mb-8">
              {service.causes.map((cause, index) => (
                <li key={index} className="mb-2 font-work-sans">{cause}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-foreground font-fraunces-slab">Therapies</h2>
            <ul className="list-disc pl-5 mb-8">
              {service.therapies.map((therapy, index) => (
                <li key={index} className="mb-2 font-work-sans">{therapy}</li>
              ))}
            </ul>
        

        <div className="text-center mt-12">
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              openModal()
            }}
            className="bg-buttonish text-zinc-800 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base transition-colors hover:bg-opacity-90 inline-block"
          >
            Schedule Your Therapy Session
          </Link>
          <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />

        </div>
      </div>
      </InViewWrapper>
    </section>
    </main >
  );
};

export default ServiceTemplatePage;
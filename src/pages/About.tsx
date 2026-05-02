import React, { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from "react-helmet";
import InViewWrapper from "../components/InViewWrapper";

interface ImageWithOverlayProps {
    src: string;
    alt: string;
    caption: string;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({ src, alt, caption }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      <p className="text-white text-sm p-4">{caption}</p>
    </div>
  </div>
);

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <Helmet>
                <title>About Dr. Bushra Zahoor | Gold Medalist MBBS, Psychiatrist</title>
                <meta name="description" content="Learn about Dr. Bushra Zahoor, a Gold Medalist MBBS and Assistant Professor of Psychiatry. Expertise in MBBS, MD (Psychiatry), and DNB (Psychiatry) at Asiaz Hospital." />
                <meta name="keywords" content="Dr. Bushra Zahoor, psychiatrist, Gold Medalist MBBS, MD Psychiatry, DNB Psychiatry, Assistant Professor, Asiaz Hospital" />
            </Helmet>
            <main className="flex-grow px-6 py-12 rounded-lg">
                <section className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="w-full">
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-8"
                                >
                                    <div className="bg-peachy p-6 rounded-lg shadow-lg">
                                        <h1 className="font-fraunces-slab text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8B6E4E]">
                                            Dr. Bushra Zahoor
                                        </h1>
                                        <h2 className="mt-2 text-xl font-semibold text-[#A0815A] font-work-sans-slab">
                                            MBBS, MD (Psychiatry), DNB (Psychiatry)
                                        </h2>
                                        <p className="mt-2 text-lg text-[#8B6E4E] font-work-sans-slab">
                                            Gold Medalist MBBS, Assistant Professor of Psychiatry
                                        </p>
                                    </div>

                                    {/* Image Grid for Mobile */}
                                    <div className="lg:hidden grid grid-cols-1 gap-4">
                                        <ImageWithOverlay 
                                            src="/images/doctor-1.jpg" 
                                            alt="Dr. Bushra Zahoor" 
                                            caption="Received Gold Medal from Dr. Vankya Naidu (former Vice President of India)" 
                                        />
                                        <ImageWithOverlay 
                                            src="/images/doctor-2.jpg" 
                                            alt="Dr. Bushra Zahoor at work" 
                                            caption="At Annual National Conference Indian Psychiatrist Society, 2024" 
                                        />
                                        <ImageWithOverlay 
                                            src="/images/doctor-3.jpg" 
                                            alt="Asiaz Hospital" 
                                            caption="2024, International Psychiatrist Society of Asia, Asia Pacific" 
                                        />
                                    </div>

                                    <div className="space-y-6 font-work-sans-slab text-[#8B6E4E]">
                                        <div className="bg-peacher p-6 rounded-lg shadow-md">
                                            <p className="text-lg leading-relaxed">
                                                Dr. Bushra Zahoor is a dedicated psychiatrist currently serving as an Assistant Professor
                                                in the Department of Psychiatry at <span className="text-xl text-[#6D563D] bg-peachy px-1 rounded font-semibold">Hamdard Institute of Medical Sciences and Research (HIMSR)</span>, New Delhi.
                                                She is currently practicing at Asiaz Hospital.
                                            </p>
                                        </div>
                                        <div className="bg-new p-6 rounded-lg shadow-md">
                                            <p className="text-lg leading-relaxed">
                                                With a <span className="text-xl text-[#6D563D] bg-peachy px-1 rounded font-semibold">Gold Medal</span> in MBBS from Hamdard Institute of Medical Sciences and Research,
                                                <span className="text-xl text-[#6D563D] bg-peachy px-1 rounded font-semibold">Dr. Zahoor completed her MD in Psychiatry from the Institute of Human Behaviour and Allied Sciences (IHBAS)</span>,
                                                and earned her DNB in Psychiatry in 2021.
                                            </p>
                                        </div>
                                        <InViewWrapper>
                                            <div className="bg-peacher p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-semibold mb-4 text-[#6D563D]">Professional Experience</h3>
                                                <ul className="list-disc pl-6 text-lg space-y-2">
                                                    <li>Senior Resident at Lady Hardinge Medical College (2020-2022)</li>
                                                    <li>Junior Resident at IHBAS (2017-2020)</li>
                                                    <li>Research and publications in areas such as yogic interventions for depression and clozapine-induced pleural effusion</li>
                                                    <li>Presentations at national conferences on topics like C-Reactive Protein as a predictor in depression treatment</li>
                                                </ul>
                                            </div>
                                        </InViewWrapper>
                                        <InViewWrapper>
                                            <div className="bg-new p-6 rounded-lg shadow-md">
                                                <p className="text-lg leading-relaxed">
                                                    Committed to advancing mental health services, Dr. Zahoor focuses on reducing stigma
                                                    associated with mental illnesses through compassionate care and evidence-based practices.
                                                </p>
                                            </div>
                                        </InViewWrapper>
                                    </div>

                                    <InViewWrapper>
                                        <div className="flex items-center gap-4 font-work-sans-slab bg-peachy p-4 rounded-lg shadow-md">
                                            <p className="text-[#6D563D] text-lg font-semibold">
                                                📍 Asiaz Hospital
                                            </p>
                                            <img
                                                src="https://flagcdn.com/w40/in.png"
                                                alt="India"
                                                className="w-8 h-auto"
                                            />
                                            <span className="text-lg text-[#6D563D] font-semibold">
                                                Gurugram, Haryana
                                            </span>
                                        </div>
                                    </InViewWrapper>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="w-full hidden lg:flex flex-col justify-start items-center space-y-8">
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full max-w-md"
                                >
                                    <ImageWithOverlay 
                                        src="/images/doctor-1.jpg" 
                                        alt="Dr. Bushra Zahoor" 
                                        caption="Received Gold Medal from Dr. Vankya Naidu (former Vice President of India)" 
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                                <ImageWithOverlay 
                                    src="/images/doctor-2.jpg" 
                                    alt="Dr. Bushra Zahoor at work" 
                                    caption="At Annual National Conference Indian Psychiatrist Society, 2024" 
                                />
                                <ImageWithOverlay 
                                    src="/images/doctor-3.jpg" 
                                    alt="Asiaz Hospital" 
                                    caption="2024, International Psychiatrist Society of Asia, Asia Pacific, SAARC" 
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About;
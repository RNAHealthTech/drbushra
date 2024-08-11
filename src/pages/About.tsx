import React, { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import ResearchSection from "../components/AboutMore";
import { Helmet } from "react-helmet";
import InViewWrapper from "../components/InViewWrapper";

const About: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <Helmet>
                <title>About Dr. Bushra Zahoor | Gold Medalist MBBS, Psychiatrist</title>
                <meta name="description" content="Learn about Dr. Bushra Zahoor, a Gold Medalist MBBS and Assistant Professor of Psychiatry. Expertise in MBBS, MD (Psychiatry), and DNB (Psychiatry) at Mind Craft Neuro-Psychiatry Clinic." />
                <meta name="keywords" content="Dr. Bushra Zahoor, psychiatrist, Gold Medalist MBBS, MD Psychiatry, DNB Psychiatry, Assistant Professor, Mind Craft Neuro-Psychiatry Clinic" />
            </Helmet>
            <main className="flex-grow px-6 py-12 bg-background rounded-lg">
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
                                    {/* Updated title and qualifications */}
                                    <div>
                                        <h1 className="font-fraunces-slab text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                                            Dr. Bushra Zahoor
                                        </h1>
                                        <h2 className="mt-2 text-xl font-semibold text-new font-work-sans">
                                            MBBS, MD (Psychiatry), DNB (Psychiatry)
                                        </h2>
                                        <p className="mt-2 text-lg text-new font-work-sans">
                                            Gold Medalist MBBS, Assistant Professor of Psychiatry
                                        </p>
                                    </div>


                                    <div className="space-y-4 font-work-sans text-foreground">
                                        <p className="text-lg">
                                            Dr. Bushra Zahoor is a dedicated psychiatrist currently serving as an Assistant Professor
                                            in the Department of Psychiatry at <span className="text-2xl text-new font-cursive font-bold font-fraunces-slab">Hamdard Institute of Medical Sciences and Research (HIMSR)</span>, New Delhi.
                                            She is also the founder of Mind Craft Neuro-Psychiatry Clinic.
                                        </p>
                                        <p className="text-lg">
                                            With a <span className="text-2xl text-new font-cursive font-bold font-fraunces-slab">Gold Medal</span> in MBBS from Hamdard Institute of Medical Sciences and Research,
                                            <span className="text-2xl text-new font-cursive font-bold font-fraunces-slab">Dr. Zahoor completed her MD in Psychiatry from the Institute of Human Behaviour and Allied Sciences (IHBAS),</span>
                                            and earned her DNB in Psychiatry in 2021.
                                        </p>
                                        <InViewWrapper>
                                            <p className="text-lg">
                                                Dr. Zahoor's professional experience includes:
                                            </p>
                                            <ul className="list-disc pl-6 text-lg">
                                                <li>Senior Resident at Lady Hardinge Medical College (2020-2022)</li>
                                                <li>Junior Resident at IHBAS (2017-2020)</li>
                                                <li>Research and publications in areas such as yogic interventions for depression and clozapine-induced pleural effusion</li>
                                                <li>Presentations at national conferences on topics like C-Reactive Protein as a predictor in depression treatment</li>
                                            </ul>
                                            <p className="text-lg">
                                                Committed to advancing mental health services, Dr. Zahoor focuses on reducing stigma
                                                associated with mental illnesses through compassionate care and evidence-based practices.
                                            </p>
                                        </InViewWrapper>
                                    </div>

                                    <InViewWrapper>
                                        <div className="flex items-center gap-4 font-work-sans">
                                            <p className="text-foreground text-lg">
                                                📍 Mind Craft Neuro-Psychiatry Clinic
                                            </p>
                                            <img
                                                src="https://flagcdn.com/w40/in.png"
                                                alt="India"
                                                className="w-8 h-auto"
                                            />
                                            <span className="text-lg text-new">
                                                Delhi, India
                                            </span>
                                        </div>
                                    </InViewWrapper>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="w-full flex justify-center lg:justify-end">
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full max-w-md"
                                >
                                    <img
                                        src='/images/about-hero.png'
                                        className="w-full h-auto object-cover"
                                        alt="Dr. Bushra Zahoor"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                <ResearchSection />


            </main>
        </>
    )
}

export default About;
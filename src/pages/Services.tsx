import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    path: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, path }) => {
    return (
        <Link to={path} className="block">
            <div className="bg-cardish rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
                <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="font-fraunces-slab text-xl font-semibold text-foreground mb-2">{title}</h3>
                    <p className="font-work-sans text-sm text-new">{description}</p>
                </div>
            </div>
        </Link>
    );
};

const Services: React.FC = () => {
    useEffect(() => {
      window.scrollTo(0,0);  
     //eslint-disable-next-line
    },[])

    const services: ServiceCardProps[] = [
        {
            title: "Headache & Migraine",
            description: "Specialized treatment for chronic headaches and migraines.",
            imageSrc: "/images/headache1.jpg",
            path: "/services/headache-migraine"
        },
        {
            title: "Anger and Stress Management",
            description: "Techniques to manage anger and reduce stress in daily life.",
            imageSrc: "/images/headache2.jpg",
            path: "/services/anger-stress-management"
        },
        {
            title: "Anxiety + Depression",
            description: "Comprehensive care for anxiety and depression disorders.",
            imageSrc: "/images/depression.jpg",
            path: "/services/anxiety-depression"
        },
        {
            title: "Bipolar Disorder",
            description: "Specialized treatment for bipolar disorder and mood stabilization.",
            imageSrc: "/images/bipolar.jpg",
            path: "/services/bipolar-disorder"
        },
        {
            title: "Psychosis",
            description: "Expert care for various forms of psychosis.",
            imageSrc: "/images/psychosis.png",
            path: "/services/psychosis"
        },
        {
            title: "Child & Adolescent Guidance",
            description: "Supportive guidance for children and adolescents.",
            imageSrc: "/images/child-adolescent.jpg",
            path: "/services/child-adolescent-guidance"
        },
        {
            title: "Internet & Technology Addiction",
            description: "Treatment for internet and technology-related addictions.",
            imageSrc: "/images/tech-addiction.jpg",
            path: "/services/internet-technology-addiction"
        },
        {
            title: "Lifestyle & Relationship Issues",
            description: "Counseling for lifestyle changes and relationship problems.",
            imageSrc: "/images/lifestyle-relationship.jpg",
            path: "/services/lifestyle-relationship-issues"
        },
        {
            title: "Counselling",
            description: "General counseling services for various mental health concerns.",
            imageSrc: "/images/counselling.jpg",
            path: "/services/counselling"
        },
        {
            title: "Psychotherapy",
            description: "In-depth psychotherapy for long-term mental health improvement.",
            imageSrc: "/images/psychotherapy.jpg",
            path: "/services/psychotherapy"
        }
    ];


    return (
        <main className="flex-grow px-6 py-8">
            <section className="mb-12 flex justify-center">
                <div className="relative shadow-md rounded-[40px] w-full max-w-[1200px] overflow-hidden">
                    <img
                        src="/images/services-hero.jpg"
                        alt="Hero"
                        className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center  px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
                        <h1 className="font-fraunces-slab text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4">
                            <span className="text-yellow-300">Therapies & Treatments for your</span><br />
                            <span className="text-yellow-300 font-bold">Mental Well-being</span>
                        </h1>
                        <p className="font-work-sans text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-5 md:mb-6 max-w-xl">
                            Break the stigma, embrace your journey—book your therapy session today.
                        </p>
                        <button className="bg-white text-zinc-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center text-sm sm:text-base transition-colors hover:bg-foreground hover:text-white">
                            <img src="/images/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
                            Choose Your Session Now!
                        </button>
                    </div>
                </div>
            </section>
            <section className="mx-auto px-4 py-8 mt-12 bg-background">
            <h1 className="text-3xl font-bold mb-8 text-center text-foreground font-fraunces-slab lg:text-5xl">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
        </main>
    )
}

export default Services;
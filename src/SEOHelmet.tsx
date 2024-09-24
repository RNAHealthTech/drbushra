import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const seoContent: { [key: string]: { title: string; description: string; keywords: string } } = {
    '/': {
        title: "Dr. Bushra Zahoor - Expert Psychiatrist in Delhi NCR | Mind Craft Neuro-Psychiatry Clinic",
        description: "Dr. Bushra Zahoor, leading psychiatrist in Delhi NCR, specializes in anxiety, depression, bipolar disorder, and addiction treatment. Compassionate care at Mind Craft Clinic. Book your consultation today.",
        keywords: "psychiatrist Delhi NCR, depression specialist, anxiety treatment, bipolar disorder, addiction therapy, Dr. Bushra Zahoor, Mind Craft Clinic"
    },
    '/best-psychiatrist-in-nizzamundin': {
        title: "Top Psychiatrist in Nizzamundin | Dr. Bushra Zahoor - Mental Health Expert",
        description: "Seeking a psychiatrist in Nizzamundin? Dr. Bushra Zahoor offers expert care for depression, anxiety, and relationship issues. Advanced treatments, personalized approach at Mind Craft Clinic.",
        keywords: "psychiatrist Nizzamundin, depression treatment Nizzamundin, anxiety specialist near me, Dr. Bushra Zahoor, relationship counseling"
    },
    '/expert-psychiatrist-south-delhi': {
        title: "Expert Psychiatrist in South Delhi - Dr. Bushra Zahoor",
        description: "Dr. Bushra Zahoor brings world-class psychiatric care to South Delhi. Specializing in stress management, psychotherapy, and addiction treatment. Schedule your visit now at Mind Craft Clinic.",
        keywords: "psychiatrist South Delhi, stress management expert, psychotherapy specialist, Dr. Bushra Zahoor, addiction treatment South Delhi"
    },
    '/best-mental-health-doctor-delhi-ncr': {
        title: "Best Mental Health Doctor in Delhi NCR | Dr. Bushra Zahoor",
        description: "Access top-tier psychiatric treatments with Dr. Bushra Zahoor in Delhi NCR. Specialized care for bipolar disorder, psychosis, and child & adolescent guidance at Mind Craft Clinic.",
        keywords: "mental health doctor Delhi NCR, bipolar disorder treatment, psychosis specialist, Dr. Bushra Zahoor, child psychiatrist Delhi"
    },
    '/leading-psychiatrist-lajpat-nagar': {
        title: "Leading Psychiatrist for Lajpat Nagar | Dr. Bushra Zahoor",
        description: "Dr. Bushra Zahoor offers advanced psychiatric solutions in Lajpat Nagar. Expert in treating complex mental health disorders, relationship issues, and lifestyle problems. Consult today for personalized care.",
        keywords: "psychiatrist Lajpat Nagar, relationship counseling, lifestyle issues treatment, Dr. Bushra Zahoor, mental health specialist Lajpat Nagar"
    },
    '/best-psychiatrist-in-khan-market': {
        title: "Best Psychiatrist in Khan Market - Dr. Bushra Zahoor",
        description: "Trust Dr. Bushra Zahoor for exceptional psychiatric care in Khan Market. Specializing in depression, anxiety, and technology addiction treatment at Mind Craft Neuro-Psychiatry Clinic.",
        keywords: "psychiatrist Khan Market, depression treatment, anxiety specialist Khan Market, Dr. Bushra Zahoor, technology addiction therapy"
    },
    '/top-psychologist-in-nizzamudin-east': {
        title: "Top psychologist in Nizzamuin - Dr. Bushra Zahoor",
        description: "Trust Dr. Bushra Zahoor for exceptional psychiatric care in Nizzamudin. Specializing in depression, anxiety, and technology addiction treatment at Mind Craft Neuro-Psychiatry Clinic.",
        keywords: "psychiatrist nizzamudin, depression treatment, anxiety specialist Khan Market, Dr. Bushra Zahoor, technology addiction therapy"
    },  
};

const SEOHelmet: React.FC = () => {
    const location = useLocation();
    const { title, description, keywords } = seoContent[location.pathname] || seoContent['/'];

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://southdelhipsychiatrist.com" />
            <meta property="og:location" content="Delhi NCR, Khan Market, Nizzamudin East, South Delhi, Lajpat Nagar, " />
        </Helmet>
    );
};

export default SEOHelmet;
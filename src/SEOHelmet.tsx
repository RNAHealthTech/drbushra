import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const seoContent: { [key: string]: { title: string; description: string; keywords: string } } = {
    '/': {
        title: "Dr. Bushra Zahoor - Expert Psychiatrist in Delhi NCR | Asiaz Hospital",
        description: "Dr. Bushra Zahoor, leading psychiatrist in Delhi NCR, specializes in anxiety, depression, bipolar disorder, and addiction treatment. Compassionate care at Asiaz Hospital. Book your consultation today.",
        keywords: "psychiatrist Delhi NCR, depression specialist, anxiety treatment, bipolar disorder, addiction therapy, Dr. Bushra Zahoor, Asiaz Hospital"
    },
    '/best-psychiatrist-in-nizzamundin': {
        title: "Dr. Bushra Zahoor - Top Psychiatrist in Nizamuddin, Delhi | Asiaz Hospital",
        description: "Expert mental health care in Nizamuddin by Dr. Bushra Zahoor. Specialized treatments for depression, anxiety, bipolar disorder, and more. Call +91-9310330922 for appointments.",
        keywords: "Dr. Bushra Zahoor, psychiatrist in Nizamuddin, depression treatment, anxiety management, bipolar disorder, relationship counseling, Delhi NCR"
    },
    '/expert-psychiatrist-south-delhi': {
        title: "Dr. Bushra Zahoor - Expert Psychiatrist in South Delhi | Asiaz Hospital",
        description: "Top-rated psychiatric care in South Delhi by Dr. Bushra Zahoor. Specialized treatments for depression, anxiety, bipolar disorder, and more at Asiaz Hospital. Call +91-9310330922 for appointments.",
        keywords: "Dr. Bushra Zahoor, psychiatrist in South Delhi, Asiaz Hospital, depression treatment, anxiety disorders, bipolar disorder, psychotherapy, relationship counseling, Nizamuddin"
    },
    '/best-mental-health-doctor-delhi-ncr': {
        title: "Dr. Bushra Zahoor - Best Mental Health Doctor in Delhi NCR | Asiaz Hospital",
        description: "Comprehensive mental health care across Delhi NCR by Dr. Bushra Zahoor. Expert treatment for depression, anxiety, bipolar disorder, and more. Contact +91-9310330922 for appointments.",
        keywords: "Dr. Bushra Zahoor, mental health doctor Delhi NCR, psychiatrist, depression treatment, anxiety management, bipolar disorder, psychosis, child psychiatry"
    },
    '/leading-psychiatrist-lajpat-nagar': {
        title: "Dr. Bushra Zahoor - Leading Psychiatrist in Lajpat Nagar, Delhi | Asiaz Hospital",
        description: "Advanced psychiatric solutions in Lajpat Nagar by Dr. Bushra Zahoor. Expert treatment for depression, anxiety, and complex mental health disorders. Contact +91-9310330922 for appointments.",
        keywords: "Dr. Bushra Zahoor, psychiatrist in Lajpat Nagar, depression treatment, anxiety management, relationship counseling, addiction therapy, Delhi NCR"
    },
    '/best-psychiatrist-in-khan-market': {
        title: "Dr. Bushra Zahoor - Best Psychiatrist in Khan Market, Delhi | Asiaz Hospital",
        description: "Expert psychiatric care in Khan Market by Dr. Bushra Zahoor. Specialized treatments for depression, anxiety, and work-related stress. Call +91-9310330922 for appointments.",
        keywords: "Dr. Bushra Zahoor, psychiatrist in Khan Market, depression treatment, anxiety management, work-life balance, stress management, Delhi NCR"
    },
    '/top-psychologist-in-green-park': {
        title: "Dr. Bushra Zahoor - Top Psychiatrist & Psychologist in Green Park, Delhi",
        description: "Expert psychiatric care in Green Park by Dr. Bushra Zahoor. Specialized treatments for depression, anxiety, bipolar disorder, and more. Contact +91-9310330922 for appointments.",
        keywords: "Dr. Bushra Zahoor, psychiatrist in Green Park, psychologist in Delhi, depression treatment, anxiety disorders, bipolar disorder, psychotherapy, stress management, relationship counseling"
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
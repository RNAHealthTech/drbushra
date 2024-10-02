import React from 'react';
import SEOHelmet from '../SEOHelmet';

const TopPsychologistGreenPark: React.FC = () => {
  return (
    <div className="bg-white text-pink-700 min-h-screen p-8">
      <SEOHelmet />
      <h1 className="text-4xl font-bold mb-6">Dr. Bushra Zahoor - Top Psychologist in Green Park</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Expert Psychological Care in Green Park</h2>
        <p className="mb-4">Dr. Bushra Zahoor, a renowned psychiatrist and psychologist, now offers her exceptional services in Green Park. With her vast experience and empathetic approach, she has become the most sought-after mental health professional in the area.</p>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Specialized Psychological Services:</h3>
        <ul className="list-disc list-inside">
          <li>Cognitive Behavioral Therapy (CBT)</li>
          <li>Psychodynamic Therapy</li>
          <li>Mindfulness-Based Stress Reduction</li>
          <li>Family and Couples Therapy</li>
          <li>Trauma-Informed Care</li>
        </ul>
      </section>
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Dr. Bushra's Expertise:</h3>
        <ul className="list-disc list-inside">
          <li>MBBS, MD (Psychiatry), DNB (Psychiatry)</li>
          <li>Specialized training in psychological interventions</li>
          <li>Holistic approach to mental health</li>
          <li>Extensive experience in treating diverse psychological issues</li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-4">Why Choose Dr. Bushra in Green Park?</h3>
        <p>Conveniently located in Green Park, Dr. Bushra offers a safe and comfortable environment for your psychological care. Her integrative approach ensures that you receive the most effective treatment tailored to your unique needs.</p>
        <p className="mt-4">Experience top-tier psychological care in Green Park. Schedule your appointment with Dr. Bushra Zahoor today!</p>
      </section>
    </div>
  );
};

export default TopPsychologistGreenPark;
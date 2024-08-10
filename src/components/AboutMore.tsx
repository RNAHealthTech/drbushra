import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const publications = [
  'Role of Yogic Intervention in the Treatment of Depression from Indian Journal of Ancient Medicine and Yoga',
  'Profile of Patients with Major Depressive Disorder Receiving Adjuvant Yogic Intervention in a Tertiary Care Hospital from Indian Journal of Ancient Medicine and Yoga',
  'Clozapine-Induced Pleural Effusion - A Case Report from Submitted to the Indian Journal of Pharmacology',
  'Menopause and Mental Health from Featured in the book "Handbook on Women Mental Health: An International Perspective" (Under publication)',
  'Example of a Long Case Presentation in Psychiatry from Featured in the book "Clinical Case Taking—Long and Short Case For Medical Students" (Under publication)',
];

const presentations = [
  'Free Paper Presentation on "Baseline C-Reactive Protein as a Predictor of Response to Treatment in Depression" from 74th Annual National Conference, Indian Psychiatric Society, 2023',
  'Poster Presentation on "Opioid Withdrawal Delirium - A Case Report" from 74th Annual National Conference, Indian Psychiatric Society, 2023',
];

const DropdownSection = ({ title, items }: { title: any, items: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 bg-peacher p-4 rounded-lg shadow"
      >
        {title}
        <ChevronDownIcon
          className={`w-8 h-6 transition-transform duration-200 border border-solid rounded-[30px] border-zinc-800 ${isOpen ? 'transform rotate-180' : ''
            }`}
        />
      </button>
      {isOpen && (
        <ul className="mt-2 space-y-2 bg-peacher p-4 rounded-lg shadow">
          {items.map((item: any, index: any) => (
            <li key={index} className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-800">{item.split(' from ')[0]}</span>
              <br />
              <span className="text-gray-600">from {item.split(' from ')[1]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ResearchSection: React.FC = () => {
  return (

    <section className="mb-16 bg-peacher rounded-lg p-8 transition-all duration-300 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Research & Publications</h2>

      {/* Mobile view */}
      <div className="md:hidden">
        <DropdownSection title="Publications" items={publications} />
        <DropdownSection title="Presentations" items={presentations} />
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex space-x-8">
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Publications</h3>
          <ul className="space-y-4">
            {publications.map((pub, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-800">{pub.split(' from ')[0]}</span>
                <br />
                <span className="text-gray-600">from {pub.split(' from ')[1]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Presentations</h3>
          <ul className="space-y-4">
            {presentations.map((pres, index) => (
              <li key={index} className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-800">{pres.split(' from ')[0]}</span>
                <br />
                <span className="text-gray-600">from {pres.split(' from ')[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  );
};

export default ResearchSection;
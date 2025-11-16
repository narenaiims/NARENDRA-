
import React, { useState } from 'react';
import { services } from '../constants';
import type { Service } from '../types';
import { ChevronDownIcon, PlusIcon, MinusIcon } from './icons';

const ServiceItem: React.FC<{ service: Service; isOpen: boolean; onClick: () => void }> = ({ service, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <h3>
        <button
          onClick={onClick}
          className="flex w-full items-center justify-between py-5 px-6 text-left text-gray-900 hover:bg-gray-100"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-medium text-blue-900">{service.hinglishTitle}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <MinusIcon className="h-6 w-6 text-green-700" />
            ) : (
              <PlusIcon className="h-6 w-6 text-blue-900" />
            )}
          </span>
        </button>
      </h3>
      {isOpen && (
        <div className="pb-6 px-6 bg-white">
          <p className="text-base font-semibold text-gray-700">{service.reuseContent}</p>
          <p className="mt-2 text-base text-green-800 bg-green-50 p-3 rounded-md italic">{service.enrichedContent}</p>
          <div className="mt-4 space-y-3 text-base leading-7 text-gray-600">
            {service.details.map((detail, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: detail }} className="pl-4 border-l-4 border-green-500" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-green-700">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Evidence-Based & Personalized Cancer Care</p>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Hum aapke liye naye aur pramanit upchar laate hain. Har marij anokha hai, aur unka upchar bhi anokha hona chahiye.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl">
          <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 shadow-md">
            {services.map((service, index) => (
              <ServiceItem
                key={service.title}
                service={service}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


import React, { useState } from 'react';
import { faqs } from '../constants';
import { ChevronDownIcon, PhoneIcon, ClockIcon, LocationMarkerIcon, ChatIcon } from './icons';

const FaqItem: React.FC<{ faq: { question: string; answer: string }; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <dt>
        <button onClick={onClick} className="flex w-full items-start justify-between py-4 text-left text-gray-900">
          <span className="font-medium">{faq.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDownIcon className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} />
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12 pb-4">
          <p className="text-base leading-7 text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
        </dd>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  return (
    <section id="contact" className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-green-700">Contact & Appointments</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Get In Touch</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info and Map */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Clinic Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <LocationMarkerIcon className="h-6 w-6 text-green-700 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">Quarter No. D30, Maharana Bhupal Hospital Campus, Udaipur, Rajasthan, India (inside MB Hospital, near TB Clinic)</p>
                  <p className="text-sm text-gray-500">Landmark: Opp HDFC Bank, Chetak Marg, Maduban</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-green-700 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-semibold">OPD Hours</p>
                  <p className="text-gray-600">Monday - Saturday: 4 PM to 8 PM</p>
                  <p className="text-gray-600">Sunday: 12 PM to 1 PM (Limited)</p>
                </div>
              </div>
               <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-green-700 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-semibold">Appointment (Phone Only)</p>
                  <a href="tel:7597207640" className="text-blue-600 font-bold text-lg hover:underline">7597207640</a>
                  <p className="text-red-600 text-sm font-semibold">Call between 2 PM - 8 PM only</p>
                </div>
              </div>
               <div className="flex items-start">
                <ChatIcon className="h-6 w-6 text-green-700 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <p className="font-semibold">WhatsApp (Secretary)</p>
                  <a href="https://wa.me/+917597207640?text=अपॉइंटमेंट_जानकारी" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Click to chat for appointment info</a>
                </div>
              </div>
            </div>
             <div className="mt-8">
                <a href="https://maps.app.goo.gl/EZw9Jay1WP6q2kEs7" target="_blank" rel="noopener noreferrer">
                    <img src="https://picsum.photos/800/400?random=3" alt="Clinic Location on Map" className="rounded-lg w-full h-auto object-cover hover:opacity-90 transition-opacity" />
                </a>
             </div>
          </div>
          
          {/* FAQs */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h3>
            <dl className="divide-y divide-gray-900/10">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openFaqIndex === index}
                  onClick={() => handleFaqToggle(index)}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React from 'react';
import { WhatsAppIcon } from './icons';

const WhatsAppFAB: React.FC = () => {
  return (
    <a
      href="https://wa.me/+917597207640?text=अपॉइंटमेंट_जानकारी"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppFAB;

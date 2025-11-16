
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-blue-900 text-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://picsum.photos/1920/1080?grayscale&blur=2&random=1"
          alt="Diverse Indian families in a hopeful consultation setting"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/80 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dr. Narendra Rathore, Oncologist
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-green-300">
            Cancer ki ladai mein hum saath hain - Dr. Rathore, Udaipur.
          </p>
          <p className="mt-6 text-lg text-blue-100 leading-8">
            1.57 million naye cases 2025 mein anumanit (ICMR JAMA Aug 2025) – jaldi check-up se 30% mortality ghatayein. Hum aapko sabse behtar aur naye upchar pradan karne ke liye pratibadh hain.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="tel:7597207640"
              className="rounded-md bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-transform transform hover:scale-105"
            >
              Abhi Call Karein: 7597207640
            </a>
            <a href="#services" className="text-lg font-semibold leading-6 text-white hover:underline">
              हमारी सेवाएं देखें <span aria-hidden="true">→</span>
            </a>
          </div>
           <p className="mt-4 text-sm text-blue-200">Phone lines active 2 PM to 8 PM only.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

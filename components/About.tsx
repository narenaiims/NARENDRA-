
import React from 'react';
import { testimonials } from '../constants';
import Testimonials from './Testimonials';
import GbpReviews from './GbpReviews';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <img
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/5]"
              src="https://picsum.photos/600/750?random=2"
              alt="Dr. Narendra Rathore - Professional Portrait"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold leading-7 text-green-700">About Me</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Dr. Narendra Rathore, MD</p>
            <p className="mt-4 text-lg font-semibold text-gray-700">
              Senior Oncologist, Professor & Head of Radiation Oncology, Super Speciality Hospital, RNT Medical College, Udaipur
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With over 15 years of dedicated experience in oncology, I am committed to providing evidence-based, compassionate, and personalized cancer care. My journey began with an MBBS from SMS Medical College, Jaipur (2000), followed by an MD in Radiotherapy from Rajasthan University (2011). I have further honed my skills with specialized training from esteemed institutions like AIIMS.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              My practice is guided by the latest international and national guidelines, such as NCCN v5.2025, to ensure every patient receives care that is tailored to their specific needs. This includes using genetic testing and biomarkers to create treatment plans that are not only effective but also consider quality of life, like fertility-safe adjuvant therapies for younger patients. My goal is to empower patients and their families with clear, accurate information to make informed decisions together.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              For E-E-A-T: Our practices and information are aligned with guidelines from <a href="https://www.icmr.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ICMR</a> and <a href="https://www.nccn.org/guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NCCN</a>.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
           <h3 className="text-2xl font-bold text-center text-blue-900 mb-8">Patient Stories & Trust</h3>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-xl font-semibold text-center text-gray-700 mb-4">What Our Patients Say</h4>
                    <Testimonials testimonials={testimonials} />
                </div>
                 <div>
                    <h4 className="text-xl font-semibold text-center text-gray-700 mb-4">Live Google Reviews</h4>
                    <GbpReviews />
                 </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;

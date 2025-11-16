import React, { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="h-[280px] w-full m-auto relative group bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div className="w-full h-full flex flex-col justify-center items-center text-center transition-opacity duration-500 ease-in-out">
        <p className="text-gray-700 italic text-lg">"{testimonials[currentIndex].quote}"</p>
        <p className="text-blue-900 font-bold mt-4">- {testimonials[currentIndex].name}</p>
      </div>
      <button onClick={prevSlide} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Testimonials;
import React, { useState, useEffect, useCallback } from 'react';
import { gbpReviews } from '../constants';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

const GbpReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gbpReviews.length);
  }, []);

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gbpReviews.length) % gbpReviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5500); // Slightly different timing
    return () => clearInterval(interval);
  }, [nextReview]);

  const currentReview = gbpReviews[currentIndex];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-[280px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="Google" className="h-6 w-6 mr-2" />
            <h5 className="font-bold text-gray-800">Google Reviews</h5>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg text-gray-800">4.9 <span className="text-gray-500 font-normal">/ 5</span></p>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-sm text-gray-500">150+ reviews</p>
          </div>
        </div>
        <div className="relative h-[120px] overflow-hidden">
           <div className="text-center transition-opacity duration-500 ease-in-out">
              <p className="text-gray-700 italic">"{currentReview.quote}"</p>
              <p className="text-blue-900 font-bold mt-2">- {currentReview.name}</p>
            </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button onClick={prevReview} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
        </button>
        <a 
          href="https://g.co/kgs/QUhzcH" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-blue-600 hover:underline"
        >
          Read more reviews
        </a>
        <button onClick={nextReview} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default GbpReviews;
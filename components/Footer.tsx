
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-blue-200">
            &copy; {currentYear} Dr. Narendra Rathore. All rights reserved.
          </p>
          <div className="mt-4 text-xs text-blue-300 max-w-4xl mx-auto space-y-2">
            <p>
              <strong>Disclaimer (MCI Guidelines):</strong> The information provided on this website is for patient education and awareness purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>
            <p>
               Website content is for informational purposes and does not constitute advertising of medical services. Patient testimonials are individual experiences and do not guarantee similar outcomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

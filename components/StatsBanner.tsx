
import React from 'react';
import { ShieldCheckIcon, UserGroupIcon, ChartBarIcon } from './icons';

const stats = [
  { 
    icon: <ShieldCheckIcon className="h-10 w-10 text-white" />,
    value: "30-50%", 
    label: "Preventable Cancers",
    description: "Lifestyle changes can prevent many cancers. (WHO Feb 2025)" 
  },
  { 
    icon: <UserGroupIcon className="h-10 w-10 text-white" />, 
    value: "1.57 Million",
    label: "Projected New Cases in India (2025)",
    description: "Early detection is key to fighting these numbers. (ICMR JAMA Aug 2025)"
  },
  { 
    icon: <ChartBarIcon className="h-10 w-10 text-white" />,
    value: "40% Risk Cut",
    label: "With Tobacco Cessation",
    description: "Quitting tobacco is the most impactful step. (WHO Nov 2025 Update)"
  },
];

const StatsBanner: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-base font-semibold leading-7 text-green-700">Aapka Risk, Aapke Haath Mein</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Customize Aapka Risk Assessment</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Jaankari hi bachav hai. Sahi jaankari se cancer ke khatre ko kam kiya ja sakta hai.
            </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-blue-800 text-white rounded-lg shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">{stat.icon}</div>
              <p className="text-4xl font-bold text-green-300">{stat.value}</p>
              <p className="text-lg font-semibold mt-2">{stat.label}</p>
              <p className="text-sm mt-2 text-blue-200">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;

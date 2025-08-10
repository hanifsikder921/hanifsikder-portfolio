import React from 'react';
import { MdFileDownloadDone } from "react-icons/md";

const pricingPlans = [
  {
    id: 1,
    title: 'Hourly',
    price: '$5/hr',
    features: [
      'Frontend & MERN tasks',
      'Quick bug fixing',
      'Live collaboration',
      'Ideal for small tasks'
    ],
    buttonText: 'Hire Hourly'
  },
  {
    id: 2,
    title: 'Daily',
    price: '$25/day',
    features: [
      'Full-day focus',
      'Priority support',
      'Up to 8 hours of work',
      'Flexible task handling'
    ],
    buttonText: 'Hire for a Day'
  },
  {
    id: 3,
    title: 'Monthly',
    price: '$600/mo',
    features: [
      'Dedicated Developer',
      'Unlimited task requests',
      'Full-stack development',
      'Long-term support'
    ],
    buttonText: 'Hire Monthly'
  }
];

const PricingTable = () => {
  return (
    <div className="py-14 bg-gray-50 rounded-lg">
      <h2 data-aos="flip-up" className="text-3xl font-bold text-center mb-4 text-emerald-600">My Pricing Plans</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Choose a plan that suits your project timeline and budget. I offer flexible pricing for hourly, daily, and long-term development needs.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {pricingPlans.map(plan => (
          <div
            data-aos="zoom-in"
            key={plan.id}
            className="bg-white  rounded-lg shadow-sm p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-emerald-600">{plan.title}</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <MdFileDownloadDone className='text-emerald-500' /><span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="btn btn-outline btn-primary mt-6 w-full duration-300">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;

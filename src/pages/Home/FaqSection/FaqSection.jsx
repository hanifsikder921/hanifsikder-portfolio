import React from 'react';
import faqImage from '../../../assets/faq.svg';

const FaqSection = () => {
  return (
    <div id='faq-section' className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Image */}
      <div data-aos="fade-up"
       
        >
        <img src={faqImage} alt="FAQ Illustration" className="w-full rounded-lg shadow-md" />
      </div>

      {/* Right: FAQ Accordions */}
      <div>
        <h2 data-aos="flip-up" className="text-3xl font-bold text-emerald-600 mb-6">Frequently Asked Questions</h2>

        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="space-y-4">
          {/* Accordion Item 1 */}
          <div className="collapse collapse-arrow bg-white shadow">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium text-emerald-600">
              What technologies do you work with?
            </div>
            <div className="collapse-content text-gray-600">
              I specialize in the MERN Stack (MongoDB, Express.js, React, Node.js) along with Firebase, Tailwind CSS, and modern frontend tools.
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="collapse collapse-arrow bg-white shadow">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium text-emerald-600">
              Are you open to freelance or remote work?
            </div>
            <div className="collapse-content text-gray-600">
              Absolutely! I'm open to freelance, part-time, and full-time remote job opportunities worldwide.
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="collapse collapse-arrow bg-white shadow">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium text-emerald-600">
              How long does it take to build a website?
            </div>
            <div className="collapse-content text-gray-600">
              It depends on the project scope. A simple portfolio can take 3-5 days, while full-stack applications may require 2-4 weeks.
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="collapse collapse-arrow bg-white shadow">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium text-emerald-600">
              Do you offer post-deployment support?
            </div>
            <div className="collapse-content text-gray-600">
              Yes, I provide free support for a certain period after deployment and offer maintenance packages for long-term projects.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;


import React from 'react';
import Section from '../ui/Section';
import FadeIn from '../ui/FadeIn';

export const ContactCTA: React.FC = () => {
  return (
    <Section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solar-600 to-blue-600 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBvcGFjaXR5PSIwLjA1Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJ3aGl0ZSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="relative z-10">
        <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-xl">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-solar-100 text-solar-800 text-sm font-medium mb-4">
                Get Started
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Schedule Your Maintenance</h2>
              <p className="text-gray-600">
                Fill out the form below and our team will contact you shortly.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500 outline-none transition-all"
                  placeholder="Tell us about your system and needs"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-solar-500 text-white rounded-lg font-medium hover:bg-solar-600 transition-all shadow-md hover:shadow-lg"
              >
                Submit Request
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};

export default ContactCTA;

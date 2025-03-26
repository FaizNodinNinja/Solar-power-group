
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactInfoCard = ({ icon: Icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 rounded-full bg-solar-100 flex items-center justify-center text-solar-600 flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-medium text-lg mb-1">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <PageLayout>
      <div className="relative bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-solar-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-solar-300 rounded-full opacity-20 blur-3xl" />
        </div>
        
        <Section className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <FadeIn>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about our services or want to schedule a maintenance check? 
                  Contact our team and we'll get back to you as soon as possible.
                </p>
              </FadeIn>
              
              <FadeIn delay={100}>
                <div className="space-y-6 mb-8">
                  <ContactInfoCard icon={Phone} title="Phone">
                    <p>+1 (555) 123-4567</p>
                    <p className="text-sm mt-1">Monday-Friday, 8am-6pm</p>
                  </ContactInfoCard>
                  
                  <ContactInfoCard icon={Mail} title="Email">
                    <p>info@solarcare.com</p>
                    <p className="text-sm mt-1">We'll respond within 24 hours</p>
                  </ContactInfoCard>
                  
                  <ContactInfoCard icon={MapPin} title="Office">
                    <p>123 Solar Street</p>
                    <p>Greenville, CA 98765</p>
                  </ContactInfoCard>
                  
                  <ContactInfoCard icon={Clock} title="Hours">
                    <p>Monday-Friday: 8am-6pm</p>
                    <p>Saturday: 9am-2pm</p>
                    <p>Sunday: Closed</p>
                  </ContactInfoCard>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn direction="left">
              <div className="glass-card rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500"
                    >
                      <option value="">Select a service</option>
                      <option value="cleaning">Panel Cleaning</option>
                      <option value="inspection">System Inspection</option>
                      <option value="repair">Repair Services</option>
                      <option value="monitoring">Monitoring Setup</option>
                      <option value="upgrade">System Upgrade</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solar-500 focus:border-solar-500"
                      placeholder="Tell us about your solar system and how we can help..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-solar-500 text-white rounded-lg font-medium hover:bg-solar-600 transition-colors flex items-center justify-center"
                  >
                    Send Message <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </Section>
        
        <Section>
          <FadeIn>
            <div className="glass-card rounded-xl overflow-hidden h-96 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-122.41941549999999!3d37.77492950000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e92aa5d3c31%3A0x11f7d6eabb31c5aa!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1685390125601!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FadeIn>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Contact;

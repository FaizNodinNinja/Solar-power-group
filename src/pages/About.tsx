
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <PageLayout>
      <div className="relative bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-solar-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-solar-300 rounded-full opacity-20 blur-3xl" />
        </div>
        
        <Section className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn delay={100}>
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">About SolarCare</h1>
                <p className="text-lg text-gray-600 mb-6">
                  Solar Power Group is a leading provider of professional solar panel maintenance services, 
                  dedicated to helping homeowners and businesses maximize the efficiency and lifespan 
                  of their solar investments.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2010, we've helped thousands of clients maintain their solar systems 
                  and optimize their energy production through regular maintenance and expert care.
                </p>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h2 className="text-2xl font-semibold mb-4 mt-8">Our Commitment</h2>
                <ul className="space-y-3">
                  {['Quality Service', 'Expert Technicians', 'Eco-Friendly Solutions', 'Customer Satisfaction'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-solar-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            
            <FadeIn direction="left" delay={300}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-solar-500/20 to-blue-500/20 rounded-xl transform rotate-3"></div>
                <div className="relative glass-card rounded-xl overflow-hidden border border-gray-100 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1680355065203-43ad84bb6e69?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Solar technicians working" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
        
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="glass-card p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional solar maintenance services that extend the life of solar systems,
                  maximize energy output, and ensure our clients get the most from their renewable energy investments.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="glass-card p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading solar maintenance provider, fostering a cleaner energy future through
                  excellence in service, innovation, and customer education.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="glass-card p-6 rounded-xl h-full">
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <p className="text-gray-600">
                  Integrity, sustainability, excellence, innovation, and customer-centricity guide
                  everything we do at SolarCare.
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default About;

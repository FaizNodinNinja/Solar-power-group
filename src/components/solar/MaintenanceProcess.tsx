
import React from 'react';
import Section from '../ui/Section';
import MaintenanceCard from './MaintenanceCard';
import FadeIn from '../ui/FadeIn';

export const MaintenanceProcess: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Inspection",
      description: "Comprehensive examination of all solar panels, mounting hardware, and electrical connections.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Cleaning",
      description: "Removal of dust, debris, pollen, bird droppings, and other contaminants that reduce efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Performance Testing",
      description: "Advanced diagnostic tests to measure voltage, current, and power output of your system.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Repair & Optimization",
      description: "Fixing any identified issues and making adjustments to maximize energy production.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <Section id="maintenance" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-16">
        <FadeIn>
          <span className="inline-block px-3 py-1 rounded-full bg-solar-100 text-solar-800 text-sm font-medium mb-4">
            Our Process
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Maintenance Approach</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our systematic maintenance process ensures your solar panels operate at peak efficiency, 
            extending their lifespan and maximizing your return on investment.
          </p>
        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <MaintenanceCard
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
            delay={100 * index}
          />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <FadeIn>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-solar-500 text-white rounded-full font-medium inline-flex items-center hover:bg-solar-600 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px]"
          >
            <span>Schedule Your Maintenance</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </Section>
  );
};

export default MaintenanceProcess;

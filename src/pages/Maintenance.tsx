
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import MaintenanceCard from '../components/solar/MaintenanceCard';
import { Droplet, Search, Activity, Wrench, Calendar, BarChart } from 'lucide-react';

const Maintenance = () => {
  const maintenanceSteps = [
    {
      number: 1,
      title: "Panel Cleaning",
      description: "Regular cleaning to remove dirt, dust, and debris that can reduce energy output by up to 25%.",
      icon: <Droplet />,
    },
    {
      number: 2,
      title: "System Inspection",
      description: "Thorough inspection of panels, wiring, connections, and mounting hardware to identify potential issues.",
      icon: <Search />,
    },
    {
      number: 3,
      title: "Performance Check",
      description: "Analysis of system performance metrics to ensure optimal energy production and efficiency.",
      icon: <Activity />,
    },
    {
      number: 4,
      title: "Repairs & Adjustments",
      description: "Immediate fixes for any issues found during inspection, preventing small problems from becoming major ones.",
      icon: <Wrench />,
    },
    {
      number: 5,
      title: "Maintenance Schedule",
      description: "Development of a customized maintenance schedule based on your specific system and environmental conditions.",
      icon: <Calendar />,
    },
    {
      number: 6,
      title: "Performance Report",
      description: "Detailed report of findings, actions taken, and recommendations for optimizing system performance.",
      icon: <BarChart />,
    }
  ];

  return (
    <PageLayout>
      <div className="relative bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-solar-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-solar-300 rounded-full opacity-20 blur-3xl" />
        </div>
        
        <Section className="relative z-10">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Maintenance Process</h1>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our comprehensive 6-step maintenance process ensures your solar system operates at peak efficiency
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintenanceSteps.map((step, index) => (
              <MaintenanceCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </Section>
        
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-solar-500/20 to-blue-500/20 rounded-xl transform -rotate-2"></div>
                <div className="relative glass-card rounded-xl overflow-hidden border border-gray-100 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Solar panel maintenance" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn delay={100}>
                <h2 className="text-2xl font-semibold mb-4">Maintenance Frequency</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The ideal maintenance schedule depends on your location, system size, and environmental factors. 
                  Generally, we recommend:
                </p>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="font-medium text-lg text-solar-700">Quarterly Inspections</h3>
                    <p className="text-gray-600">Visual checks and performance monitoring</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="font-medium text-lg text-solar-700">Bi-Annual Cleaning</h3>
                    <p className="text-gray-600">Professional cleaning to remove accumulated debris</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-lg">
                    <h3 className="font-medium text-lg text-solar-700">Annual Comprehensive Service</h3>
                    <p className="text-gray-600">Complete system evaluation, testing, and maintenance</p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <p className="mt-6 text-gray-600">
                  For systems in areas with heavy pollen, dust, or pollution, more frequent maintenance may be necessary.
                  Our experts can develop a customized schedule for your specific needs.
                </p>
              </FadeIn>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Maintenance;

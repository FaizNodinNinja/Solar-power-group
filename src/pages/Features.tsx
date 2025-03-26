
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import { ArrowRight, Zap, Shield, BarChart3, Clock, UserCheck, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <FadeIn delay={delay}>
    <div className="glass-card rounded-xl p-6 h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-solar-100 flex items-center justify-center text-solar-600 mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <a href="#" className="inline-flex items-center mt-4 text-solar-600 font-medium hover:text-solar-700 transition-colors">
        Learn more <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  </FadeIn>
);

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Enhanced Performance",
      description: "Our maintenance services ensure your panels operate at peak efficiency, maximizing energy production and savings."
    },
    {
      icon: Shield,
      title: "System Protection",
      description: "Regular maintenance protects your investment by preventing damage and extending the lifespan of your solar system."
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Advanced monitoring tools track your system's performance, identifying issues before they impact efficiency."
    },
    {
      icon: Clock,
      title: "Scheduled Maintenance",
      description: "Convenient scheduled maintenance ensures your system receives regular care without you having to remember."
    },
    {
      icon: UserCheck,
      title: "Certified Technicians",
      description: "Our team of certified technicians has the expertise to properly maintain all types of solar systems."
    },
    {
      icon: Award,
      title: "Warranty Preservation",
      description: "Regular professional maintenance preserves your manufacturer warranties and ensures compliance with requirements."
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
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Key Features</h1>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Discover how our solar maintenance services keep your system performing at its best
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
                delay={index * 100}
              />
            ))}
          </div>
        </Section>
        
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <FadeIn delay={100}>
                <h2 className="text-2xl font-semibold mb-4">Cutting-Edge Technology</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We use the latest diagnostic tools and cleaning equipment to deliver superior results 
                  that extend the life and improve the performance of your solar system.
                </p>
              </FadeIn>
              
              <FadeIn delay={200}>
                <h3 className="text-xl font-semibold mb-3">Our Technology Features:</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-solar-100 flex items-center justify-center text-solar-700 font-semibold mr-3">1</span>
                    <div>
                      <h4 className="font-medium">Advanced Diagnostic Tools</h4>
                      <p className="text-gray-600">Identify issues invisible to the naked eye</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-solar-100 flex items-center justify-center text-solar-700 font-semibold mr-3">2</span>
                    <div>
                      <h4 className="font-medium">Thermal Imaging</h4>
                      <p className="text-gray-600">Detect hotspots and potential failures before they occur</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-solar-100 flex items-center justify-center text-solar-700 font-semibold mr-3">3</span>
                    <div>
                      <h4 className="font-medium">Real-time Monitoring</h4>
                      <p className="text-gray-600">Track performance metrics and receive alerts</p>
                    </div>
                  </li>
                </ul>
              </FadeIn>
            </div>
            
            <div className="order-1 lg:order-2">
              <FadeIn direction="left">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-solar-500/20 to-blue-500/20 rounded-xl transform rotate-2"></div>
                  <div className="relative glass-card rounded-xl overflow-hidden border border-gray-100 shadow-xl">
                    <img 
                      src="https://plus.unsplash.com/premium_photo-1668078530961-32f4a1107791?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Solar panel technology" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Features;


import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import { Check, Wrench, ShieldCheck, Zap, LineChart, Hammer, Gauge, Recycle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <FadeIn delay={delay}>
    <Card className="h-full glass-card border-0">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-solar-100 flex items-center justify-center text-solar-600">
            <Icon size={24} />
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
        <ul className="mt-4 space-y-2">
          {['Professional service', 'Expert technicians', 'Quality guarantee'].map((item, i) => (
            <li key={i} className="flex items-start">
              <Check className="text-solar-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <span className="text-sm text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </FadeIn>
);

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Panel Cleaning",
      description: "Professional cleaning to remove dirt, dust, pollen, and bird droppings that reduce efficiency."
    },
    {
      icon: ShieldCheck,
      title: "System Inspection",
      description: "Comprehensive inspection of all components to identify potential issues before they cause problems."
    },
    {
      icon: LineChart,
      title: "Performance Testing",
      description: "Detailed performance analysis to ensure your system is operating at peak efficiency."
    },
    {
      icon: Hammer,
      title: "Repair Services",
      description: "Expert repair of damaged panels, inverters, wiring, and other system components."
    },
    {
      icon: Gauge,
      title: "Monitoring Setup",
      description: "Installation and configuration of monitoring systems to track your solar performance."
    },
    {
      icon: Recycle,
      title: "System Upgrades",
      description: "Recommendations and implementation of system upgrades to improve efficiency and output."
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
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Our Services</h1>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive solar maintenance solutions to keep your system performing at its best
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
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
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                    alt="Solar panel maintenance" 
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn delay={200}>
                <h2 className="text-2xl font-semibold mb-6">Why Choose Our Services?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Regular maintenance is essential for maximizing the performance and lifespan of your solar investment. 
                  Our comprehensive services ensure that your system operates at peak efficiency for years to come.
                </p>
              </FadeIn>
              
              <FadeIn delay={300}>
                <h3 className="text-xl font-semibold mb-4">Benefits of Regular Maintenance:</h3>
                <ul className="space-y-3">
                  {[
                    'Increased energy production',
                    'Extended system lifespan',
                    'Early detection of potential issues',
                    'Lower repair costs',
                    'Maintained warranty compliance'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-solar-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Services;

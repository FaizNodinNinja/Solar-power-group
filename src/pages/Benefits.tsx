
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import { Leaf, DollarSign, Clock, Sun, Sparkles, ShieldCheck } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, delay = 0, imageUrl }) => (
  <FadeIn delay={delay}>
    <div className="glass-card rounded-xl h-full overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-solar-600 mr-3">
            <Icon size={20} />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </FadeIn>
);

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Improved Efficiency",
      description: "Regular maintenance can increase panel efficiency by up to 25%, maximizing your energy production and savings.",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Clock,
      title: "Extended Lifespan",
      description: "Proper care can extend your solar system's lifespan by 5-10 years, maximizing your return on investment.",
      imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Preventative maintenance helps avoid costly repairs and ensures continuous energy production and savings.",
      imageUrl: "https://images.unsplash.com/photo-1633158829799-56bdf8c6bc7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: ShieldCheck,
      title: "Warranty Protection",
      description: "Regular professional maintenance ensures compliance with manufacturer warranty requirements.",
      imageUrl: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Sun,
      title: "Consistent Performance",
      description: "Ensure reliable energy production throughout the year, even during periods of adverse weather.",
      imageUrl: "https://images.unsplash.com/photo-1548173464-5be87645b4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Optimized solar systems maximize clean energy production, further reducing your carbon footprint.",
      imageUrl: "https://images.unsplash.com/photo-1623227477807-d386ee47e708?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Benefits of Solar Maintenance</h1>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Discover how regular maintenance maximizes your solar investment
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index} 
                icon={benefit.icon} 
                title={benefit.title} 
                description={benefit.description} 
                imageUrl={benefit.imageUrl}
                delay={index * 100}
              />
            ))}
          </div>
        </Section>
        
        <Section>
          <div className="glass-card rounded-xl p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-2xl font-semibold mb-6">The Cost of Neglecting Maintenance</h2>
                <p className="text-lg text-gray-600 mb-6">
                  While regular maintenance has a small cost, neglecting your solar system can lead to significant expenses and reduced benefits:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-medium text-red-800">Reduced Energy Production</h3>
                    <p className="text-gray-600">Dirty panels can lose 15-25% of their output capacity</p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-medium text-red-800">Shortened System Lifespan</h3>
                    <p className="text-gray-600">Unaddressed issues can permanently damage components</p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-medium text-red-800">Expensive Repairs</h3>
                    <p className="text-gray-600">Small problems can escalate into major system failures</p>
                  </div>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-medium text-red-800">Void Warranties</h3>
                    <p className="text-gray-600">Lack of maintenance may invalidate manufacturer warranties</p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-solar-500/20 rounded-xl transform rotate-2"></div>
                  <div className="relative glass-card rounded-xl overflow-hidden border border-gray-100 shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                      alt="Damaged solar panel" 
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

export default Benefits;

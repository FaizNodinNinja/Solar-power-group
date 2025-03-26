
import React from 'react';
import FadeIn from '../ui/FadeIn';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen pt-20 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-solar-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-solar-300 rounded-full opacity-20 blur-3xl" />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn delay={100}>
              <span className="inline-block px-3 py-1 rounded-full bg-solar-100 text-solar-800 text-sm font-medium mb-6">
                Professional Solar Maintenance
              </span>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Keep Your <span className="text-solar-500">Solar Panels</span> Performing at Their Best
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Maximize efficiency and extend the lifespan of your solar investment with our professional maintenance services.
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-solar-500 text-white rounded-full font-medium hover:bg-solar-600 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px]"
                >
                  Schedule Service
                </a>
                <a 
                  href="#maintenance" 
                  className="px-6 py-3 bg-white text-solar-800 rounded-full font-medium border border-solar-200 hover:bg-solar-50 transition-all"
                >
                  Learn More
                </a>
              </div>
            </FadeIn>
            
            
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-solar-500/20 to-blue-500/20 rounded-xl transform rotate-3"></div>
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                    alt="Solar panel installation" 
                    className="w-full h-full object-cover aspect-[4/3] min-h-[300px] min-w-[400px]"
                  />
                 
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;

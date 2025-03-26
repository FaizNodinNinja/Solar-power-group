
import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import FadeIn from '../components/ui/FadeIn';
import { Sparkles, Home, Building, Factory, Users } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Residential Solar Maintenance",
    location: "Sunnyvale, CA",
    category: "residential",
    image: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Complete maintenance program for a 10kW residential solar system, including panel cleaning, inspection, and performance optimization."
  },
  {
    id: 2,
    title: "Commercial Office Building",
    location: "San Francisco, CA",
    category: "commercial",
    image: "https://img.freepik.com/premium-photo/solar-panels-generating-electricity-wall-industrial-building-city-day_156139-1390.jpg?semt=ais_hybrid",
    description: "Quarterly maintenance service for a 50kW commercial rooftop installation, helping maintain peak efficiency year-round."
  },
  {
    id: 3,
    title: "Industrial Solar Farm",
    location: "Sacramento, CA",
    category: "industrial",
    image: "https://img.freepik.com/free-photo/foreman-businessman-solar-energy-station_1157-35681.jpg",
    description: "Comprehensive maintenance program for a 2MW solar farm, including advanced diagnostics and performance monitoring."
  },
  {
    id: 4,
    title: "Residential System Repair",
    location: "Oakland, CA",
    category: "residential",
    image: "https://media.istockphoto.com/id/1373265915/photo/a-worker-on-the-roof-using-laptop-charged-by-sun-energy.jpg?s=612x612&w=0&k=20&c=jO_WkUZ65WiGRmh1q016IaRpIiKeQm-GsMz3LUSOSfc=",
    description: "Emergency repair and system reconfiguration following storm damage, restoring energy production within 48 hours."
  },
  {
    id: 5,
    title: "Community Solar Project",
    location: "Berkeley, CA",
    category: "community",
    image: "https://iki-small-grants.de/wp-content/uploads/2021/10/1362_Solar_irrigation_India_c_SwitchON-4_640x400-Copy.jpg",
    description: "Regular maintenance for a community solar installation serving a 50-unit apartment complex, ensuring reliable energy for all residents."
  },
  {
    id: 6,
    title: "Corporate Headquarters",
    location: "Palo Alto, CA",
    category: "commercial",
    image: "https://media.istockphoto.com/id/164438872/vector/modern-office-building-illustration.jpg?s=612x612&w=0&k=20&c=gxMGK51iL1oBj-n5n9-AcrwzUxAAbMYPzg1RLBxJR8o=",
    description: "Maintenance and monitoring services for a high-profile corporate campus with multiple solar arrays totaling 200kW."
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageLayout>
      <div className="relative bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-solar-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-solar-300 rounded-full opacity-20 blur-3xl" />
        </div>
        
        <Section className="relative z-10">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Our Work</h1>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Explore our portfolio of successful solar maintenance projects across different sectors
            </p>
          </FadeIn>
          
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full ${filter === 'all' 
                  ? 'bg-solar-500 text-white' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
              >
                <Sparkles className="inline mr-1" size={16} /> All Projects
              </button>
              <button 
                onClick={() => setFilter('residential')}
                className={`px-4 py-2 rounded-full ${filter === 'residential' 
                  ? 'bg-solar-500 text-white' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
              >
                <Home className="inline mr-1" size={16} /> Residential
              </button>
              <button 
                onClick={() => setFilter('commercial')}
                className={`px-4 py-2 rounded-full ${filter === 'commercial' 
                  ? 'bg-solar-500 text-white' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
              >
                <Building className="inline mr-1" size={16} /> Commercial
              </button>
              <button 
                onClick={() => setFilter('industrial')}
                className={`px-4 py-2 rounded-full ${filter === 'industrial' 
                  ? 'bg-solar-500 text-white' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
              >
                <Factory className="inline mr-1" size={16} /> Industrial
              </button>
              <button 
                onClick={() => setFilter('community')}
                className={`px-4 py-2 rounded-full ${filter === 'community' 
                  ? 'bg-solar-500 text-white' 
                  : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
              >
                <Users className="inline mr-1" size={16} /> Community
              </button>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 100}>
                <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 text-solar-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                    <p className="text-gray-600 flex-grow">{project.description}</p>
                    <a href="#" className="mt-4 text-solar-600 font-medium hover:text-solar-700 transition-colors">
                      View details →
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
        
        <Section>
          <div className="glass-card rounded-xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="text-center">
                  <div className="text-4xl font-bold text-solar-600 mb-2">100+</div>
                  <p className="text-lg text-gray-600">Projects Completed</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-solar-600 mb-2">98%</div>
                  <p className="text-lg text-gray-600">Client Satisfaction</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-solar-600 mb-2">250MW+</div>
                  <p className="text-lg text-gray-600">Capacity Maintained</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Portfolio;

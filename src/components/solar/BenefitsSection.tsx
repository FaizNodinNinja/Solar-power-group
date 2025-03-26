
import React from 'react';
import Section from '../ui/Section';
import { cn } from "@/lib/utils";
import FadeIn from '../ui/FadeIn';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, color = "bg-solar-50 text-solar-600", delay = 0 }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white h-full flex flex-col">
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", color)}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </div>
  </FadeIn>
);

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.127 1.074.127.364 0 .722-.044 1.074-.127a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
          <path fillRule="evenodd" d="M9.75 9a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V9zM8.25 9a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V9zM10.5 12a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V12zM7.5 12a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75V12zM9 16.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-1.5zM7.5 16.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-1.5z" clipRule="evenodd" />
        </svg>
      ),
      title: "Increased Efficiency",
      description: "Regular maintenance can increase solar panel efficiency by up to 30%, ensuring maximum return on your investment.",
      color: "bg-solar-50 text-solar-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
        </svg>
      ),
      title: "Extended Lifespan",
      description: "Proper maintenance can extend your solar panel system's lifespan by 5-10 years beyond manufacturer warranty.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Cost Savings",
      description: "Preventative maintenance helps avoid expensive repairs and ensures consistent energy production and savings.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
        </svg>
      ),
      title: "Warranty Compliance",
      description: "Regular professional maintenance often fulfills warranty requirements, preserving manufacturer coverage for major issues.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
        </svg>
      ),
      title: "Performance Monitoring",
      description: "Identify and address efficiency issues before they significantly impact your system's power generation.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
        </svg>
      ),
      title: "Environmental Impact",
      description: "Optimized solar systems reduce reliance on grid electricity, further decreasing your carbon footprint.",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <Section id="benefits" className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <FadeIn>
          <span className="inline-block px-3 py-1 rounded-full bg-solar-100 text-solar-800 text-sm font-medium mb-4">
            Why Maintenance Matters
          </span>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Benefits of Regular Solar Panel Maintenance</h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proper maintenance doesn't just keep your panels clean—it ensures peak performance, 
            extends system lifespan, and protects your investment.
          </p>
        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Benefit
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            color={benefit.color}
            delay={100 * index}
          />
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;

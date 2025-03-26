
import React from 'react';
import { cn } from "@/lib/utils";
import FadeIn from '../ui/FadeIn';

interface MaintenanceCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const MaintenanceCard: React.FC<MaintenanceCardProps> = ({
  number,
  title,
  description,
  icon,
  delay = 0
}) => {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="glass-card rounded-xl p-6 h-full flex flex-col">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-solar-100 flex items-center justify-center text-solar-700 font-semibold">
            {number}
          </div>
          <div className="w-10 h-10 text-solar-500">{icon}</div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </FadeIn>
  );
};

export default MaintenanceCard;

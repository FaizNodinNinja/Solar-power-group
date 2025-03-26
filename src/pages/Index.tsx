
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/solar/HeroSection';
import MaintenanceProcess from '../components/solar/MaintenanceProcess';
import BenefitsSection from '../components/solar/BenefitsSection';
import ContactCTA from '../components/solar/ContactCTA';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <MaintenanceProcess />
        <BenefitsSection />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

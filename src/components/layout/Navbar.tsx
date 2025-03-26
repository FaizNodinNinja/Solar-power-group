
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-foreground/80 hover:text-foreground transition-colors duration-200 link-hover px-4 py-2"
  >
    {children}
  </Link>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-solar-500 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-solar-500"></div>
            </div>
          </div>
          <span className="text-xl font-medium">SolarCare</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/maintenance">Maintenance</NavLink>
          <NavLink to="/benefits">Benefits</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">
            <span className="px-5 py-2 bg-solar-500 text-white rounded-full hover:bg-solar-600 transition-colors">
              Contact
            </span>
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="block md:hidden p-2 text-foreground/80 hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-6 transform transition-transform duration-300 md:hidden",
        menuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/about"
            className="py-3 border-b border-border text-foreground/80"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="py-3 border-b border-border text-foreground/80"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/features"
            className="py-3 border-b border-border text-foreground/80"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/maintenance"
            className="py-3 border-b border-border text-foreground/80"
            onClick={() => setMenuOpen(false)}
          >
            Maintenance
          </Link>
          <Link
            to="/benefits"
            className="py-3 border-b border-border text-foreground/80"
            onClick={() => setMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link
            to="/portfolio"
            className="py-3 border-b border-border text-foreground/80"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="py-3 mt-6 bg-solar-500 text-white rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

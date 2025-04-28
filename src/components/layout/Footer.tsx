
import React from 'react';
import { Facebook, Instagram, Link, Linkedin, Twitter } from 'lucide-react';



export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-solar-500 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-solar-500"></div>
                </div>
              </div>
              <span className="text-xl font-medium">Solar Power Group</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs">
              Professional solar panel maintenance services to maximize efficiency and lifespan.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link to="#" className="text-gray-500 hover:text-solar-600 transition-colors">
                <Facebook size={18} />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-solar-600 transition-colors">
                <Twitter size={18} />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-solar-600 transition-colors">
                <Instagram size={18} />
              </Link>
              <Link to="#" className="text-gray-500 hover:text-solar-600 transition-colors">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Panel Cleaning</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">System Inspection</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Performance Testing</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Inverter Maintenance</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Repair Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Our Team</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Testimonials</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-base mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
              Solar Power Group, Solar Samadhan Kendra, Sector 11,<br />
              Indira Nagar, Lucknow - 226016
              </li>
              <li className="text-sm text-muted-foreground">solarpowergroup9@gmail.com</li>
              <li className="text-sm text-muted-foreground">(+91) 8840-299-681</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} SolarCare. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="#" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-solar-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

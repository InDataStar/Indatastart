import React from 'react';
import { Smartphone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">InDataStart</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Passionate about creating exceptional mobile experiences that make a difference. 
            Specializing in iOS, Android, and cross-platform development with a focus on performance and user experience.
          </p>
          
          <div className="flex items-center justify-center text-sm text-gray-400">
            <span>© {currentYear} InDataStart. Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-500" />
            <span>for mobile innovation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
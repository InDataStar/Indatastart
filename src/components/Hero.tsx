import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  enum roles = {
    'Mobile Developer',
    //'iOS Specialist',
    'Android Expert',
    'React Native Pro',
    //'Flutter Developer'
    };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm Lachlan Crawford and I am a {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 inline-block min-h-[1.2em]">
                {Object.Values(currentRole)}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Crafting exceptional mobile experiences with cutting-edge technologies and 
              optimizing performance for maximum efficiency across iOS and Android platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              href="/files/Lachlan_Paul_Crawford_Resume.pdf">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </a>
            
            <a className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105" href="#projects">
              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12" />
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/InDataStar" className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <Github className="h-6 w-6 text-gray-700 group-hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/in/lachlan-crawford-8a36b8140/" className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-6 w-6 text-gray-700 group-hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
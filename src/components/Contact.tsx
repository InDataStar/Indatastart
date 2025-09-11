import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Calendar, Coffee } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'crawfordlp1@gmail.com',
      link: 'mailto:crawfordlp1@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Auckland, NZ',
      link: '#',
      color: 'from-green-500 to-green-600'
    }
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/InDataStar', 
      label: 'GitHub',
      color: 'hover:bg-gray-800'
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://www.linkedin.com/in/lachlan-crawford-8a36b8140/', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    }
  ];

  const services = [
    { icon: <MessageCircle className="h-4 w-4" />, text: 'Mobile app development' },
    { icon: <Calendar className="h-4 w-4" />, text: 'Technical consulting' },
    { icon: <Coffee className="h-4 w-4" />, text: 'Code reviews & optimization' },
    { icon: <Send className="h-4 w-4" />, text: 'Team mentoring' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your mobile app ideas to life? Let's discuss how we can 
            create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Get in Touch Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
                <p className="text-gray-600 mt-2">Let's start a conversation</p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-blue-50 hover:to-teal-50 transition-all duration-300 group"
                  >
                    <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-500">{info.label}</div>
                      <div className="text-lg font-semibold text-gray-900">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Connect on Social Card */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Connect on Social</h3>
                <p className="text-blue-100 mt-2">Follow my journey</p>
              </div>
              
              <div className="flex justify-center space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="bg-white/20 p-4 rounded-2xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-center">Available for:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center text-blue-100">
                      <div className="bg-white/20 p-2 rounded-lg mr-3">
                        {service.icon}
                      </div>
                      <span className="text-sm">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you need a new mobile app, want to optimize existing code, or require technical consultation, 
              I'm here to help bring your vision to life.
            </p>
            <a 
              href="mailto:crawfordlp1@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Send className="mr-2 h-5 w-5" />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
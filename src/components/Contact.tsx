import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

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
      icon: <Mail className="h-6 w-6" />,
      label: 'Email',
      value: 'hello@mobiledev.com',
      link: 'mailto:hello@mobiledev.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="h-6 w-6" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="h-6 w-6" />, href: 'https://twitter.com', label: 'Twitter' }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project discussion"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-blue-50 hover:to-teal-50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">{info.label}</div>
                      <div className="text-lg font-semibold text-gray-900">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Available for:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Mobile app development</li>
                  <li>• Technical consulting</li>
                  <li>• Code reviews & optimization</li>
                  <li>• Team mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
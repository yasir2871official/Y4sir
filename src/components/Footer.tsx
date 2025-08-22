import React from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Footer() {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // In a real app, this would download an actual PDF
    alert('Resume download would start here!');
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Brand Identity Design',
    'Motion Graphics',
    'Print Design',
    'Digital Marketing',
    'Logo Design'
  ];

  return (
    <footer className={`relative overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-gray-900'
    } text-white`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Y4SIR
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creative graphic designer specializing in digital, branding, and UI/UX design. 
                Turning ideas into visually stunning designs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">mohmedyasirysr745@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">New York, NY</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Ready to bring your vision to life? Let's discuss your next project.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start a Project
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button
                  onClick={downloadResume}
                  className="w-full px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2025 Y4SIR. All Rights Reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  Crafted with <Heart className="w-4 h-4 text-red-500 fill-current" /> and creativity
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for projects
                </div>
                
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110 group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info bar */}
        <div className="bg-gray-950/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-3">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
              <span>Based in New York • Available Worldwide • Remote Friendly</span>
              <span>Specializing in Brand Identity, UI/UX & Motion Graphics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
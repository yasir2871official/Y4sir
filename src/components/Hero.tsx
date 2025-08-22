import React from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Hero() {
  const { isDark } = useTheme();

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // In a real app, this would download an actual PDF
    alert('Resume download would start here!');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse ${
          isDark ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse delay-1000 ${
          isDark ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Hi, I'm Y4SIR
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Creative Graphic Designer
          </p>
          <p className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Turning ideas into visually stunning designs
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={downloadResume}
              className={`px-8 py-4 border-2 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 ${
                isDark 
                  ? 'border-slate-600 hover:bg-slate-800 hover:border-slate-500' 
                  : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          <button
            onClick={scrollToPortfolio}
            className="animate-bounce"
          >
            <ArrowDown className={`w-8 h-8 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
          </button>
        </div>
      </div>
    </section>
  );
}
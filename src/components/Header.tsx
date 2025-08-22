import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-900/80 border-slate-700' 
        : 'bg-white/80 border-gray-200'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Y4SIR
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-400 transition-colors">Work</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark 
                ? 'bg-slate-800 hover:bg-slate-700' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 w-full md:hidden ${
            isDark ? 'bg-slate-900/95' : 'bg-white/95'
          } backdrop-blur-lg border-b ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          }`}>
            <div className="flex flex-col space-y-4 p-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-blue-400 transition-colors text-left">Work</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
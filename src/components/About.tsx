import React from 'react';
import { Palette, Monitor, Zap, Camera } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function About() {
  const { isDark } = useTheme();

  const skills = [
    { icon: Palette, name: 'Adobe Creative Suite', desc: 'Photoshop, Illustrator, After Effects' },
    { icon: Monitor, name: 'Digital Marketing', desc: 'Facebook, Instagram, X' },
    { icon: Zap, name: 'Branding & Identity', desc: 'Logo design, Visual systems' },
    { icon: Camera, name: 'Motion Graphics', desc: 'Animation, Video editing' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className={`w-80 h-80 rounded-full mx-auto relative overflow-hidden ${
                isDark ? 'bg-slate-800' : 'bg-gray-200'
              }`}>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white">Y4SIR</div>
                </div>
              </div>
              <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl opacity-60 ${
                isDark ? 'bg-blue-500' : 'bg-blue-300'
              }`}></div>
            </div>

            <div>
              <p className={`text-lg md:text-xl leading-relaxed mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm YASIR, a passionate graphic designer specializing in digital, branding, and UI/UX design. 
                I love creating clean, modern, and impactful visuals that communicate ideas effectively.
              </p>
              <p className={`text-lg md:text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                With years of experience in the creative industry, I bring a unique blend of artistic vision 
                and technical expertise to every project. My goal is to help brands tell their story through 
                compelling visual narratives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isDark 
                    ? 'bg-slate-800/50 hover:bg-slate-800' 
                    : 'bg-white hover:bg-gray-50 shadow-md'
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 mb-4 mx-auto">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{skill.name}</h3>
                <p className={`text-center ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
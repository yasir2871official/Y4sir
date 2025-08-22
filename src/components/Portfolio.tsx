import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Portfolio() {
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'Nexus Brand Identity',
      description: 'Complete branding package with logo, color system, and marketing materials',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Branding',
      link: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Logo Design',
      description: 'Modern Logo for e-commerce platform',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Logo Design',
      link: '#'
    },
    {
      id: 3,
      title: 'Motion Graphics Reel',
      description: 'Dynamic animations and transitions for digital campaigns',
      image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Motion Graphics',
      link: '#'
    },
    {
      id: 4,
      title: 'Restaurant Branding',
      description: 'Visual identity for modern dining experience',
      image: 'https://images.pexels.com/photos/196658/pexels-photo-196658.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Branding',
      link: '#'
    },
    {
      id: 5,
      title: 'Mobile App Interface',
      description: 'Clean and intuitive mobile application logo design',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Logo Design',
      link: '#'
    },
    {
      id: 6,
      title: 'Event Poster Series',
      description: 'Creative poster designs for music and cultural events',
      image: 'https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'Print Design',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Work</h2>
            <p className={`text-xl max-w-2xl mx-auto mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Selected projects that showcase my creativity and skills
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDark ? 'bg-slate-800' : 'bg-white shadow-lg'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-slate-700 text-blue-300' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
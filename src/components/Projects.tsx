import React from 'react';
import { ExternalLink, Github, Play, Users, Star, Download } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SeeGP',
      description: 'A sustainability app helping users track their carbon footprint with real-time analytics and gamification features.',
      image: 'https://imgur.com/wVDO6NG.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      //To do dont use this
      // metrics: {
      //   downloads: '100K+',
      //   rating: '4.8',
      //   users: '50K+'
      // },
      links: {
        demo: 'https://snack.expo.dev/@njyyjn/seegp2',
        github: 'https://github.com/InDataStar/SeeGP', 
      },
      featured: true
    },
    //To do either edit this or incorp firebase into it 
    // {
    //   title: 'FinanceFlow iOS',
    //   description: 'Personal finance management app with AI-powered spending insights and investment recommendations.',
    //   image: 'https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['Swift', 'SwiftUI', 'Core Data', 'WidgetKit'],
    //   metrics: {
    //     downloads: '75K+',
    //     rating: '4.9',
    //     users: '40K+'
    //   },
    //   links: {
    //     demo: '#',
    //     github: '#',
    //     store: '#'
    //   },
    //   featured: true
    // },
    // {
    //   title: 'WorkoutPro Android',
    //   description: 'Comprehensive fitness app with workout plans, progress tracking, and social features.',
    //   image: 'https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM'],
    //   metrics: {
    //     downloads: '200K+',
    //     rating: '4.7',
    //     users: '120K+'
    //   },
    //   links: {
    //     demo: '#',
    //     github: '#',
    //     store: '#'
    //   },
    //   featured: false
    // },
    // {
    //   title: 'ShopSmart Flutter',
    //   description: 'E-commerce platform with AR product visualization and personalized recommendations.',
    //   image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['Flutter', 'Dart', 'BLoC', 'AR Core'],
    //   metrics: {
    //     downloads: '150K+',
    //     rating: '4.6',
    //     users: '80K+'
    //   },
    //   links: {
    //     demo: '#',
    //     github: '#',
    //     store: '#'
    //   },
    //   featured: false
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of mobile applications that demonstrate technical excellence, 
            user-centric design, and measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={project.title}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-100">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Download className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="font-bold text-gray-900">{project.metrics.downloads}</span>
                    </div>
                    <div className="text-sm text-gray-500">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-bold text-gray-900">{project.metrics.rating}</span>
                    </div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="font-bold text-gray-900">{project.metrics.users}</span>
                    </div>
                    <div className="text-sm text-gray-500">Active Users</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a 
                      href={project.links.demo}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                    <a 
                      href={project.links.github}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </div>
                  <a 
                    href={project.links.store}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div 
              key={project.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="flex">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-32 h-32 object-cover"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Star className="h-3 w-3 text-yellow-500 mr-1" />
                      {project.metrics.rating}
                    </div>
                    <div className="flex space-x-2">
                      <a href={project.links.demo} className="text-blue-600 hover:text-blue-800">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <a href={project.links.github} className="text-gray-600 hover:text-gray-800">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
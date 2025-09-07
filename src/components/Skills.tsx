import React from 'react';
import { 
  Smartphone, 
  Code2, 
  Zap, 
  Database, 
  Cloud, 
  Cpu,
  Monitor,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Platforms',
      icon: <Smartphone className="h-8 w-8" />,
      skills: [
        { name: 'iOS Development', level: 95, color: 'bg-blue-500' },
        { name: 'Android Development', level: 90, color: 'bg-green-500' },
        { name: 'React Native', level: 92, color: 'bg-cyan-500' },
        { name: 'Flutter', level: 88, color: 'bg-blue-400' }
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="h-8 w-8" />,
      skills: [
        { name: 'Swift', level: 94, color: 'bg-orange-500' },
        { name: 'Kotlin', level: 89, color: 'bg-purple-500' },
        { name: 'JavaScript/TypeScript', level: 93, color: 'bg-yellow-500' },
        { name: 'Dart', level: 87, color: 'bg-teal-500' }
      ]
    },
    {
      title: 'Backend & Cloud',
      icon: <Cloud className="h-8 w-8" />,
      skills: [
        { name: 'Firebase', level: 91, color: 'bg-orange-400' },
        { name: 'AWS', level: 86, color: 'bg-yellow-600' },
        { name: 'Node.js', level: 88, color: 'bg-green-600' },
        { name: 'GraphQL', level: 84, color: 'bg-pink-500' }
      ]
    },
    {
      title: 'Performance & Tools',
      icon: <Zap className="h-8 w-8" />,
      skills: [
        { name: 'App Optimization', level: 96, color: 'bg-red-500' },
        { name: 'CI/CD', level: 89, color: 'bg-indigo-500' },
        { name: 'Testing', level: 91, color: 'bg-emerald-500' },
        { name: 'Analytics', level: 87, color: 'bg-violet-500' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern mobile development technologies with a focus on 
            performance optimization and scalable architecture design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-xl text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-900">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Skills;


/**
 <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Apps Developed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-blue-100">Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-blue-100">Avg Rating</div>
            </div>
          </div>
        </div>

*/
import React from 'react';
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  Shield, 
  Database,
  Cpu,
  Network,
  Battery
} from 'lucide-react';

const Efficiency = () => {
  const metrics = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Load Time',
      value: '<2s',
      description: 'Average app launch time',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: 'Battery Usage',
      value: '-40%',
      description: 'Optimized power consumption',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Memory',
      value: '-30%',
      description: 'Reduced RAM footprint',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Data Usage',
      value: '-50%',
      description: 'Intelligent caching & compression',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const techniques = [
    {
      title: 'Code Optimization',
      description: 'Advanced algorithms and data structures for maximum performance',
      items: [
        'Lazy loading implementation',
        'Memory management optimization',
        'Background processing efficiency',
        'Cache strategies'
      ]
    },
    {
      title: 'Architecture Design',
      description: 'Scalable and maintainable system architecture patterns',
      items: [
        'Clean Architecture principles',
        'Modular design patterns',
        'Dependency injection',
        'SOLID principles'
      ]
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time analytics and performance tracking systems',
      items: [
        'Custom analytics implementation',
        'Crash reporting integration',
        'Performance metrics tracking',
        'User behavior analysis'
      ]
    },
    {
      title: 'Testing & QA',
      description: 'Comprehensive testing strategies ensuring reliability',
      items: [
        'Unit & Integration testing',
        'Automated UI testing',
        'Performance testing',
        'Security vulnerability testing'
      ]
    }
  ];

  return (
    <section id="efficiency" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Efficiency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering high-performance mobile applications through advanced optimization 
            techniques and intelligent architecture design.
          </p>
        </div>

        {/* Efficiency Techniques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techniques.map((technique, index) => (
            <div 
              key={technique.title}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{technique.title}</h3>
              <p className="text-gray-600 mb-6">{technique.description}</p>
              
              <ul className="space-y-3">
                {technique.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        </div>
      </div>
    </section>
  );
};

export default Efficiency;



/**

        {/* Performance Stats */}
        {/* <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Performance Impact</h3>
            <p className="text-gray-300">Real metrics from production applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">45%</div>
              <div className="text-gray-300">Performance Improvement</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-300">Crash-Free Sessions</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">35%</div>
              <div className="text-gray-300">Faster Execution</div>
            </div>
          </div> */}
/**

        {/* Performance Metrics */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={metric.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {metric.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div> */}

*/
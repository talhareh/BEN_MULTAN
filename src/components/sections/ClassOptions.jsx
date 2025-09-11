import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLaptop } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ClassOptions = () => {
  const classTypes = [
    {
      icon: faUsers,
      title: 'On-Campus Classes',
      subtitle: 'Learn in Multan with face-to-face guidance',
      features: [
        'Interactive classroom environment',
        'Direct teacher-student interaction',
        'Peer learning opportunities',
        'Access to physical resources',
        'Immediate doubt resolution'
      ],
      color: 'bg-blue-100 text-blue-600',
      whatsappText: 'Hello! I\'m interested in on-campus classes at BEN Multan.'
    },
    {
      icon: faLaptop,
      title: 'Online Live Classes',
      subtitle: 'Interactive sessions, accessible worldwide',
      features: [
        'Live interactive sessions',
        'Global accessibility',
        'Digital whiteboards',
        'Screen sharing capabilities',
        'Real-time doubt resolution'
      ],
      color: 'bg-green-100 text-green-600',
      whatsappText: 'Hello! I\'m interested in online live classes at BEN.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Class Options
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the learning format that best suits your needs and schedule. 
            All options include the same high-quality content and expert instruction.
          </p>
        </div>

        {/* Class Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {classTypes.map((classType, index) => (
            <Card key={index} hover={true} className="text-center h-full relative">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${classType.color}`}>
                <FontAwesomeIcon icon={classType.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
                {classType.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-sm">
                {classType.subtitle}
              </p>
              
              <div className="space-y-3 mb-8">
                {classType.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-left">
                    <span className="w-2 h-2 bg-primary-red rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <Button
                  href={`https://wa.me/+923708382215?text=${encodeURIComponent(classType.whatsappText)}`}
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Get Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Flexible Learning Options */}
        <div className="bg-gradient-to-r from-primary-red to-red-700 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Flexible Learning Solutions
            </h3>
            <p className="text-red-100 max-w-3xl mx-auto">
              Mix and match different class formats according to your needs. 
              Start with one format and switch anytime during the course.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-red-200">Learning Formats</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Live</div>
              <div className="text-red-200">Interactive Sessions</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-red-200">Flexibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassOptions; 
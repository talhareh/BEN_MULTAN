import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faFileText, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';

const ResourcesProvided = () => {
  const resources = [
    {
      icon: faBookOpen,
      title: 'Exclusive Notes & Exam Tips',
      description: 'Comprehensive study materials designed by our expert faculty',
      features: [
        'Subject-wise detailed notes',
        'Quick revision summaries',
        'Exam-specific tips and tricks',
        'Formula sheets and key concepts',
        'Digital and printed formats'
      ]
    },
    {
      icon: faFileText,
      title: 'Solved Past Papers (Step-by-Step)',
      description: 'Complete solutions with detailed explanations for past papers',
      features: [
        'Last 10 years past papers',
        'Step-by-step solutions',
        'Mark scheme explanations',
        'Common mistake analysis',
        'Time management strategies'
      ]
    },
    {
      icon: faClipboardList,
      title: 'Mock Exams to Boost Confidence',
      description: 'Regular practice tests in exam-like conditions',
      features: [
        'Monthly mock examinations',
        'Timed practice sessions',
        'Performance analysis reports',
        'Individual feedback',
        'Improvement recommendations'
      ]
    }
  ];

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Resources Provided
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive study materials and resources to ensure 
            your success in O & A Level examinations.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} hover={true} className="h-full">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={resource.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {resource.description}
              </p>
              
              <div className="space-y-2">
                {resource.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Resource Info */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="text-center mb-8">
            <h4 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
              Digital Learning Platform
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access all resources through our student portal with 24/7 availability 
              and regular updates.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-red mb-2">1000+</div>
              <div className="text-sm text-gray-600">Study Resources</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-red mb-2">100+</div>
              <div className="text-sm text-gray-600">Past Papers</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-red mb-2">50+</div>
              <div className="text-sm text-gray-600">Mock Tests</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-red mb-2">24/7</div>
              <div className="text-sm text-gray-600">Online Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesProvided; 
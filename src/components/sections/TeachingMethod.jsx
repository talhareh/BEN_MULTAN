import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faClipboardCheck, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';

const TeachingMethod = () => {
  const methods = [
    {
      icon: faLightbulb,
      title: 'Concept Clarity',
      description: 'Building strong foundations',
      details: 'We focus on making sure students understand the core concepts thoroughly before moving to advanced topics. Our instructors use real-world examples and interactive teaching methods to ensure clarity.'
    },
    {
      icon: faClipboardCheck,
      title: 'Exam Techniques',
      description: 'Past paper drills, mark scheme strategies',
      details: 'Students practice with actual past papers and learn specific techniques for different question types. We teach mark scheme strategies to help students maximize their scores.'
    },
    {
      icon: faChartLine,
      title: 'Regular Assessments',
      description: 'Weekly & monthly tests for progress tracking',
      details: 'Continuous evaluation through weekly quizzes and monthly comprehensive tests. Parents receive detailed progress reports to track their child\'s improvement.'
    }
  ];

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Our Teaching Method
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We focus on a comprehensive approach that ensures concept clarity, 
            exam readiness, and continuous progress monitoring.
          </p>
        </div>

        {/* Teaching Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {methods.map((method, index) => (
            <Card key={index} hover={true} className="text-center h-full">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={method.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                {method.title}
              </h3>
              
              <p className="text-primary-red font-medium mb-4">
                {method.description}
              </p>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {method.details}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Teaching Features */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h4 className="text-xl font-heading font-semibold text-neutral-dark mb-6 text-center">
            What Makes Our Teaching Effective
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-red mb-2">24/7</div>
              <div className="text-sm text-gray-600">Doubt Clearing Support</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-red mb-2">100+</div>
              <div className="text-sm text-gray-600">Past Papers Covered</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-red mb-2">Weekly</div>
              <div className="text-sm text-gray-600">Progress Reports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethod; 
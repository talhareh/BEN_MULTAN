import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserGraduate, 
  faUsers, 
  faLaptop, 
  faFileText 
} from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: faUserGraduate,
      title: 'Cambridge & Edexcel Focused Teaching',
      description: 'Curriculum specifically designed for Cambridge and Edexcel examination boards with proven track record of success.'
    },
    {
      icon: faUsers,
      title: 'Highly Qualified Instructors',
      description: 'Expert faculty with international teaching exposure and consistent record of producing A & A* grades.'
    },
    {
      icon: faLaptop,
      title: 'Flexible Learning Options',
      description: 'Choose between on-campus classes, online learning, or recorded sessions to fit your schedule and preferences.'
    },
    {
      icon: faFileText,
      title: 'Notes & Past Papers',
      description: 'Comprehensive study materials, examination papers with step-by-step solutions, and exclusive exam tips.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover what makes British Educational Network the preferred choice for 
            O & A Level students in Multan and beyond.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover={true} className="text-center h-full">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={feature.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Achievement */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary-red to-red-700 text-white text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">90%+</div>
                <div className="text-lg">A & A* Results</div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-white opacity-30"></div>
              
              <div className="text-center max-w-md">
                <h4 className="text-xl font-heading font-semibold mb-2">
                  Consistent Results
                </h4>
                <p className="text-red-100">
                  Our students consistently achieve top grades in their 
                  O & A Level examinations, making us Multan's most trusted coaching center.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Points */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Cambridge & Edexcel focused teaching</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Highly qualified instructors with proven track record</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Flexible learning: On-campus + Online + Recorded sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Comprehensive notes & past paper practice</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>90%+ A & A* results from our students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 
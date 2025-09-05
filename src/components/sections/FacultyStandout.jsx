import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';

const FacultyStandout = () => {
  const standoutFeatures = [
    {
      icon: faGlobe,
      title: 'Subject specialists with international teaching exposure',
      description: 'Our faculty members have taught in multiple countries and bring global perspectives to local education.'
    },
    {
      icon: faUsers,
      title: 'Student-friendly, interactive approach',
      description: 'We believe in making learning enjoyable and engaging through interactive teaching methods and personalized attention.'
    },
    {
      icon: faAward,
      title: 'Consistent record of A & A* grades',
      description: 'Our instructors have consistently helped students achieve top grades with proven teaching strategies.'
    }
  ];

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Why Our Faculty Stands Out
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our instructors bring unique qualities that set them apart from traditional educators. 
            Here's what makes our teaching team exceptional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {standoutFeatures.map((feature, index) => (
            <Card key={index} hover={true} className="text-center h-full">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={feature.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-4 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-heading font-semibold text-neutral-dark mb-4">
              Our Teaching Philosophy
            </h4>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We believe that every student has the potential to excel. Our faculty focuses on 
              understanding each student's learning style and adapting teaching methods accordingly. 
              We don't just teach subjects; we mentor students for life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h5 className="font-semibold text-neutral-dark mb-2">Personalized Learning</h5>
              <p className="text-gray-600 text-sm">Individual attention to each student's needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <h5 className="font-semibold text-neutral-dark mb-2">Excellence Focus</h5>
              <p className="text-gray-600 text-sm">Committed to achieving the highest standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h5 className="font-semibold text-neutral-dark mb-2">Global Perspective</h5>
              <p className="text-gray-600 text-sm">International standards and methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h5 className="font-semibold text-neutral-dark mb-2">Continuous Support</h5>
              <p className="text-gray-600 text-sm">24/7 guidance and mentorship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyStandout; 
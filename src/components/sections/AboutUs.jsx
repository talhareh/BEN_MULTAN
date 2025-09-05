import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faGraduationCap, faGlobe, faAward } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  const stats = [
    {
      icon: faUsers,
      number: '500+',
      label: 'Students Enrolled'
    },
    {
      icon: faGraduationCap,
      number: '90%+',
      label: 'A & A* Results'
    },
    {
      icon: faGlobe,
      number: '15+',
      label: 'Countries Served'
    },
    {
      icon: faAward,
      number: '10+',
      label: 'Years Experience'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-6">
              About British Educational Network
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              British Educational Network (BEN) is Multan's premier coaching center for 
              O & A Level students, offering comprehensive academic support both on-campus and online. 
              Our structured programs and experienced faculty guarantee results.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of highly qualified instructors brings years of experience in 
              teaching Cambridge and Edexcel curricula, ensuring students receive the 
              best preparation for their examinations. We combine traditional teaching 
              methods with modern educational technology to create an engaging and 
              effective learning environment.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you prefer in-person classes at our state-of-the-art campus in 
              Multan or the convenience of online learning from anywhere, BEN's 
              commitment to academic excellence remains unwavering. We understand the 
              importance of education and are dedicated to helping our students achieve 
              their highest standards of education.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={stat.icon} className="text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-primary-red mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              {/* Placeholder for classroom image */}
              <div className="text-gray-500 text-center">
                <FontAwesomeIcon icon={faUsers} className="text-6xl mb-4" />
                <p className="text-lg font-semibold">Classroom Image</p>
                <p className="text-sm">Students in BEN classroom</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-gold rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-red rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 
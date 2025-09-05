import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/Button';

const AcademicsHero = () => {
  const whatsappUrl = `https://wa.me/+923001234567?text=Hello! I'd like to know more about your O & A Level academic programs at BEN.`;

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-red to-red-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
              </div>
              <span className="text-primary-gold font-semibold text-lg">Academic Programs</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Comprehensive O & A Level Education
            </h1>
            
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              We offer specialized coaching for Cambridge (CAIE) and Edexcel exams with 
              comprehensive coverage of all subjects and proven teaching methodologies.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">12+</div>
                <div className="text-sm text-red-200">Subjects Offered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">90%+</div>
                <div className="text-sm text-red-200">A & A* Results</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-sm text-red-200">Students Taught</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={whatsappUrl}
                variant="outline"
                size="lg"
                className="bg-white text-primary-red border-white hover:bg-red-50"
              >
                Get Program Details
              </Button>
              <Button 
                href="https://wa.me/+923001234567?text=Hello! I'd like to book a free trial class at BEN."
                variant="outline"
                size="lg"
              >
                Book Free Trial
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-white bg-opacity-20 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <FontAwesomeIcon icon={faUsers} className="text-6xl mb-4 opacity-60" />
                  <p className="text-lg font-semibold">Students in Class</p>
                  <p className="text-sm opacity-80">Academic Environment Photo</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary-gold text-primary-red p-4 rounded-full">
              <FontAwesomeIcon icon={faAward} className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsHero; 
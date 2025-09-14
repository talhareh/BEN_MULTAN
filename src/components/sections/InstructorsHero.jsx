import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faAward, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/Button';

const InstructorsHero = () => {
  const whatsappUrl = `https://wa.me/+923708382215?text=Hello! I'd like to meet your expert instructors and book a demo class at BEN.`;

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-neutral-dark to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-white rotate-45"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-primary-red p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faUserGraduate} className="text-2xl" />
              </div>
              <span className="text-primary-gold font-semibold text-lg">Expert Faculty</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Meet Our Expert Faculty
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our teachers are not just instructors—they are mentors who shape success stories. 
              Meet our highly qualified faculty with international teaching experience.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faAward} className="text-red-600" />
                </div>
                <div className="text-sm text-gray-300">Subject Specialists</div>
              </div>
              <div className="text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faGlobe} className="text-red-600" />
                </div>
                <div className="text-sm text-gray-300">International Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FontAwesomeIcon icon={faUserGraduate} className="text-red-600" />
                </div>
                <div className="text-sm text-gray-300">A & A* Results</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={whatsappUrl}
                variant="primary"
                size="lg"
              >
                Meet Our Team
              </Button>
              <Button 
                href="https://wa.me/+923708382215?text=Hello! I'd like to book a free demo class at BEN."
                variant="outline"
                size="lg"
              >
                Book Demo Class
              </Button>
            </div>
          </div>

          {/* Faculty Image */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="relative rounded-xl h-80 overflow-hidden">
                <Image
                  src="/images/instructors/faculty-team.jpg"
                  alt="Expert faculty team at BEN - professional instructors"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -left-4 bg-primary-red text-white p-4 rounded-xl">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-xs">Years Experience</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-primary-gold text-primary-red p-4 rounded-xl">
              <div className="text-2xl font-bold">90%+</div>
              <div className="text-xs">A & A* Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorsHero; 
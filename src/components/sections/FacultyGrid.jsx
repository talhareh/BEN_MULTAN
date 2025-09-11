import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faAward } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { instructors } from '../../data/instructors';

const FacultyGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Our Distinguished Faculty
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet our expert instructors who bring years of experience and proven 
            track records to help you achieve academic excellence.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {instructors.map((instructor) => (
            <Card key={instructor.id} hover={true} className="text-center h-full">
              {/* Instructor Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 relative">
                <Image
                  src={instructor.image}
                  alt={`${instructor.name} - ${instructor.specialization}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Instructor Info */}
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
                {instructor.name}
              </h3>
              
              <div className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {instructor.specialization}
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center text-gray-600">
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-primary-red" />
                  <span className="text-sm">{instructor.qualification}</span>
                </div>
                
                <div className="flex items-center justify-center text-gray-600">
                  <FontAwesomeIcon icon={faAward} className="mr-2 text-primary-red" />
                  <span className="text-sm">{instructor.experience}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {instructor.description}
              </p>
              
              <Button
                href={`https://wa.me/+923708382215?text=Hello! I'd like to book a demo class with ${instructor.name} at BEN.`}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                Book Demo Class
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Faculty Info */}
        <div className="bg-neutral-light rounded-2xl p-8">
          <div className="text-center mb-8">
            <h4 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
              Faculty Qualifications & Experience
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red mb-2">15+</div>
              <div className="text-sm text-gray-600">Expert Instructors</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Average Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red mb-2">100%</div>
              <div className="text-sm text-gray-600">Cambridge Certified</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-red mb-2">90%+</div>
              <div className="text-sm text-gray-600">Student Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyGrid; 
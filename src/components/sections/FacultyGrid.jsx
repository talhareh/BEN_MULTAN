"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faAward } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { instructors } from '../../data/instructors';

// Component for handling instructor images with fallback
const InstructorImage = ({ instructor }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = (e) => {
    console.error(`Failed to load image for ${instructor.name}:`, instructor.image, e);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log(`Successfully loaded image for ${instructor.name}:`, instructor.image);
    setImageLoaded(true);
  };

  return (
    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 relative bg-gray-200 flex items-center justify-center">
      {!imageError ? (
        <Image
          src={instructor.image}
          alt={`${instructor.name} - ${instructor.specialization}`}
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          priority={instructor.id === 1} // Prioritize loading the first image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-300">
          <FontAwesomeIcon icon={faUser} className="text-4xl text-gray-500" />
        </div>
      )}
    </div>
  );
};

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
            <Card 
              key={instructor.id} 
              hover={true} 
              className="text-center h-full relative ring-2 ring-primary-red ring-opacity-50 shadow-xl"
            >
              {/* Special Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-primary-red to-red-700 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  {instructor.specialization === 'Director of BEN' ? 'DIRECTOR' : 
                   instructor.specialization === 'O Level English' ? 'ENGLISH EXPERT' : 
                   'ECONOMICS EXPERT'}
                </div>
              </div>

              {/* Instructor Image */}
              <div className="mt-4">
                <InstructorImage instructor={instructor} />
              </div>

              {/* Instructor Info */}
              <h3 className="text-2xl font-heading font-semibold text-neutral-dark mb-2">
                {instructor.name}
              </h3>
              
              <div className="bg-gradient-to-r from-primary-red to-red-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block shadow-lg">
                {instructor.specialization === 'Director of BEN' ? 'Founder & Leader' : instructor.specialization}
              </div>
              
              {instructor.specialization === 'Director of BEN' && (
                <div className="space-y-3 mb-6">
                  {instructor.qualification && (
                    <div className="flex items-center justify-center text-gray-600">
                      <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-primary-red" />
                      <span className="text-sm">{instructor.qualification}</span>
                    </div>
                  )}
                  
                  {instructor.experience && (
                    <div className="flex items-center justify-center text-gray-600">
                      <FontAwesomeIcon icon={faAward} className="mr-2 text-primary-red" />
                      <span className="text-sm">{instructor.experience}</span>
                    </div>
                  )}
                </div>
              )}
              
              {instructor.specialization === 'Director of BEN' && instructor.description && (
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {instructor.description}
                </p>
              )}

              {/* Special Message */}
              <div className="bg-gradient-to-r from-primary-red/10 to-red-700/10 rounded-lg p-4 border-l-4 border-primary-red">
                <p className="text-sm text-gray-700 italic">
                  {instructor.specialization === 'Director of BEN' 
                    ? '"Leading BEN with a vision to provide world-class education and achieve excellence in O & A Level coaching."'
                    : instructor.specialization === 'O Level English'
                    ? '"Passionate about developing strong language and communication skills for academic success."'
                    : '"Economics expert with international teaching exposure and proven methodology for A* results."'
                  }
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Faculty Excellence Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary-red to-red-700 text-white text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg">Expert Instructors</div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-white opacity-30"></div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg">Years Average Experience</div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-white opacity-30"></div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Cambridge Certified</div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-white opacity-30"></div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">90%+</div>
                <div className="text-lg">Student Success Rate</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Faculty Features */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Cambridge & Edexcel certified instructors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>International teaching experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Proven track record of A* results</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Personalized attention and guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyGrid; 
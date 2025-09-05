import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const whatsappUrl = `https://wa.me/+923001234567?text=Hello! I'm interested in O/A Level coaching at British Educational Network (BEN).`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Placeholder for background image */}
        <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <p className="text-sm">Background Image Placeholder</p>
            <p className="text-xs">Classroom/Students Image</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
          Top O & A Level Coaching in Multan – Online & On-Campus
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Achieve A* results with Multan's most trusted coaching center. Expert instructors, 
          Cambridge/Edexcel curriculum, flexible class formats—on-campus and online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            href={whatsappUrl}
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto"
          >
            Enroll Now
          </Button>
          <Button 
            href={whatsappUrl}
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto"
          >
            Book Free Trial Class
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-gray-300">
          <p className="text-lg">
            ✨ Cambridge & Edexcel Certified • 90%+ A & A* Results • Online & On-Campus Classes
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
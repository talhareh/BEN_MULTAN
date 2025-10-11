import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
  const whatsappUrl = `https://wa.me/+923708382215?text=Hello! I'm interested in O/A Level coaching at British Educational Network (BEN).`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-background.jpeg"
          alt="BEN Classroom Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Top O & A Level Coaching in<br />
          <span className="text-primary-gold">Multan</span> – Online &<br />
          On-Campus
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg bg-black/20 backdrop-blur-sm rounded-lg p-4">
          Achieve <span className="text-primary-gold font-semibold">A* results</span> with Multan's most trusted coaching center. Expert instructors, 
          Cambridge/Edexcel curriculum, flexible class formats—on-campus and online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            href={whatsappUrl}
            variant="primary" 
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white border-transparent hover:border-transparent focus:outline-none"
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
        <div className="mt-8 text-white -mb-12">
          <p className="text-lg mb-0 drop-shadow-lg bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
            ✨ Cambridge & Edexcel Certified • <span className="text-primary-gold font-semibold">90%+ A & A* Results</span> • Online & On-Campus Classes
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero; 
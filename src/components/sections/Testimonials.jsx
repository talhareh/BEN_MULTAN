import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`text-lg ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our successful students who achieved their dream grades with 
            British Educational Network's expert guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-center h-full relative">
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 text-primary-red opacity-20">
                <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl" />
              </div>

              {/* Student Image Placeholder */}
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
                <FontAwesomeIcon icon={faUser} className="text-2xl text-gray-400" />
              </div>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="mt-auto">
                <h4 className="font-heading font-semibold text-neutral-dark text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-primary-red font-medium text-sm mb-2">
                  {testimonial.location}
                </p>
                <p className="text-gray-600 text-xs">
                  {testimonial.subjects}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-red mb-2">500+</div>
                <div className="text-gray-600">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-red mb-2">90%+</div>
                <div className="text-gray-600">A & A* Grades</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-red mb-2">15+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-heading font-semibold text-neutral-dark mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-700 mb-6">
            Start your journey towards academic excellence with British Educational Network today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+923001234567?text=Hello! I'm interested in O/A Level coaching at British Educational Network (BEN)."
              className="bg-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              Get Started Today
            </a>
            <a
              href="https://wa.me/+923001234567?text=Hello! I would like to book a free trial class at BEN."
              className="bg-transparent text-primary-red border-2 border-primary-red px-8 py-3 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
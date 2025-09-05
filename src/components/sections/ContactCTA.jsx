import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from '../ui/Button';

const ContactCTA = () => {
  const ctaOptions = [
    {
      icon: faWhatsapp,
      title: 'Book Free Trial Class',
      description: 'Experience our teaching quality before enrolling',
      action: 'https://wa.me/+923001234567?text=Hello! I\'d like to book a free trial class at BEN.',
      buttonText: 'Book Trial Class',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: faComments,
      title: 'Schedule a Counseling Session',
      description: 'Get personalized guidance for your academic journey',
      action: 'https://wa.me/+923001234567?text=Hello! I\'d like to schedule a counseling session at BEN.',
      buttonText: 'Schedule Session',
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Banner */}
        <div className="bg-gradient-to-r from-primary-red to-red-700 text-white rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards academic excellence. Contact us today and 
              discover how we can help you achieve your O & A Level goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {ctaOptions.map((option, index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={option.icon} className="text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {option.title}
                  </h3>
                  
                  <p className="text-red-100 mb-6 text-sm">
                    {option.description}
                  </p>
                  
                  <Button
                    href={option.action}
                    variant="outline"
                    size="md"
                    className={`w-full ${option.color} border-white text-white`}
                  >
                    {option.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-2">
              WhatsApp Support
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get instant answers to your questions via WhatsApp messaging
            </p>
            <Button
              href="https://wa.me/+923001234567?text=Hello! I need support from BEN."
              variant="secondary"
              size="sm"
            >
              Chat Now
            </Button>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-2">
              Campus Visit
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Schedule a visit to our campus and meet our expert faculty
            </p>
            <Button
              href="https://wa.me/+923001234567?text=Hello! I'd like to schedule a campus visit at BEN."
              variant="secondary"
              size="sm"
            >
              Schedule Visit
            </Button>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faComments} className="text-2xl" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-2">
              Academic Counseling
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get expert advice on subject selection and career guidance
            </p>
            <Button
              href="https://wa.me/+923001234567?text=Hello! I need academic counseling at BEN."
              variant="secondary"
              size="sm"
            >
              Get Counseling
            </Button>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center bg-neutral-light rounded-2xl p-8">
          <h4 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
            Still Have Questions?
          </h4>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team is always ready to help. Whether you have questions about our programs, 
            fees, schedules, or anything else, don't hesitate to reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://wa.me/+923001234567?text=Hello! I have some questions about BEN."
              variant="primary"
              size="lg"
              className="bg-green-500 hover:bg-green-600"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Ask Your Question
            </Button>
            <Button
              href="tel:+923001234567"
              variant="secondary"
              size="lg"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 
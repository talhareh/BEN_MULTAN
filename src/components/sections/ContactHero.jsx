import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from '../ui/Button';

const ContactHero = () => {
  const whatsappUrl = `https://wa.me/+923001234567?text=Hello! I have questions about admissions, class timings, and fees at British Educational Network (BEN).`;

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
                <FontAwesomeIcon icon={faComments} className="text-2xl" />
              </div>
              <span className="text-primary-gold font-semibold text-lg">Get in Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Contact Us Today
            </h1>
            
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Have questions about admissions, class timings, or fees? We're here to help! 
              Contact us today and take the first step towards academic excellence.
            </p>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-400" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-red-200 text-sm">Instant Response</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold">Phone Call</div>
                  <div className="text-red-200 text-sm">Direct Communication</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400" />
                </div>
                <div>
                  <div className="font-semibold">Visit Campus</div>
                  <div className="text-red-200 text-sm">In-Person Meeting</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-red-200 text-sm">Detailed Queries</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href={whatsappUrl}
                variant="outline"
                size="lg"
                className="bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                WhatsApp Now
              </Button>
              <Button 
                href="tel:+923001234567"
                variant="outline"
                size="lg"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Contact Stats */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">
                We're Here to Help
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-red-200 text-sm">WhatsApp Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">&lt;1hr</div>
                  <div className="text-red-200 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6 Days</div>
                  <div className="text-red-200 text-sm">Office Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Free</div>
                  <div className="text-red-200 text-sm">Consultation</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary-gold text-primary-red p-4 rounded-full">
              <FontAwesomeIcon icon={faComments} className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero; 
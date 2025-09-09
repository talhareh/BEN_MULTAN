import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCalendarAlt, faUsers, faWhatsapp } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/Button';

const AdmissionsOpen = () => {
  const whatsappUrl = `https://wa.me/+923001234567?text=Hello! I'm interested in enrolling for the new O/A Level batches at British Educational Network (BEN).`;

  return (
    <section className="py-16 bg-primary-red text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="bg-white text-primary-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faBullhorn} className="text-2xl" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Admissions Open for 2024-25
          </h2>

          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
            Secure your spot in Multan's leading O & A Level coaching center. 
            Limited seats available for both on-campus and online classes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href={whatsappUrl}
              variant="outline"
              size="lg"
              className="bg-red-900 text-white border-2 border-red-900 hover:bg-red-800 hover:border-red-800 shadow-lg font-bold text-lg px-8 py-4 w-full sm:w-auto"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsOpen; 
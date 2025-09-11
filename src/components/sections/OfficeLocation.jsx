import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDirections, faBuilding, faParking } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';

const OfficeLocation = () => {
  const mapUrl = `https://maps.app.goo.gl/9KtJqBCgxWrTGdza9`;
  const embedMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.8234567890!2d71.409663!3d30.165669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzU2LjQiTiA3McKwMjQnMzQuOCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`;

  const locationFeatures = [
    {
      icon: faBuilding,
      title: 'Modern Campus',
      description: 'State-of-the-art classrooms with latest teaching technology'
    },
    {
      icon: faParking,
      title: 'Easy Parking',
      description: 'Ample parking space available for students and parents'
    },
    {
      icon: faDirections,
      title: 'Central Location',
      description: 'Easily accessible from all parts of Multan city'
    }
  ];

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Visit Our Campus
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Come and experience our modern campus in the heart of Multan. 
            We're easily accessible and welcome visitors during office hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div>
            {/* Address Card */}
            <Card className="mb-8">
              <div className="flex items-start">
                <div className="bg-primary-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
                    British Educational Network
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Main Campus, Multan<br />
                    Punjab, Pakistan
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      href={mapUrl}
                      variant="primary"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faDirections} className="mr-2" />
                      Get Directions
                    </Button>
                    <Button
                      href="https://wa.me/+923708382215?text=Hello! I'd like to visit your campus. Can you provide directions?"
                      variant="secondary"
                      size="sm"
                    >
                      Ask for Directions
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Location Features */}
            <div className="space-y-6">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-gold text-primary-red w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FontAwesomeIcon icon={feature.icon} className="text-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visit Info */}
            <Card className="mt-8 bg-white border-2 border-primary-red">
              <h4 className="text-lg font-heading font-semibold mb-4 text-neutral-dark">
                Planning to Visit?
              </h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary-red rounded-full mr-3"></span>
                  Call ahead to schedule a campus tour
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary-red rounded-full mr-3"></span>
                  Meet with our academic counselors
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary-red rounded-full mr-3"></span>
                  See our classrooms and facilities
                </p>
              </div>
              
              <div className="mt-6">
                <Button
                  href="https://wa.me/+923708382215?text=Hello! I'd like to schedule a campus visit at BEN."
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Schedule Visit
                </Button>
              </div>
            </Card>
          </div>

          {/* Google Map */}
          <div className="relative">
            <Card className="overflow-hidden p-0">
              <div className="aspect-w-16 aspect-h-12">
                <iframe
                  src={embedMapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="British Educational Network Location"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-neutral-dark text-sm">BEN Campus</h5>
                      <p className="text-gray-600 text-xs">Multan, Punjab</p>
                    </div>
                    <Button
                      href={mapUrl}
                      variant="primary"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1"
                    >
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="mt-12">
          <Card>
            <div className="text-center">
              <h4 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
                How to Reach Us
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h5 className="font-semibold text-primary-red mb-2">By Car</h5>
                  <p className="text-gray-600 text-sm">
                    Located in central Multan with easy access from main roads. 
                    Parking available on-site.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary-red mb-2">Public Transport</h5>
                  <p className="text-gray-600 text-sm">
                    Accessible via local buses and rickshaws. 
                    Multiple routes pass nearby.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary-red mb-2">Landmarks</h5>
                  <p className="text-gray-600 text-sm">
                    Near major Multan landmarks. 
                    Easy to locate with GPS navigation.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation; 
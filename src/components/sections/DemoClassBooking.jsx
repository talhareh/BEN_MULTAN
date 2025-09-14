import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCalendarAlt, faUsers, faGift } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/Button';
import Card from '../ui/Card';

const DemoClassBooking = () => {
  const demoFeatures = [
    {
      icon: faPlay,
      title: 'Experience Our Teaching',
      description: 'Get a firsthand experience of our interactive teaching methods and see why students love learning with us.'
    },
    {
      icon: faCalendarAlt,
      title: 'Flexible Scheduling',
      description: 'Choose a time that works for you. We offer demo classes throughout the week to fit your schedule.'
    },
    {
      icon: faUsers,
      title: 'Meet Your Instructor',
      description: 'Interact with our expert faculty and see how they make complex topics easy to understand.'
    },
    {
      icon: faGift,
      title: 'Completely Free',
      description: 'No hidden charges, no commitments. Experience our quality education at no cost.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Book a Free Demo Class
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Experience our teaching before enrolling. Book a free demo class with any of our 
            expert instructors and see the difference quality education makes.
          </p>
        </div>

        {/* Demo Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {demoFeatures.map((feature, index) => (
            <Card key={index} hover={true} className="text-center h-full">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={feature.icon} className="text-xl" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold text-neutral-dark mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-r from-primary-red to-red-700 text-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Experience Excellence?
              </h3>
              
              <p className="text-red-100 mb-6 leading-relaxed">
                Join thousands of students who have experienced our teaching quality. 
                Book your free demo class today and take the first step towards academic success.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-gold rounded-full mr-3"></span>
                  <span className="text-red-100">No registration fees</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-gold rounded-full mr-3"></span>
                  <span className="text-red-100">Choose your preferred subject</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-gold rounded-full mr-3"></span>
                  <span className="text-red-100">Available both online and on-campus</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="https://wa.me/+923708382215?text=Hello! I'd like to book a free demo class at BEN. Please let me know the available slots."
                  variant="outline"
                  size="lg"
                  className="bg-white !text-red-900 border-white hover:bg-red-50 hover:!text-red-900 font-semibold"
                >
                  Book Demo Class
                </Button>
                <Button
                  href="https://wa.me/+923708382215?text=Hello! I'd like to know more about your instructors and teaching methods at BEN."
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary-red font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-red-200 text-sm">Demo Classes Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-red-200 text-sm">Students Enrolled After Demo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-red-200 text-sm">Booking Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Free</div>
                <div className="text-red-200 text-sm">No Hidden Charges</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about our demo classes? We're here to help!
          </p>
          <Button
            href="https://wa.me/+923708382215?text=Hello! I have some questions about the demo classes at BEN."
            variant="secondary"
            size="md"
          >
            Ask Questions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoClassBooking; 
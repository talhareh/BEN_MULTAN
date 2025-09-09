import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: faPhone,
      title: 'Phone',
      primary: '+92 300 1234567',
      secondary: 'Mon - Sat: 9:00 AM - 8:00 PM',
      action: 'tel:+923001234567',
      actionText: 'Call Now',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: faEnvelope,
      title: 'Email',
      primary: 'info@ben-multan.com',
      secondary: 'We reply within 24 hours',
      action: 'mailto:info@ben-multan.com',
      actionText: 'Send Email',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: faWhatsapp,
      title: 'WhatsApp',
      primary: '+92 300 1234567',
      secondary: '24/7 Instant Support',
      action: 'https://wa.me/+923001234567?text=Hello! I need information about BEN.',
      actionText: 'Chat Now',
      color: 'bg-green-100 text-green-600'
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: faFacebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: faInstagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: faYoutube, href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions about admissions, class timings, or fees? Contact us today 
            and we'll be happy to help you with all your queries.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} hover={true} className="text-center h-full">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${method.color}`}>
                <FontAwesomeIcon icon={method.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                {method.title}
              </h3>
              
              <p className="text-lg font-semibold text-primary-red mb-2">
                {method.primary}
              </p>
              
              <p className="text-gray-600 text-sm mb-6">
                {method.secondary}
              </p>
              
              <Button
                href={method.action}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                {method.actionText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Office Hours & Social Media */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Office Hours */}
          <Card className="h-full">
            <div className="flex items-start">
              <div className="bg-primary-red text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FontAwesomeIcon icon={faClock} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
                  Office Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Monday - Saturday</span>
                    <span className="font-semibold text-primary-red">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-semibold text-gray-500">Closed</span>
                  </div>
                  <div className="border-t pt-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">WhatsApp Support</span>
                      <span className="font-semibold text-green-600">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Social Media & Follow Us */}
          <Card className="h-full">
            <div className="text-center">
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
                Follow Us
              </h3>
              
              <p className="text-gray-700 mb-6">
                Stay updated with announcements, tips, and success stories from our students.
              </p>
              
              <div className="flex justify-center space-x-6 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200 text-2xl`}
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-primary-red">1K+</div>
                  <div className="text-xs text-gray-600">Followers</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary-red">100+</div>
                  <div className="text-xs text-gray-600">Posts</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary-red">Daily</div>
                  <div className="text-xs text-gray-600">Updates</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-neutral-light rounded-2xl p-8">
            <h4 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
              Need Immediate Assistance?
            </h4>
            <p className="text-gray-700 mb-6">
              For urgent queries or immediate assistance, WhatsApp is the fastest way to reach us.
            </p>
            <Button
              href="https://wa.me/+923001234567?text=Hello! I need immediate assistance regarding BEN."
              variant="primary"
              size="lg"
              className="bg-green-500 hover:bg-green-600"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo; 
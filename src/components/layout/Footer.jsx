import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook as faFacebookBrand, 
  faInstagram as faInstagramBrand, 
  faYoutube as faYoutubeBrand,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const whatsappUrl = `https://wa.me/+923708382215?text=Hello! I'm interested in O/A Level coaching at British Educational Network (BEN).`;

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'O Level Programs', href: '#academics' },
    { name: 'A Level Programs', href: '#academics' },
    { name: 'Our Instructors', href: '#instructors' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: faFacebookBrand, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: faInstagramBrand, href: '#', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: faYoutubeBrand, href: '#', color: 'hover:text-red-600' },
    { name: 'WhatsApp', icon: faWhatsapp, href: whatsappUrl, color: 'hover:text-green-600' }
  ];

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <Image
                  src="/logo.png"
                  alt="BEN Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">BEN</h3>
                <p className="text-sm text-gray-400">British Educational Network</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering students from playgroup to matric, O/A Level, intermediate, English language courses, entry test preparation, and medical courses through expert guidance and innovative teaching methods. Available both online and on-campus.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 text-primary-red mt-1 mr-3" />
                <div>
                  <p className="text-gray-400 text-sm">
                    British Educational Network<br />
                    Main Campus, Multan<br />
                    Punjab, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-primary-red mr-3" />
                <a href="tel:+923708382215" className="text-gray-400 hover:text-white transition-colors">
                  +92 37 08382215
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-primary-red mr-3" />
                <a href="mailto:benmultan@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  benmultan@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400 text-sm mb-4">
              Follow us on social media for updates on tips, announcements, and success stories.
            </p>
            
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-primary-red mr-2" />
                <span className="text-sm font-semibold">Office Hours</span>
              </div>
              <p className="text-gray-400 text-sm">
                Mon - Sat: 10:00 AM - 6:00 PM
              </p>
            </div>

            <a
              href={whatsappUrl}
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2034 British Educational Network (BEN). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
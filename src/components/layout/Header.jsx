'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/+923001234567?text=Hello! I'm interested in O/A Level coaching at British Educational Network (BEN).`;

  const navItems = [
    { name: 'Home', href: '/', current: false },
    { name: 'Academics', href: '/academics', current: false },
    { name: 'Instructors', href: '/instructors', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="mr-3">
                <Image
                  src="/logo.png"
                  alt="BEN Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-primary-red">BEN</h1>
                <p className="text-xs text-gray-600">British Educational Network</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    item.current
                      ? 'text-primary-red border-b-2 border-primary-red'
                      : 'text-gray-700 hover:text-primary-red hover:border-b-2 hover:border-primary-red'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <Button
              href={whatsappUrl}
              variant="primary"
              size="sm"
              className="bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-red focus:outline-none focus:text-primary-red"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  item.current
                    ? 'text-primary-red bg-red-50'
                    : 'text-gray-700 hover:text-primary-red hover:bg-red-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button
                href={whatsappUrl}
                variant="primary"
                size="sm"
                className="w-full bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                Contact via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
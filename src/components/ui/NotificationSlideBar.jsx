'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBell, faExclamationTriangle, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const NotificationSlideBar = ({ 
  message = "New Admissions Open! Limited seats available for O & A Level classes. Enroll now!",
  type = "admission", // admission, alert, info
  actionText = "Enroll Now",
  actionUrl = "/contact",
  delay = 1000,
  autoHide = false,
  autoHideDelay = 10000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Show notification after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Auto hide functionality
  useEffect(() => {
    if (isVisible && autoHide) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDelay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoHide, autoHideDelay]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const handleAction = () => {
    if (actionUrl) {
      window.open(actionUrl, '_blank');
    }
  };

  // Get icon and styling based on type
  const getNotificationConfig = () => {
    switch (type) {
      case 'alert':
        return {
          icon: faExclamationTriangle,
          bgClass: 'bg-gradient-to-r from-orange-600 to-red-600',
          borderClass: 'border-orange-500',
          ringOffsetClass: 'focus:ring-offset-orange-600'
        };
      case 'info':
        return {
          icon: faBell,
          bgClass: 'bg-gradient-to-r from-blue-600 to-blue-700',
          borderClass: 'border-blue-500',
          ringOffsetClass: 'focus:ring-offset-blue-600'
        };
      case 'admission':
      default:
        return {
          icon: faGraduationCap,
          bgClass: 'bg-gradient-to-r from-primary-red to-red-700',
          borderClass: 'border-red-600',
          ringOffsetClass: 'focus:ring-offset-red-700'
        };
    }
  };

  const config = getNotificationConfig();

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-16 left-0 right-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isClosing ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className={`${config.bgClass} text-white shadow-lg border-b ${config.borderClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-0">
            {/* Left side - Icon and message */}
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="flex-shrink-0">
                <FontAwesomeIcon 
                  icon={config.icon} 
                  className="h-5 w-5 text-primary-gold animate-pulse" 
                />
              </div>
              <div className="flex-1 min-w-0 overflow-hidden">
                <p className="text-base font-medium animate-marquee whitespace-nowrap">
                  {message}
                </p>
              </div>
            </div>

            {/* Right side - Close button */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={handleClose}
                className="text-white hover:text-primary-gold focus:outline-none focus:text-primary-gold transition-colors duration-200 p-1 flex-shrink-0"
                aria-label="Close notification"
              >
                <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSlideBar;

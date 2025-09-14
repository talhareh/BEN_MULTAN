import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppFloat = () => {
  const whatsappUrl = `https://wa.me/+923708382215?text=Hello! I'm interested in O/A Level coaching at British Educational Network (BEN).`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloat; 
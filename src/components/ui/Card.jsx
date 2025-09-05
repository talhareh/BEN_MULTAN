import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'p-6',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md';
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105 transition-all duration-300' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${padding} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card; 
import React from 'react';

// Default speed is 30s for slower scroll
const Marquee = ({ children, speed = 30 }) => {
  const marqueeStyle = {
    animationDuration: `${speed}s`,
  };

  // Duplicate children for seamless loop
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-marquee" style={marqueeStyle}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;

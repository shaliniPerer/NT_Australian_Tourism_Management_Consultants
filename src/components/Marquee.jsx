import React from 'react';

const Marquee = ({ children, speed = 5 }) => {
  const marqueeStyle = {
    animationDuration: `${speed}s`,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex">
        <div className="flex-shrink-0 flex animate-marquee" style={marqueeStyle}>
          {children}
        </div>
        <div className="flex-shrink-0 flex animate-marquee" style={marqueeStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

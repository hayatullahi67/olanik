import React from 'react';

const LogosCarousel: React.FC = () => {
  // Previous carousel code commented out - using single image instead
  /*
  const logos = [
    { name: 'tl;dv', src: '/src/assets/logo1.png' },
    { name: 'Latship', src: '/src/assets/logo2.png' },
    { name: 'BREFI', src: '/src/assets/logo3.png' },
    { name: 'Sprint', src: '/src/assets/logo4.png' },
    { name: 'Surfset', src: '/src/assets/logo5.png' },
    { name: 'Momentum', src: '/src/assets/logo6.png' },
    { name: 'Midisc', src: '/src/assets/logo7.png' },
  ];
  */

  return (
    <div className="font-['Inter']">
      <div className=" ">
        <div className="">
          <img
            src="/src/assets/image16.png"
            alt="Company Logos"
            className="w-full h-[80px] "
          />
        </div>
      </div>
    </div>
  );
};

export default LogosCarousel;
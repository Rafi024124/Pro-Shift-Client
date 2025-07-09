import React from 'react';
import Marquee from 'react-fast-marquee';

// import logos
import logo1 from '../../../assets/brands/logo1.png';
import logo2 from '../../../assets/brands/logo2.png';
import logo3 from '../../../assets/brands/logo3.png';
import logo4 from '../../../assets/brands/logo4.png';
import logo5 from '../../../assets/brands/logo5.png';
import logo6 from '../../../assets/brands/logo6.png';
import logo7 from '../../../assets/brands/logo7.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const LogoSlider = () => {
  return (
    <div className="bg-white py-6">
      <Marquee speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <img src={logo} alt={`logo${index + 1}`} className="h-5 w-auto object-contain" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoSlider;

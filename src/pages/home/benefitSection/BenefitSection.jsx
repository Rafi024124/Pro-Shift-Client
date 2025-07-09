import React from 'react';
import benefit1 from '../../../assets/image1.png';
import benefit2 from '../../../assets/image2.png';


const benefits = [
  {
    img: benefit1,
    heading: "Live Parcel Tracking",
    text: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    img: benefit2,
    heading: "100% Safe Delivery",
    text: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: benefit2,
    heading:"24/7 Call Center Support",
    text: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const BenefitSection = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8 lg:px-20 space-y-12">
      {benefits.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
        >
          <img
            src={item.img}
            alt={`Benefit ${index + 1}`}
            className=" w-1/7 w max-w-sm object-contain"
          />

          {/* Vertical Dotted Line */}
          <div className="hidden md:block h-40 border-l-2 border-dotted border-gray-400"></div>
          
           <h1 className='font-extrabold text-primary'>{item.heading}</h1>
          <p className="text-lg text-gray-700 md:w-1/2 text-center md:text-left">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BenefitSection;

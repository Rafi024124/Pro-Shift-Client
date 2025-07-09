import React from 'react';
import { FaShippingFast, FaMapMarkedAlt, FaWarehouse, FaMoneyBillWave, FaBuilding, FaUndo } from 'react-icons/fa';

const servicesData = [
  {
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaShippingFast className="text-4xl text-blue-600" />
  },
  {
    title: "Nationwide Delivery",
    description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaMapMarkedAlt className="text-4xl text-green-600" />
  },
  {
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaWarehouse className="text-4xl text-purple-600" />
  },
  {
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave className="text-4xl text-yellow-600" />
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaBuilding className="text-4xl text-red-600" />
  },
  {
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo className="text-4xl text-indigo-600" />
  }
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

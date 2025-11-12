import React from "react";
import { FaStethoscope, FaVial, FaHeartbeat, FaUserMd } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "General Consultation",
      description:
        "Get expert medical advice and treatment from our experienced doctors for all your health concerns.",
      icon: <FaStethoscope className="text-blue-600 text-4xl mb-4" />,
    },
    {
      id: 2,
      title: "Diagnostics & Lab Tests",
      description:
        "We provide accurate and timely lab tests using advanced diagnostic equipment and trusted reports.",
      icon: <FaVial className="text-blue-600 text-4xl mb-4" />,
    },
    {
      id: 3,
      title: "Cardiac Care",
      description:
        "Our heart specialists offer world-class cardiac treatments, preventive care, and lifestyle management.",
      icon: <FaHeartbeat className="text-blue-600 text-4xl mb-4" />,
    },
    {
      id: 4,
      title: "Specialist Doctors",
      description:
        "Book appointments with highly qualified specialists in fields like pediatrics, gynecology, and orthopedics.",
      icon: <FaUserMd className="text-blue-600 text-4xl mb-4" />,
    },
  ];

  return (
    <section className="bg-white py-16" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Medical Services
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Comprehensive healthcare solutions designed to keep you and your
          family healthy and happy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-blue-50 hover:bg-blue-100 transition duration-300 p-6 rounded-xl shadow-sm hover:shadow-md"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mt-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

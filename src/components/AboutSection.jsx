import React from "react";
import clinic from "../assets/clinic.png";

const AboutSection = () => {
  return (
    <section className="bg-blue-50 py-16" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div>
          <img
            src={clinic}
            alt="Clinic"
            className="w-[400px] max-w-md rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            About <span className="text-blue-600">CarePlus Clinic</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At CarePlus, we believe in combining advanced medical care with compassion. 
            Our team of certified doctors, nurses, and specialists work together to ensure every patient 
            receives personalized treatment in a comfortable environment.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">✓</span>
              <span>Certified and experienced medical professionals</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">✓</span>
              <span>Modern equipment and technology-driven care</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">✓</span>
              <span>Thousands of satisfied and healthy patients</span>
            </li>
          </ul>

          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import doctor from "../assets/doctor2.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById("appointment");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-[500px]">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Your Health, <br /> Our Top Priority
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            We provide expert medical care and modern diagnostics with compassion and commitment.
          </p>
          <div className="mt-6 flex gap-4">
            <button
            onClick={scrollToAppointment}
             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
              Book Appointment
            </button>
            <button onClick={()=>navigate('/health-checkup')} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg">
              Book Health Checkup
            </button>
          </div>

          {/* Trust stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-700">15+</h3>
              <p className="text-gray-500 text-sm">Years of Care</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-700">10K+</h3>
              <p className="text-gray-500 text-sm">Happy Patients</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-700">24/7</h3>
              <p className="text-gray-500 text-sm">Emergency</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={doctor}
            alt="Doctor"
            className=" w-[270px] max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

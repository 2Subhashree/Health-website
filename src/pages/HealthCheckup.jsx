import React from "react";
import health from "../assets/health_checkup.avif";
import doctor from "../assets/doctor1.webp";
import doctor1 from "../assets/doctor3.webp";
import doctor2 from "../assets/doctor4.png";

const HealthCheckup = () => {
  return (
    <div>
      {/* ✅ Hero Banner */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-4">
              Complete <span className="text-blue-600">Health Checkup</span>
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Stay one step ahead of illness with our comprehensive health
              checkup plans. Early detection ensures better treatment and a
              healthier you.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
              Book Appointment
            </button>

            <div className="mt-6 flex gap-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">5000+</h3>
                <p className="text-gray-500 text-sm">Checkups Done</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-700">98%</h3>
                <p className="text-gray-500 text-sm">Patient Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={health}
              alt="Health Checkup"
              className="rounded-xl shadow-lg w-full h-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* ✅ Service Details & Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What’s Included in Our{" "}
            <span className="text-blue-600">Health Checkup</span>
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Our full-body health checkup covers all essential tests to assess
            your vital organs and detect potential diseases early.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Blood & Urine Tests",
                desc: "Comprehensive analysis to detect diabetes, infection, or organ health issues.",
              },
              {
                title: "Heart Health Check",
                desc: "Includes ECG, blood pressure, and cholesterol level testing to monitor cardiovascular health.",
              },
              {
                title: "Liver & Kidney Function",
                desc: "Tests to evaluate proper functioning of your liver and kidneys.",
              },
              {
                title: "Thyroid Profile",
                desc: "Helps identify hormonal imbalances that can affect metabolism and energy levels.",
              },
              {
                title: "Immunity & Vitamin Tests",
                desc: "Assesses vitamin D, B12 levels, and immune strength indicators.",
              },
              {
                title: "Doctor Consultation",
                desc: "Discuss test results and get personalized recommendations from our medical experts.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border border-blue-100 bg-blue-50 hover:bg-blue-100 transition duration-300 p-6 rounded-xl shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ✅ Doctor / Clinic Credibility Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Expert <span className="text-blue-600">Medical Team</span>
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Meet our highly qualified and compassionate doctors dedicated to
            your health and wellbeing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                img: doctor1,
                name: "Dr. Riya Sharma",
                role: "General Physician",
                exp: "7+ Years Experience",
              },
              {
                img: doctor,
                name: "Dr. Arjun Mehta",
                role: "Cardiologist",
                exp: "8+ Years Experience",
              },
              {
                img: doctor2,
                name: "Dr. Surya Kapoor",
                role: "Pathologist",
                exp: "12+ Years Experience",
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-blue-200"
                />
                <h3 className="text-xl font-semibold text-blue-900">
                  {doc.name}
                </h3>
                <p className="text-blue-600 font-medium">{doc.role}</p>
                <p className="text-gray-500 text-sm mt-1">{doc.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Inquiry / Booking Form Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            Book Your <span className="text-blue-600">Health Checkup</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Fill in your details below and our healthcare team will reach out to
            confirm your appointment.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Your appointment request has been submitted successfully!"
              );
            }}
            className="bg-blue-50 p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                maxLength={10}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message / Notes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-blue-900 mb-2">
                Additional Notes
              </label>
              <textarea
                rows="4"
                placeholder="Any specific concerns or requirements?"
                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
              >
                Submit Appointment
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HealthCheckup;

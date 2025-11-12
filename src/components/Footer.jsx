import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Clinic Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">CarePlus Clinic</h2>
          <p className="text-gray-200 mb-4">
            Your trusted partner in healthcare — providing quality medical services with care and compassion.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600">
              <FaFacebook />
            </a>
            <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600">
              <FaInstagram />
            </a>
            <a href="#" className="bg-blue-700 p-2 rounded-full hover:bg-blue-600">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="#hero" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#appointment" className="hover:text-white">Book Appointment</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>123 Patia, Bhubaneswar, Odisha</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />
              <span>+91 9999999999</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <span>careplus@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center border-t border-blue-700 pt-6 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} CarePlus Clinic — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

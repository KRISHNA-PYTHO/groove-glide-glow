
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">Dance App</h3>
            <p className="text-gray-400 mb-4">
              The ultimate platform to learn, explore, and connect with the dance community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-violet">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-violet">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-violet">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-violet">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-violet">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-violet" />
                123 Dance Street, Mumbai, Maharashtra 400001
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-violet" />
                +91 9876543210
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-violet" />
                info@danceapp.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dance App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

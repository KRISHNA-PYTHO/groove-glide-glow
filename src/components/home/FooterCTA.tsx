
import React from "react";
import { Link } from "react-router-dom";
import { Play, Mail } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-navy to-black/90">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
          Ready to Start Your Dance Journey?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Download the app today and join thousands of dance enthusiasts across the country.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#" 
            className="btn-primary flex items-center animate-pulse-slow"
          >
            <Play className="mr-2 h-5 w-5" />
            Download on PlayStore
          </a>
          <Link 
            to="/contact" 
            className="btn-primary bg-transparent border border-violet hover:bg-violet/10"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;

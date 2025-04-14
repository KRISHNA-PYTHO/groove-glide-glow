
import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ArrowLeft, Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const ContactUs = () => {
  useEffect(() => {
    // GSAP animation for page elements
    gsap.fromTo(
      ".contact-animate",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }
    );
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Back button */}
        <Link to="/" className="text-white inline-flex items-center mb-8 hover:text-violet transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text contact-animate">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-animate bg-navy/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full neon-glow"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-animate space-y-8">
              <div className="bg-navy/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-violet mr-3" />
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-violet mr-3" />
                    <span>info@danceapp.com</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-violet mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>Dance Studio Headquarters, <br/>123 Dance Street, Mumbai, <br/>Maharashtra 400001</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="p-3 bg-white/5 rounded-full hover:bg-violet transition-colors duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-white/5 rounded-full hover:bg-violet transition-colors duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-white/5 rounded-full hover:bg-violet transition-colors duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-white/5 rounded-full hover:bg-violet transition-colors duration-300 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

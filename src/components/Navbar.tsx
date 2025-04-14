
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
    
    // Animate navbar on mount
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
    );
  }, [location.pathname]);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Dance App</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className={`nav-item text-sm font-medium ${location.pathname === '/' ? 'text-violet' : 'text-white hover:text-violet'} transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`nav-item text-sm font-medium ${location.pathname === '/about' ? 'text-violet' : 'text-white hover:text-violet'} transition-colors`}>
              About Us
            </Link>
            <Link to="/contact" className={`nav-item text-sm font-medium ${location.pathname === '/contact' ? 'text-violet' : 'text-white hover:text-violet'} transition-colors`}>
              Contact
            </Link>
            <a 
              href="#" 
              className="nav-item btn-primary text-sm"
            >
              Download App
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-violet focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy/90 backdrop-blur-lg border-b border-white/10">
          <Link 
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'text-violet' : 'text-white hover:text-violet'}`}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/about' ? 'text-violet' : 'text-white hover:text-violet'}`}
          >
            About Us
          </Link>
          <Link 
            to="/contact"
            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/contact' ? 'text-violet' : 'text-white hover:text-violet'}`}
          >
            Contact
          </Link>
          <div className="pt-2">
            <a 
              href="#" 
              className="block btn-primary text-center"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

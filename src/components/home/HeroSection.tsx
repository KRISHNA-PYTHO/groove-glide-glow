
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Play } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(
        ".hero-anim",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      );
      
      // Play button animation
      gsap.fromTo(
        ".play-button",
        { scale: 0, rotation: -45 },
        { scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)", delay: 0.6 }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="pt-24 pb-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="hero-anim text-4xl lg:text-6xl font-bold leading-tight">
              Unleash Your Moves. <span className="gradient-text">Download the Dance App Now!</span>
            </h1>
            <p className="hero-anim text-xl text-gray-300 max-w-xl">
              Discover, learn, and perfect your dance moves with the most comprehensive dance app in India.
            </p>
            <div className="hero-anim flex flex-wrap gap-4 pt-4">
              <a href="#" className="play-button btn-primary flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Download on PlayStore
              </a>
              <Link to="/about" className="text-white px-6 py-3 rounded-full border border-white/20 hover:border-violet hover:text-violet transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="hero-anim relative w-64 h-96 md:w-80 md:h-[480px] rounded-3xl overflow-hidden border-2 border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-blueStart/20 to-purpleEnd/20 z-10"></div>
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG91azc4aGRmZDQ3aWVzMDkwdXY2bjFkM3V1ZGk3MmQyaG14b3Y5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKT29VaWlRmOJYk/giphy.gif" 
                alt="Dance App Preview" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

const DanceCard = ({ image, title, description, price }: { image: string, title: string, description: string, price: string }) => (
  <div className="learn-anim bg-white/5 backdrop-blur-sm rounded-xl p-1 hover:p-0.5 transition-all duration-300">
    <div className="bg-navy rounded-xl overflow-hidden h-full">
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover animate-float"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-violet font-bold">{price}</span>
          <button className="text-sm px-4 py-2 rounded-full bg-violet hover:bg-violet/80 transition-colors neon-glow">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

const LearnDanceSection = () => {
  const learnRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Learn section animation
    if (learnRef.current) {
      gsap.fromTo(
        ".learn-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: learnRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  const danceClasses = [
    {
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHR2cTkxMzRzcHY3cTRibmU0Z3R0cTJybW5hbzR4YzVqbzg2ZDF5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mGK1g88HZRa2FlKGSv/giphy.gif",
      title: "Hip Hop Fundamentals",
      description: "Master the basics of Hip Hop dancing with our 4-week beginner course.",
      price: "₹1,499/month"
    },
    {
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlwZm95ZGU2MGlkdjYycXJ5ejM1cHl6aWdiZmxsNzlqOHl5cTczdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cOcpNpYuzUA0Md1j2V/giphy.gif",
      title: "Bollywood Fusion",
      description: "Learn the latest Bollywood hits with our celebrity choreographer.",
      price: "₹1,999/month"
    },
    {
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhubjRjeWdiNXBvNXQxOGszZzNseWNpNXQ2MWg5dWltbzRrZnIyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4KibWpBGWchSqCRy/giphy.gif",
      title: "Contemporary Moves",
      description: "Express yourself through fluid contemporary dance techniques.",
      price: "₹1,799/month"
    }
  ];

  return (
    <section ref={learnRef} className="py-20 bg-gradient-to-b from-navy to-navy/95">
      <div className="container mx-auto px-4">
        <h2 className="learn-anim text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Learn to Dance</span>
        </h2>
        <p className="learn-anim text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Learn trending moves on your favorite songs with premium lessons and monthly subscriptions.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {danceClasses.map((dance, index) => (
            <DanceCard key={index} {...dance} />
          ))}
        </div>
        
        <div className="learn-anim mt-12 text-center">
          <a href="#" className="btn-primary inline-flex items-center px-8">
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearnDanceSection;

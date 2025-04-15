
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users } from "lucide-react";

interface ChoreographerProps {
  name: string;
  title: string;
  image: string;
}

const ChoreographerCard = ({ name, title, image }: ChoreographerProps) => (
  <div className="hire-anim flex flex-col items-center group cursor-pointer transform transition-all duration-500 hover:-translate-y-2">
    <div className="relative">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-violet transition-all duration-500 bg-gradient-to-r from-blueStart to-purpleEnd p-1">
        <div className="w-full h-full rounded-full overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-violet/0 via-violet/30 to-violet/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button className="bg-white text-navy font-bold py-2 px-4 rounded-full transform scale-0 group-hover:scale-110 transition-all duration-500 ease-in-out hover:bg-navy hover:text-white hover:shadow-lg hover:shadow-violet/50">
            Book Now
          </button>
        </div>
      </div>
    </div>
    <h3 className="text-lg font-bold mt-4 mb-1 group-hover:text-violet transition-colors duration-300">{name}</h3>
    <p className="text-gray-400 text-sm group-hover:text-violet transition-colors duration-300">{title}</p>
    <div className="h-1 w-0 bg-gradient-to-r from-blueStart to-purpleEnd group-hover:w-full transition-all duration-500 mt-2 rounded-full"></div>
  </div>
);

const HireUsSection = () => {
  const hireRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hire section animation
    if (hireRef.current) {
      gsap.fromTo(
        ".hire-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: hireRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  const choreographers = [
    {
      name: "Ganesh Acharya",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Terrance Lewis",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Remo D'Souza",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Farah Khan",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Prabhu Deva",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Shiamak Davar",
      title: "Choreographer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section ref={hireRef} className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="hire-anim text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Hire Us</span>
          </h2>
          <Link to="#" className="text-sm text-violet hover:text-white transition-colors">
            See all
          </Link>
        </div>
        <p className="hire-anim text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Hire the country's top choreographers for weddings, school functions, and corporate events.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {choreographers.map((choreographer, index) => (
            <ChoreographerCard key={index} {...choreographer} />
          ))}
        </div>
        
        <div className="hire-anim mt-12 text-center">
          <a href="#" className="inline-flex items-center text-violet hover:text-white transition-colors gap-1 group">
            <Users className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="underline underline-offset-4 group-hover:underline-offset-8 transition-all duration-300">View All Dancers</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireUsSection;

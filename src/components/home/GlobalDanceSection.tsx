
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe } from "lucide-react";

interface DanceFormProps {
  name: string;
  description: string;
  image: string;
  flag: string;
  location: string;
}

const DanceFormCard = ({ name, description, image, flag, location }: DanceFormProps) => (
  <div className="global-anim card-hover">
    <div className="relative group rounded-xl overflow-hidden h-80">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
      <div className="absolute top-4 right-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
          <img 
            src={flag} 
            alt={location} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-violet" />
          <span className="text-sm text-white/70">{location}</span>
        </div>
      </div>
    </div>
  </div>
);

const GlobalDanceSection = () => {
  const globalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Global Dance section animation
    if (globalRef.current) {
      gsap.fromTo(
        ".global-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: globalRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  const danceForms = [
    {
      name: "Bhangra",
      description: "Energetic folk dance from Punjab, India featuring vibrant movements and rhythmic beats.",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3pvb2ZubnplZTA1N3V3aGR3NTZkbDV4bWZ0a3Vnc2E3ejhvb2UwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ozB8fRseg3j10fC/giphy.gif",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
      location: "Northern India"
    },
    {
      name: "Hip Hop",
      description: "Urban dance style that evolved from street dance culture with strong rhythmic movements.",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGQyMmRieHAydnVlMW0wczBqa3UzZm85anV1M2FudGUybGM1Y2ZycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3rgXBvoeXt3MXlqE6c/giphy.gif",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
      location: "United States"
    },
    {
      name: "Bharatanatyam",
      description: "Ancient classical Indian dance form known for its grace, expressions and sculptural poses.",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTF0cjdubGd3dHFkemRubTQwMTI1eTM4MTZuenE4bDB5cXYzam93aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4HohoaD4wx1LHQXS/giphy.gif",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
      location: "South India"
    },
    {
      name: "Ballet",
      description: "Classical dance form characterized by precise and graceful movements with structured techniques.",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzZoZjZraWYzMWI4MW1wZXJoMDdzcWlwaXd3OHQzaW95ZW95MHB2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3UcjBJUov1gckRqM/giphy.gif",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png",
      location: "France"
    },
    {
      name: "Salsa",
      description: "Lively and passionate Latin dance characterized by hip movements and partner work.",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnR0ejYxMjFwa3hzd2E5a3VkeGU2ZnI2NmhyeGFkbG8wOXFzamQzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jFPZ9KENuBv0HRtgIQ/giphy.gif",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Cuba.svg/1200px-Flag_of_Cuba.svg.png",
      location: "Cuba"
    },
    {
      name: "Breakdancing",
      description: "Athletic street dance style featuring acrobatic moves, spins, and freezes.",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWc1ZnlueTlkb29pM3I5NmU2dmhmcWxtbTdwM3YxeDhpNm82OGZxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j3POXKBxc59TgkZtO1/giphy.gif",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
      location: "United States"
    }
  ];

  return (
    <section ref={globalRef} className="py-20 bg-gradient-to-b from-navy/95 to-navy">
      <div className="container mx-auto px-4">
        <h2 className="global-anim text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Global Dance Forms</span>
        </h2>
        <p className="global-anim text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Explore global dance styles from traditional to contemporary forms from around the world.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {danceForms.map((dance, index) => (
            <DanceFormCard key={index} {...dance} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalDanceSection;

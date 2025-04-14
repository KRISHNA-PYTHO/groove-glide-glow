
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft } from "lucide-react";

const AboutUs = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation for timeline items
    if (timelineRef.current) {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.8,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Back button */}
        <Link to="/" className="text-white inline-flex items-center mb-8 hover:text-violet transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>

        {/* Founder Spotlight */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Meet Our Founder</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-64 h-64 bg-gradient-to-r from-blueStart to-purpleEnd rounded-full p-1">
              <div className="w-full h-full rounded-full bg-navy flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606335543042-57c525922933?q=80&w=1000" 
                  alt="Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-xl text-left">
              <h2 className="text-3xl font-bold mb-3">Raj Kapoor</h2>
              <h3 className="text-xl text-violet mb-4">President, Mumbai Dance Federation</h3>
              <p className="text-gray-300 mb-4">
                With over 15 years of professional dance experience, Raj has transformed the Indian dance scene with his innovative choreography and teaching methods.
              </p>
              <p className="text-gray-300">
                His passion for dance and dedication to preserving cultural dance forms while embracing modern styles has earned him recognition across the country.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline & Achievements */}
        <div ref={timelineRef} className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Career Milestones</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blueStart before:to-purpleEnd">
            <div className="timeline-item relative pl-14">
              <div className="absolute left-5 -translate-x-1/2 h-8 w-8 rounded-full bg-violet flex items-center justify-center">
                <span className="text-xs font-bold">2010</span>
              </div>
              <div className="bg-navy/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-2">Founded the Dance Academy</h3>
                <p className="text-gray-300">Started with just 5 students in a small studio, introducing contemporary dance styles to Mumbai.</p>
              </div>
            </div>
            
            <div className="timeline-item relative pl-14">
              <div className="absolute left-5 -translate-x-1/2 h-8 w-8 rounded-full bg-violet flex items-center justify-center">
                <span className="text-xs font-bold">2013</span>
              </div>
              <div className="bg-navy/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-2">First Bollywood Project</h3>
                <p className="text-gray-300">Choreographed for leading Bollywood stars in the blockbuster film "Dance Dhoom".</p>
              </div>
            </div>
            
            <div className="timeline-item relative pl-14">
              <div className="absolute left-5 -translate-x-1/2 h-8 w-8 rounded-full bg-violet flex items-center justify-center">
                <span className="text-xs font-bold">2016</span>
              </div>
              <div className="bg-navy/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-2">International Recognition</h3>
                <p className="text-gray-300">Led a team of 100 dancers at the World Dance Championship, bringing home India's first gold medal.</p>
              </div>
            </div>
            
            <div className="timeline-item relative pl-14">
              <div className="absolute left-5 -translate-x-1/2 h-8 w-8 rounded-full bg-violet flex items-center justify-center">
                <span className="text-xs font-bold">2020</span>
              </div>
              <div className="bg-navy/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-2">Elected Federation President</h3>
                <p className="text-gray-300">Became the youngest president of the Mumbai Dance Federation, implementing revolutionary changes to support dancers.</p>
              </div>
            </div>
            
            <div className="timeline-item relative pl-14">
              <div className="absolute left-5 -translate-x-1/2 h-8 w-8 rounded-full bg-violet flex items-center justify-center">
                <span className="text-xs font-bold">2023</span>
              </div>
              <div className="bg-navy/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-2">Launched the Dance App</h3>
                <p className="text-gray-300">Created the revolutionary Dance App to make professional dance training accessible to everyone across the country.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

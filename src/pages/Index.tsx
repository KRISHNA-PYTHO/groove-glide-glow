
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import { Play, Globe, MapPin, Users, Mail, ArrowRight, Instagram, Facebook, Youtube, Phone } from "lucide-react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);
  const hireRef = useRef<HTMLDivElement>(null);
  const globalRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
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
    
    // Studio section animation
    if (studioRef.current) {
      gsap.fromTo(
        ".studio-anim",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: {
            trigger: studioRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-navy text-white font-montserrat">
      <Navbar />
      
      {/* Hero Section */}
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
      
      {/* Learn to Dance Section */}
      <section ref={learnRef} className="py-20 bg-gradient-to-b from-navy to-navy/95">
        <div className="container mx-auto px-4">
          <h2 className="learn-anim text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Learn to Dance</span>
          </h2>
          <p className="learn-anim text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Learn trending moves on your favorite songs with premium lessons and monthly subscriptions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dance card 1 */}
            <div className="learn-anim bg-white/5 backdrop-blur-sm rounded-xl p-1 hover:p-0.5 transition-all duration-300">
              <div className="bg-navy rounded-xl overflow-hidden h-full">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHR2cTkxMzRzcHY3cTRibmU0Z3R0cTJybW5hbzR4YzVqbzg2ZDF5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mGK1g88HZRa2FlKGSv/giphy.gif" 
                    alt="Hip Hop Dance" 
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Hip Hop Fundamentals</h3>
                  <p className="text-gray-300 mb-4">Master the basics of Hip Hop dancing with our 4-week beginner course.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-violet font-bold">₹1,499/month</span>
                    <button className="text-sm px-4 py-2 rounded-full bg-violet hover:bg-violet/80 transition-colors neon-glow">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dance card 2 */}
            <div className="learn-anim bg-white/5 backdrop-blur-sm rounded-xl p-1 hover:p-0.5 transition-all duration-300">
              <div className="bg-navy rounded-xl overflow-hidden h-full">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlwZm95ZGU2MGlkdjYycXJ5ejM1cHl6aWdiZmxsNzlqOHl5cTczdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cOcpNpYuzUA0Md1j2V/giphy.gif" 
                    alt="Bollywood Dance" 
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bollywood Fusion</h3>
                  <p className="text-gray-300 mb-4">Learn the latest Bollywood hits with our celebrity choreographer.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-violet font-bold">₹1,999/month</span>
                    <button className="text-sm px-4 py-2 rounded-full bg-violet hover:bg-violet/80 transition-colors neon-glow">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dance card 3 */}
            <div className="learn-anim bg-white/5 backdrop-blur-sm rounded-xl p-1 hover:p-0.5 transition-all duration-300">
              <div className="bg-navy rounded-xl overflow-hidden h-full">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhubjRjeWdiNXBvNXQxOGszZzNseWNpNXQ2MWg5dWltbzRrZnIyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4KibWpBGWchSqCRy/giphy.gif" 
                    alt="Contemporary Dance" 
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Contemporary Moves</h3>
                  <p className="text-gray-300 mb-4">Express yourself through fluid contemporary dance techniques.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-violet font-bold">₹1,799/month</span>
                    <button className="text-sm px-4 py-2 rounded-full bg-violet hover:bg-violet/80 transition-colors neon-glow">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="learn-anim mt-12 text-center">
            <a href="#" className="btn-primary inline-flex items-center px-8">
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Hire Us Section */}
      <section ref={hireRef} className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="hire-anim text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Hire Us</span>
          </h2>
          <p className="hire-anim text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Hire the country's top choreographers for weddings, school functions, and corporate events.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dancer 1 */}
            <div className="hire-anim">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-violet/20 transition-all duration-300 group">
                <div className="h-60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity z-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1583456236795-7d3d3a1b0d26" 
                    alt="Priya Sharma" 
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Flip content - skills */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-blueStart/80 to-purpleEnd/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 p-4 text-center">
                    <h4 className="text-lg font-bold mb-1">Specializes in</h4>
                    <p className="text-white mb-2">Contemporary, Hip-Hop, Jazz</p>
                    <h4 className="text-lg font-bold mb-1">Experience</h4>
                    <p className="text-white">10+ years, Choreographed for Bollywood films</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">Priya Sharma</h3>
                  <p className="text-gray-300 text-sm mb-3">Senior Choreographer</p>
                  <button className="w-full text-sm py-2 rounded-full bg-violet hover:bg-violet/80 transition-colors neon-glow">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Dancer 2 */}
            <div className="hire-anim">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-violet/20 transition-all duration-300 group">
                <div className="h-60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity z-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1531384370597-8590413c5570" 
                    alt="Arjun Kapoor" 
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Flip content - skills */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-blueStart/80 to-purpleEnd/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 p-4 text-center">
                    <h4 className="text-lg font-bold mb-1">Specializes in</h4>
                    <p className="text-white mb-2">Bollywood, Hip-Hop, Breaking</p>
                    <h4 className="text-lg font-bold mb-1">Experience</h4>
                    <p className="text-white">8+ years, Stage performances worldwide</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">Arjun Kapoor</h3>
                  <p className="text-gray-300 text-sm mb-3">Performance Lead</p>
                  <button className="w-full text-sm py-2 rounded-full bg-violet hover:bg-violet/80 transition-colors neon-glow">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Dancer 3 */}
            <div className="hire-anim">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-violet/20 transition-all duration-300 group">
                <div className="h-60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity z-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1534931691232-23657e5a239a" 
                    alt="Maya Desai" 
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Flip content - skills */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-blueStart/80 to-purpleEnd/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 p-4 text-center">
                    <h4 className="text-lg font-bold mb-1">Specializes in</h4>
                    <p className="text-white mb-2">Classical, Kathak, Folk</p>
                    <h4 className="text-lg font-bold mb-1">Experience</h4>
                    <p className="text-white">15+ years, National award winner</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">Maya Desai</h3>
                  <p className="text-gray-300 text-sm mb-3">Classical Expert</p>
                  <button className="w-full text-sm py-2 rounded-full bg-violet hover:bg-violet/80 transition-colors neon-glow">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Dancer 4 */}
            <div className="hire-anim">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-violet/20 transition-all duration-300 group">
                <div className="h-60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity z-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1517877086037-561809275d76" 
                    alt="Rahul Shah" 
                    className="w-full h-full object-cover object-top"
                  />
                  
                  {/* Flip content - skills */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-blueStart/80 to-purpleEnd/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 p-4 text-center">
                    <h4 className="text-lg font-bold mb-1">Specializes in</h4>
                    <p className="text-white mb-2">Freestyle, Breaking, Popping</p>
                    <h4 className="text-lg font-bold mb-1">Experience</h4>
                    <p className="text-white">7+ years, International dance battles</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1">Rahul Shah</h3>
                  <p className="text-gray-300 text-sm mb-3">Urban Dance Specialist</p>
                  <button className="w-full text-sm py-2 rounded-full bg-violet hover:bg-violet/80 transition-colors neon-glow">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hire-anim mt-12 text-center">
            <a href="#" className="inline-flex items-center text-violet hover:text-white transition-colors gap-1">
              <Users className="h-5 w-5" />
              <span className="underline underline-offset-4">View All Dancers</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Global Dance Forms Section */}
      <section ref={globalRef} className="py-20 bg-gradient-to-b from-navy/95 to-navy">
        <div className="container mx-auto px-4">
          <h2 className="global-anim text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Global Dance Forms</span>
          </h2>
          <p className="global-anim text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Explore global dance styles from traditional to contemporary forms from around the world.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dance form 1 */}
            <div className="global-anim card-hover">
              <div className="relative group rounded-xl overflow-hidden h-80">
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3pvb2ZubnplZTA1N3V3aGR3NTZkbDV4bWZ0a3Vnc2E3ejhvb2UwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ozB8fRseg3j10fC/giphy.gif" 
                  alt="Bhangra" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" 
                      alt="India" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Bhangra</h3>
                  <p className="text-gray-300 mb-4">Energetic folk dance from Punjab, India featuring vibrant movements and rhythmic beats.</p>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-violet" />
                    <span className="text-sm text-white/70">Northern India</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dance form 2 */}
            <div className="global-anim card-hover">
              <div className="relative group rounded-xl overflow-hidden h-80">
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGQyMmRieHAydnVlMW0wczBqa3UzZm85anV1M2FudGUybGM1Y2ZycSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3rgXBvoeXt3MXlqE6c/giphy.gif" 
                  alt="Hip Hop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" 
                      alt="USA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Hip Hop</h3>
                  <p className="text-gray-300 mb-4">Urban dance style that evolved from street dance culture with strong rhythmic movements.</p>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-violet" />
                    <span className="text-sm text-white/70">United States</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dance form 3 */}
            <div className="global-anim card-hover">
              <div className="relative group rounded-xl overflow-hidden h-80">
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTF0cjdubGd3dHFkemRubTQwMTI1eTM4MTZuenE4bDB5cXYzam93aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4HohoaD4wx1LHQXS/giphy.gif" 
                  alt="Bharatanatyam" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" 
                      alt="India" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Bharatanatyam</h3>
                  <p className="text-gray-300 mb-4">Ancient classical Indian dance form known for its grace, expressions and sculptural poses.</p>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-violet" />
                    <span className="text-sm text-white/70">South India</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dance form 4 */}
            <div className="global-anim card-hover">
              <div className="relative group rounded-xl overflow-hidden h-80">
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzZoZjZraWYzMWI4MW1wZXJoMDdzcWlwaXd3OHQzaW95ZW95MHB2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3UcjBJUov1gckRqM/giphy.gif" 
                  alt="Ballet" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png" 
                      alt="France" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Ballet</h3>
                  <p className="text-gray-300 mb-4">Classical dance form characterized by precise and graceful movements with structured techniques.</p>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-violet" />
                    <span className="text-sm text-white/70">France</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dance form 5 */}
            <div className="global-anim card-hover">
              <div className="relative group rounded-xl overflow-hidden h-80">
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnR0ejYxMjFwa3hzd2E5a3VkeGU2ZnI2NmhyeGFkbG8wOXFzamQzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jFPZ9KENuBv0HRtgIQ/giphy.gif" 
                  alt="Salsa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Cuba.svg/1200px-Flag_of_Cuba.svg.png" 
                      alt="Cuba" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Salsa</h3>
                  <p className="text-gray-300 mb-4">Lively and passionate Latin dance characterized by hip movements and partner work.</p>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-violet" />
                    <span className="text-sm text-white/70">Cuba</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dance form 6 */}
            <div className="global-anim card-hover">
              <div className="relative group rounded-xl overflow-hidden h-80">
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWc1ZnlueTlkb29pM3I5NmU2dmhmcWxtbTdwM3YxeDhpNm82OGZxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j3POXKBxc59TgkZtO1/giphy.gif" 
                  alt="Breakdancing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" 
                      alt="USA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Breakdancing</h3>
                  <p className="text-gray-300 mb-4">Athletic street dance style featuring acrobatic moves, spins, and freezes.</p>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-violet" />
                    <span className="text-sm text-white/70">United States</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* B2D in Your City Section */}
      <section ref={studioRef} className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="studio-anim text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">B2D in Your City</span>
              </h2>
              <p className="studio-anim text-xl text-gray-300 mb-6">
                Let local dance studios register through the app to attract more students.
              </p>
              <div className="studio-anim space-y-6">
                <div className="flex items-start">
                  <div className="bg-violet/10 p-2 rounded-full mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.5 9C6.32843 9 7 8.32843 7 7.5C7 6.67157 6.32843 6 5.5 6C4.67157 6 4 6.67157 4 7.5C4 8.32843 4.67157 9 5.5 9Z" fill="#956DFF"/>
                      <path d="M18.5 9C19.3284 9 20 8.32843 20 7.5C20 6.67157 19.3284 6 18.5 6C17.6716 6 17 6.67157 17 7.5C17 8.32843 17.6716 9 18.5 9Z" fill="#956DFF"/>
                      <path d="M18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18Z" fill="#956DFF"/>
                      <path d="M5.5 18C6.32843 18 7 17.3284 7 16.5C7 15.6716 6.32843 15 5.5 15C4.67157 15 4 15.6716 4 16.5C4 17.3284 4.67157 18 5.5 18Z" fill="#956DFF"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Increased Visibility</h3>
                    <p className="text-gray-300">Get discovered by thousands of dance enthusiasts in your area looking for classes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-violet/10 p-2 rounded-full mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.99995 3H8.99995C7.04996 8.84 7.04996 15.16 8.99995 21H7.99995" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Easy Bookings</h3>
                    <p className="text-gray-300">Integrated booking system allows students to register for classes directly through the app.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-violet/10 p-2 rounded-full mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H6C3 2 2 3.79 2 6V7Z" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 13.01H12" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 9.01H12" stroke="#956DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.99561 13H6.00459" stroke="#956DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.99561 9H6.00459" stroke="#956DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Analytics Dashboard</h3>
                    <p className="text-gray-300">Track student engagement, class popularity, and revenue through our comprehensive analytics.</p>
                  </div>
                </div>
              </div>
              
              <div className="studio-anim mt-8">
                <a 
                  href="#" 
                  className="btn-primary inline-flex items-center"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Have a Dance Studio? List it Now!
                </a>
              </div>
            </div>
            
            <div className="studio-anim relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet/30 rounded-full filter blur-[80px]"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blueStart/30 rounded-full filter blur-[80px]"></div>
              <div className="relative bg-navy border border-white/10 rounded-2xl p-1 shadow-xl">
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHBxcnBrZ3I1YjdsdTl5OWsyY3JyNWViY2VzazQ0MG1vaDVoZHN0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYOwS7JDddcyo3m/giphy.gif" 
                  alt="Dance Studio" 
                  className="w-full h-80 object-cover rounded-2xl md:h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
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
      
      {/* Footer */}
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
    </div>
  );
};

export default Index;


import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

const StudioSection = () => {
  const studioRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
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
  );
};

export default StudioSection;

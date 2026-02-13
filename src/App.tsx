import { useEffect, useState, useRef } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WhyAttend from './sections/WhyAttend';
import Tracks from './sections/Tracks';
import Prizes from './sections/Prizes';
import Speakers from './sections/Speakers';
import Sponsors from './sections/Sponsors';
import Footer from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={mainRef}
      className="min-h-screen bg-dark text-white overflow-x-hidden"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 grid-bg opacity-50"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow" />
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Scanline Overlay */}
        <div className="scanline absolute inset-0" />
      </div>

      {/* Navigation */}
      <Navigation scrollY={scrollY} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero isLoaded={isLoaded} />
        <WhyAttend />
        <Tracks />
        <Prizes />
        <Speakers />
        <Sponsors />
        <Footer />
      </main>
    </div>
  );
}

export default App;

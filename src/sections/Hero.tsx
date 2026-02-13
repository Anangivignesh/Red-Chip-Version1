import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  isLoaded: boolean;
}

const Hero = ({ isLoaded }: HeroProps) => {
  const [counts, setCounts] = useState({ hackers: 0, prize: 0, hours: 0, colleges: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cubeRef = useRef<HTMLDivElement>(null);

  const stats = [
    { key: 'hackers', value: 500, suffix: '+', label: 'HACKERS' },
    { key: 'prize', value: 3, suffix: 'L+', label: 'PRIZE POOL' },
    { key: 'hours', value: 24, suffix: '', label: 'HOURS' },
    { key: 'colleges', value: 50, suffix: '+', label: 'COLLEGES' },
  ];

  useEffect(() => {
    if (!isLoaded) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        hackers: Math.floor(500 * easeOut),
        prize: Math.floor(3 * easeOut),
        hours: Math.floor(24 * easeOut),
        colleges: Math.floor(50 * easeOut),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isLoaded]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 radial-glow opacity-50" />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red/10 border border-red/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-medium text-red tracking-wider">
                REGISTRATION OPEN
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-orbitron text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 leading-none">
              <span className="block text-white">INNO</span>
              <span className="block gradient-text">HACK 2.0</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gold font-medium mb-2">
              Innovate. Build. Impact.
            </p>
            <p className="text-white/60 text-sm sm:text-base mb-8 max-w-md mx-auto lg:mx-0">
              The nation's premier student hackathon experience. Join 500+ innovators for 24 hours of coding, creativity, and collaboration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollToSection('#register')}
                className="group px-8 py-4 bg-red hover:bg-red-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2 btn-shine"
              >
                Register Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#sponsors')}
                className="px-8 py-4 border border-white/20 hover:border-gold text-white font-medium rounded-full transition-all duration-300 hover:bg-gold/10"
              >
                Sponsor Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.key}
                  className={`text-center p-3 glass rounded-xl border-glow transition-all duration-500 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="font-orbitron text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    {counts[stat.key as keyof typeof counts]}
                    <span className="text-red">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/50 tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Cube */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div
              ref={cubeRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Glow Effect Behind Cube */}
              <div className="absolute inset-0 bg-red/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Cube Image */}
              <img
                src="/hero-cube.png"
                alt="3D Cube"
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(255, 0, 0, 0.5))',
                }}
              />

              {/* Orbiting Particles */}
              <div className="absolute inset-0 animate-spin-slow">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gold rounded-full"
                    style={{
                      top: `${50 + 45 * Math.sin((i * Math.PI) / 3)}%`,
                      left: `${50 + 45 * Math.cos((i * Math.PI) / 3)}%`,
                      boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 border border-red/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-5 -left-5 w-16 h-16 border border-gold/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
};

export default Hero;

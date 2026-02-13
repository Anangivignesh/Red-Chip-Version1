import { useEffect, useRef, useState } from 'react';
import { Check, Trophy, Medal, Award } from 'lucide-react';

const Prizes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mainPrizes = [
    {
      place: '2nd Place',
      amount: '₹1,00,000',
      trophy: '/trophy-silver.png',
      icon: Medal,
      color: 'from-gray-400 to-gray-600',
      glowColor: 'shadow-gray-500/30',
      features: [
        'Silver Tier Certificates',
        'Premium Goodies',
        'Internship Interviews',
        'Cloud Credits',
      ],
    },
    {
      place: 'CHAMPION',
      amount: '₹1,50,000',
      trophy: '/trophy-gold.png',
      icon: Trophy,
      color: 'from-gold to-yellow-600',
      glowColor: 'shadow-gold/50',
      features: [
        'Gold Tier Certificates',
        'Flagship Smartphones',
        'Direct Job Offers',
        'Premium Cloud Credits',
      ],
      featured: true,
    },
    {
      place: '3rd Place',
      amount: '₹50,000',
      trophy: '/trophy-bronze.png',
      icon: Award,
      color: 'from-amber-600 to-amber-800',
      glowColor: 'shadow-amber-600/30',
      features: [
        'Bronze Tier Certificates',
        'Team Goodies',
        'Internship Interviews',
        'Cloud Credits',
      ],
    },
  ];

  const trackPrizes = [
    { track: 'Best AI/ML Project', amount: '₹25,000' },
    { track: 'Best Web3 Project', amount: '₹25,000' },
    { track: 'Best FinTech Project', amount: '₹25,000' },
    { track: 'Best HealthTech Project', amount: '₹25,000' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="prizes"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Prize </span>
            <span className="gradient-text">Pool</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Compete for the ultimate glory and rewards. Total prize pool worth ₹3,00,000.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-end mb-16">
          {mainPrizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={prize.place}
                className={`relative group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${prize.featured ? 'md:-mt-8' : ''}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Card */}
                <div
                  className={`relative glass rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover-lift ${
                    prize.featured
                      ? 'border-gold/50 shadow-glow-gold'
                      : 'border-white/10 hover:border-red/30'
                  }`}
                >
                  {/* Featured Badge */}
                  {prize.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-dark text-xs font-bold rounded-full">
                      GRAND PRIZE
                    </div>
                  )}

                  {/* Trophy Image */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6">
                    <img
                      src={prize.trophy}
                      alt={prize.place}
                      className={`w-full h-full object-contain ${
                        prize.featured ? 'animate-float' : ''
                      }`}
                    />
                    {prize.featured && (
                      <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse-glow" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon className={`w-5 h-5 ${prize.featured ? 'text-gold' : 'text-white/60'}`} />
                      <span className="text-white/60 text-sm font-medium">{prize.place}</span>
                    </div>
                    <div
                      className={`font-orbitron text-3xl sm:text-4xl font-bold mb-4 ${
                        prize.featured ? 'gradient-text' : 'text-white'
                      }`}
                    >
                      {prize.amount}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {prize.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-white/60 text-sm"
                        >
                          <Check className="w-4 h-4 text-red flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${prize.glowColor}`}
                    style={{ boxShadow: `0 0 40px currentColor` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Track Prizes */}
        <div
          className={`glass rounded-2xl p-6 sm:p-8 border border-white/10 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="font-orbitron text-xl font-bold text-white mb-6 text-center">
            Track <span className="text-gold">Prizes</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trackPrizes.map((track) => (
              <div
                key={track.track}
                className="group p-4 bg-white/5 rounded-xl hover:bg-red/10 transition-colors duration-300 border border-white/5 hover:border-red/30"
              >
                <div className="font-orbitron text-xl font-bold text-gold mb-1">
                  {track.amount}
                </div>
                <div className="text-white/60 text-sm">{track.track}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;

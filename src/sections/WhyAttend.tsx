import { useEffect, useRef, useState } from 'react';
import { Trophy, Users, Lightbulb, Rocket } from 'lucide-react';

const WhyAttend = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: Trophy,
      title: 'Grand Prizes',
      description: 'Compete for a prize pool of ₹3,00,000 across multiple tracks. Win cash, gadgets, and internship opportunities.',
      color: 'gold',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Get 1-on-1 guidance from industry leaders at Google, Microsoft, and top startups. Learn from the best while you build.',
      color: 'red',
    },
    {
      icon: Lightbulb,
      title: 'Elite Networking',
      description: 'Connect with 500+ like-minded developers and potential co-founders. Your next big opportunity starts here.',
      color: 'gold',
    },
    {
      icon: Rocket,
      title: 'Launch Your Career',
      description: 'Showcase your skills to top recruiters. Past participants have landed jobs at FAANG and unicorn startups.',
      color: 'red',
    },
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
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Why </span>
            <span className="gradient-text">Attend?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Join hundreds of passionate innovators for an unforgettable experience that could change your career trajectory.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative glass rounded-2xl p-6 border border-white/5 hover:border-red/50 transition-all duration-500 hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    feature.color === 'gold' ? 'bg-gold/5' : 'bg-red/5'
                  }`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    feature.color === 'gold'
                      ? 'bg-gold/10 text-gold group-hover:shadow-glow-gold'
                      : 'bg-red/10 text-red group-hover:shadow-glow'
                  } transition-all duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    feature.color === 'gold' ? 'text-gold/20' : 'text-red/20'
                  }`}
                >
                  <Icon className="w-full h-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div
          className={`mt-16 glass rounded-2xl p-6 sm:p-8 border-glow transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '24', label: 'Hours of Hacking' },
              { value: '6', label: 'Problem Tracks' },
              { value: '50+', label: 'Expert Mentors' },
              { value: '100+', label: 'Projects Built' },
            ].map((stat, index) => (
              <div key={stat.label} className="relative">
                <div className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/50">{stat.label}</div>
                {index < 3 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;

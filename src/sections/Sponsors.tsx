import { useEffect, useRef, useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Sponsors = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const sponsorTiers = [
    {
      tier: 'Title Sponsor',
      sponsors: [
        { name: 'DEVFOLIO', logo: 'DEVFOLIO', color: 'text-white' },
      ],
    },
    {
      tier: 'Gold Sponsors',
      sponsors: [
        { name: 'POLYGON', logo: 'POLYGON', color: 'text-gold' },
        { name: 'ETHINDIA', logo: 'ETHINDIA', color: 'text-gold' },
      ],
    },
    {
      tier: 'Silver Sponsors',
      sponsors: [
        { name: 'Replit', logo: 'Replit', color: 'text-white/80' },
        { name: 'Filecoin', logo: 'Filecoin', color: 'text-white/80' },
        { name: 'Solana', logo: 'Solana', color: 'text-white/80' },
        { name: 'Tezos', logo: 'Tezos', color: 'text-white/80' },
      ],
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
      id="sponsors"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 radial-glow opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Fueling the future of innovation. Partner with India's premier student hackathon.
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIndex) => (
            <div
              key={tier.tier}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + tierIndex * 150}ms` }}
            >
              {/* Tier Label */}
              <div className="text-center mb-6">
                <span
                  className={`inline-block px-4 py-1 rounded-full text-xs font-medium ${
                    tier.tier === 'Title Sponsor'
                      ? 'bg-red/20 text-red border border-red/30'
                      : tier.tier === 'Gold Sponsors'
                      ? 'bg-gold/20 text-gold border border-gold/30'
                      : 'bg-white/10 text-white/60 border border-white/10'
                  }`}
                >
                  {tier.tier}
                </span>
              </div>

              {/* Sponsor Logos */}
              <div
                className={`flex flex-wrap justify-center gap-4 sm:gap-6 ${
                  tier.tier === 'Title Sponsor' ? 'max-w-md mx-auto' : ''
                }`}
              >
                {tier.sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href="#"
                    className="group relative glass rounded-xl p-6 sm:p-8 border border-white/5 hover:border-red/30 transition-all duration-500 hover-lift min-w-[140px] sm:min-w-[180px] text-center"
                  >
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red/10 to-transparent h-full w-full animate-pulse" />
                    </div>

                    {/* Logo Text */}
                    <span
                      className={`font-orbitron text-xl sm:text-2xl font-bold ${sponsor.color} group-hover:text-gold transition-colors`}
                    >
                      {sponsor.logo}
                    </span>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 glass rounded-2xl p-8 sm:p-12 border border-white/10 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4">
            Become a <span className="gradient-text">Sponsor</span>
          </h3>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            Join industry leaders in supporting the next generation of innovators. Download our sponsorship prospectus to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-red hover:bg-red-dark text-white rounded-full transition-all duration-300 hover:shadow-glow btn-shine"
            >
              <Download className="w-4 h-4" />
              Download Prospectus
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:border-gold text-white hover:text-gold rounded-full transition-all duration-300"
            >
              Contact Us
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

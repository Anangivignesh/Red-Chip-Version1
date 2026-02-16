import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Speakers = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const speakers = [
    {
      name: 'Sarah Chen',
      role: 'AI Research Lead',
      company: 'Google',
      image: '/speaker-1.png',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'David Miller',
      role: 'Cloud Architect',
      company: 'AWS',
      image: '/speaker-2.png',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Priya Patel',
      role: 'AI Researcher',
      company: 'OpenAI',
      image: '/speaker-3.png',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Marcus Johnson',
      role: 'Founder & CEO',
      company: 'TechFlow Inc.',
      image: '/speaker-4.png',
      linkedin: '#',
      twitter: '#',
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
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 radial-glow opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">Speakers </span>
            <span className="text-primary">&</span>
            <span className="gradient-text"> Judges</span>
          </h2>
          <p className="text-slate-500 dark:text-white/60 max-w-2xl mx-auto text-lg">
            Learn from industry leaders who have built and scaled world-changing products.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative glass rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-all duration-500 hover-lift bg-white dark:bg-transparent">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-80" />

                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={speaker.linkedin}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/50 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={speaker.twitter}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/50 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-4 -mt-16 text-center sm:text-left z-10">
                  <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-secondary transition-colors mb-1 drop-shadow-md">
                    {speaker.name}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">{speaker.role}</p>
                  <p className="text-primary text-sm font-bold">{speaker.company}</p>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border border-primary/30" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-white/40 text-sm mb-4">
            More speakers to be announced soon!
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-300 text-sm font-medium"
          >
            Become a Speaker
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speakers;

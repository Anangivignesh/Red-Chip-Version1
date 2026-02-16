import { useRef, memo, useState, useEffect } from 'react';

const SponsorTicker = memo(() => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sponsors = [
    { name: 'Google Cloud', logo: '/logos/google.png' },
    { name: 'Microsoft', logo: '/logos/microsoft.png' },
    { name: 'GitHub', logo: '/logos/github.png' },
    { name: 'DigitalOcean', logo: '/logos/digitalocean.png' },
    { name: 'Vercel', logo: '/logos/vercel.png' },
    { name: 'Auth0', logo: '/logos/auth0.png' },
    { name: 'Polygon', logo: '/logos/polygon.png' },
    { name: 'Solana', logo: '/logos/solana.png' },
  ];

  // Handle scroll to update active index based on center position
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const containerCenter = container.getBoundingClientRect().width / 2;
    const children = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2 - container.getBoundingClientRect().left;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="w-full flex gap-8 overflow-x-auto snap-x snap-mandatory py-10 px-[50%] no-scrollbar"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={`${sponsor.name}-${index}`}
            className={`snap-center shrink-0 transition-all duration-500 ${index === activeIndex ? 'scale-125 z-10 opacity-100' : 'scale-90 opacity-40 grayscale blur-[1px]'}`}
          >
            <div className={`w-40 h-24 bg-white dark:bg-card/40 border border-slate-100 dark:border-white/10 rounded-xl flex items-center justify-center p-4 shadow-sm transition-all duration-500 ${index === activeIndex ? 'shadow-2xl shadow-primary/20 border-primary/50' : ''}`}>
              <span className={`font-bold text-lg transition-colors ${index === activeIndex ? 'text-primary' : 'text-slate-400'}`}>{sponsor.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Hints */}
      <div className="flex justify-center mt-4 gap-2">
        {sponsors.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-white/20'}`} />
        ))}
      </div>
    </div>
  );
});

const Sponsors = () => {

  const platinumPartners = [
    { name: 'Google', icon: 'G' },
    { name: 'Amazon', icon: 'aws' },
    { name: 'Meta', icon: '∞' }
  ];

  const goldPartners = [
    { name: 'Postman', icon: 'P' },
    { name: 'MongoDB', icon: 'M' },
    { name: 'Twilio', icon: 'Tw' },
    { name: 'X', icon: 'X' }
  ];

  return (
    <section id="sponsors" className="py-24 bg-white dark:bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 dark:bg-primary/10 text-primary font-bold text-xs tracking-widest mb-4">
            COMMUNITY PARTNERS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 font-orbitron">
            Empowering <span className="text-primary">Innovation</span> Together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            We are proud to partner with industry leaders who are committed to fostering the next generation of tech innovators.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all hover:-translate-y-1">
              Download Prospectus
            </button>
            <button className="px-8 py-4 bg-white dark:bg-transparent border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white font-bold rounded-lg hover:border-slate-900 dark:hover:border-white/50 transition-all">
              Become a Sponsor
            </button>
          </div>
        </div>

        {/* Platinum */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-20 bg-slate-200 dark:bg-white/10" />
            <h3 className="font-bold tracking-widest text-slate-900 dark:text-white text-xl uppercase">Platinum <span className="text-primary">Partners</span></h3>
            <div className="h-px w-20 bg-slate-200 dark:bg-white/10" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {platinumPartners.map((p, i) => (
              <div key={i} className="h-48 bg-white dark:bg-card/30 border border-slate-100 dark:border-white/5 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center rounded-lg text-2xl font-bold group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <h3 className="font-bold tracking-widest text-slate-900 dark:text-white text-lg uppercase border-b-2 border-primary pb-2">Gold Contributors</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goldPartners.map((p, i) => (
              <div key={i} className="h-32 bg-white dark:bg-card/30 border border-slate-100 dark:border-white/5 rounded-xl flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-teal-600 text-white flex items-center justify-center rounded text-xl font-bold">
                  {p.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticker for Silver/Others */}
        <div className="py-12 border-t border-slate-100 dark:border-white/5">
          <div className="text-center text-xs font-bold tracking-widest text-slate-400 mb-8 uppercase">Silver & Community Support</div>
          <SponsorTicker />
        </div>

        {/* CTA Box */}
        <div className="mt-20 rounded-3xl bg-slate-50 dark:bg-card/30 p-12 text-center border border-slate-100 dark:border-white/5">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Want to make an impact?</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl mx-auto">Join us in shaping the future of technology. Get access to top talent, increase brand visibility, and support innovation.</p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">Download Prospectus</button>
            <button className="px-6 py-3 bg-white dark:bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-red-50 dark:hover:bg-primary/10 transition-colors">Contact Team</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

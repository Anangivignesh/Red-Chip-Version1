import { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Award, Check } from 'lucide-react';

const Prizes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const prizes = [
    {
      place: '2nd Place',
      amount: '₹1,00,000', // $5,000 equivalent
      icon: Medal,
      image: '/trophy-silver.png',
      features: ['Accelerator Interview', 'Silver Swag Kit', '1 Year Cloud Credits'],
      color: 'text-slate-600',
      delay: 200
    },
    {
      place: '1st Place',
      amount: '₹1,50,000', // $10,000 equivalent
      icon: Trophy,
      image: '/trophy-gold.png',
      features: ['Direct Incubator Entry', 'VIP Mentorship Program', 'Gold Swag Box & Gadgets', '$5k Cloud Credits'],
      color: 'text-primary',
      isChampion: true,
      delay: 0
    },
    {
      place: '3rd Place',
      amount: '₹50,000', // $2,500 equivalent
      icon: Award,
      image: '/trophy-bronze.png',
      features: ['Online Mentorship', 'Bronze Swag Kit', '6 Months Cloud Credits'],
      color: 'text-amber-700',
      delay: 400
    },
  ];

  const trackPrizes = [
    { title: 'Best Design', amount: '₹25,000', desc: 'For the most intuitive, beautiful, and user-centric UI/UX design.', icon: '🎨' },
    { title: 'Technical Feat', amount: '₹25,000', desc: 'Awarded to the team with the most complex and robust backend architecture.', icon: '⚡' },
    { title: 'Sustainability', amount: '₹25,000', desc: 'For the solution that best addresses environmental or social impact goals.', icon: '🌱' },
    { title: 'Audience Choice', amount: '₹25,000', desc: 'Voted by fellow hackers and attendees during the final demo showcase.', icon: '👥' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="prizes" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-secondary/20 dark:from-background dark:to-background/80 relative overflow-hidden transition-colors duration-300">
      {/* Background Radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-red-50/50 dark:bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-primary font-bold tracking-widest text-xs uppercase mb-2">Rewards & Recognition</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-orbitron">
            Unlock the <span className="text-primary">Rewards</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Innovate, build, and win big. We've dedicated over <span className="text-primary font-bold">₹3,00,000</span> in cash and prizes for the most groundbreaking solutions.
          </p>
        </div>

        {/* Main Prizes Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-end max-w-6xl mx-auto mb-24">
          {prizes.map((prize) => (
            <div
              key={prize.place}
              className={`relative bg-white dark:bg-card/50 dark:border-white/10 rounded-3xl p-8 shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 ${prize.isChampion ? 'lg:-mt-12 lg:mb-12 ring-1 ring-primary/10 shadow-primary/10 scale-105 z-10' : 'hover:shadow-2xl'}`}
              style={{ transitionDelay: `${prize.delay}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? `translateY(0) ${prize.isChampion ? 'scale(1.05)' : ''}` : 'translateY(40px)' }}
            >
              {prize.isChampion && (
                <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Champion
                </div>
              )}

              {/* Image Mockup Placeholder */}
              <div className={`h-40 mb-6 flex items-center justify-center ${prize.isChampion ? 'h-48' : ''}`}>
                {/* In a real app, img src={prize.image} */}
                <prize.icon className={`w-24 h-24 ${prize.color} opacity-80`} strokeWidth={1} />
              </div>

              <div className="text-center mb-6">
                <div className={`text-xl font-bold mb-1 ${prize.isChampion ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}>
                  {prize.place}
                </div>
                <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white font-orbitron">
                  {prize.amount}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {prize.features.map(feat => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 justify-center text-left">
                    <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-slate-600 dark:text-white" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              {prize.isChampion && (
                <button className="w-full py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/25 transition-all active:scale-95">
                  View Guidelines
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Track Specific Prizes */}
        <div className={`max-w-6xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-center mb-10 text-slate-900 dark:text-white font-orbitron">Track Specific Prizes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackPrizes.map((track, i) => (
              <div key={i} className="bg-slate-50 dark:bg-card/30 rounded-2xl p-6 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-card/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-2xl mb-4 text-primary">
                  {track.icon}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{track.title}</h4>
                <div className="text-primary font-bold font-orbitron mb-3">{track.amount}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {track.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;

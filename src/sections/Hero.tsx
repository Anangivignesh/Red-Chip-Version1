import { useEffect, useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  isLoaded: boolean;
}

const Hero = ({ isLoaded }: HeroProps) => {
  const [counts, setCounts] = useState({ hackers: 0, prize: 0, hours: 0, colleges: 0 });

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
        prize: Math.floor(20 * easeOut), // $20k
        hours: Math.floor(48 * easeOut),
        colleges: Math.floor(50 * easeOut),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [isLoaded]);

  return (
    <section id="home" className="relative pt-32 pb-0 overflow-hidden bg-background min-h-screen flex flex-col justify-center">
      {/* Background Abstract */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Registrations Open
            </div>

            <h1 className="font-orbitron font-black text-6xl sm:text-7xl lg:text-9xl leading-[0.85] mb-8 text-foreground tracking-tighter">
              INNO<br />
              <span className="text-primary">HACK</span><span className="text-4xl text-muted-foreground align-top ml-2 font-bold">2.0</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed font-medium">
              Join 500+ innovators. 48 Hours. One Mission.<br />
              Build the future of technology at the year's most anticipated hackathon.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="px-8 py-4 bg-primary hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#tracks" className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-orange-500 hover:text-orange-600 text-slate-700 font-bold rounded-lg transition-all hover:-translate-y-1">
                View Tracks
              </a>
            </div>
          </div>

          {/* Right Content - 3D/Graphic Placeholder */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Using a code-themed graphic composition instead of just a shape */}
            <div className={`relative w-full max-w-md aspect-square transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-white rounded-full opacity-50 blur-3xl animate-pulse-slow" />
              <div className="relative z-10 bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3 font-mono text-sm text-slate-600">
                  <div className="flex"><span className="text-purple-500">const</span> <span className="text-blue-500 ml-2">future</span> = <span className="text-orange-500 ml-2">await</span> build();</div>
                  <div className="pl-4 text-slate-400">// Ready to change the world?</div>
                  <div className="flex"><span className="text-blue-500">if</span> (innovate) {'{'}</div>
                  <div className="pl-4"><span className="text-purple-500">return</span> <span className="text-green-600">"Success"</span>;</div>
                  <div>{'}'}</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl animate-bounce-slow">
                  2.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="w-full bg-white border-t border-slate-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div>
              <div className="text-3xl lg:text-4xl font-black font-orbitron text-slate-900 mb-1">
                {counts.hackers}+
              </div>
              <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Participants</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-black font-orbitron text-orange-500 mb-1">
                ${counts.prize}k
              </div>
              <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Prize Pool</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-black font-orbitron text-slate-900 mb-1">
                {counts.hours}h
              </div>
              <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Non-stop</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-black font-orbitron text-orange-500 mb-1">
                {counts.colleges}+
              </div>
              <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

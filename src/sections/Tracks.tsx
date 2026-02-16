import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Wallet,
  HeartPulse,
  Leaf,
  ArrowRight,
  ExternalLink,
  Code2,
} from "lucide-react";

const Tracks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const tracks = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Build intelligent systems that automate complex tasks, predict trends, and enhance decision-making across industries.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Wallet,
      title: "FinTech",
      description: "Innovate financial services with secure, transparent, and efficient digital banking and payment solutions.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Code2,
      title: "EdTech",
      description: "Revolutionize the future of learning by creating platforms that make education accessible, engaging, and personalized.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: HeartPulse,
      title: "HealthTech",
      description: "Develop solutions that improve patient care, streamline diagnostics, and make healthcare more preventative.",
      color: "bg-rose-50 text-rose-600",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Tackle environmental challenges with green energy, waste management, and sustainable urban living applications.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: ExternalLink,
      title: "Open Innovation",
      description: "No limits. Bring your wildest ideas to life with any technology stack you prefer.",
      color: "bg-orange-50 text-orange-600",
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tracks" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest mb-4">
            EXPLORE THE DOMAINS
          </div>
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl mb-6 text-foreground">
            Innovation <span className="text-primary">Tracks</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose a domain that sparks your curiosity. Each track is designed to challenge your technical prowess and creative problem-solving skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <div
                key={index}
                className={`group bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${track.color}`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {track.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {track.description}
                </p>

                <button className="w-full py-3 px-4 rounded-xl border-2 border-primary/20 text-primary font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  View Problem Statement
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tracks;

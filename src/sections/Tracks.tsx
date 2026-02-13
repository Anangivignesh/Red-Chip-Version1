import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Wallet,
  HeartPulse,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const Tracks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  const tracks = [
    {
      icon: Brain,
      title: "AI / ML",
      description:
        "Build intelligent systems that solve real-world complex problems using cutting-edge models.",
      image: "/track-ai.png",
      color: "from-red/20 to-transparent",
      details: [
        "Natural Language Processing",
        "Computer Vision",
        "Generative AI Applications",
        "Machine Learning Models",
      ],
    },
    {
      icon: Wallet,
      title: "FinTech",
      description:
        "Revolutionize digital finance, blockchain applications, and secure payment gateways.",
      image: "/track-fintech.png",
      color: "from-gold/20 to-transparent",
      details: [
        "Decentralized Finance (DeFi)",
        "Payment Solutions",
        "Blockchain Applications",
        "Financial Analytics",
      ],
    },
    {
      icon: HeartPulse,
      title: "HealthTech",
      description:
        "Innovate for better patient care, diagnostics, and accessible healthcare solutions.",
      image: "/track-health.png",
      color: "from-red/20 to-transparent",
      details: [
        "Telemedicine Platforms",
        "Health Monitoring",
        "Medical Diagnostics",
        "Patient Care Systems",
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tracks"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 radial-glow opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              <span className="text-white">Problem </span>
              <span className="gradient-text">Domains</span>
            </h2>
            <p className="text-white/60 max-w-xl">
              Choose your battlefield. Innovate where it matters most.
            </p>
          </div>
          <a
            href="#problem-statements"
            className="group inline-flex items-center gap-2 text-red hover:text-gold transition-colors text-sm font-medium"
          >
            View Problem Statements
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Tracks Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            const isActive = activeTrack === index;

            return (
              <div
                key={track.title}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseEnter={() => setActiveTrack(index)}
                onMouseLeave={() => setActiveTrack(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${track.color} via-dark/80 to-dark/95`}
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-8 min-h-[400px] flex flex-col justify-between">
                  {/* Top */}
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-red/20 transition-colors">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-2">
                      {track.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                      {track.description}
                    </p>
                  </div>

                  {/* Bottom - Details (shown on hover/active) */}
                  <div
                    className={`mt-6 transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {track.details.map((detail) => (
                        <span
                          key={detail}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#register"
                      className="inline-flex items-center gap-2 text-gold hover:text-white text-sm font-medium transition-colors"
                    >
                      Register for this track
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Energy Border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-red/50 transition-colors duration-300 pointer-events-none" />

                  {/* Corner Glow */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-red/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-white/40 text-sm">
            More tracks will be revealed soon. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tracks;

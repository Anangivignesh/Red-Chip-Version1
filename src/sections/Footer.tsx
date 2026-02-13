import { useEffect, useRef, useState } from 'react';
import { Terminal, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Code of Conduct', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative pt-24 pb-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6 text-red" />
              <span className="font-orbitron font-bold text-lg">
                <span className="text-red">INNO</span>
                <span className="text-gold">HACK</span>
                <span className="text-white/60">_2.0</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The biggest annual hackathon creating a platform for developers to build solutions for a better tomorrow.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 hover:text-red hover:border-red/50 transition-all duration-300 hover:rotate-[360deg]"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-4 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/50 hover:text-red text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-red group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-4 tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-red text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-red group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-4 tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red flex-shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm">
                  SVCE Tirupati,<br />
                  Innovation Hub, Block C
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red flex-shrink-0" />
                <a
                  href="mailto:hello@innohacks.tech"
                  className="text-white/50 hover:text-red text-sm transition-colors"
                >
                  hello@innohacks.tech
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/50 hover:text-red text-sm transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Bar */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2024 INNOHACK 2.0. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red fill-red" /> by the InnoHacks Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

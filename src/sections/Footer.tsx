import { Terminal, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const links = {
    product: ['Features', 'Integrations', 'Pricing', 'FAQ'],
    company: ['About Us', 'Careers', 'Blog', 'Contact'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    social: [
      { icon: Twitter, href: '#' },
      { icon: Github, href: '#' },
      { icon: Linkedin, href: '#' },
      { icon: Mail, href: '#' }
    ]
  };

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/10 pt-20 pb-10 overflow-hidden transition-colors duration-300">
      {/* Soft background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-50 dark:bg-primary/5 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 gap-y-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="bg-orange-50 dark:bg-white/5 p-2 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-white/10 transition-colors">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <span className="font-orbitron font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                INNO<span className="text-primary">HACK</span>
              </span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering the next generation of developers to build tailored solutions for real-world problems.
            </p>
            <div className="flex gap-4">
              {links.social.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 font-orbitron">Hackathon</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              {links.product.map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 font-orbitron">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              {links.company.map(link => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 font-orbitron">Stay Updated</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-900 dark:text-white" />
              <button className="bg-primary hover:bg-orange-600 text-white font-bold rounded-lg px-4 py-2.5 text-sm transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
          <div>
            &copy; 2024 InnoHack Org. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by <a href="#" className="text-slate-600 dark:text-slate-400 font-bold hover:text-primary">InnoTeam</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

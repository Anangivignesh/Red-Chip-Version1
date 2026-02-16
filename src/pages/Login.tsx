import { useState } from 'react';
import { Terminal, Lock, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
    };

    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4 sm:p-6 transition-colors duration-300">
            {/* Split Card Container */}
            <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] lg:h-[700px] border border-slate-200 dark:border-white/10">

                {/* Left Sidebar - Branding (Orange) */}
                <div className="lg:w-[45%] bg-primary relative p-12 text-white flex flex-col justify-between overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />

                    {/* Top Content */}
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 mb-8">
                            <Terminal className="w-5 h-5" />
                            <span className="font-bold tracking-wide">INNOHACK 2.0</span>
                        </div>

                        <h1 className="font-orbitron text-5xl font-bold leading-tight mb-6">
                            Code the Future<br />of Innovation.
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-md">
                            Join over 500+ developers, designers, and creators in the most prestigious 48-hour hackathon of the season.
                        </p>
                    </div>

                    {/* Bottom Content / Info */}
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs opacity-70 uppercase tracking-widest font-bold">Main Event</div>
                                <div className="font-bold text-lg">October 24-26, 2024</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-xs opacity-70 uppercase tracking-widest font-bold">Location</div>
                                <div className="font-bold text-lg">Tech Central Hub, Virtual/Physical</div>
                            </div>
                        </div>

                        {/* Avatars */}
                        <div className="pt-6 border-t border-white/20 flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-slate-200" />
                                ))}
                            </div>
                            <span className="font-bold">Already registered?</span>
                        </div>
                    </div>
                </div>

                {/* Right Content - Form */}
                <div className="lg:w-[55%] p-8 lg:p-16 flex flex-col justify-center bg-white dark:bg-slate-900 relative">
                    <div className="absolute top-8 left-8">
                        <Link to="/" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors">
                            <span>←</span> Back
                        </Link>
                    </div>
                    <div className="absolute top-8 right-8">
                        <ThemeToggle />
                    </div>

                    <div className="max-w-md mx-auto w-full">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
                                <p className="text-slate-500 dark:text-slate-400">Enter your credentials to access the dashboard.</p>
                            </div>
                            <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                                <span className="px-4 py-1.5 bg-white dark:bg-slate-600 shadow-sm rounded-md text-sm font-bold text-slate-900 dark:text-white">Login</span>
                                <Link to="/register" className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Register</Link>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-slate-400"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        required
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium placeholder:text-slate-400"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                    <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300"
                            >
                                Login
                            </button>
                        </form>

                        <div className="mt-8 text-center text-xs text-slate-400 font-medium uppercase tracking-widest relative">
                            <span className="bg-white dark:bg-slate-900 px-4 relative z-10">Or Login With</span>
                            <div className="absolute inset-0 flex items-center"><div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <button className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 rounded-lg py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-slate-700 dark:text-white">
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 rounded-lg py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold text-slate-700 dark:text-white">
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React from 'react';
import TiltCard from './TiltCard';

const Features: React.FC = () => {
    const featureList = [
        { icon: "fa-film", title: "Movies & TV", desc: "Download Sinhala subtitled movies directly.", color: "text-orange-400", bg: "bg-orange-500/10", border: "hover:border-orange-500/50" },
        { icon: "fa-eye-slash", title: "Privacy Pro", desc: "View Once recovery and Anti-Delete system.", color: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/50" },
        { icon: "fa-download", title: "Downloader", desc: "TikTok, FB, Insta & YouTube support.", color: "text-purple-400", bg: "bg-purple-500/10", border: "hover:border-purple-500/50" },
        { icon: "fa-brain", title: "AI Chat", desc: "Integrated ChatGPT for smart conversations.", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/50" },
        { icon: "fa-users", title: "Group Tools", desc: "Full admin control and member management.", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "hover:border-yellow-500/50" },
        { icon: "fa-music", title: "Music Hub", desc: "MP3 Songs with lyrics and album art.", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "hover:border-indigo-500/50" },
    ];

  return (
    <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
                <span className="text-indigo-400 font-bold tracking-widest text-sm uppercase mb-3 block">Power & Performance</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium <span className="text-gradient-primary">Features</span></h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featureList.map((feature, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                        {/* Added animate-float wrapper for continuous looping animation */}
                        <div className="animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                            <TiltCard>
                                <div className={`glass-card p-8 rounded-3xl h-full flex flex-col items-start transition-all duration-500 group border border-white/5 ${feature.border}`}>
                                    
                                    <div className="flex justify-between w-full mb-6">
                                        <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                                            <i className={`fa-solid ${feature.icon} ${feature.color} text-2xl`}></i>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <i className="fa-solid fa-arrow-right -rotate-45 text-white/30"></i>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                    
                                    {/* Bottom Glow Line */}
                                    <div className="mt-auto pt-6 w-full">
                                        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700"></div>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Features;
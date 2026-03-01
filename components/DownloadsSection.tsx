import React from 'react';
import TiltCard from './TiltCard';

const DownloadsSection: React.FC = () => {
  return (
    <section id="downloads" className="py-10">
        <div className="container mx-auto px-4 flex justify-center">
            
             <div className="w-full max-w-lg" data-aos="fade-up">
                <div className="animate-float">
                    <TiltCard>
                        <div className="glass-card p-8 md:p-10 text-center relative overflow-hidden rounded-3xl">
                            
                            <div className="relative z-10 flex flex-col items-center">
                                
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-xl shadow-indigo-500/30">
                                    <i className="fa-solid fa-box-open text-2xl text-white"></i>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">Complete Source Code</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed px-2">
                                    Download the complete project with all source files, documentation, and examples.
                                </p>

                                <div className="w-full space-y-4">
                                    {/* Download Button */}
                                    <a href="https://github.com/ishanxmd/ISHAN-X-BETA-MD/archive/refs/heads/main.zip" className="block w-full">
                                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1">
                                            Download ZIP
                                        </button>
                                    </a>
                                    
                                    {/* Info Box */}
                                     <div className="w-full py-3.5 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center gap-2">
                                        <i className="fa-regular fa-file-code text-indigo-400 text-sm"></i>
                                        <span className="text-xs text-slate-400 font-medium">Includes setup instructions</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </TiltCard>
                </div>
            </div>

        </div>
    </section>
  );
};

export default DownloadsSection;

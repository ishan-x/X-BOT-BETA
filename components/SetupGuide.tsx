import React from 'react';

const SetupGuide: React.FC = () => {
  return (
    <section id="setup-guide" className="relative py-24 border-t border-white/5 bg-[#050614]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
           <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 block">How It Works</span>
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Bot Active in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">60 Seconds</span>
           </h2>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto grid-cols-1 md:grid-cols-3">
            {/* Step 1 */}
            <div className="glass-card p-6 md:p-8 flex flex-col items-center text-center gap-4 relative overflow-hidden group" data-aos="fade-up">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-transparent"></div>
                <div className="w-16 h-16 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-2xl bg-indigo-500/5 group-hover:scale-110 transition-transform">
                    1
                </div>
                <h3 className="text-xl font-bold text-white">Select Server</h3>
                <p className="text-slate-400 text-sm">
                    Click "Link Device" on Server 1 or 2 above. This connects you to the King RANUX Cloud.
                </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-6 md:p-8 flex flex-col items-center text-center gap-4 relative overflow-hidden group" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
                <div className="w-16 h-16 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-2xl bg-purple-500/5 group-hover:scale-110 transition-transform">
                    2
                </div>
                <h3 className="text-xl font-bold text-white">Pair WhatsApp</h3>
                <p className="text-slate-400 text-sm">
                    Enter your phone number and scan the QR code (or use Pairing Code) to link your account.
                </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-6 md:p-8 flex flex-col items-center text-center gap-4 relative overflow-hidden group" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></div>
                <div className="w-16 h-16 rounded-full border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-2xl bg-green-500/5 group-hover:scale-110 transition-transform">
                    3
                </div>
                <h3 className="text-xl font-bold text-white">Auto Activation</h3>
                <p className="text-slate-400 text-sm">
                    Wait 1 minute! The system detects the pairing and automatically deploys your bot 24/7.
                </p>
                <span className="text-xs text-green-400 font-mono border border-green-500/20 px-2 py-1 rounded bg-green-500/10">
                    Status: Online
                </span>
            </div>
        </div>
        
        <div className="mt-12 text-center text-slate-500 text-sm">
            <p><i className="fa-solid fa-shield-halved text-indigo-400 mr-2"></i> High Privacy Protection: Your data is encrypted and safe.</p>
        </div>

      </div>
    </section>
  );
};

export default SetupGuide;
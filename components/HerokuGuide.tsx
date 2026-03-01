import React from 'react';

const HerokuGuide: React.FC = () => {
  return (
    <section id="heroku-guide" className="relative py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
           <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 block">Deployment</span>
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Deploy on <span className="text-purple-400">Heroku</span>
           </h2>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg">1</div>
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">Fork & Config</h3>
                    <p className="text-slate-400 text-sm mb-4">
                        Fork the repository. Ensure <code className="text-indigo-300 bg-indigo-900/20 px-1.5 rounded">Procfile</code> exists.
                    </p>
                    <div className="bg-[#020617] p-4 rounded-xl border border-white/5 font-mono text-xs text-emerald-400 shadow-inner">
                        worker: node index.js
                    </div>
                </div>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="100">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-lg">2</div>
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">Environment Variables</h3>
                    <p className="text-slate-400 text-sm mb-4">
                        Go to Settings {'>'} Reveal Config Vars. Add <code className="text-white">SESSION_ID</code> and <code className="text-white">ALIVE_IMG</code>.
                    </p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start" data-aos="fade-up" data-aos-delay="200">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-lg">3</div>
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">Launch Worker</h3>
                    <p className="text-slate-400 text-sm">
                        Go to Resources tab, enable the <strong>Worker</strong> and disable the <strong>Web</strong> dyno to prevent errors.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default HerokuGuide;
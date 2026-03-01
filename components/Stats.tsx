import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#030014]/50 backdrop-blur-md relative z-20 overflow-hidden">
        {/* Moving shine background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] animate-[shine_8s_infinite]"></div>

        <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    {l:"Active Users", v:"50K+", c:"text-blue-400", i:"fa-users"}, 
                    {l:"Messages Sent", v:"10M+", c:"text-purple-400", i:"fa-comment-dots"}, 
                    {l:"Server Uptime", v:"99.9%", c:"text-green-400", i:"fa-server"}, 
                    {l:"Current Version", v:"V1.0.0", c:"text-pink-400", i:"fa-code-branch"}
                ].map((s, i) => (
                    <div key={i} className="text-center group p-4 rounded-xl hover:bg-white/5 transition-colors" data-aos="fade-up" data-aos-delay={i*100}>
                        <div className="mb-2 opacity-50 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-1 duration-300">
                             <i className={`fa-solid ${s.i} ${s.c} text-2xl`}></i>
                        </div>
                        <h3 className={`text-4xl font-black ${s.c} mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>{s.v}</h3>
                        <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors">{s.l}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Stats;
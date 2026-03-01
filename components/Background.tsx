import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020617]">
        
        {/* Animated Perspective Grid */}
        <div className="absolute inset-0 bg-grid opacity-[0.15] animate-[pulse_8s_ease-in-out_infinite] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_scale(2)]"></div>

        {/* Moving Particles/Orbs */}
        
        {/* Top Left - Indigo */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[100px] animate-blob"></div>
        
        {/* Bottom Right - Purple */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[100px] animate-blob" style={{animationDelay: '2s'}}></div>
        
        {/* Center - Blue Accent */}
        <div className="absolute top-[40%] left-[30%] w-[20vw] h-[20vw] bg-blue-500/10 rounded-full blur-[80px] animate-blob" style={{animationDelay: '4s'}}></div>

        {/* Floating Stars/Dust */}
        <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-white rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-[30%] left-[10%] w-1 h-1 bg-white rounded-full animate-ping opacity-40" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-[60%] right-[40%] w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse opacity-50"></div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]/90"></div>
    </div>
  );
};

export default Background;
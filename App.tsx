import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Background from './components/Background';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Commands from './components/Commands';
import DeploySection from './components/DeploySection';
import SetupGuide from './components/SetupGuide';
import DownloadsSection from './components/DownloadsSection';
import FAQ from './components/FAQ';
import Developer from './components/Developer';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Initialize AOS typings
declare global {
  interface Window {
    AOS: any;
  }
}

// Suppress strict mode warnings for AOS
if (typeof window !== 'undefined') {
  (window as any).AOS = (window as any).AOS || {};
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && typeof window !== 'undefined' && window.AOS) {
      setTimeout(() => {
        window.AOS.init({
          duration: 800,
          once: false,
          mirror: true,
          offset: 80,
          easing: 'ease-out-cubic',
        });
      }, 100);
    }
  }, [loading]);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <Preloader />
      ) : (
        <div className="flex flex-col min-h-screen relative selection:bg-purple-500/30 selection:text-white dark">
          <Background />
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <Stats />
            <Features />
            <Commands />
            <DeploySection />
            <SetupGuide />
            <DownloadsSection />
            <FAQ />
            <Developer />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;

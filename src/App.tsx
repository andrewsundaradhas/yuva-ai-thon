import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import EventHighlights from './components/EventHighlights';
import Tracks from './components/Tracks';
import WhyJoin from './components/WhyJoin';
import MissionInitiatives from './components/MissionInitiatives';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global organic background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-festival-pink/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-festival-cyan/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-festival-yellow/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-festival-orange/30 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-festival-mint/30 rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <EventHighlights />
          <Tracks />
          <WhyJoin />
          <MissionInitiatives />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
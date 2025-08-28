import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Why Join', href: '#why-join' },
    { name: 'Mission', href: '#mission-initiatives' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-festival-pink/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with better mobile sizing */}
          <motion.div 
            className="flex items-center space-x-2 md:space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-festival-pink via-festival-cyan to-festival-yellow organic-shape flex items-center justify-center pulse-glow">
                <span className="text-white font-black text-lg md:text-xl">Y</span>
              </div>
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-festival-yellow" />
              </motion.div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-festival-pink via-festival-cyan to-festival-yellow bg-clip-text text-transparent wiggle-animation">
                YUVATHON
              </h1>
              <p className="text-xs md:text-sm font-semibold text-festival-mint -mt-1">2025 ★ VIT Chennai</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-black bg-gradient-to-r from-festival-pink via-festival-cyan to-festival-yellow bg-clip-text text-transparent">
                YUVATHON
              </h1>
              <p className="text-xs font-semibold text-festival-mint">2025</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-festival-pink/20 hover:to-festival-cyan/20 hover:text-festival-cyan transform hover:scale-105 hover:-rotate-1`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <div className="hidden md:block">
              <DarkModeToggle />
            </div>

            {/* CTA Button - Hidden on mobile to save space */}
            <div className="hidden lg:block">
              <motion.button
                onClick={() => window.open('https://devfolio.co', '_blank')}
                className="organic-button bg-gradient-to-r from-festival-pink via-festival-cyan to-festival-yellow text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.5 }}
              >
                🎪 REGISTER NOW!
              </motion.button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 md:p-3 rounded-full bg-gradient-to-r from-festival-pink/20 to-festival-cyan/20 backdrop-blur-sm border border-festival-pink/30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6 text-festival-cyan" /> : <Menu className="w-5 h-5 md:w-6 md:h-6 text-festival-pink" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="mt-4 md:mt-6 pb-4 md:pb-6 bg-gradient-to-r from-festival-pink/10 via-festival-cyan/10 to-festival-yellow/10 backdrop-blur-sm rounded-3xl px-4 md:px-6 py-4 border border-festival-pink/20">
            <nav className="flex flex-col space-y-3 md:space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left font-semibold py-3 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-festival-pink/20 hover:to-festival-cyan/20 transition-all duration-300 transform hover:translate-x-2 flex items-center gap-3"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-festival-cyan rounded-full"></div>
                  {item.name}
                </motion.button>
              ))}
              
              {/* Mobile Dark Mode Toggle */}
              <div className="pt-2 border-t border-festival-pink/20">
                <div className="flex justify-center">
                  <DarkModeToggle />
                </div>
              </div>
              
              {/* Mobile CTA Button */}
              <motion.div className="pt-2">
                <motion.button
                  onClick={() => window.open('https://devfolio.co', '_blank')}
                  className="organic-button bg-gradient-to-r from-festival-pink to-festival-cyan text-white font-bold py-4 px-6 w-full flex items-center justify-center gap-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Code className="w-4 h-4" />
                  🎪 REGISTER NOW!
                  <Lightbulb className="w-4 h-4" />
                </motion.button>
              </motion.div>

              {/* Mobile Quick Info */}
              <motion.div 
                className="pt-4 border-t border-festival-pink/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center text-festival-mint text-sm">
                  <p className="font-semibold">🚀 48 Hours of Innovation</p>
                  <p className="text-xs opacity-80 mt-1">Sept 24-25, 2025 • VIT Chennai</p>
                </div>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
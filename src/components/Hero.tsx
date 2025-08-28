import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Users, Trophy, Zap, Star, Heart, Code, Lightbulb, Rocket, Award, Briefcase, Mail, Phone, Instagram, Linkedin, EyeOff } from 'lucide-react';

const EVENT_START_ISO = '2025-09-24T00:00:00+05:30'; // IST

function useCountdown(targetIso: string) {
  const [now, setNow] = useState<number>(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { diff, days, hours, minutes, seconds };
}

const Digit = ({ value, label }: { value: number; label: string }) => {
  const prev = useRef<number>(value);
  useEffect(() => { prev.current = value; }, [value]);
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ y: -20, opacity: 0, rotateX: 45 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.35 }}
        className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-2xl bg-gradient-to-br from-festival-pink/20 to-festival-cyan/20 border border-white/20 backdrop-blur-md shadow-xl flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-black gradient-text"
        aria-label={`${value} ${label}`}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <span className="mt-2 text-xs md:text-sm text-festival-mint font-semibold">{label}</span>
    </div>
  );
};

const Hero = () => {
  const { diff, days, hours, minutes, seconds } = useCountdown(EVENT_START_ISO);
  const [showCountdown, setShowCountdown] = useState(true);
  const isLive = diff === 0;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Organic Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-festival-pink/30 to-festival-cyan/30 organic-shape blur-xl"
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-60 right-20 w-40 h-40 bg-gradient-to-r from-festival-yellow/30 to-festival-orange/30 organic-shape blur-xl"
          animate={{ 
            x: [0, -40, 60, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.9, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-to-r from-festival-mint/30 to-festival-purple/30 organic-shape blur-xl"
          animate={{ 
            x: [0, 30, -50, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="absolute bottom-60 right-1/3 w-28 h-28 bg-gradient-to-r from-festival-coral/30 to-festival-lime/30 organic-shape blur-xl"
          animate={{ 
            x: [0, -25, 45, 0],
            y: [0, 35, -25, 0],
            scale: [1, 1.4, 0.7, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        {/* Countdown Banner */}
        <motion.div
          className="mx-auto mb-8 md:mb-10 w-full max-w-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {showCountdown && (
            <div className="relative rounded-3xl p-4 md:p-6 bg-gradient-to-r from-festival-pink/15 via-festival-cyan/15 to-festival-yellow/15 border border-white/15 backdrop-blur-md">
              <div className="absolute -inset-0.5 rounded-3xl gradient-shift opacity-20"></div>
              {!isLive ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base font-semibold text-festival-mint">Countdown to</span>
                    <span className="text-sm md:text-base font-bold text-festival-yellow">24 Sep 2025 • MG-Auditorium, VIT Chennai (IST)</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 md:gap-6">
                    <Digit value={days} label="Days" />
                    <Digit value={hours} label="Hours" />
                    <Digit value={minutes} label="Minutes" />
                    <Digit value={seconds} label="Seconds" />
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <span className="text-lg md:text-2xl font-black gradient-text">YUVA AI-Thon Has Begun! Join In Now!</span>
                </div>
              )}
              <button
                onClick={() => setShowCountdown(false)}
                className="absolute top-3 right-3 text-festival-mint hover:text-festival-yellow transition-colors"
                aria-label="Hide countdown"
                title="Hide countdown"
              >
                <EyeOff className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          {/* Enhanced Pre-title with Modern Typography */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <span className="inline-flex items-center gap-3 bg-gradient-to-r from-festival-pink via-festival-cyan to-festival-yellow text-background px-6 md:px-8 py-3 md:py-4 rounded-full font-black text-lg md:text-xl shadow-2xl">
              <Zap className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden sm:inline">YUVA AI-THON 2025</span>
              <span className="sm:hidden">AI-THON 2025</span>
              <Star className="w-5 h-5 md:w-6 md:h-6" />
            </span>
          </motion.div>

          {/* Main Title with Modern Display Typography */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 150 }}
          >
            <h1 className="display-text display-text-large mb-6">
              <span className="inline-block gradient-text transform hover:scale-110 transition-transform duration-500">
                YUVA
              </span>
              <br />
              <span className="inline-block layered-text transform hover:scale-110 transition-transform duration-500">
                AI-THON
              </span>
            </h1>
            <motion.div 
              className="text-4xl md:text-6xl font-black"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="gradient-text">
                2025
              </span>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Content with Modern Typography */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="body-large text-festival-cyan mb-6 font-bold">
              <span className="hidden sm:inline">A high-energy, 24-hour national hackathon hosted by Yi YUVA VIT Chennai</span>
              <span className="sm:hidden">24-hour national hackathon at VIT Chennai</span>
            </p>
            <p className="body-medium text-festival-mint max-w-5xl mx-auto px-4 leading-relaxed">
              Designed to spark creativity, collaboration, and cutting-edge problem-solving.
              <br className="hidden sm:block" />
              <span className="text-festival-yellow font-bold">Open to students from colleges across India. 500+ participants compete to innovate real-world tech solutions for meaningful change.</span>
            </p>
          </motion.div>

          {/* Enhanced Event Details Cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {[
              { icon: Calendar, title: "24-25 Sep", subtitle: "2025", color: "from-festival-pink to-festival-cyan" },
              { icon: MapPin, title: "MG-Auditorium", subtitle: "VIT Chennai", color: "from-festival-cyan to-festival-yellow" },
              { icon: Users, title: "500+ Hackers", subtitle: "Across India", color: "from-festival-yellow to-festival-orange" },
              { icon: Trophy, title: "Exciting Prize Pools", subtitle: "Amazing Rewards", color: "from-festival-orange to-festival-pink" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`modern-card bg-gradient-to-br ${item.color} p-6 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all duration-500 float-animation`}
                style={{ animationDelay: `${index * 0.5}s` }}
                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                <item.icon className="w-10 h-10 text-white mx-auto mb-4" />
                <p className="font-black text-white text-lg mb-2">{item.title}</p>
                <p className="text-white/80 font-semibold text-sm">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Prize Pools Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-festival-yellow mb-8">
              🎁 Exciting Prize Pools Await!
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                className="modern-card bg-gradient-to-br from-festival-pink/20 to-festival-cyan/20 p-8 rounded-3xl border border-festival-pink/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-10 h-10 text-festival-pink" />
                  <h4 className="text-2xl font-bold text-white">Amazing Rewards</h4>
                </div>
                <p className="text-white/80 text-lg">Win big with generous prizes crafted to reward innovation.</p>
              </motion.div>

              <motion.div 
                className="modern-card bg-gradient-to-br from-festival-cyan/20 to-festival-yellow/20 p-8 rounded-3xl border border-festival-cyan/30 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Briefcase className="w-10 h-10 text-festival-cyan" />
                  <h4 className="text-2xl font-bold text-white">Internship Opportunities</h4>
                </div>
                <p className="text-white/80 text-lg">Kickstart your career with premium internships at top companies.</p>
              </motion.div>

              <motion.div 
                className="modern-card bg-gradient-to-br from-festival-yellow/20 to-festival-orange/20 p-8 rounded-3xl border border-festival-yellow/30 backdrop-blur-sm sm:col-span-2 lg:col-span-1"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Star className="w-10 h-10 text-festival-yellow" />
                  <h4 className="text-2xl font-bold text-white">Exclusive Rewards</h4>
                </div>
                <p className="text-white/80 text-lg">Premium swag, limited edition goodies, and more surprises.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Sponsor Logos Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-festival-mint mb-8">
              🏢 Proudly Supported By
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-90">
              {/* NK INTERIOR DESIGNS - Prime Sponsor */}
              <motion.div 
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-festival-blue to-festival-cyan rounded-full flex items-center justify-center mb-3 border-4 border-festival-blue/40 group-hover:border-festival-blue/60 transition-all duration-300 shadow-2xl">
                  <div className="text-center">
                    <div className="text-white font-black text-xl md:text-2xl leading-tight">NK</div>
                    <div className="text-white/80 text-sm md:text-base font-medium">INTERIOR</div>
                  </div>
                </div>
                <span className="text-festival-mint text-sm md:text-base font-bold text-center">NK INTERIOR DESIGNS<br/>PRIVATE LIMITED</span>
                <span className="text-festival-yellow text-xs font-semibold mt-1">PRIME SPONSOR</span>
              </motion.div>

              {/* VIT Logo */}
              <motion.div 
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-3 border-2 border-festival-cyan/40 overflow-hidden bg-card">
                  <img src="/logos/vit.png" alt="VIT Chennai logo" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <span className="text-festival-mint text-xs md:text-sm font-medium">VIT Chennai</span>
                <span className="text-festival-cyan text-xs font-semibold mt-1">HOST</span>
              </motion.div>

              {/* Yi Logo */}
              <motion.div 
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-3 border-2 border-festival-yellow/40 overflow-hidden bg-card">
                  <img src="/logos/yi.png" alt="Young Indians (Yi) logo" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <span className="text-festival-mint text-xs md:text-sm font-medium">Young Indians (Yi)</span>
              </motion.div>

              {/* YUVA Logo */}
              <motion.div 
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-3 border-2 border-festival-pink/40 overflow-hidden bg-card">
                  <img src="/logos/yuva.png" alt="YUVA logo" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <span className="text-festival-mint text-xs md:text-sm font-medium">YUVA Campus Chapter</span>
                <span className="text-festival-pink text-xs font-semibold mt-1">ORGANIZER</span>
              </motion.div>

              {/* SW Logo */}
              <motion.div 
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-3 border-2 border-festival-mint/40 overflow-hidden bg-card">
                  <img src="/logos/sw.png" alt="Office of Student Welfare (SW) VIT Chennai logo" className="w-full h-full object-contain" loading="lazy" />
                </div>
                <span className="text-festival-mint text-xs md:text-sm font-medium">Office of Student Welfare</span>
                <span className="text-festival-mint text-xs font-semibold mt-1">VIT Chennai</span>
              </motion.div>

              {/* Tech Partner */}
              <motion.div 
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-festival-mint to-festival-green rounded-full flex items-center justify-center mb-3 border-2 border-festival-mint/30 group-hover:border-festival-mint/50 transition-all duration-300">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <span className="text-festival-mint text-xs md:text-sm font-medium">Tech Partner</span>
                <span className="text-festival-mint text-xs font-semibold mt-1">INNOVATION</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-festival-cyan mb-8">
              📞 Get In Touch
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Yogesh Ravi M", phone: "+91 95857 24343", icon: Phone },
                { name: "Subashri", phone: "+91 93854 17478", icon: Phone },
                { name: "Giridharan RE", phone: "+91 73736 14959", icon: Phone },
                { name: "Andrew S", phone: "+91 74183 35951", icon: Phone }
              ].map((contact, index) => (
                <motion.div
                  key={contact.name}
                  className="modern-card p-6 text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <contact.icon className="w-8 h-8 text-festival-pink mx-auto mb-3" />
                  <h4 className="font-bold text-white mb-2">{contact.name}</h4>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-festival-cyan hover:text-festival-yellow transition-colors duration-300 font-semibold"
                  >
                    {contact.phone}
                  </a>
                </motion.div>
              ))}
            </div>
            
            {/* Email and Social Links */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="mailto:yuvavitc@gmail.com"
                className="flex items-center gap-3 text-festival-mint hover:text-festival-yellow transition-colors duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5" />
                yuvavitc@gmail.com
              </motion.a>
              
              <motion.a
                href="https://instagram.com/yuvavitc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-festival-pink hover:text-festival-yellow transition-colors duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram className="w-5 h-5" />
                @yuvavitc
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/company/yuvavitc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-festival-cyan hover:text-festival-yellow transition-colors duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin className="w-5 h-5" />
                YUVA VIT Chennai
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion } from 'motion/react';
import { Heart, Instagram, Twitter, Linkedin, Mail, MapPin, Phone, Sparkles, Star, Code, Lightbulb, Rocket, Globe, Users, Calendar, Trophy, Award, Building2, Shield, Leaf, Gamepad2, Car, Stethoscope, Building, Medal, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Why Join', href: '#why-join' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/yuvavitc', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/yuvavitc', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com/company/yuvavitc', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:yuvavitc@gmail.com', label: 'Email' }
  ];

  const partners = [
    { 
      name: 'NK INTERIOR DESIGNS', 
      img: '',
      description: 'Prime Sponsor',
      tier: 'prime',
      color: 'from-festival-blue to-festival-cyan'
    },
    { 
      name: 'VIT Chennai', 
      img: '/logos/vit.png',
      description: 'Host University',
      tier: 'host',
      color: 'from-festival-cyan to-festival-blue'
    },
    { 
      name: 'Young Indians (Yi)', 
      img: '/logos/yi.png',
      description: 'Industry Partner',
      tier: 'partner',
      color: 'from-festival-yellow to-festival-orange'
    },
    { 
      name: 'YUVA Chapter', 
      img: '/logos/yuva.png',
      description: 'Organizer',
      tier: 'organizer',
      color: 'from-festival-pink to-festival-purple'
    },
    { 
      name: 'Office of Student Welfare (SW)', 
      img: '/logos/sw.png',
      description: 'VIT Chennai',
      tier: 'support',
      color: 'from-festival-mint to-festival-green'
    }
  ];

  const missionAreas = [
    { icon: Lightbulb, title: "Innovation", color: "from-festival-pink to-festival-purple" },
    { icon: Shield, title: "Accessibility", color: "from-festival-cyan to-festival-blue" },
    { icon: Car, title: "Road Safety", color: "from-festival-yellow to-festival-orange" },
    { icon: Stethoscope, title: "Health", color: "from-festival-green to-festival-mint" },
    { icon: Building, title: "Entrepreneurship", color: "from-festival-purple to-festival-pink" },
    { icon: Gamepad2, title: "Sports", color: "from-festival-orange to-festival-yellow" },
    { icon: Leaf, title: "Climate Change", color: "from-festival-mint to-festival-green" },
    { icon: Medal, title: "Leadership", color: "from-festival-blue to-festival-cyan" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-festival-purple/10 via-festival-pink/5 to-transparent border-t-4 border-festival-cyan/30">
      {/* Enhanced Organic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-festival-pink/20 to-festival-cyan/20 organic-shape blur-xl"
          animate={{ 
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-28 h-28 bg-gradient-to-r from-festival-yellow/20 to-festival-orange/20 organic-shape blur-xl"
          animate={{ 
            x: [0, -35, 50, 0],
            y: [0, 25, -40, 0],
            scale: [1, 0.9, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Enhanced Partner Logos Section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-festival-mint mb-12">
            🏆 Proudly Supported By
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-24 h-24 md:w-28 md:h-28 bg-card rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${partner.tier === 'prime' ? 'border-festival-yellow/60' : 'border-festival-pink/30'} group-hover:border-festival-pink/60 transition-all duration-300 shadow-lg overflow-hidden`}>
                  {partner.img ? (
                    <img src={partner.img} alt={`${partner.name} logo`} className="w-full h-full object-contain" loading="lazy" />
                  ) : (
                    <span className="text-white font-black text-sm px-2">{partner.name}</span>
                  )}
                </div>
                <h4 className="font-bold text-white text-base md:text-lg mb-2">{partner.name}</h4>
                <p className="text-festival-mint text-sm md:text-base mb-1">{partner.description}</p>
                {partner.tier === 'prime' && (
                  <span className="inline-block bg-gradient-to-r from-festival-yellow/20 to-festival-orange/20 text-festival-yellow px-2 py-1 rounded-full text-xs font-semibold border border-festival-yellow/30">
                    PRIME SPONSOR
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* YI Impact Areas Section */}
        <motion.div 
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-festival-yellow">
            🌟 YI Impact Areas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {missionAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-festival-mint text-xs font-medium">{area.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Logo and Description */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-festival-pink via-festival-cyan to-festival-yellow organic-shape flex items-center justify-center">
                <span className="text-white font-black text-xl">Y</span>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-festival-pink via-festival-cyan to-festival-yellow bg-clip-text text-transparent">
                  YUVATHON
                </h3>
                <p className="text-festival-mint text-sm font-semibold">2025 ★ VIT Chennai</p>
              </div>
            </div>
            <p className="text-festival-mint text-lg leading-relaxed mb-6">
              A high-energy, 24-hour national hackathon hosted by Yi YUVA VIT Chennai, designed to spark creativity, 
              collaboration, and cutting-edge problem-solving. Join 500+ participants in building real-world tech solutions.
            </p>
            <div className="flex items-center gap-4 text-festival-mint">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Sept 24-25, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">MG-Auditorium, VIT Chennai</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-bold text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-left text-festival-mint hover:text-festival-yellow transition-colors duration-300 transform hover:translate-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Event Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-bold text-white mb-6">Event Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-festival-mint">
                <Users className="w-5 h-5" />
                <span className="text-sm">500+ Participants</span>
              </div>
              <div className="flex items-center gap-3 text-festival-mint">
                <Clock className="w-5 h-5" />
                <span className="text-sm">48 Hours</span>
              </div>
              <div className="flex items-center gap-3 text-festival-mint">
                <Trophy className="w-5 h-5" />
                <span className="text-sm">Exciting Prize Pools</span>
              </div>
              <div className="flex items-center gap-3 text-festival-mint">
                <Award className="w-5 h-5" />
                <span className="text-sm">50+ Internships</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl md:text-2xl font-bold text-center mb-8 text-festival-cyan">
            📞 Contact Information
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <contact.icon className="w-8 h-8 text-festival-pink mx-auto mb-3" />
                <h5 className="font-bold text-white mb-2 text-sm">{contact.name}</h5>
                <a 
                  href={`tel:${contact.phone}`}
                  className="text-festival-cyan hover:text-festival-yellow transition-colors duration-300 font-semibold text-sm"
                >
                  {contact.phone}
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Email and Social Links */}
          <div className="mt-8 text-center">
            <motion.a
              href="mailto:yuvavitc@gmail.com"
              className="inline-flex items-center gap-3 text-festival-mint hover:text-festival-yellow transition-colors duration-300 font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5" />
              yuvavitc@gmail.com
            </motion.a>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg md:text-xl font-semibold mb-6 text-white">Connect With Us</h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-card/30 border border-border rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-festival-pink hover:to-festival-cyan hover:text-white transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-muted-foreground text-sm md:text-base">
            <span>© 2025 Yuvathon. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>at VIT Chennai</span>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm text-muted-foreground">
            <motion.a 
              href="#" 
              className="hover:text-festival-cyan transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-festival-cyan transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-festival-cyan transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Code of Conduct
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 md:bottom-8 right-6 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-festival-pink to-festival-cyan rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg md:text-xl font-bold"
        >
          ↑
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;
import { motion } from 'motion/react';
import { Code, Lightbulb, Users, Zap, Heart, Music, Sparkles, Coffee, Trophy, Globe, Rocket, Target, Award, BookOpen, Shield, Leaf, Gamepad2, Car, Stethoscope, Building2, Medal, Clock, Calendar } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "48 Hours of Innovation",
      description: "Non-stop coding with cutting-edge technologies & endless possibilities!",
      color: "from-festival-pink to-festival-cyan",
      emoji: "⚡"
    },
    {
      icon: Heart,
      title: "Festival Experience",
      description: "Live music, gourmet food, fun activities & celebration throughout the event!",
      color: "from-festival-cyan to-festival-yellow",
      emoji: "🎉"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with brilliant minds from around the world & build lasting friendships!",
      color: "from-festival-yellow to-festival-orange",
      emoji: "🤝"
    },
    {
      icon: Trophy,
      title: "Exciting Prize Pools",
      description: "Amazing rewards and recognition for winners!",
      color: "from-festival-orange to-festival-pink",
      emoji: "🏆"
    }
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Open to students worldwide",
      color: "from-festival-blue to-festival-cyan"
    },
    {
      icon: Rocket,
      title: "Innovation Focus",
      description: "Build solutions for tomorrow",
      color: "from-festival-purple to-festival-pink"
    },
    {
      icon: Target,
      title: "Real Impact",
      description: "Solve real-world problems",
      color: "from-festival-green to-festival-lime"
    }
  ];

  const missionAreas = [
    {
      icon: Lightbulb,
      title: "YI Innovation",
      description: "Fostering creative problem-solving and technological advancement",
      color: "from-festival-pink to-festival-purple",
      category: "Innovation"
    },
    {
      icon: Shield,
      title: "Accessibility",
      description: "Creating inclusive solutions for all abilities",
      color: "from-festival-cyan to-festival-blue",
      category: "Social Impact"
    },
    {
      icon: Car,
      title: "Road Safety",
      description: "Developing smart solutions for safer transportation",
      color: "from-festival-yellow to-festival-orange",
      category: "Public Safety"
    },
    {
      icon: Stethoscope,
      title: "Health",
      description: "Innovating healthcare solutions for better lives",
      color: "from-festival-green to-festival-mint",
      category: "Healthcare"
    },
    {
      icon: Building2,
      title: "Entrepreneurship",
      description: "Building the next generation of startups",
      color: "from-festival-purple to-festival-pink",
      category: "Business"
    },
    {
      icon: Gamepad2,
      title: "Sports",
      description: "Revolutionizing sports through technology",
      color: "from-festival-orange to-festival-yellow",
      category: "Sports Tech"
    },
    {
      icon: Leaf,
      title: "Climate Change",
      description: "Creating sustainable solutions for our planet",
      color: "from-festival-mint to-festival-green",
      category: "Environment"
    },
    {
      icon: Medal,
      title: "Leadership",
      description: "Empowering youth to become change-makers",
      color: "from-festival-blue to-festival-cyan",
      category: "Leadership"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced Organic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-32 left-20 w-40 h-40 bg-gradient-to-r from-festival-pink/20 to-festival-cyan/20 organic-shape blur-2xl"
          animate={{ 
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 right-32 w-36 h-36 bg-gradient-to-r from-festival-yellow/20 to-festival-orange/20 organic-shape blur-2xl"
          animate={{ 
            x: [0, -50, 70, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.4, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="display-text display-text-medium mb-8">
            <span className="gradient-text">About</span>
            <br />
            <span className="layered-text">YUVA AI-THON</span>
          </h2>
          <p className="body-large text-festival-mint max-w-4xl mx-auto leading-relaxed">
            A high-energy, 24-hour national hackathon hosted by Yi YUVA VIT Chennai, designed to spark creativity, collaboration, and cutting-edge problem-solving.
          </p>
        </motion.div>

        {/* Enhanced Features Grid with Modern Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 md:mb-24"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`modern-card bg-gradient-to-br ${feature.color} p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 float-animation`}
              style={{ animationDelay: `${index * 1}s` }}
              initial={{ opacity: 0, scale: 0, rotate: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.15, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 8 : -8 }}
            >
              <motion.div
                className="text-5xl md:text-6xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                {feature.emoji}
              </motion.div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{feature.title}</h3>
              <p className="text-white/90 font-semibold leading-relaxed text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* YUVA, Yi, and Event Mission Section */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-festival-cyan">
            🎯 Our Mission & Vision
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="modern-card p-8 text-center group"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-festival-pink to-festival-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-black text-2xl">YUVA</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">YUVA Campus Chapter</h4>
              <p className="text-festival-mint text-lg leading-relaxed">
                Empowering youth through leadership development, social impact initiatives, and fostering responsible citizenship. 
                We believe in creating the next generation of change-makers.
              </p>
            </motion.div>

            <motion.div
              className="modern-card p-8 text-center group"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-festival-yellow to-festival-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-black text-2xl">Yi</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Confederation of Indian Industry</h4>
              <p className="text-festival-mint text-lg leading-relaxed">
                Yi is the youth wing of CII, working towards youth empowerment and leadership development. 
                We bridge the gap between industry and academia, fostering innovation and entrepreneurship.
              </p>
            </motion.div>

            <motion.div
              className="modern-card p-8 text-center group"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-festival-cyan to-festival-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-black text-2xl">VIT</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">VIT Chennai</h4>
              <p className="text-festival-mint text-lg leading-relaxed">
                A premier institution fostering innovation and excellence in education. 
                We provide the perfect platform for students to showcase their talent and creativity.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Focuses/Initiatives Section */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-festival-yellow">
            🌟 YI Impact Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {missionAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="modern-card p-6 text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-3">{area.title}</h4>
                <p className="text-festival-mint text-sm md:text-base mb-3">{area.description}</p>
                <span className="inline-block bg-gradient-to-r from-festival-pink/20 to-festival-cyan/20 text-festival-cyan px-3 py-1 rounded-full text-xs font-semibold border border-festival-pink/30">
                  {area.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="modern-card bg-gradient-to-br from-festival-purple/20 via-festival-pink/20 to-festival-cyan/20 backdrop-blur-sm border-2 border-white/20 p-12 md:p-16 lg:p-20 mb-20 md:mb-24"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-festival-cyan">
            📊 BY THE NUMBERS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "500+", label: "Hackers", icon: Users, color: "from-festival-pink to-festival-cyan" },
              { number: "48", label: "Hours", icon: Clock, color: "from-festival-cyan to-festival-yellow" },
              { number: "Top", label: "Rewards", icon: Trophy, color: "from-festival-yellow to-festival-orange" },
              { number: "24-25", label: "September", icon: Calendar, color: "from-festival-orange to-festival-pink" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-festival-yellow transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-festival-mint font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Highlights Section */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-festival-mint">
            🌟 Why Choose YUVATHON?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="modern-card p-8 text-center group"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <highlight.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">{highlight.title}</h4>
                <p className="text-festival-mint text-lg">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-festival-cyan mb-8">
            Ready to Make History? 🚀
          </h3>
          <p className="body-large text-festival-mint mb-10 max-w-3xl mx-auto">
            Join thousands of innovators, creators, and dreamers at YUVATHON 2025. 
            Your next big idea is waiting to be built!
          </p>
          <motion.button
            onClick={() => window.open('https://devfolio.co', '_blank')}
            className="organic-button bg-gradient-to-r from-festival-pink via-festival-cyan to-festival-yellow text-background font-black text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 shadow-2xl hover:shadow-3xl pulse-glow"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 START YOUR JOURNEY NOW! 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
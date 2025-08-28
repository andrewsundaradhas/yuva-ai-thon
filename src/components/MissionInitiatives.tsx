import { motion } from 'motion/react';
import { Lightbulb, Shield, Car, Stethoscope, Building2, Gamepad2, Leaf, Medal, Users, Globe, Rocket, Target, Award, Heart, Zap, Star } from 'lucide-react';

const MissionInitiatives = () => {
  const initiatives = [
    {
      icon: Lightbulb,
      title: "YI Innovation",
      description: "Fostering creative problem-solving and technological advancement through cutting-edge solutions",
      color: "from-festival-pink to-festival-purple",
      category: "Innovation",
      impact: "500+ Projects",
      emoji: "💡"
    },
    {
      icon: Shield,
      title: "Accessibility",
      description: "Creating inclusive solutions for all abilities, ensuring technology serves everyone",
      color: "from-festival-cyan to-festival-blue",
      category: "Social Impact",
      impact: "100+ Solutions",
      emoji: "🛡️"
    },
    {
      icon: Car,
      title: "Road Safety",
      description: "Developing smart solutions for safer transportation and accident prevention",
      color: "from-festival-yellow to-festival-orange",
      category: "Public Safety",
      impact: "50+ Innovations",
      emoji: "🚗"
    },
    {
      icon: Stethoscope,
      title: "Health",
      description: "Innovating healthcare solutions for better lives and medical accessibility",
      color: "from-festival-green to-festival-mint",
      category: "Healthcare",
      impact: "75+ Apps",
      emoji: "🏥"
    },
    {
      icon: Building2,
      title: "Entrepreneurship",
      description: "Building the next generation of startups and business solutions",
      color: "from-festival-purple to-festival-pink",
      category: "Business",
      impact: "25+ Startups",
      emoji: "🏢"
    },
    {
      icon: Gamepad2,
      title: "Sports",
      description: "Revolutionizing sports through technology and performance analytics",
      color: "from-festival-orange to-festival-yellow",
      category: "Sports Tech",
      impact: "30+ Tools",
      emoji: "⚽"
    },
    {
      icon: Leaf,
      title: "Climate Change",
      description: "Creating sustainable solutions for our planet and environmental challenges",
      color: "from-festival-mint to-festival-green",
      category: "Environment",
      impact: "40+ Projects",
      emoji: "🌱"
    },
    {
      icon: Medal,
      title: "Leadership",
      description: "Empowering youth to become change-makers and community leaders",
      color: "from-festival-blue to-festival-cyan",
      category: "Leadership",
      impact: "200+ Leaders",
      emoji: "🏅"
    }
  ];

  const stats = [
    { number: "1000+", label: "Students Impacted", icon: Users, color: "from-festival-pink to-festival-cyan" },
    { number: "50+", label: "Colleges Participating", icon: Globe, color: "from-festival-cyan to-festival-yellow" },
    { number: "100+", label: "Projects Completed", icon: Rocket, color: "from-festival-yellow to-festival-orange" },
    { number: "₹10L+", label: "Value Generated", icon: Award, color: "from-festival-orange to-festival-pink" }
  ];

  return (
    <section id="mission-initiatives" className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced Organic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-32 right-20 w-44 h-44 bg-gradient-to-r from-festival-pink/20 to-festival-cyan/20 organic-shape blur-2xl"
          animate={{ 
            x: [0, -70, 90, 0],
            y: [0, 60, -50, 0],
            scale: [1, 1.3, 0.8, 1]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 left-24 w-36 h-36 bg-gradient-to-r from-festival-yellow/20 to-festival-orange/20 organic-shape blur-2xl"
          animate={{ 
            x: [0, 60, -80, 0],
            y: [0, -40, 70, 0],
            scale: [1, 0.9, 1.4, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
            <span className="gradient-text">Mission</span>
            <br />
            <span className="layered-text">Initiatives</span>
          </h2>
          <p className="body-large text-festival-mint max-w-4xl mx-auto leading-relaxed">
            YI's comprehensive approach to youth empowerment through targeted initiatives across key impact areas. 
            Each focus area represents our commitment to creating meaningful change and fostering innovation.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-festival-yellow transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-festival-mint font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Initiatives Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              className="modern-card group cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
              initial={{ opacity: 0, y: 50, rotate: 45 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6">
                <motion.div
                  className="text-4xl md:text-5xl mb-4 text-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                >
                  {initiative.emoji}
                </motion.div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <initiative.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">{initiative.title}</h3>
                <p className="text-festival-mint text-sm md:text-base mb-4 text-center leading-relaxed">{initiative.description}</p>
                
                <div className="text-center space-y-2">
                  <span className="inline-block bg-gradient-to-r from-festival-pink/20 to-festival-cyan/20 text-festival-cyan px-3 py-1 rounded-full text-xs font-semibold border border-festival-pink/30">
                    {initiative.category}
                  </span>
                  <div className="text-festival-yellow text-sm font-bold">{initiative.impact}</div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${initiative.color.split('-')[1]}/30 rounded-3xl transition-colors duration-500`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-festival-cyan mb-8">
            Ready to Make a Difference? 🌟
          </h3>
          <p className="body-large text-festival-mint mb-10 max-w-3xl mx-auto">
            Join our mission to create positive change through technology and innovation. 
            Your ideas can transform lives and shape the future!
          </p>
          <motion.button
            onClick={() => window.open('https://devfolio.co', '_blank')}
            className="organic-button bg-gradient-to-r from-festival-pink via-festival-cyan to-festival-yellow text-background font-black text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 shadow-2xl hover:shadow-3xl pulse-glow"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 JOIN THE MISSION NOW! 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionInitiatives;

import { motion } from 'motion/react';
import { Brain, Globe, Heart, Shield, Smartphone, Sparkles, Zap, Rocket } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      icon: Brain,
      title: "AI & ML Magic",
      description: "Build the future with smart AI, machine learning & mind-blowing neural networks! 🤖",
      color: "from-festival-pink to-festival-cyan",
      emoji: "🧠",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"]
    },
    {
      icon: Globe,
      title: "Web & Cloud Power",
      description: "Create epic web apps & cloud solutions that scale to infinity and beyond! 🚀",
      color: "from-festival-cyan to-festival-yellow",
      emoji: "🌐",
      technologies: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      icon: Smartphone,
      title: "Mobile Mastery",
      description: "Craft amazing mobile experiences that users will absolutely love and adore! 📱",
      color: "from-festival-yellow to-festival-orange",
      emoji: "📱",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Shield,
      title: "Cyber Defense",
      description: "Become a digital guardian with ethical hacking & bulletproof security systems! 🛡️",
      color: "from-festival-orange to-festival-coral",
      emoji: "🔒",
      technologies: ["Blockchain", "Encryption", "Penetration Testing", "Zero Trust"]
    },
    {
      icon: Heart,
      title: "Social Impact Heroes",
      description: "Build solutions that change the world & make life better for everyone! 🌍",
      color: "from-festival-coral to-festival-pink",
      emoji: "💝",
      technologies: ["IoT", "Accessibility", "Education", "Healthcare"]
    }
  ];

  return (
    <section id="tracks" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Competition Tracks
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Choose your battlefield! Pick from 5 exciting tracks and showcase your skills 
            in your area of expertise.
          </motion.p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              className={`group relative overflow-hidden rounded-3xl ${track.bgColor} backdrop-blur-sm border border-border p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <motion.div 
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${track.color} p-4 mb-6 relative z-10 mx-auto`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <track.icon className="w-full h-full text-white" />
              </motion.div>
              
              {/* Content */}
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {track.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {track.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2">
                  {track.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-card/50 rounded-full text-sm border border-border group-hover:border-primary/50 transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (index * 0.15) + (techIndex * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:${track.color} rounded-3xl transition-all duration-300 opacity-0 group-hover:opacity-50`}></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Build Something Amazing?
          </motion.h3>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Choose your track, form your team, and get ready to hack your way to victory!
          </motion.p>
          
          <motion.button
            onClick={() => window.open('https://devfolio.co', '_blank')}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Your Team Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tracks;
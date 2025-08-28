import { motion } from 'motion/react';
import { Award, BookOpen, Network, Rocket, Star, TrendingUp, PartyPopper, Sparkles, Heart } from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    {
      icon: Award,
      title: "Epic Prizes Await!",
      description: "₹1L+ in cash prizes + exclusive swag + eternal glory! 🏆",
      highlight: "₹1L+ Prize Pool",
      emoji: "💰",
      color: "from-festival-pink to-festival-cyan"
    },
    {
      icon: Network,
      title: "Amazing Connections",
      description: "Meet industry legends, brilliant minds & lifelong friends! 🤝",
      highlight: "500+ New Friends",
      emoji: "🌟",
      color: "from-festival-cyan to-festival-yellow"
    },
    {
      icon: Rocket,
      title: "Skill Level Up!",
      description: "Master new tech, boost your portfolio & become unstoppable! 🚀",
      highlight: "48 Hours Growth",
      emoji: "📈",
      color: "from-festival-yellow to-festival-orange"
    },
    {
      icon: Sparkles,
      title: "Startup Dreams",
      description: "Turn your wild ideas into the next unicorn startup! 🦄",
      highlight: "Future Unicorn",
      emoji: "🚀",
      color: "from-festival-orange to-festival-coral"
    },
    {
      icon: TrendingUp,
      title: "Career Rocket",
      description: "Get noticed by top companies & land your dream job! 💼",
      highlight: "Dream Job Ready",
      emoji: "💼",
      color: "from-festival-coral to-festival-purple"
    },
    {
      icon: PartyPopper,
      title: "Pure Joy & Fun",
      description: "Music, food, games & memories that'll last forever! 🎉",
      highlight: "Unforgettable Fun",
      emoji: "🎪",
      color: "from-festival-purple to-festival-pink"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Winner, Yuvathon 2024",
      quote: "Yuvathon changed my life! The connections I made and the experience I gained were invaluable.",
      avatar: "PS"
    },
    {
      name: "Arjun Patel",
      role: "Software Engineer",
      quote: "The festival atmosphere combined with serious coding made it the best hackathon I've ever attended.",
      avatar: "AP"
    },
    {
      name: "Sneha Kumar",
      role: "Startup Founder",
      quote: "My startup idea was born at Yuvathon. The mentorship and support were incredible!",
      avatar: "SK"
    }
  ];

  return (
    <section id="why-join" className="py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/4 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-secondary/5 rounded-full blur-xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-chart-4 via-accent to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Join Yuvathon?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            More than just coding - it's about building the future, making connections, 
            and creating memories that last a lifetime!
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-border p-6 hover:bg-card/50 transition-all duration-500"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Floating Icon */}
              <motion.div 
                className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full p-3 mb-4 mx-auto"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                <benefit.icon className="w-full h-full text-white" />
              </motion.div>
              
              {/* Highlight Badge */}
              <motion.div 
                className="inline-block bg-gradient-to-r from-accent to-chart-4 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index * 0.1) + 0.3 }}
                viewport={{ once: true }}
              >
                {benefit.highlight}
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Alumni Say
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-card/30 rounded-xl p-6 text-center border border-border hover:bg-card/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {testimonial.avatar}
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Be Part of Something Big?
          </motion.h3>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => window.open('https://devfolio.co', '_blank')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now - Limited Spots!
            </motion.button>
            
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Have Questions?
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyJoin;
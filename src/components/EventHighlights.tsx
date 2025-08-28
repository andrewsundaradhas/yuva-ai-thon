import { motion } from 'motion/react';
import { Award, Coffee, Headphones, MessageSquare, Presentation, Wifi, Pizza, Music, Gamepad2, Gift, Users, Clock, Trophy, Star, Calendar, MapPin, Zap, Lightbulb, Rocket, Target, Globe, Shield, Heart } from 'lucide-react';

const EventHighlights = () => {
  const highlights = [
    {
      icon: Award,
      title: "Epic Rewards & Swag",
      description: "Exciting prize pools + exclusive merch + goodies galore! 🎁",
      color: "from-festival-pink to-festival-cyan",
      emoji: "🏆"
    },
    {
      icon: MessageSquare,
      title: "Superstar Mentors",
      description: "Industry legends & startup wizards to guide your journey! ✨",
      color: "from-festival-cyan to-festival-yellow",
      emoji: "🧙‍♂️"
    },
    {
      icon: Music,
      title: "Live DJ & Music",
      description: "Non-stop beats, live performances & dance battles! 🎵",
      color: "from-festival-yellow to-festival-orange",
      emoji: "🎧"
    },
    {
      icon: Pizza,
      title: "Food Paradise",
      description: "24/7 feast with pizza, snacks, energy drinks & more! 🍕",
      color: "from-festival-orange to-festival-coral",
      emoji: "🍔"
    },
    {
      icon: Gamepad2,
      title: "Gaming Zone",
      description: "Chill zones, gaming stations & fun activities between coding! 🎮",
      color: "from-festival-coral to-festival-purple",
      emoji: "🕹️"
    },
    {
      icon: Wifi,
      title: "Lightning WiFi",
      description: "Blazing fast internet & all the tech infrastructure you need! ⚡",
      color: "from-festival-purple to-festival-pink",
      emoji: "📡"
    }
  ];

  const specialFeatures = [
    {
      icon: Users,
      title: "Networking",
      description: "Connect with 500+ brilliant minds",
      color: "from-festival-blue to-festival-cyan"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
      color: "from-festival-green to-festival-lime"
    },
    {
      icon: Trophy,
      title: "Recognition",
      description: "Get featured globally",
      color: "from-festival-purple to-festival-pink"
    }
  ];

  const eventTimeline = [
    {
      time: "Day 1 - Sept 24",
      events: [
        { time: "09:00 AM", title: "Opening Ceremony", description: "Welcome & Team Formation", icon: Users },
        { time: "10:00 AM", title: "Hacking Begins", description: "48 hours of innovation starts", icon: Gift },
        { time: "12:00 PM", title: "Lunch Break", description: "Delicious food & networking", icon: Pizza },
        { time: "02:00 PM", title: "Workshop Session", description: "Expert-led technical workshops", icon: Lightbulb },
        { time: "06:00 PM", title: "Evening Entertainment", description: "Live music & activities", icon: Music },
        { time: "08:00 PM", title: "Dinner & Networking", description: "Connect with mentors & peers", icon: Users }
      ]
    },
    {
      time: "Day 2 - Sept 25",
      events: [
        { time: "12:00 AM", title: "Midnight Snacks", description: "Energy boost for night owls", icon: Coffee },
        { time: "06:00 AM", title: "Sunrise Session", description: "Early bird coding & yoga", icon: Star },
        { time: "12:00 PM", title: "Final Sprint", description: "Last 12 hours of hacking", icon: Zap },
        { time: "06:00 PM", title: "Submission Deadline", description: "Projects due for evaluation", icon: Target },
        { time: "07:00 PM", title: "Project Presentations", description: "Showcase your innovation", icon: Presentation },
        { time: "09:00 PM", title: "Award Ceremony", description: "Winners announced & celebration", icon: Trophy }
      ]
    }
  ];

  return (
    <section id="highlights" className="py-20 md:py-32 relative overflow-hidden">
      {/* Enhanced Organic Background Pattern */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-festival-pink/20 to-festival-cyan/20 organic-shape blur-2xl"
          animate={{ 
            x: [0, -60, 80, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-festival-yellow/20 to-festival-orange/20 organic-shape blur-2xl"
          animate={{ 
            x: [0, 70, -50, 0],
            y: [0, -30, 60, 0],
            scale: [1, 0.9, 1.3, 1]
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 4 }}
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
            <span className="gradient-text">Event</span>
            <br />
            <span className="layered-text">Highlights</span>
          </h2>
          <p className="body-large text-festival-mint max-w-4xl mx-auto leading-relaxed">
            Experience the most epic hackathon festival with non-stop innovation, entertainment, and celebration!
            From expert mentorship to live music, we've got everything to make your 48 hours unforgettable.
          </p>
        </motion.div>

        {/* Enhanced Highlights Grid with Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 md:mb-24">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="modern-card group relative overflow-hidden rounded-3xl border border-border p-8 hover:bg-card/50 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="text-5xl md:text-6xl mb-6 text-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                {highlight.emoji}
              </motion.div>
              
              <div className={`w-20 h-20 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">{highlight.title}</h3>
              <p className="text-festival-mint text-lg text-center leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Special Features Section */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-festival-yellow">
            ⭐ Why It's Special?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="modern-card p-8 text-center group"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-festival-mint text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Event Timeline Section */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-festival-cyan">
            📅 Event Timeline
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {eventTimeline.map((day, dayIndex) => (
              <motion.div
                key={day.time}
                className="modern-card p-8"
                initial={{ opacity: 0, x: dayIndex === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + dayIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl md:text-3xl font-bold text-festival-yellow mb-8 text-center">
                  {day.time}
                </h4>
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <motion.div
                      key={event.time}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + dayIndex * 0.2 + eventIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-festival-pink/20 to-festival-cyan/20 rounded-full flex items-center justify-center border-2 border-festival-pink/30 group-hover:border-festival-pink/60 transition-all duration-300">
                        <event.icon className="w-6 h-6 text-festival-pink" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-festival-cyan font-bold text-lg">{event.time}</span>
                          <span className="text-festival-yellow text-sm font-semibold bg-festival-yellow/10 px-2 py-1 rounded-full">
                            {event.title}
                          </span>
                        </div>
                        <p className="text-festival-mint text-base">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Event Details Section */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-festival-mint">
            🎯 Event Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="modern-card p-8 text-center group"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-festival-pink to-festival-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Date & Time</h4>
              <p className="text-festival-mint text-lg mb-3">
                <span className="font-bold">September 24-25, 2025</span>
              </p>
              <p className="text-festival-mint text-base">
                48 hours of non-stop innovation and celebration
              </p>
            </motion.div>

            <motion.div
              className="modern-card p-8 text-center group"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-festival-cyan to-festival-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Venue</h4>
              <p className="text-festival-mint text-lg mb-3">
                <span className="font-bold">MG-Auditorium</span>
              </p>
              <p className="text-festival-mint text-base">
                VIT Chennai, Tamil Nadu, India
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Mentorship & Support Section */}
        <motion.div 
          className="mb-20 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-festival-purple">
            🧠 Expert Mentorship & Support
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Industry Experts",
                description: "Learn from successful entrepreneurs and tech leaders",
                color: "from-festival-pink to-festival-cyan"
              },
              {
                icon: Lightbulb,
                title: "Technical Workshops",
                description: "Hands-on sessions on cutting-edge technologies",
                color: "from-festival-cyan to-festival-yellow"
              },
              {
                icon: Shield,
                title: "24/7 Support",
                description: "Round-the-clock assistance from our team",
                color: "from-festival-yellow to-festival-orange"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="modern-card p-8 text-center group"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 400 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-festival-mint text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-festival-cyan mb-8">
            Ready for the Ultimate Experience? 🚀
          </h3>
          <p className="body-large text-festival-mint mb-10 max-w-3xl mx-auto">
            Don't miss out on the most epic hackathon festival of 2025! 
            Register now and be part of something extraordinary!
          </p>
          <motion.button
            onClick={() => window.open('https://devfolio.co', '_blank')}
            className="organic-button bg-gradient-to-r from-festival-orange via-festival-coral to-festival-purple text-background font-black text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 shadow-2xl hover:shadow-3xl pulse-glow"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            🎪 JOIN THE FESTIVAL NOW! 🎪
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventHighlights;
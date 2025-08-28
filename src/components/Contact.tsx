import { motion } from 'motion/react';
import { Calendar, Mail, MapPin, Phone, Instagram, Twitter, Linkedin, MessageCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Epic Venue! 📍",
      details: ["VIT Chennai Campus", "Kelambakkam - Vandalur Rd", "Chennai, Tamil Nadu 600127"],
      color: "from-festival-pink to-festival-cyan",
      emoji: "🏫"
    },
    {
      icon: Calendar,
      title: "Mark Your Calendar! 📅",
      details: ["September 24-25, 2025", "48 Hours of Magic", "Registration: 9:00 AM"],
      color: "from-festival-cyan to-festival-yellow",
      emoji: "⏰"
    },
    {
      icon: Mail,
      title: "Drop Us a Line! 📧",
      details: ["yuvathon2025@vit.ac.in", "info@yuvathon.com", "Lightning Fast Replies!"],
      color: "from-festival-yellow to-festival-orange",
      emoji: "✉️"
    },
    {
      icon: Phone,
      title: "Call Us Anytime! 📞",
      details: ["+91 99999 88888", "+91 77777 66666", "24/7 Support Squad"],
      color: "from-festival-orange to-festival-coral",
      emoji: "📱"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/yuvathon2025", color: "hover:text-pink-500" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/yuvathon2025", color: "hover:text-blue-400" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/company/yuvathon", color: "hover:text-blue-600" },
    { icon: Mail, label: "Email", url: "mailto:yuvathon2025@vit.ac.in", color: "hover:text-green-500" }
  ];

  const faqs = [
    {
      question: "Who can participate?",
      answer: "All students from any college/university can participate. Teams of 2-4 members are encouraged."
    },
    {
      question: "Is there a registration fee?",
      answer: "No! Yuvathon 2025 is completely free to participate. Food, accommodation, and internet are provided."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, student ID, and your creativity! We'll provide everything else."
    },
    {
      question: "Are there any prerequisites?",
      answer: "Basic programming knowledge is helpful, but we welcome beginners too! Mentors will guide you."
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/5 rounded-full blur-xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-chart-5 via-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have questions? Need more information? We're here to help you make the most of Yuvathon 2025!
          </motion.p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="group bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:bg-card/50 transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl p-3 mx-auto mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <info.icon className="w-full h-full text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {info.title}
              </h3>
              
              <div className="space-y-2">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-card/30 border border-border rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:bg-card/50`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
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
            Frequently Asked Questions
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-card/30 rounded-xl p-6 border border-border hover:bg-card/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
            Still Have Questions?
          </motion.h3>
          
          <motion.p 
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            Don't hesitate to reach out! Our team is here to help you every step of the way.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:yuvathon2025@vit.ac.in"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Us an Email
            </motion.a>
            
            <motion.a
              href="tel:+919999988888"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Call Us Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-[#1a2332] to-[#0f1419]" />
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663563519066/TSgsMPcnyn33WeEK8YCJST/hero-background-4aEQCQeMy5Lpe6dq8iFnBH.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419]/80 via-[#1a2332]/60 to-[#0f1419]/80" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-[#4a90e2] rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6"
        >
          <Sparkles size={16} className="text-[#d4af37]" />
          <span className="text-sm font-semibold text-[#d4af37]">Welcome to my portfolio</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-display-lg text-white mb-4">
            AI Automation <span className="text-[#d4af37] italic">Engineer</span>
          </h1>
          <p className="text-display-sm text-[#8a95ab] font-light">
            & Python Developer
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg lg:text-xl text-[#8a95ab] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Transforming manual workflows into intelligent systems. I specialize in AI integration, workflow automation, and backend development—helping businesses achieve <span className="text-[#d4af37] font-semibold">70% manual work reduction</span>.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
        >
          {[
            { number: '5+', label: 'Active Clients' },
            { number: '70%', label: 'Work Reduction' },
            { number: '15min', label: 'Lead Response' },
            { number: '4', label: 'Major Projects' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 rounded-lg bg-[#1a2332]/50 border border-[#d4af37]/10 backdrop-blur"
            >
              <div className="text-2xl font-bold text-[#d4af37]">{stat.number}</div>
              <div className="text-xs text-[#8a95ab] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-premium-gold flex items-center gap-2 group"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.5)' }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-lg font-semibold border-2 border-[#4a90e2] text-[#4a90e2] hover:bg-[#4a90e2]/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#8a95ab]">Scroll to explore</span>
            <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

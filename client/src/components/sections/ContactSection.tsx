import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mail, Linkedin, Github, MessageCircle, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const { ref, inView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      color: 'from-[#d4af37] to-[#f4d47d]',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Your LinkedIn Profile',
      href: 'https://linkedin.com',
      color: 'from-[#4a90e2] to-[#7ab5ff]',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Your GitHub Profile',
      href: 'https://github.com',
      color: 'from-[#6ba3f5] to-[#9bc5ff]',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      href: 'https://wa.me/1234567890',
      color: 'from-[#8a95ab] to-[#bcc5d9]',
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <p className="text-xs uppercase tracking-widest text-[#d4af37] mb-2">// Get in Touch</p>
            <h2 className="text-display-md mb-4">
              Let's Build Something <span className="text-[#d4af37] italic">Amazing</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-transparent mx-auto mt-4" />
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Message */}
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-body-lg text-[#8a95ab] leading-relaxed"
              >
                I'm always interested in discussing new automation opportunities, AI integration projects, or collaborations. Whether you need to automate workflows, integrate AI into your systems, or build scalable backend solutions, let's connect.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-body-lg text-[#8a95ab] leading-relaxed"
              >
                With a track record of delivering 70% manual work reduction for clients, I'm confident I can help transform your operations. Let's explore how AI automation can drive real value for your business.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-xl border border-[#d4af37]/20 bg-[#0f1419]/50 backdrop-blur"
              >
                <p className="text-[#d4af37] font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  Quick Response Guarantee
                </p>
                <p className="text-[#8a95ab] text-sm">
                  I aim to respond to all inquiries within 15 minutes during business hours. Let's start the conversation today.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Methods */}
            <motion.div variants={containerVariants} className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="group relative p-6 rounded-xl border border-[rgba(212,175,55,0.1)] bg-[#0f1419]/50 backdrop-blur hover:border-[rgba(212,175,55,0.3)] transition-all duration-300 overflow-hidden block"
                  >
                    {/* Hover Gradient */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212,175,55,0.04) 0%, transparent 60%)',
                      }}
                    />

                    {/* Top Border Glow */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}
                          whileHover={{ rotate: 12 }}
                        >
                          <Icon size={24} className="text-[#0f1419]" />
                        </motion.div>
                        <div>
                          <p className="text-[#8a95ab] text-xs uppercase tracking-widest font-semibold">{method.label}</p>
                          <p className="text-[#e8ecf4] font-semibold mt-1">{method.value}</p>
                        </div>
                      </div>
                      <motion.div
                        className="text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <motion.button
              onClick={() => {
                window.location.href = 'mailto:your.email@example.com';
              }}
              className="btn-premium-gold flex items-center gap-2 group mx-auto"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Send Me an Email
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="mt-16 pt-8 border-t border-[rgba(212,175,55,0.1)] text-center"
      >
        <p className="text-[#8a95ab] text-sm">
          © 2026 Syed Daniyal Haider | AI Automation Engineer & Python Developer
        </p>
        <p className="text-[#8a95ab] text-xs mt-2">
          Crafted with precision and powered by automation
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;

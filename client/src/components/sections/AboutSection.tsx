import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
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

  const highlights = [
    'AI & Automation Specialist',
    'Python Backend Developer',
    'FastAPI Expert',
    'CRM Integration Specialist',
    'Data Engineering',
    'Workflow Optimization',
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1419] via-[#1a2332]/30 to-[#0f1419]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-xs uppercase tracking-widest text-[#d4af37] mb-2">// About</p>
            <h2 className="text-display-md">
              About <span className="text-[#d4af37] italic">Me</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-transparent mt-4" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.p variants={itemVariants} className="text-body-lg text-[#8a95ab] leading-relaxed">
                I'm a junior AI Automation Engineer with a proven track record of delivering transformative solutions to clients. With expertise in AI integration, workflow automation, and backend development, I specialize in reducing manual work and creating intelligent systems that scale.
              </motion.p>

              <motion.p variants={itemVariants} className="text-body-lg text-[#8a95ab] leading-relaxed">
                My approach combines technical excellence with a deep understanding of business challenges. I don't just build automation—I build solutions that directly impact your bottom line, whether that's saving hours of manual work, reducing errors, or enabling your team to focus on strategic initiatives.
              </motion.p>

              {/* Highlights */}
              <motion.div variants={containerVariants} className="space-y-3 pt-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} className="text-[#d4af37] flex-shrink-0" />
                    <span className="text-[#e8ecf4]">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Info */}
            <motion.div variants={containerVariants} className="space-y-6">
              {/* Key Metrics */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border border-[#d4af37]/20 bg-[#1a2332]/50 backdrop-blur"
              >
                <h3 className="text-heading-md text-[#d4af37] mb-6">Impact by Numbers</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-[#d4af37]">70%</div>
                    <p className="text-[#8a95ab] text-sm">Average manual work reduction</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#d4af37]">5+</div>
                    <p className="text-[#8a95ab] text-sm">Active clients</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#d4af37]">15 min</div>
                    <p className="text-[#8a95ab] text-sm">Lead response time</p>
                  </div>
                </div>
              </motion.div>

              {/* Expertise Areas */}
              <motion.div
                variants={itemVariants}
                className="p-8 rounded-xl border border-[#4a90e2]/20 bg-[#1a2332]/50 backdrop-blur"
              >
                <h3 className="text-heading-md text-[#4a90e2] mb-6">Expertise Areas</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-[#e8ecf4] font-semibold mb-2">AI & Automation</p>
                    <p className="text-[#8a95ab] text-sm">n8n, Make.com, OpenAI, LLM Integration</p>
                  </div>
                  <div>
                    <p className="text-[#e8ecf4] font-semibold mb-2">Backend Development</p>
                    <p className="text-[#8a95ab] text-sm">FastAPI, Python, PostgreSQL</p>
                  </div>
                  <div>
                    <p className="text-[#e8ecf4] font-semibold mb-2">CRM & Business Systems</p>
                    <p className="text-[#8a95ab] text-sm">Zoho CRM, WooCommerce, QuickBooks</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const SkillsSection = () => {
  const { ref, inView } = useInView();

  const skillCategories = [
    {
      title: 'AI & Automation',
      color: 'from-[#d4af37] to-[#f4d47d]',
      skills: ['n8n', 'Make.com', 'OpenAI API', 'LLM Integration', 'DALL-E', 'Automation Workflows'],
    },
    {
      title: 'Backend & Data',
      color: 'from-[#4a90e2] to-[#7ab5ff]',
      skills: ['FastAPI', 'Python', 'PostgreSQL', 'Data Engineering', 'Pandas & NumPy', 'Jupyter'],
    },
    {
      title: 'CRM & Business',
      color: 'from-[#6ba3f5] to-[#9bc5ff]',
      skills: ['Zoho CRM', 'WooCommerce', 'QuickBooks API', 'Google Sheets', 'Twilio SMS'],
    },
    {
      title: 'Frontend & DevOps',
      color: 'from-[#8a95ab] to-[#bcc5d9]',
      skills: ['React', 'TypeScript', 'Vercel', 'Render', 'GitHub', 'Next.js'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#1a2332]/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="mb-16">
            <p className="text-xs uppercase tracking-widest text-[#d4af37] mb-2">// Skills</p>
            <h2 className="text-display-md">
              Technical <span className="text-[#d4af37] italic">Expertise</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-transparent mt-4" />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-xl border border-[rgba(212,175,55,0.1)] bg-[#0f1419]/50 backdrop-blur hover:border-[rgba(212,175,55,0.3)] transition-all duration-300 overflow-hidden"
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

                <div className="relative z-10">
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                    <h3 className="text-heading-md text-[#e8ecf4]">{category.title}</h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-2 rounded-lg bg-gradient-to-r ${category.color} text-[#0f1419] text-xs font-semibold border border-[rgba(212,175,55,0.2)] cursor-default transition-transform`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

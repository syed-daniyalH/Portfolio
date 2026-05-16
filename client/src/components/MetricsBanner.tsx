import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, Bot, Clock, Phone } from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  suffix?: string;
}

function CountingMetric({ icon, label, value, suffix = "" }: MetricProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = numericValue / 50;
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-[#06b6d4] mb-3"
      >
        {icon}
      </motion.div>
      <p className="text-3xl md:text-4xl font-bold text-[#06b6d4] mb-2">
        {displayValue}{suffix}
      </p>
      <p className="text-sm md:text-base text-muted-foreground text-center">{label}</p>
    </motion.div>
  );
}

export default function MetricsBanner() {
  const metrics: MetricProps[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      label: "Manual Work Eliminated",
      value: "70%",
      suffix: "%",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      label: "Clients Automated",
      value: "5+",
      suffix: "+",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Processing Time Reduced",
      value: "96%",
      suffix: "%",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      label: "Lead Response Time",
      value: "15",
      suffix: "min",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#0f172a] border-y border-[#1e293b]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, idx) => (
            <CountingMetric key={idx} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

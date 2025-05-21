import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0.2, duration = 0.8, y = 50 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
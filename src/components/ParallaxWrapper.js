import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const ParallaxWrapper = ({ children, yOffset = 50, speed = 0.5, delay = 0.3 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

    const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Combine refs
    const setRefs = (el) => {
        ref.current = el;
        inViewRef(el);
    };

    return (
        <motion.div
            clasName="absolute top-0 left-0 w-full h-[100vh] bg-cover bg-center z-0"
            ref={setRefs}
            style={{ y: parallaxY }}
            initial={{ opacity: 0, y: yOffset }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    );
};

export default ParallaxWrapper;

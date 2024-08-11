import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { ReactNode, useEffect } from "react";

interface InViewWrapperProps {
  children: ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  threshold?: number;
}

const InViewWrapper: React.FC<InViewWrapperProps> = ({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  threshold = 0.5,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start(animate);
    }
  }, [controls, inView, animate]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default InViewWrapper;

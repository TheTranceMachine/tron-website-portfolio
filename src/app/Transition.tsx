"use client";

import { motion } from "framer-motion";

type TransitionProps = {
  children: React.ReactNode;
  initial: { y: number; opacity?: number };
  animate: { y: number; opacity?: number };
  transition: { duration: number; delay?: number };
  onComplete?: () => void;
  className?: string;
};

const Transition = ({ children, initial, animate, transition, onComplete, className }: TransitionProps) => (
  <motion.div
    initial={initial}
    animate={animate}
    transition={transition}
    onAnimationComplete={onComplete}
    className={className}
  >
    {children}
  </motion.div>
);

export default Transition;

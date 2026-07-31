import { useRef, type ReactNode } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ease } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
  amount?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const dirMap = {
    up: { y: 40, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    none: { y: 0, x: 0 },
  };
  const { y, x } = dirMap[direction];

  const variants: Variants = {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, delay, ease },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  amount?: number;
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerChildren = 0.1,
  amount = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

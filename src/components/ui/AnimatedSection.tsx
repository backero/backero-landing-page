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
  amount = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  // margin extends the trigger zone below the viewport so sections start
  // animating in before they're actually scrolled into view — otherwise,
  // at normal scroll speed, content is visibly washed-out/half-faded for
  // most of the time it's on screen.
  const isInView = useInView(ref, { once, amount, margin: "0px 0px 200px 0px" });

  const dirMap = {
    up: { y: 18, x: 0 },
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
    none: { y: 0, x: 0 },
  };
  const { y, x } = dirMap[direction];

  const variants: Variants = {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.4, delay, ease },
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
  amount = 0,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount, margin: "0px 0px 200px 0px" });

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
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease },
  },
};

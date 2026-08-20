/* Framer Motion variants, ported from the reference design
   (github.com/ladunjexa/reactjs18-3d-portfolio, MIT © Liron Abutbul). */

export const textVariant = (delay = 0) => ({
  hidden: {y: -50, opacity: 0},
  show: {
    y: 0,
    opacity: 1,
    transition: {type: "spring", duration: 1.25, delay}
  }
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {type, delay, duration, ease: "easeOut"}
  }
});

export const zoomIn = (delay, duration) => ({
  hidden: {scale: 0, opacity: 0},
  show: {
    scale: 1,
    opacity: 1,
    transition: {type: "tween", delay, duration, ease: "easeOut"}
  }
});

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0
  },
  show: {
    x: 0,
    y: 0,
    transition: {type, delay, duration, ease: "easeOut"}
  }
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {staggerChildren, delayChildren: delayChildren || 0}
  }
});

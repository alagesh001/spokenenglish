import { motion } from "framer-motion";

export const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function PageWrapper({ children, className = "" }) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`min-h-[calc(100vh-4rem)] ${className}`}
    >
      {children}
    </motion.main>
  );
}

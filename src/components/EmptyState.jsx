import { motion } from "framer-motion";

export default function EmptyState({ icon: IconComp, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center py-16 px-4"
    >
      {IconComp && (
        <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-ink-100 dark:bg-ink-800 text-ink-400 dark:text-ink-500 mb-4">
          <IconComp size={24} />
        </span>
      )}
      <h3 className="font-display font-semibold text-lg text-ink-800 dark:text-ink-100">{title}</h3>
      {description && (
        <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400 max-w-sm">{description}</p>
      )}
    </motion.div>
  );
}

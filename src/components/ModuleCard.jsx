import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";

const levelStyles = {
  Beginner: "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Intermediate: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Advanced: "bg-coral-50 text-coral-700 dark:bg-coral-900/30 dark:text-coral-300",
};

export default function ModuleCard({ module, index = 0 }) {
  const total = module.lessons.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4), ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link
        to={`/modules/${module.id}`}
        className="relative flex flex-col h-full p-5 rounded-2xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 shadow-soft hover:shadow-glow hover:border-teal-200 dark:hover:border-teal-700 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-teal-200/40 to-coral-200/30 dark:from-teal-500/10 dark:to-coral-500/10 blur-xl group-hover:scale-125 transition-transform duration-500" />

        <div className="flex items-start justify-between relative">
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-glow group-hover:scale-105 transition-transform">
            <Icon name={module.icon} size={20} />
          </span>
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${levelStyles[module.level] || levelStyles.Beginner}`}>
            {module.level}
          </span>
        </div>

        <h3 className="mt-4 font-display font-semibold text-lg text-ink-900 dark:text-white leading-snug">
          {module.title}
        </h3>
        <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400 leading-relaxed line-clamp-2">
          {module.description}
        </p>

        <div className="mt-4 text-xs text-ink-400 dark:text-ink-500">
          <span>{total} lessons</span>
        </div>

        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400 group-hover:gap-2 transition-all">
          Explore module <ArrowRight size={15} />
        </span>
      </Link>
    </motion.div>
  );
}

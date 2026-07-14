import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mic, Sparkles, Target } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import ModuleCard from "../components/ModuleCard";
import Waveform from "../components/Waveform";
import { modules, getTotalLessonCount } from "../data/modules";

const stats = [
  { icon: Sparkles, label: "Modules", value: modules.length },
  { icon: Target, label: "Guided lessons", value: getTotalLessonCount() },
  { icon: Mic, label: "Speaking-first design", value: "100%" },
];

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-5%] w-72 h-72 rounded-full bg-teal-200/40 dark:bg-teal-500/10 blur-3xl animate-floatSlow" />
          <div className="absolute top-[20%] right-[-8%] w-80 h-80 rounded-full bg-coral-200/40 dark:bg-coral-500/10 blur-3xl animate-floatSlow" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-ink-900/60 border border-ink-100 dark:border-ink-800 text-sm text-ink-600 dark:text-ink-300 shadow-soft"
          >
            <span className="text-teal-500 dark:text-teal-300"><Waveform /></span>
            Built for confident, everyday spoken English
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 font-display font-extrabold text-4xl sm:text-6xl leading-[1.08] text-ink-900 dark:text-white"
          >
            Speak English like
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-500 via-teal-500 to-coral-500 bg-clip-text text-transparent"> you mean it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-ink-500 dark:text-ink-400"
          >
            24 structured modules, real conversations, and guided speaking practice —
            built for beginners who want to actually talk, not just study grammar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/modules"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-900 dark:bg-teal-500 text-white font-medium shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Start learning <ArrowRight size={16} />
            </Link>
            <Link
              to="/modules/speaking-practice"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 font-medium hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors"
            >
              Try a speaking drill
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-14 grid grid-cols-3 max-w-xl mx-auto gap-4"
          >
            {stats.map(({ icon: StatIcon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-white/60 dark:bg-ink-900/50 border border-ink-100 dark:border-ink-800">
                <StatIcon size={18} className="text-teal-600 dark:text-teal-300" />
                <span className="font-display font-bold text-xl text-ink-900 dark:text-white">{value}</span>
                <span className="text-xs text-ink-500 dark:text-ink-400">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Module grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 dark:text-white">
              All modules
            </h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
              Pick any module — there's no fixed order, learn what you need first.
            </p>
          </div>
          <Link
            to="/modules"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-teal-600 dark:text-teal-400 hover:gap-2 transition-all shrink-0"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module, i) => (
            <ModuleCard key={module.id} module={module} index={i} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

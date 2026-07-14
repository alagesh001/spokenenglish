import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import Icon from "../components/Icon";
import EmptyState from "../components/EmptyState";
import { getModuleById } from "../data/modules";
import { getCustomLessonComponent } from "./lessons/registry";

const levelStyles = {
  Beginner: "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Intermediate: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Advanced: "bg-coral-50 text-coral-700 dark:bg-coral-900/30 dark:text-coral-300",
};

export default function ModuleDetails() {
  const { moduleId } = useParams();
  const module = getModuleById(moduleId);

  if (!module) {
    return (
      <PageWrapper>
        <div className="max-w-3xl mx-auto px-4 py-16">
          <EmptyState
            title="Module not found"
            description="This module doesn't exist, or may have been removed."
          />
          <div className="text-center">
            <Link to="/modules" className="text-teal-600 dark:text-teal-400 font-medium">
              ← Back to all modules
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link
          to="/modules"
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 dark:text-ink-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-6"
        >
          <ArrowLeft size={15} /> All modules
        </Link>

        <div className="flex items-start gap-4">
          <span className="flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-glow">
            <Icon name={module.icon} size={26} />
          </span>
          <div>
            <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-2 ${levelStyles[module.level] || levelStyles.Beginner}`}>
              {module.level}
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 dark:text-white leading-tight">
              {module.title}
            </h1>
            <p className="mt-2 text-ink-500 dark:text-ink-400">{module.description}</p>
          </div>
        </div>

        <div className="mt-6 text-sm text-ink-500 dark:text-ink-400">
          {module.lessons.length} lessons in this module
        </div>

        <div className="mt-8">
          <h2 className="font-display font-semibold text-lg text-ink-900 dark:text-white mb-4">
            Lessons
          </h2>
          <ol className="flex flex-col gap-3">
            {module.lessons.map((lesson, i) => (
              <motion.li
                key={lesson.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  to={`/modules/${module.id}/${lesson.id}`}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 hover:border-teal-200 dark:hover:border-teal-700 hover:shadow-soft transition-all"
                >
                  <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300 text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="font-medium text-ink-900 dark:text-white truncate">
                        {lesson.title}
                      </span>
                      {getCustomLessonComponent(module.id, lesson.id) && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-coral-50 text-coral-600 dark:bg-coral-900/30 dark:text-coral-300 shrink-0">
                          Interactive
                        </span>
                      )}
                    </span>
                    <span className="block text-sm text-ink-500 dark:text-ink-400 truncate">
                      {lesson.summary}
                    </span>
                  </span>
                  <span className="hidden sm:flex items-center gap-1 text-xs text-ink-400 dark:text-ink-500 shrink-0">
                    <Clock size={13} /> {lesson.duration}
                  </span>
                  <ArrowRight size={16} className="shrink-0 text-ink-300 dark:text-ink-600 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </PageWrapper>
  );
}

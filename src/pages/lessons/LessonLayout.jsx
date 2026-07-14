import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import PageWrapper from "../../components/PageWrapper";
import EmptyState from "../../components/EmptyState";
import { getLessonById, getAdjacentLessons } from "../../data/modules";

// LessonLayout is the shared shell every lesson page renders inside —
// custom, interactive lesson pages and the plain-content fallback alike.
// It owns the breadcrumb, title/meta header, and the prev/next
// navigation (via useNavigate), so individual lesson pages only need to
// worry about their own content, not routing.
//
// Usage from a custom lesson page:
//
//   export default function Alphabet() {
//     return (
//       <LessonLayout>
//         {/* your own interactive JSX goes here */}
//       </LessonLayout>
//     );
//   }
export default function LessonLayout({ children }) {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = getLessonById(moduleId, lessonId);

  if (!lesson) {
    return (
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 py-16">
          <EmptyState
            title="Lesson not found"
            description="This lesson doesn't exist, or may have been moved."
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

  const { prev, next } = getAdjacentLessons(moduleId, lessonId);

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link
          to={`/modules/${moduleId}`}
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 dark:text-ink-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-6"
        >
          <ArrowLeft size={15} /> {lesson.module.title}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center gap-2 text-xs font-medium text-ink-400 dark:text-ink-500 mb-3">
            <span className="flex items-center gap-1">
              <Clock size={13} /> {lesson.duration}
            </span>
            <span>·</span>
            <span>{lesson.module.title}</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 dark:text-white leading-tight">
            {lesson.title}
          </h1>
          <p className="mt-2 text-ink-500 dark:text-ink-400">{lesson.summary}</p>

          {/* Lesson-specific content — custom interactive component, or the
              plain content fallback — is rendered here. */}
          <div className="mt-8">{children}</div>

          <div className="mt-10 flex items-center justify-between gap-3 border-t border-ink-100 dark:border-ink-800 pt-6">
            <button
              disabled={!prev}
              onClick={() => prev && navigate(`/modules/${moduleId}/${prev.id}`)}
              className="flex-1 flex items-center gap-2 px-4 py-3 rounded-2xl border border-ink-100 dark:border-ink-800 text-left disabled:opacity-30 disabled:cursor-not-allowed hover:border-teal-200 dark:hover:border-teal-700 transition-colors min-w-0"
            >
              <ArrowLeft size={16} className="shrink-0 text-ink-400" />
              <span className="min-w-0">
                <span className="block text-xs text-ink-400 dark:text-ink-500">Previous</span>
                <span className="block text-sm font-medium text-ink-800 dark:text-ink-100 truncate">
                  {prev ? prev.title : "None"}
                </span>
              </span>
            </button>

            <button
              disabled={!next}
              onClick={() => next && navigate(`/modules/${moduleId}/${next.id}`)}
              className="flex-1 flex items-center justify-end gap-2 px-4 py-3 rounded-2xl border border-ink-100 dark:border-ink-800 text-right disabled:opacity-30 disabled:cursor-not-allowed hover:border-teal-200 dark:hover:border-teal-700 transition-colors min-w-0"
            >
              <span className="min-w-0">
                <span className="block text-xs text-ink-400 dark:text-ink-500">Next</span>
                <span className="block text-sm font-medium text-ink-800 dark:text-ink-100 truncate">
                  {next ? next.title : "Module complete"}
                </span>
              </span>
              <ArrowRight size={16} className="shrink-0 text-ink-400" />
            </button>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}

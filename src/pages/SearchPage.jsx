import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search as SearchIcon, Clock, ArrowRight } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import Icon from "../components/Icon";
import EmptyState from "../components/EmptyState";
import { searchContent, modules } from "../data/modules";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchContent(query), [query]);
  const hasQuery = query.trim().length > 0;
  const hasResults = results.modules.length > 0 || results.lessons.length > 0;

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 dark:text-white">
          Search
        </h1>
        <p className="mt-2 text-ink-500 dark:text-ink-400">
          Find a module or a specific lesson across all {modules.length} modules.
        </p>

        <div className="mt-6 relative">
          <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “pronunciation”, “interview”, “tenses”…"
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-900 dark:text-white placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-shadow"
          />
        </div>

        {!hasQuery && (
          <EmptyState
            icon={SearchIcon}
            title="Start typing to search"
            description="Search across module titles, descriptions, and every individual lesson."
          />
        )}

        {hasQuery && !hasResults && (
          <EmptyState
            icon={SearchIcon}
            title={`No results for “${query}”`}
            description="Try a different keyword, like a skill (speaking, listening) or topic (grammar, interview)."
          />
        )}

        {hasQuery && results.modules.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500 mb-3">
              Modules
            </h2>
            <div className="flex flex-col gap-2">
              {results.modules.map((m, i) => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link
                    to={`/modules/${m.id}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 hover:border-teal-200 dark:hover:border-teal-700 transition-colors"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300 shrink-0">
                      <Icon name={m.icon} size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium text-ink-900 dark:text-white truncate">{m.title}</span>
                      <span className="block text-sm text-ink-500 dark:text-ink-400 truncate">{m.description}</span>
                    </span>
                    <ArrowRight size={15} className="ml-auto shrink-0 text-ink-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {hasQuery && results.lessons.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500 mb-3">
              Lessons
            </h2>
            <div className="flex flex-col gap-2">
              {results.lessons.map((l, i) => (
                <motion.div key={`${l.module.id}-${l.id}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link
                    to={`/modules/${l.module.id}/${l.id}`}
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 hover:border-teal-200 dark:hover:border-teal-700 transition-colors"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-coral-50 dark:bg-coral-900/30 text-coral-600 dark:text-coral-300 shrink-0">
                      <Icon name={l.module.icon} size={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium text-ink-900 dark:text-white truncate">{l.title}</span>
                      <span className="block text-sm text-ink-500 dark:text-ink-400 truncate">
                        {l.module.title} · {l.summary}
                      </span>
                    </span>
                    <span className="hidden sm:flex items-center gap-1 text-xs text-ink-400 shrink-0 ml-auto">
                      <Clock size={12} /> {l.duration}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

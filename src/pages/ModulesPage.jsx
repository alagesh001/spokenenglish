import { useMemo, useState } from "react";
import { LayoutGrid } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import ModuleCard from "../components/ModuleCard";
import EmptyState from "../components/EmptyState";
import { modules } from "../data/modules";


const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function ModulesPage() {
  const [level, setLevel] = useState("All");

  const filtered = useMemo(
    () => (level === "All" ? modules : modules.filter((m) => m.level === level)),
    [level]
  );

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <h1 className="font-display font-bold text-3xl sm:text-4xl text-ink-900 dark:text-white">
          All Modules
        </h1>
      
        <p className="mt-2 text-ink-500 dark:text-ink-400 max-w-xl">
          {modules.length} modules covering everything from your first words to advanced,
          confident conversation.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                level === l
                  ? "bg-ink-900 dark:bg-teal-500 text-white border-transparent"
                  : "border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-800"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <EmptyState
              icon={LayoutGrid}
              title="No modules at this level yet"
              description="Try a different level filter to see available modules."
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((module, i) => (
                <ModuleCard key={module.id} module={module} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}

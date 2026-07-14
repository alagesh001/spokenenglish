import { useParams } from "react-router-dom";
import { getLessonById } from "../../data/modules";
import LessonLayout from "./LessonLayout";

// Default lesson content: just renders the `content` text stored in
// modules.js. Used automatically for any lesson that doesn't have a
// custom page registered in `registry.js` yet — so every lesson works
// out of the box, and you can "upgrade" any of them to a fully custom,
// interactive page whenever you're ready.
export default function GenericLessonContent() {
  const { moduleId, lessonId } = useParams();
  const lesson = getLessonById(moduleId, lessonId);

  return (
    <LessonLayout>
      <div className="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-soft">
        <p className="text-ink-700 dark:text-ink-200 leading-relaxed">{lesson?.content}</p>
      </div>
    </LessonLayout>
  );
}

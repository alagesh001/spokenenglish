import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { getCustomLessonComponent } from "./lessons/registry";
import GenericLessonContent from "./lessons/GenericLessonContent";

// Mounted at /modules/:moduleId/:lessonId. Looks up whether this specific
// lesson has a custom, interactive page registered — if so, renders it
// (lazy-loaded); otherwise falls back to the plain content renderer.
export default function LessonRouter() {
  const { moduleId, lessonId } = useParams();
  const CustomLesson = getCustomLessonComponent(moduleId, lessonId);

  if (!CustomLesson) {
    return <GenericLessonContent />;
  }

  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <CustomLesson />
    </Suspense>
  );
}

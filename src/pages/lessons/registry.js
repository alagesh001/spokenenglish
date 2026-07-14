import { lazy } from "react";

// Map a lesson to its own custom, interactive page component here.
// Key format: "<moduleId>/<lessonId>" (both come straight from modules.js).
//
// Any lesson NOT listed here automatically falls back to
// GenericLessonContent, which just renders the lesson's `content` text —
// so the whole platform keeps working while you build out custom pages
// one lesson at a time.
//
// To add your own:
//   1. Create a component anywhere under src/pages/lessons/, e.g.
//      src/pages/lessons/my-module/MyLesson.jsx
//   2. Wrap its return value in <LessonLayout>...</LessonLayout>
//      (LessonLayout gives you the title/breadcrumb/prev-next nav for free)
//   3. Register it below with a lazy import.
export const lessonRegistry = {
  "english-basics/alphabet": lazy(() => import("./english-basics/Alphabet.jsx")),
    "english-basics/vowels-consonants": lazy(() => import("./english-basics/Vowels.jsx")),
    "english-basics/numbers": lazy(() => import("./english-basics/Numbers.jsx")),
    "english-basics/greetings": lazy(() => import("./english-basics/Greetings.jsx")),

  "tenses/present-simple": lazy(() => import("./tenses/PresentSimple.jsx")),
  "speaking-practice/self-recording": lazy(() => import("./speaking-practice/SelfRecording.jsx")),
};

export function getCustomLessonComponent(moduleId, lessonId) {
  return lessonRegistry[`${moduleId}/${lessonId}`] || null;
}

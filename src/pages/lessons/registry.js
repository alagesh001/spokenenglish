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

        "vocabulary-building/everyday-objects": lazy(() => import("./vocab-build/everydayobjects.jsx")),
        "vocabulary-building/common-verbs": lazy(() => import("./vocab-build/100verbs.jsx")),
        "vocabulary-building/adjectives-feelings": lazy(() => import("./vocab-build/adjectives.jsx")),
        "vocabulary-building/word-families": lazy(() => import("./vocab-build/introtoparts.jsx")),

                "parts-of-speech/nouns-pronouns": lazy(() => import("./partsofspeech/nouns-pronouns.jsx")),
                "parts-of-speech/verbs": lazy(() => import("./partsofspeech/verbs.jsx")),
                "parts-of-speech/adjectives-adverbs": lazy(() => import("./partsofspeech/adjectives-adverbs.jsx")),
                "parts-of-speech/prepositions-conjunctions": lazy(() => import("./partsofspeech/prepositions-conjunctions.jsx")),

                "sentence-structure/subject-verb-object": lazy(() => import("./sentence-structure/subject-verb-object.jsx")),
                "sentence-structure/simple-sentences": lazy(() => import("./sentence-structure/simple-sentences.jsx")),
                "sentence-structure/compound-sentences": lazy(() => import("./sentence-structure/compound-sentences.jsx")),
                "sentence-structure/negative-sentences": lazy(() => import("./sentence-structure/negative-sentences.jsx")),

                "tenses/present-simple": lazy(() => import("./tenses/PresentSimple.jsx")),


  "tenses/present-simple": lazy(() => import("./tenses/PresentSimple.jsx")),
  "speaking-practice/self-recording": lazy(() => import("./speaking-practice/SelfRecording.jsx")),
};

export function getCustomLessonComponent(moduleId, lessonId) {
  return lessonRegistry[`${moduleId}/${lessonId}`] || null;
}

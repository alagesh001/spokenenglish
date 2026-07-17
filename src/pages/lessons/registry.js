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

                "tenses/present-simple": lazy(() => import("./tenses/simplepr.jsx")),
                 "tenses/present-simple-full": lazy(() => import("./tenses/PresentSimple.jsx")),
                "tenses/past-simple": lazy(() => import("./tenses/simplepast.jsx")),
                                "tenses/past-simple-full": lazy(() => import("./tenses/past-simple.jsx")),
                                "tenses/future-forms": lazy(() => import("./tenses/futuresimple.jsx")),
                                "tenses/future-forms-full": lazy(() => import("./tenses/futurefull.jsx")),
                                "tenses/continuous-intro": lazy(() => import("./tenses/continuoussimple.jsx")),
                                "tenses/present-continuous-tenses": lazy(() => import("./tenses/presentcontfull.jsx")),
                                "tenses/past-continuous-tenses": lazy(() => import("./tenses/pastcontfull.jsx")),
                                "tenses/future-continuous-tenses": lazy(() => import("./tenses/futurecontfull.jsx")),
                                "tenses/perfect-tense-intro": lazy(() => import("./tenses/perfecttenseintro.jsx")),
                                "tenses/perfect-continuous-intro": lazy(() => import("./tenses/perfectcontinuous.jsx")),
                                "tenses/since-for": lazy(() => import("./tenses/since-for.jsx")),

                                "tenses/since-for": lazy(() => import("./tenses/since-for.jsx")),
                                
                                  "helping-verbs/be-do-have": lazy(() => import("./helping-verbs/be-do-have.jsx")),
                                  "helping-verbs/can-could": lazy(() => import("./helping-verbs/can-could.jsx")),
                                  "helping-verbs/will-would": lazy(() => import("./helping-verbs/will-would.jsx")),
                                  "helping-verbs/should-must": lazy(() => import("./helping-verbs/should-must.jsx")),


  "speaking-practice/self-recording": lazy(() => import("./speaking-practice/SelfRecording.jsx")),
};

export function getCustomLessonComponent(moduleId, lessonId) {
  return lessonRegistry[`${moduleId}/${lessonId}`] || null;
}

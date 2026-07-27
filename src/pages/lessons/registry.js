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
                "parts-of-speech/test-1": lazy(() => import("./partsofspeech/test-1.jsx")),
                                "parts-of-speech/test-2": lazy(() => import("./partsofspeech/test-2.jsx")),
                "parts-of-speech/test-3": lazy(() => import("./partsofspeech/test-3.jsx")),
                "parts-of-speech/verbs": lazy(() => import("./partsofspeech/verbs.jsx")),
                "parts-of-speech/adjectives-adverbs": lazy(() => import("./partsofspeech/adjectives-adverbs.jsx")),
                "parts-of-speech/prepositions-conjunctions": lazy(() => import("./partsofspeech/prepositions-conjunctions.jsx")),
                

                "sentence-structure/subject-verb-object": lazy(() => import("./sentence-structure/subject-verb-object.jsx")),
                "sentence-structure/simple-sentences": lazy(() => import("./sentence-structure/simple-sentences.jsx")),
                "sentence-structure/compound-sentences": lazy(() => import("./sentence-structure/compound-sentences.jsx")),
                "sentence-structure/negative-sentences": lazy(() => import("./sentence-structure/negative-sentences.jsx")),
                                "sentence-structure/test-1": lazy(() => import("./sentence-structure/test-1.jsx")),


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
                                 "tenses/test-1": lazy(() => import("./tenses/test-1.jsx")),
                                 "tenses/test-2": lazy(() => import("./tenses/test-2.jsx")),
                                 "tenses/test-3": lazy(() => import("./tenses/test-3.jsx")),

                                
                                  "helping-verbs/be-do-have": lazy(() => import("./helping-verbs/be-do-have.jsx")),
                                  "helping-verbs/can-could": lazy(() => import("./helping-verbs/can-could.jsx")),
                                  "helping-verbs/will-would": lazy(() => import("./helping-verbs/will-would.jsx")),
                                  "helping-verbs/should-must": lazy(() => import("./helping-verbs/should-must.jsx")),
                                           "helping-verbs/test-1": lazy(() => import("./helping-verbs/test-1.jsx")),
                                           "helping-verbs/test-2": lazy(() => import("./helping-verbs/test-2.jsx")),


                                      "question-formation/yes-no-questions": lazy(() => import("./question-formation/yes-no-questions.jsx")),
                                      "question-formation/wh-questions": lazy(() => import("./question-formation/wh-questions.jsx")),
                                      "question-formation/tag-questions": lazy(() => import("./question-formation/tag-questions.jsx")),
                                      "question-formation/indirect-questions": lazy(() => import("./question-formation/indirect-questions.jsx")),
                                           "question-formation/test-1": lazy(() => import("./question-formation/test-1.jsx")),
                                           "question-formation/test-2": lazy(() => import("./question-formation/test-2.jsx")),
                                           "question-formation/test-3": lazy(() => import("./question-formation/test-3.jsx")),
                                           "question-formation/test-4": lazy(() => import("./question-formation/test-4.jsx")),

                                        "daily-conversation/small-talk": lazy(() => import("./daily-conversation/small-talk.jsx")),
                                        "daily-conversation/shopping-dialogues": lazy(() => import("./daily-conversation/shopping-dialogues.jsx")),
                                        "daily-conversation/phone-calls": lazy(() => import("./daily-conversation/phone-calls.jsx")),
                                        "daily-conversation/asking-directions": lazy(() => import("./daily-conversation/asking-directions.jsx")),

                                           "speaking-practice/picture-description": lazy(() => import("./speaking-practice/picture-description.jsx")),

                                           "speaking-practice/opinion-sharing": lazy(() => import("./speaking-practice/opinion-sharing.jsx")),
                                           "speaking-practice/vocabulary-in-context": lazy(() => import("./speaking-practice/vocabulary-in-context.jsx")),

                                      "grammar/articles": lazy(() => import("./grammar/articles.jsx")),
                                      "grammar/plurals": lazy(() => import("./grammar/plurals.jsx")),
                                    "grammar/comparatives-superlatives": lazy(() => import("./grammar/comparatives-superlatives.jsx")),
                                    "grammar/common-errors": lazy(() => import("./grammar/common-errors.jsx")),

                                     "real-life-practice/restaurant-role-play": lazy(() => import("./real-life-practice/restaurant-role-play.jsx")),
                                     "real-life-practice/airport-travel": lazy(() => import("./real-life-practice/airport-travel.jsx")),
                                     "real-life-practice/doctor-visit": lazy(() => import("./real-life-practice/doctor-visit.jsx")),
                                     "real-life-practice/workplace-scenarios": lazy(() => import("./real-life-practice/workplace-scenarios.jsx")),
                                     "real-life-practice/daily-routine": lazy(() => import("./real-life-practice/daily-routine.jsx")),
                                     "real-life-practice/making-plans": lazy(() => import("./real-life-practice/making-plans.jsx")),
                                     "real-life-practice/invite-someone": lazy(() => import("./real-life-practice/invite-someone.jsx")),
                                     "real-life-practice/make-appointment": lazy(() => import("./real-life-practice/make-appointment.jsx")),
                                     "real-life-practice/weather-talk": lazy(() => import("./real-life-practice/weather-talk.jsx")),
                                     "real-life-practice/opinion-express": lazy(() => import("./real-life-practice/opinion-express.jsx")),
                                     "real-life-practice/agree-disagree": lazy(() => import("./real-life-practice/agree-disagree.jsx")),
                                     "real-life-practice/ask-help": lazy(() => import("./real-life-practice/ask-help.jsx")),
                                     "real-life-practice/make-complaint": lazy(() => import("./real-life-practice/make-complaint.jsx")),
                                     "real-life-practice/at-bank": lazy(() => import("./real-life-practice/at-bank.jsx")),
                                     "real-life-practice/converse-going": lazy(() => import("./real-life-practice/converse-going.jsx")),

                                     
                                    
                                     "advanced-english/idioms-daily-use": lazy(() => import("./advanced-english/idioms-daily-use.jsx")),
                                      "advanced-english/phrasal-verbs": lazy(() => import("./advanced-english/phrasal-verbs.jsx")),
                                     "advanced-english/subtle-tone": lazy(() => import("./advanced-english/subtle-tone.jsx")),
                                     "advanced-english/conditional-sentences": lazy(() => import("./advanced-english/conditional-sentences.jsx")),
                             "advanced-english/vocab-build": lazy(() => import("./advanced-english/vocab-build.jsx")),


                                     "fluency-techniques/chunking": lazy(() => import("./fluency-techniques/chunking.jsx")),
                                     "fluency-techniques/filler-phrases": lazy(() => import("./fluency-techniques/filler-phrases.jsx")),
                                     "fluency-techniques/paraphrasing": lazy(() => import("./fluency-techniques/paraphrasing.jsx")),
                                     "fluency-techniques/speed-building-drills": lazy(() => import("./fluency-techniques/speed-building-drills.jsx")),

                                    "group-activities/role-play-groups": lazy(() => import("./group-activities/role-play-groups.jsx")),
                                    "group-activities/debate-basics": lazy(() => import("./group-activities/debate-basics.jsx")),
                                    "group-activities/peer-feedback": lazy(() => import("./group-activities/peer-feedback.jsx")),
                                    "group-activities/group-storytelling": lazy(() => import("./group-activities/group-storytelling.jsx")),

                                    "test-series/quiz-enter": lazy(() => import("./test-series/quiz-enter.jsx")),
                                    "test-series/quiz-enter-2": lazy(() => import("./test-series/quiz-enter-2.jsx")),
                                    "test-series/quiz-enter-3": lazy(() => import("./test-series/quiz-enter-3.jsx")),


  "speaking-practice/self-recording": lazy(() => import("./speaking-practice/SelfRecording.jsx")),
};

export function getCustomLessonComponent(moduleId, lessonId) {
  return lessonRegistry[`${moduleId}/${lessonId}`] || null;
}

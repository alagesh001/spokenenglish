# SpeakUp — Spoken English Learning Platform

A modern, data-driven spoken-English learning platform built with React (Vite), Tailwind CSS,
Framer Motion, Lucide React icons, and React Router.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/
    modules.js          ← single source of truth: every module + lesson lives here
  context/
    ThemeContext.jsx     ← light/dark mode, persisted to localStorage
  components/
    Navbar.jsx           ← responsive nav: Home, Modules, Search
    ModuleCard.jsx        ← animated module card (hover, lesson count)
    Icon.jsx              ← resolves a lucide icon by string name from modules.js
    Waveform.jsx           ← animated soundwave, the app's signature visual motif
    PageWrapper.jsx        ← shared Framer Motion page-transition wrapper
    EmptyState.jsx          ← shared "no results" / "not found" state
  pages/
    Home.jsx              ← hero + full module grid
    ModulesPage.jsx        ← all modules with level filter
    ModuleDetails.jsx      ← auto-generated from modules.js: numbered lessons list
    LessonRouter.jsx        ← mounted at /modules/:moduleId/:lessonId, picks custom vs generic
    SearchPage.jsx           ← live search across modules + lessons
    NotFound.jsx               ← 404 page
    lessons/
      LessonLayout.jsx          ← shared header/breadcrumb + useNavigate prev/next controls
      GenericLessonContent.jsx  ← fallback: renders a lesson's plain `content` text
      registry.js                ← maps "<moduleId>/<lessonId>" → custom page component
      english-basics/Alphabet.jsx        ← example: interactive flashcards
      tenses/PresentSimple.jsx            ← example: interactive fill-in-the-blank quiz
      speaking-practice/SelfRecording.jsx ← example: interactive timed speaking prompt
```

## Giving a lesson its own custom, interactive page

Every lesson gets a real route (`/modules/:moduleId/:lessonId`) and, by default, renders its
plain `content` text from `modules.js`. To replace that with fully custom, interactive content:

1. Create a component under `src/pages/lessons/<your-module>/<YourLesson>.jsx`.
2. Wrap your JSX in `LessonLayout` — it gives you the breadcrumb, title, and prev/next
   navigation (built with `useNavigate`) for free, so you only write the lesson's own content:

   ```jsx
   import LessonLayout from "../LessonLayout";

   export default function YourLesson() {
     // your own state, interactivity, etc.
     return (
       <LessonLayout>
         {/* your custom, interactive content */}
       </LessonLayout>
     );
   }
   ```

3. Register it in `src/pages/lessons/registry.js`:

   ```js
   "your-module-id/your-lesson-id": lazy(() => import("./your-module/YourLesson.jsx")),
   ```

That lesson will now render your custom page (lazy-loaded) instead of the plain-text fallback,
and it automatically picks up an "Interactive" badge on the module details page. Three fully
working examples are included — a flashcard drill, a scored quiz, and a timed speaking-practice
tool — as a starting point.

## Adding a new module

Open `src/data/modules.js` and add a new object to the `modules` array:

```js
{
  id: "my-new-module",       // used in the URL: /modules/my-new-module
  title: "My New Module",
  icon: "Rocket",             // any icon name exported by lucide-react
  level: "Beginner",          // "Beginner" | "Intermediate" | "Advanced"
  description: "One sentence describing the module.",
  lessons: [
    {
      id: "first-lesson",
      title: "First Lesson",
      duration: "8 min",
      summary: "One sentence describing the lesson.",
      content: "The full lesson text shown on the lesson page.",
    },
  ],
},
```

That's it — the new module will automatically appear in the navigation, Home page grid,
Modules page, Search, Progress page, and will get its own module details page and lesson
pages, with zero changes to any component.

## Design notes

- **Palette**: deep indigo ink for text/dark surfaces, a calm teal as the primary accent
  (learning, structure) and a warm coral as a secondary accent (speaking, energy), with
  amber used sparingly for confidence/progress highlights.
- **Type**: "Baloo 2" (rounded, friendly) for headings paired with "Inter" for body text —
  chosen to feel approachable for beginner learners rather than corporate or academic.
- **Signature element**: an animated 4-bar soundwave (`Waveform.jsx`) used in the logo,
  hero badge, and as a motif elsewhere, tying the visual language back to "spoken" English.
- Light and dark mode are both fully supported (`darkMode: 'class'` in `tailwind.config.js`),
  toggled from the navbar and persisted across visits.
- Respects `prefers-reduced-motion`.

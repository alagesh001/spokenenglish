import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetails from "./pages/ModuleDetails";
import LessonRouter from "./pages/LessonRouter";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/modules/:moduleId" element={<ModuleDetails />} />
          <Route path="/modules/:moduleId/:lessonId" element={<LessonRouter />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

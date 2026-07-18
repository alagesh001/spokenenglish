import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetails from "./pages/ModuleDetails";
import LessonRouter from "./pages/LessonRouter";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";
import Login from "./pages/login";
import SettingsScreen from "./pages/settingScreen";
export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {location.pathname !== "/login" && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<SettingsScreen />} />
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

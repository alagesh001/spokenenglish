import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
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

import { checkToken } from "./api/authApi"; // <-- adjust path if needed

export default function App() {
  const location = useLocation();

  const storedGym = JSON.parse(localStorage.getItem("gyms"));
  const firstGym = storedGym?.[0];

  const tokenIs = localStorage.getItem("accessToken");

  const [selectedGym] = useState(firstGym);

  function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
      const verify = async () => {
        const valid = await checkToken({
          gymId: firstGym?.GymId,
          token: tokenIs,
          mobile: selectedGym?.mob,
        });

        setAllowed(valid);
        setLoading(false);
      };

      verify();
    }, []);

    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      );
    }

    if (!allowed) {
      return <Navigate to="/login" replace />;
    }

    return children;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {location.pathname !== "/login" && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/settings"
            element={<SettingsScreen />}
          />

          <Route
            path="/modules"
            element={<ModulesPage />}
          />

          <Route
            path="/modules/:moduleId"
            element={<ModuleDetails />}
          />

          {/* ONLY LESSON IS PROTECTED */}
          <Route
            path="/modules/:moduleId/:lessonId"
            element={
              <ProtectedRoute>
                <LessonRouter />
              </ProtectedRoute>
            }
          />

          <Route
            path="/search"
            element={<SearchPage />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
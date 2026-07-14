import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, GraduationCap } from "lucide-react";
import Waveform from "./Waveform";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/modules", label: "Modules" },
  { to: "/search", label: "Search" },
];

function NavItem({ to, label, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
          isActive
            ? "text-teal-700 dark:text-teal-300"
            : "text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <span className="relative">
          {label}
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-teal-500 to-coral-500"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </span>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/70 dark:border-ink-800/70 bg-[#FAF9F6]/85 dark:bg-ink-950/85 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-glow">
            <GraduationCap size={19} />
          </span>
          <span className="font-display font-bold text-lg text-ink-900 dark:text-white tracking-tight">
            SpeakUp
          </span>
          <span className="hidden sm:inline-flex text-teal-500 dark:text-teal-300 ml-1">
            <Waveform />
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavItem key={l.to} {...l} />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-ink-100 dark:border-ink-800"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {links.map((l) => (
                <NavItem key={l.to} {...l} onClick={() => setOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

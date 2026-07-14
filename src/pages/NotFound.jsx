import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper className="flex items-center justify-center">
      <div className="text-center px-4 py-24">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-ink-100 dark:bg-ink-800 text-ink-400 mb-4">
          <Compass size={24} />
        </span>
        <h1 className="font-display font-bold text-3xl text-ink-900 dark:text-white">Page not found</h1>
        <p className="mt-2 text-ink-500 dark:text-ink-400">
          Looks like this page took a wrong turn. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex mt-6 px-5 py-2.5 rounded-full bg-ink-900 dark:bg-teal-500 text-white font-medium shadow-soft hover:-translate-y-0.5 transition-transform"
        >
          Back to home
        </Link>
      </div>
    </PageWrapper>
  );
}

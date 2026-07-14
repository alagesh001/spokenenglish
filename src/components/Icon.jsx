import * as LucideIcons from "lucide-react";

// Resolves an icon by its string name (as stored in modules.js) so that
// modules.js never needs to import React components directly — it stays
// pure data. Falls back to BookOpen if a name doesn't match.
export default function Icon({ name, className = "", ...props }) {
  const Component = LucideIcons[name] || LucideIcons.BookOpen;
  return <Component className={className} {...props} />;
}

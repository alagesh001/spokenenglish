// The platform's signature visual motif: a small animated soundwave
// that stands in for "spoken" English — used in the logo, hero, and
// as a subtle loading / active-state indicator.
export default function Waveform({ className = "", barClassName = "" }) {
  return (
    <span className={`inline-flex items-end gap-[3px] h-4 ${className}`} aria-hidden="true">
      <span className={`w-[3px] h-full rounded-full bg-current animate-wave1 origin-bottom ${barClassName}`} />
      <span className={`w-[3px] h-full rounded-full bg-current animate-wave2 origin-bottom ${barClassName}`} />
      <span className={`w-[3px] h-full rounded-full bg-current animate-wave3 origin-bottom ${barClassName}`} />
      <span className={`w-[3px] h-full rounded-full bg-current animate-wave4 origin-bottom ${barClassName}`} />
    </span>
  );
}

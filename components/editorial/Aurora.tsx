/**
 * Aurora — dual radial gradients (amber + zenith + a trace of ember)
 * that slowly drift across a section via a 72s CSS keyframe. Absolute
 * positioning; the parent must be `relative overflow-hidden`.
 *
 * Very low alpha — it's aurora-borealis-behind-the-masthead, not a
 * marketing gradient. Respects prefers-reduced-motion (the keyframe
 * is cut via @media (prefers-reduced-motion: reduce) in globals.css).
 */
export function Aurora({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`aurora ${className}`} />;
}

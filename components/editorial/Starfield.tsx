/**
 * Starfield — fixed-position background layer of amber + paper
 * micro-dots at very low opacity, behind everything. Pure CSS
 * (see .starfield in globals.css). No motion, no interaction, no
 * accessibility hit: decorative and aria-hidden.
 *
 * Rendered once at the root via layout.tsx.
 */
export function Starfield() {
  return <div aria-hidden className="starfield" />;
}

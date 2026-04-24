/**
 * Decorative rules in lab-notebook register. Three variants:
 *   DotRule  — thin line with three amber dots
 *   ThinRule — single hairline (rule token)
 *   LabRule  — amber tick + dot + trailing hairline (used as a section lead)
 */

export function DotRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-rule" />
      <span className="h-1 w-1 rounded-full bg-dawn/80" />
      <span className="h-1 w-1 rounded-full bg-dawn/50" />
      <span className="h-1 w-1 rounded-full bg-dawn/80" />
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}

export function ThinRule({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`h-px w-full bg-rule ${className}`} />;
}

export function LabRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-8 bg-dawn" />
      <span className="h-1.5 w-1.5 rounded-full bg-dawn" />
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}

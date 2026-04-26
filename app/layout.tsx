/**
 * Root pass-through. The real `<html>`/`<body>` shell lives in
 * `app/[locale]/layout.tsx` so we can set `lang={locale}` correctly per
 * request. Next requires a root layout exists at `app/layout.tsx`, so this
 * file simply forwards children.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

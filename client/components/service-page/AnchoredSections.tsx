import { CheckCircle2 } from "lucide-react";
import type { ServicePageContent } from "./types";

type Section = NonNullable<ServicePageContent["sections"]>[number];

// Sections a Services menu item links to with #id instead of its own page.
// Used by <ServicePage> and by older hand-built pages (Audit Readiness, Penetration Testing).
export function AnchoredSections({ sections, startSoft = false }: { sections: Section[]; startSoft?: boolean }) {
  return (
    <>
      {sections.map((sec, i) => (
        <section
          key={sec.id}
          id={sec.id}
          className={`scroll-mt-24 py-16 sm:py-20 ${(i % 2 === 0) !== startSoft ? "bg-white" : "bg-gradient-to-br from-gray-50 via-white to-blue-50"}`}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
            <div className="lg:col-span-2">
              {sec.eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{sec.eyebrow}</p>
              )}
              <h2 className="mb-4 text-3xl font-bold leading-tight text-primary">{sec.title}</h2>
              <p className="text-lg leading-relaxed text-gray-700">{sec.body}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
              {sec.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-gray-800 shadow-lg"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}

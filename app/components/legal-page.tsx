import Link from "next/link";
import { PageHero } from "./ui";
import { legal, legalNav } from "../data/site";

export type LegalSection = { title: string; content: React.ReactNode };

export function LegalPage({
  title,
  lead,
  current,
  sections,
}: {
  title: string;
  lead?: string;
  current: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Informations légales" title={title} lead={lead} />
      <section className="bg-white py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <nav aria-label="Pages légales" className="lg:col-span-3">
            <ul className="space-y-1 lg:sticky lg:top-28">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.href === current ? "page" : undefined}
                    className={`block rounded-xl px-4 py-2.5 text-sm transition ${
                      item.href === current
                        ? "bg-navy font-semibold text-white"
                        : "text-slate hover:bg-ice hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-w-3xl lg:col-span-9">
            <p className="eyebrow text-slate">Dernière mise à jour : {legal.updated}</p>
            <div className="mt-8 space-y-12">
              {sections.map((s, i) => (
                <section key={s.title} aria-labelledby={`section-${i}`}>
                  <h2 id={`section-${i}`} className="font-display text-2xl font-semibold text-navy">
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-3 leading-relaxed text-slate [&_a]:font-medium [&_a]:text-sea [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-navy [&_li]:pl-1 [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                    {s.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

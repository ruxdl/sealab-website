"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { poles, type Pole, type Prestation } from "../data/prestations";

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

// Pluriels simples : « sites » → « site », « matériaux » → « materiau ».
const stem = (w: string) => (w.length > 3 ? w.replace(/(aux|x|s)$/, (m) => (m === "aux" ? "au" : "")) : w);

// Mots du langage courant → termes employés dans le catalogue.
const synonyms: Record<string, string[]> = {
  carbone: ["carbone", "ges", "emission"],
  co2: ["carbone", "ges", "emission"],
  ges: ["ges", "carbone"],
  climat: ["carbone", "ges", "decarbonation"],
  internet: ["web"],
  site: ["site", "web"],
  appli: ["application"],
  app: ["application"],
  cao: ["3d", "modelisation"],
  plan: ["plan", "3d"],
  simulation: ["simulation", "modelisation", "numerique", "calcul"],
  calcul: ["calcul", "modelisation", "simulation"],
  robot: ["robot", "robotique"],
  drone: ["robot", "autonome"],
  bateau: ["navale", "flottant", "maritime", "hydrodynamique"],
  navire: ["navale", "flottant", "maritime"],
  mer: ["marin", "maritime", "hydrographie", "navale"],
  eau: ["fluide", "hydrodynamique", "ecoulement"],
  capteur: ["capteur", "acquisition", "instrumentation"],
  anglais: ["anglais", "traduction"],
  traduire: ["traduction"],
  marche: ["marche", "concurrence"],
  concurrent: ["concurrence", "marche"],
  financement: ["financement", "finance"],
  subvention: ["financement", "aide"],
  business: ["marche", "viabilite", "economique"],
  environnement: ["environnement", "environnemental", "acv", "carbone"],
  ecologie: ["environnement", "environnemental", "transition"],
  donnee: ["donnee", "data"],
  data: ["donnee", "data"],
  logiciel: ["logiciel", "outil"],
  automatiser: ["automatisation", "automatiser"],
};

const indexOf = (p: Prestation, domaine: string, pole: Pole) =>
  " " +
  normalize([p.title, p.description, domaine, pole.title, ...(p.applications ?? []), ...p.tags].join(" "))
    .split(" ")
    .map(stem)
    .join(" ") +
  " ";

const stopwords = new Set(["de", "du", "des", "la", "le", "les", "un", "une", "et", "en", "pour", "sur", "au", "aux", "mon", "ma", "mes", "notre", "nos", "je"]);

const terms = (query: string) =>
  normalize(query)
    .split(" ")
    .filter((w) => (w.length > 1 || /\d/.test(w)) && !stopwords.has(w))
    .map((w) => [...new Set([stem(w), ...(synonyms[stem(w)] ?? synonyms[w] ?? []).map(stem)])]);

/** Nombre de mots de la recherche retrouvés dans la prestation. */
const score = (haystack: string, query: string[][]) =>
  // Mots courts (ACV, GES, 3D…) : mot entier ; sinon début de mot (« modél » trouve « modélisation »).
  query.filter((alts) => alts.some((a) => haystack.includes(a.length <= 3 ? ` ${a} ` : ` ${a}`))).length;

const suggestions = ["ACV", "Bilan carbone", "Modélisation 3D", "Site web", "Robotique", "Étude de marché", "Traduction"];

export function PrestationsExplorer() {
  const [pole, setPole] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const barRef = useRef<HTMLDivElement>(null);

  const { results, approximate } = useMemo(() => {
    const q = terms(query);
    const filter = (min: number) =>
      poles
        .filter((p) => !pole || p.id === pole)
        .map((p) => ({
          ...p,
          domaines: p.domaines
            .map((d) => ({
              ...d,
              prestations: d.prestations.filter((x) => !q.length || score(indexOf(x, d.title, p), q) >= min),
            }))
            .filter((d) => d.prestations.length > 0),
        }))
        .filter((p) => p.domaines.length > 0);

    // Tous les mots d'abord ; à défaut, au moins un mot (résultats approchants).
    const exact = filter(q.length);
    if (exact.length || !q.length) return { results: exact, approximate: false };
    return { results: filter(1), approximate: true };
  }, [pole, query]);

  const total = results.reduce((n, p) => n + p.domaines.reduce((m, d) => m + d.prestations.length, 0), 0);
  const filtered = Boolean(pole || query);

  // Amène la barre de recherche en haut de l'écran pour que les résultats soient visibles.
  const bringResultsIntoView = () => {
    const bar = barRef.current;
    if (bar && bar.getBoundingClientRect().top > 120) {
      document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const search = (value: string) => {
    setQuery(value);
    bringResultsIntoView();
  };

  const reset = () => {
    setPole(null);
    setQuery("");
  };

  return (
    <div>
      <div ref={barRef} className="sticky top-16 z-30 border-b border-line bg-foam/90 backdrop-blur-xl lg:top-20">
        <div className="wrap flex flex-col gap-3 py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div role="group" aria-label="Filtrer par pôle" className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1">
              {[{ id: null, title: "Tous les pôles" }, ...poles].map((p) => {
                const active = pole === p.id;
                return (
                  <button
                    key={p.id ?? "all"}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setPole(p.id)}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
                      active ? "bg-navy text-white" : "bg-white text-slate ring-1 ring-line hover:text-navy"
                    }`}
                  >
                    {p.title}
                  </button>
                );
              })}
            </div>
            <label className="relative block lg:w-80">
              <span className="sr-only">Rechercher une prestation</span>
              <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-slate" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(e) => search(e.target.value)}
                placeholder="Rechercher : ACV, 3D, site web…"
                className="w-full rounded-full border-0 bg-white py-2.5 pr-4 pl-10 text-sm text-navy ring-1 ring-line placeholder:text-slate focus:ring-2 focus:ring-cyan focus:outline-none"
              />
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1">
              <span className="eyebrow self-center pr-1 text-[0.65rem] text-slate">Suggestions</span>
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => search(s)}
                  className="shrink-0 rounded-full bg-cyan/10 px-3 py-1 text-xs whitespace-nowrap text-sea transition hover:bg-cyan/20"
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="ml-auto text-sm text-slate" aria-live="polite">
              {approximate && total > 0 && <span className="mr-2">Résultats approchants :</span>}
              <strong className="font-semibold text-navy">{total}</strong> prestation{total > 1 ? "s" : ""}
              {filtered && (
                <button type="button" onClick={reset} className="ml-3 inline-flex items-center gap-1 text-sea hover:text-navy">
                  <X className="size-3.5" aria-hidden /> Réinitialiser
                </button>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="wrap py-16 sm:py-20">
        {results.length === 0 && (
          <div className="rounded-3xl border border-dashed border-line bg-white p-10 text-center">
            <p className="font-display text-2xl font-semibold text-navy">Aucune prestation ne correspond.</p>
            <p className="mx-auto mt-3 max-w-md text-slate">
              Notre liste n&apos;est pas exhaustive : décrivez-nous votre besoin, nous vous dirons s&apos;il est à
              notre portée.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button type="button" onClick={reset} className="rounded-full px-5 py-3 font-semibold text-navy ring-1 ring-line">
                Tout afficher
              </button>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 font-semibold text-white">
                Nous contacter <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        )}

        <div className="space-y-24">
          {results.map((p) => (
            <section key={p.id} id={p.id} aria-labelledby={`${p.id}-titre`} className="scroll-mt-48">
              <div className="grid gap-6 border-b border-navy/15 pb-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="font-mono text-sm text-sea">Pôle 0{p.number}</p>
                  <h2 id={`${p.id}-titre`} className="mt-2 font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
                    {p.title}
                  </h2>
                </div>
                <p className="leading-relaxed text-slate lg:col-span-7 lg:pt-7">{p.intro}</p>
              </div>

              <div className="mt-4 divide-y divide-line">
                {p.domaines.map((d) => (
                  <div key={d.code} className="grid gap-6 py-10 lg:grid-cols-12">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-3 lg:sticky lg:top-56">
                        <span className="rounded-full bg-navy px-2.5 py-1 font-mono text-xs text-white">{d.code}</span>
                        <h3 className="font-display text-xl font-semibold text-navy">{d.title}</h3>
                      </div>
                    </div>
                    <div className="grid gap-4 lg:col-span-9 xl:grid-cols-2">
                      {d.prestations.map((x) => (
                        <article
                          key={x.id}
                          className={`flex flex-col rounded-2xl border border-line bg-white p-6 transition hover:border-cyan/60 hover:shadow-[0_12px_40px_-20px_rgba(19,33,63,0.35)] ${
                            d.prestations.length === 1 ? "xl:col-span-2" : ""
                          }`}
                        >
                          <h4 className="font-display text-lg font-semibold text-navy">{x.title}</h4>
                          <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{x.description}</p>
                          {x.applications && (
                            <div className="mt-5">
                              <p className="eyebrow text-[0.65rem] text-slate">Applications</p>
                              <ul className="mt-2 flex flex-wrap gap-1.5">
                                {x.applications.map((a) => (
                                  <li key={a} className="rounded-lg bg-ice px-2.5 py-1 text-[0.82rem] text-navy">
                                    {a}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <ul className="mt-auto flex flex-wrap gap-1.5 pt-6" aria-label="Filières et compétences mobilisées">
                            {x.tags.map((t) => (
                              <li key={t} className="rounded-full bg-cyan/12 px-2.5 py-1 font-mono text-[0.7rem] font-medium text-sea">
                                {t}
                              </li>
                            ))}
                          </ul>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

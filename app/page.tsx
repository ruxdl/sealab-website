import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChartLine,
  Code,
  Cog,
  FlaskConical,
  Landmark,
  Leaf,
  Rocket,
  School,
} from "lucide-react";
import { ButtonLink, CtaBand, Eyebrow, SectionTitle, WaterLevel } from "./components/ui";
import { MissionsMarquee } from "./components/missions-marquee";
import {
  atouts,
  audiences,
  keyFigures,
  methode,
  missionsEcole,
  site,
} from "./data/site";
import { countByFiliere, filieres, poleCount, poles, prestationsCount } from "./data/prestations";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const poleIcons = {
  ingenierie: Cog,
  digitalisation: Code,
  environnement: Leaf,
  strategie: ChartLine,
} as const;

const audienceIcons = [Building2, Landmark, FlaskConical, Rocket];

export default function Home() {
  const maxFiliere = Math.max(...filieres.map((f) => countByFiliere(f.code)));

  return (
    <>
      {/* ═══ Hero : la ligne de flottaison ═══ */}
      <section className="relative overflow-hidden" aria-label="Présentation">
        <div className="relative bg-ice pt-28 sm:pt-36">
          <div className="isobaths drift text-navy/[0.07]" aria-hidden />
          <div className="wrap relative flex flex-wrap items-end justify-between gap-x-10 gap-y-6 pb-4 sm:pb-6">
            <div>
              <Eyebrow>Junior-Entreprise · SeaTech Toulon</Eyebrow>
              <p className="mt-5 max-w-xl font-display text-2xl leading-snug font-medium text-balance text-navy sm:text-3xl">
                Ingénierie &amp; innovation au service de la mer.
              </p>
            </div>
            <div className="eyebrow hidden text-right leading-relaxed text-slate sm:block">
              {site.coordinates}
              <br />
              <span className="text-sea">{site.campus}</span>
            </div>
          </div>
        </div>

        <div
          className="relative -mt-px"
          style={{ background: "linear-gradient(to bottom, var(--color-ice) 50%, var(--color-navy) 50%)" }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2 overflow-hidden" aria-hidden>
            <svg className="swell h-2.5 w-[200%] text-cyan" viewBox="0 0 200 6" preserveAspectRatio="none">
              <path
                d="M0 3 Q 2.5 0.5 5 3 T 10 3 T 15 3 T 20 3 T 25 3 T 30 3 T 35 3 T 40 3 T 45 3 T 50 3 T 55 3 T 60 3 T 65 3 T 70 3 T 75 3 T 80 3 T 85 3 T 90 3 T 95 3 T 100 3 T 105 3 T 110 3 T 115 3 T 120 3 T 125 3 T 130 3 T 135 3 T 140 3 T 145 3 T 150 3 T 155 3 T 160 3 T 165 3 T 170 3 T 175 3 T 180 3 T 185 3 T 190 3 T 195 3 T 200 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <div className="wrap relative">
            <h1 className="wordmark relative -ml-[0.04em]">
              <span className="sr-only">Sea&apos;Lab, la Junior-Entreprise de SeaTech Toulon</span>
              <span aria-hidden className="above-water block text-navy">
                Sea’Lab
              </span>
              <span aria-hidden className="below-water absolute inset-0 block text-cyan">
                Sea’Lab
              </span>
            </h1>
            <WaterLevel className="absolute top-1/2 right-6 hidden size-9 -translate-y-[115%] text-navy sm:block lg:right-10" />
          </div>
        </div>

        <div className="relative -mt-px bg-navy pb-16 text-white sm:pb-20">
          <div className="isobaths isobaths-alt text-cyan/[0.09]" aria-hidden />
          <div className="wrap relative">
            <div className="grid gap-10 pt-8 sm:pt-12 lg:grid-cols-12 lg:items-end">
              <p className="text-lg leading-relaxed text-pretty text-white/85 sm:text-2xl sm:leading-relaxed lg:col-span-7">
                Les élèves-ingénieurs de <strong className="font-semibold text-white">SeaTech</strong>, école
                d&apos;ingénieurs de l&apos;Université de Toulon, réalisent vos études en ingénierie,
                digitalisation, environnement et stratégie, en s&apos;appuyant sur les laboratoires et plateformes
                de l&apos;école.
              </p>
              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <ButtonLink href="/prestations" variant="light">
                  Découvrir nos prestations
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost-dark">
                  Parler de votre projet
                </ButtonLink>
              </div>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-px border-y border-white/15 bg-white/15 sm:mt-20 lg:grid-cols-4">
              {keyFigures.map((fig) => (
                <div key={fig.label} className="flex flex-col bg-navy px-4 py-6 sm:py-8 lg:px-8">
                  <dt className="eyebrow order-2 mt-2 text-[0.68rem] leading-relaxed text-mist">{fig.label}</dt>
                  <dd className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    {fig.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═══ 01 · Qui sommes-nous ═══ */}
      <section className="bg-foam py-24 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionTitle
              index="01"
              eyebrow="Qui sommes-nous"
              title="La Junior-Entreprise de SeaTech, au service de vos projets."
            />
            <div className="reveal mt-6 space-y-4 text-lg leading-relaxed text-slate">
              <p>
                Association pédagogique à but non lucratif régie par la loi 1901, Sea&apos;Lab permet aux élèves de
                SeaTech de mettre en pratique leurs enseignements en réalisant des{" "}
                <strong className="font-semibold text-navy">missions rétribuées</strong> pour des entreprises, des
                collectivités et des laboratoires.
              </p>
              <p>
                Nos prestations couvrent les <strong className="font-semibold text-navy">six filières</strong> de
                l&apos;école : ingénierie marine, mécanique, génie logiciel, matériaux, modélisation &amp; simulation,
                mécatronique &amp; robotique.
              </p>
            </div>
            <ul className="reveal mt-8 flex flex-wrap gap-2">
              {["Association loi 1901", "Junior-Création CNJE", "Seule Junior-Entreprise de SeaTech"].map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy"
                >
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/association"
              className="reveal mt-10 inline-flex items-center gap-2 font-semibold text-sea hover:text-navy"
            >
              Découvrir l&apos;association, son histoire et son équipe
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

          <figure className="reveal relative lg:col-span-6">
            <div className="absolute -inset-3 rounded-[2rem] border border-dashed border-cyan/50" aria-hidden />
            <Image
              src="/images/equipe-sealab.jpg"
              alt="Les membres de Sea'Lab réunis dans un atelier de SeaTech"
              width={1600}
              height={1200}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="relative aspect-[4/3] w-full rounded-[1.6rem] object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-navy/85 px-4 py-2 font-mono text-[0.7rem] tracking-wider text-white uppercase backdrop-blur">
              L&apos;équipe Sea&apos;Lab · SeaTech, Toulon
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ═══ 02 · Pôles ═══ */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionTitle
              index="02"
              eyebrow="Nos prestations"
              title="Quatre pôles d'expertise, adossés aux compétences de SeaTech."
              lead={`${prestationsCount} prestations détaillées, une liste non exhaustive : chaque mission est construite autour de votre besoin.`}
            />
            <ButtonLink href="/prestations" variant="secondary" className="reveal">
              Toutes les prestations
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {poles.map((pole) => {
              const Icon = poleIcons[pole.id as keyof typeof poleIcons];
              return (
                <Link
                  key={pole.id}
                  href={`/prestations#${pole.id}`}
                  className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-foam p-7 transition duration-300 hover:-translate-y-1 hover:border-navy hover:bg-navy sm:p-9"
                >
                  <div className="isobaths text-cyan/0 transition-colors duration-500 group-hover:text-cyan/10" aria-hidden />
                  <div className="relative flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-white text-sea ring-1 ring-line transition group-hover:bg-white/10 group-hover:text-cyan-light group-hover:ring-white/15">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <span className="font-mono text-sm text-slate group-hover:text-white/70" aria-hidden>
                      0{pole.number}
                    </span>
                  </div>
                  <h3 className="relative mt-8 font-display text-3xl font-semibold tracking-tight text-navy group-hover:text-white">
                    {pole.title}
                  </h3>
                  <p className="relative mt-3 text-slate group-hover:text-mist">{pole.short}</p>
                  <ul className="relative mt-6 space-y-2">
                    {pole.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-navy group-hover:text-white">
                        <span className="h-px w-4 bg-cyan" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto flex items-center justify-between pt-10">
                    <span className="eyebrow text-sea group-hover:text-cyan-light">
                      {poleCount(pole)} prestations
                    </span>
                    <span className="grid size-10 place-items-center rounded-full bg-navy text-white transition group-hover:bg-cyan group-hover:text-abyss">
                      <ArrowUpRight className="size-5" aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Exemples de missions ═══ */}
      <MissionsMarquee />

      {/* ═══ 03 · Méthode ═══ */}
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="isobaths text-cyan/[0.07]" aria-hidden />
        <div className="wrap relative">
          <SectionTitle
            tone="dark"
            index="03"
            eyebrow="Notre méthode"
            title="Une étude menée comme un vrai projet d'ingénieur."
            lead="De la première prise de contact à la livraison, chaque étape est cadrée et suivie par un responsable dédié."
          />
          <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
            <span
              className="absolute top-6 right-[10%] left-[10%] hidden border-t border-dashed border-cyan/40 lg:block"
              aria-hidden
            />
            <span
              className="absolute top-2 bottom-2 left-6 border-l border-dashed border-cyan/40 lg:hidden"
              aria-hidden
            />
            {methode.map((step, i) => (
              <li key={step.title} className="reveal relative flex gap-6 lg:flex-col lg:items-center lg:text-center">
                <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-cyan/50 bg-navy font-mono text-sm text-cyan-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-mist">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ 04 · Pour qui ═══ */}
      <section className="bg-foam py-24 sm:py-32">
        <div className="wrap">
          <SectionTitle
            index="04"
            eyebrow="Pour qui ?"
            title="Des missions pour les professionnels du territoire et d'ailleurs."
            lead="Un besoin ponctuel ou une brique d'un projet plus global : nous adaptons chaque mission à votre structure."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => {
              const Icon = audienceIcons[i];
              return (
                <div key={a.title} className="reveal rounded-3xl border border-line bg-white p-7">
                  <Icon className="size-7 text-sea" aria-hidden />
                  <h3 className="mt-6 font-display text-xl font-semibold text-navy">{a.title}</h3>
                  <p className="mt-2 text-slate">{a.text}</p>
                </div>
              );
            })}
          </div>

          <div className="reveal mt-5 grid overflow-hidden rounded-3xl bg-ice lg:grid-cols-12">
            <div className="p-8 sm:p-10 lg:col-span-5">
              <School className="size-7 text-sea" aria-hidden />
              <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
                École et Université : confiez-nous vos petits projets
              </h3>
              <p className="mt-3 text-slate">
                Un cadre professionnel (convention d&apos;étude, intervenants sélectionnés, suivi par un responsable
                dédié, tarif JEH encadré par la CNJE) pour les besoins des laboratoires et des services de SeaTech et
                de l&apos;Université de Toulon.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-sea hover:text-navy"
              >
                Proposer une mission <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ul className="grid gap-px bg-line/70 sm:grid-cols-2 lg:col-span-7">
              {missionsEcole.map((m) => (
                <li key={m.title} className="bg-white/70 p-7">
                  <p className="font-semibold text-navy">{m.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 05 · Atouts & filières ═══ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <SectionTitle
            index="05"
            eyebrow="Nos atouts"
            title="Pourquoi choisir Sea'Lab ?"
          />
          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {atouts.map((a, i) => (
              <div key={a.title} className="reveal flex gap-6">
                <span
                  className="w-16 shrink-0 font-display text-5xl leading-none font-semibold text-cyan/40"
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-navy">{a.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{a.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-[2rem] bg-navy p-8 text-white sm:p-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <Eyebrow tone="dark">Six filières, une seule équipe</Eyebrow>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Les majors de SeaTech mobilisables sur vos missions
                </h3>
              </div>
              <p className="max-w-xs text-sm text-mist">
                Nombre de prestations de notre catalogue auxquelles chaque filière contribue.
              </p>
            </div>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {filieres.map((f) => {
                const n = countByFiliere(f.code);
                return (
                  <li key={f.code} className="bg-navy p-6 transition-colors hover:bg-navy-2">
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-3xl font-semibold">{f.code}</span>
                      <span className="font-mono text-sm text-cyan-light">{n} prest.</span>
                    </div>
                    <p className="mt-1 text-mist">{f.domaine}</p>
                    <div className="mt-5 h-1 rounded-full bg-white/10">
                      <div className="h-1 rounded-full bg-cyan" style={{ width: `${(n / maxFiliere) * 100}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ Campus ═══ */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/campus-seatech.jpg"
          alt="Le bâtiment de SeaTech sur le campus de La Garde"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-abyss/95 via-abyss/75 to-abyss/10" aria-hidden />
        <div className="wrap py-28 text-white sm:py-40">
          <div className="reveal max-w-xl">
            <Eyebrow tone="dark">{site.coordinates}</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
              Au cœur du bassin maritime toulonnais.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Sea&apos;Lab est hébergée par SeaTech sur le campus de La Garde de l&apos;Université de Toulon. Nos
              missions s&apos;appuient sur les laboratoires et plateformes techniques mis à disposition par
              l&apos;école, et sur la proximité de ses enseignants-chercheurs.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Réseau ═══ */}
      <section className="bg-foam py-20">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Notre réseau</Eyebrow>
            <p className="mt-4 font-display text-2xl font-semibold text-navy">
              Soutenus par SeaTech et l&apos;Université de Toulon, membres de la CNJE.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">
            {[
              { src: "/brand/seatech.png", alt: "SeaTech Toulon", w: 721, h: 160, label: "École d'ingénieurs" },
              {
                src: "/brand/universite-toulon.png",
                alt: "Université de Toulon",
                w: 670,
                h: 160,
                label: "Université",
              },
              {
                src: "/brand/junior-entreprises.png",
                alt: "Confédération Nationale des Junior-Entreprises",
                w: 265,
                h: 220,
                label: "Mouvement CNJE",
              },
            ].map((p) => (
              <li key={p.alt} className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white p-6">
                <div className="flex h-14 items-center">
                  <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="max-h-14 w-auto" />
                </div>
                <span className="eyebrow text-[0.65rem] text-slate">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Check, Circle } from "lucide-react";
import { CtaBand, Eyebrow, PageHero, SectionTitle } from "../components/ui";
import {
  apports,
  atouts,
  bilan,
  bureau,
  bureauFilieres,
  histoire,
  passation,
  statutsCnje,
} from "../data/site";

export const metadata: Metadata = {
  title: "L'association",
  description:
    "Sea'Lab, Junior-Entreprise de SeaTech : histoire, bureau 2026-27, parcours CNJE et passation.",
  alternates: { canonical: "/association" },
};

export default function AssociationPage() {
  return (
    <>
      <PageHero
        eyebrow="L'association"
        title={
          <>
            Une Junior-Entreprise portée par les <span className="text-sea">élèves-ingénieurs de SeaTech.</span>
          </>
        }
        lead="Créée en 2024, Sea'Lab a posé en deux ans des bases solides. Il reste une étape décisive : réaliser ses premières études."
      />

      {/* ═══ Qui sommes-nous ═══ */}
      <section className="bg-foam py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionTitle index="01" eyebrow="Qui sommes-nous" title="Mettre en pratique, au service de vrais clients." />
            <div className="reveal mt-8 space-y-5 text-lg leading-relaxed text-slate">
              <p>
                Sea&apos;Lab est la Junior-Entreprise de <strong className="text-navy">SeaTech</strong>, école
                d&apos;ingénieurs de l&apos;Université de Toulon. Association pédagogique à but non lucratif régie par
                la loi 1901, à caractère professionnalisant, elle permet aux étudiants de mettre en pratique leurs
                enseignements en réalisant des missions rétribuées pour des professionnels.
              </p>
              <p>
                Nos prestations couvrent les six filières de SeaTech (ingénierie marine, mécanique, génie logiciel,
                matériaux, modélisation &amp; simulation, mécatronique &amp; robotique) et s&apos;appuient sur les
                laboratoires et plateformes techniques mis à disposition par l&apos;école.
              </p>
              <p>
                Sea&apos;Lab est membre de la <strong className="text-navy">Confédération Nationale des
                Junior-Entreprises (CNJE)</strong> au statut Junior-Création. La CNJE est le premier mouvement
                étudiant de France et garantit la qualité des Junior-Entreprises par des audits réguliers.
              </p>
            </div>
          </div>
          <aside className="reveal self-start rounded-3xl bg-navy p-8 text-white sm:p-10 lg:col-span-5">
            <Eyebrow tone="dark">Parcours CNJE</Eyebrow>
            <h3 className="mt-4 font-display text-2xl font-semibold">Où en sommes-nous ?</h3>
            <ol className="mt-8 space-y-6">
              {statutsCnje.map((s, i) => (
                <li key={s.name} className="relative flex gap-5">
                  {i < statutsCnje.length - 1 && (
                    <span className="absolute top-10 bottom-[-1.5rem] left-[1.15rem] w-px bg-white/15" aria-hidden />
                  )}
                  <span
                    className={`relative grid size-9 shrink-0 place-items-center rounded-full font-mono text-xs ${
                      s.current ? "bg-cyan text-abyss" : "border border-white/25 text-mist"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="flex flex-wrap items-center gap-2 font-semibold">
                      {s.name}
                      {s.current && (
                        <span className="rounded-full bg-cyan/20 px-2 py-0.5 font-mono text-[0.65rem] text-cyan-light">
                          Statut actuel
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-mist">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* ═══ Histoire ═══ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <SectionTitle
            index="02"
            eyebrow="Notre histoire"
            title="Deux ans pour construire des bases solides."
            lead="Il reste à franchir l'étape décisive : réaliser notre première étude."
          />
          <ol className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <span className="absolute top-7 right-0 left-0 hidden h-px bg-cyan/40 lg:block" aria-hidden />
            {histoire.map((h) => (
              <li key={h.year} className="reveal relative">
                <span
                  className={`relative grid size-14 place-items-center rounded-full font-display font-semibold ${
                    h.upcoming ? "bg-cyan text-white" : "bg-navy text-white"
                  }`}
                >
                  {h.year}
                </span>
                <div
                  className={`mt-6 rounded-3xl p-7 ${
                    h.upcoming ? "border-2 border-dashed border-cyan/60 bg-cyan/5" : "border border-line bg-foam"
                  }`}
                >
                  <h3 className={`font-display text-2xl font-semibold ${h.upcoming ? "text-sea" : "text-navy"}`}>
                    {h.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate">{h.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="reveal mt-10 flex flex-col gap-5 rounded-3xl border border-line p-6 sm:p-8 lg:flex-row lg:items-center">
            <p className="font-display text-xl font-semibold text-navy lg:w-40 lg:shrink-0">Bilan à date</p>
            <ul className="flex flex-wrap gap-2">
              {bilan.map((b) => (
                <li
                  key={b.label}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold ${
                    b.done ? "bg-navy text-white" : "border border-dashed border-cyan text-sea"
                  }`}
                >
                  {b.done ? <Check className="size-3.5" aria-hidden /> : <Circle className="size-3" aria-hidden />}
                  {b.label}
                  <span className="sr-only">{b.done ? "(réalisé)" : "(à venir)"}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ Équipe ═══ */}
      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="isobaths text-cyan/[0.07]" aria-hidden />
        <div className="wrap relative grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionTitle
              tone="dark"
              index="03"
              eyebrow="Notre équipe"
              title="Le bureau 2026-27"
              lead={bureauFilieres}
            />
            <ul className="reveal mt-10 grid gap-3 sm:grid-cols-2">
              {bureau.map((m, i) => (
                <li
                  key={m.role}
                  className={`rounded-2xl p-6 ${i === 0 ? "bg-cyan text-abyss" : "bg-white/[0.06] ring-1 ring-white/10"}`}
                >
                  <p className={`text-sm ${i === 0 ? "text-abyss" : "text-cyan-light"}`}>{m.role}</p>
                  <p className="mt-1 font-display text-xl font-semibold">{m.name}</p>
                </li>
              ))}
              <li className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <p className="font-display text-xl font-semibold">Membres cotisants</p>
                <p className="font-display text-4xl font-semibold text-cyan-light">16</p>
              </li>
            </ul>
          </div>
          <figure className="reveal relative self-center lg:col-span-6">
            <Image
              src="/images/equipe-sealab.jpg"
              alt="Les membres de Sea'Lab dans un atelier de SeaTech"
              width={1600}
              height={1200}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] w-full rounded-[1.6rem] object-cover"
            />
            <figcaption className="eyebrow mt-4 text-[0.68rem] text-mist">
              L&apos;équipe Sea&apos;Lab dans les locaux de SeaTech
            </figcaption>
          </figure>
        </div>

        <div className="wrap relative mt-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow tone="dark">Une passation pensée pour durer</Eyebrow>
              <p className="mt-4 font-display text-3xl font-semibold tracking-tight">
                Chaque bureau forme le suivant.
              </p>
              <p className="mt-4 text-mist">
                Prochaine étape : passer d&apos;un bureau polyvalent à de vrais pôles (commercial, qualité,
                communication, trésorerie).
              </p>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:col-span-8">
              {passation.map((p, i) => (
                <li key={p.title} className="bg-navy p-7">
                  <span className="font-mono text-sm text-cyan-light">0{i + 1}</span>
                  <p className="mt-3 font-display text-xl font-semibold">{p.title}</p>
                  <p className="mt-2 text-mist">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══ Notre rôle à SeaTech ═══ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <SectionTitle
            className="lg:col-span-4"
            index="04"
            eyebrow="Notre rôle à SeaTech"
            title="Ce que Sea'Lab apporte à l'école."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {apports.map((a) => (
              <li key={a.title} className="reveal rounded-3xl border border-line bg-foam p-7">
                <h3 className="font-display text-xl font-semibold text-navy">{a.title}</h3>
                <p className="mt-2 text-slate">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="wrap mt-24">
          <div className="grid gap-px overflow-hidden rounded-3xl bg-line md:grid-cols-2">
            {atouts.map((a, i) => (
              <div key={a.title} className="bg-white p-8">
                <span className="font-mono text-sm text-sea">Atout 0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

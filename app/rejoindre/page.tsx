import type { Metadata } from "next";
import { Briefcase, GraduationCap, Handshake, Mail, Sparkles, Users } from "lucide-react";
import { PageHero, SectionTitle } from "../components/ui";
import { passation, site } from "../data/site";

export const metadata: Metadata = {
  title: "Rejoindre Sea'Lab",
  description:
    "Élève de SeaTech ? Rejoignez Sea'Lab : missions rétribuées pour de vrais clients, bureau et pôles.",
  alternates: { canonical: "/rejoindre" },
};

const raisons = [
  {
    icon: GraduationCap,
    title: "Mettre en pratique",
    text: "Appliquer vos enseignements de SeaTech sur des sujets concrets, dans votre filière ou à la croisée de plusieurs.",
  },
  {
    icon: Briefcase,
    title: "De vrais clients",
    text: "De vrais cahiers des charges, de vrais délais et des missions rétribuées.",
  },
  {
    icon: Handshake,
    title: "Un réseau",
    text: "Des contacts avec les entreprises du territoire : stages, alternances, partenariats.",
  },
  {
    icon: Sparkles,
    title: "Une aventure collective",
    text: "Construire une Junior-Entreprise encore jeune et faire grandir la vie associative de l'école.",
  },
];

const poles = ["Commercial", "Qualité", "Communication", "Trésorerie"];

export default function RejoindrePage() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Rejoindre Sea'Lab")}`;
  return (
    <>
      <PageHero
        eyebrow="Élèves de SeaTech"
        title={
          <>
            Rejoignez l&apos;équipage <span className="text-sea">Sea&apos;Lab.</span>
          </>
        }
        lead="De la 1re à la 3e année, chaque élève de SeaTech peut s'investir dans Sea'Lab : en réalisant des missions pour des clients, ou en prenant part au bureau qui fait vivre l'association."
      >
        <a
          href={mailto}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 font-semibold text-white transition hover:bg-navy-2"
        >
          <Mail className="size-4" aria-hidden /> Nous écrire pour adhérer
        </a>
      </PageHero>

      <section className="bg-foam py-24 sm:py-32">
        <div className="wrap">
          <SectionTitle index="01" eyebrow="Pourquoi nous rejoindre" title="Ce que Sea'Lab vous apporte." />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {raisons.map((r) => (
              <li key={r.title} className="reveal rounded-3xl border border-line bg-white p-7">
                <r.icon className="size-7 text-sea" aria-hidden />
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">{r.title}</h3>
                <p className="mt-2 text-slate">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="wrap">
          <SectionTitle index="02" eyebrow="Deux façons de s'impliquer" title="Intervenant ou membre du bureau." />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <article className="reveal rounded-3xl bg-ice p-8 sm:p-10">
              <Briefcase className="size-8 text-sea" aria-hidden />
              <h3 className="mt-6 font-display text-3xl font-semibold text-navy">Intervenant sur une étude</h3>
              <p className="mt-4 leading-relaxed text-slate">
                Pour chaque étude, Sea&apos;Lab sélectionne les intervenants dont les compétences correspondent au
                besoin du client. Vous réalisez la mission, accompagné par un responsable d&apos;étude, et êtes
                rétribué pour votre travail.
              </p>
              <ul className="mt-6 space-y-2 text-navy">
                {["Sélection selon les compétences", "Suivi par un responsable dédié", "Mission rétribuée"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-cyan" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
            <article className="reveal relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
              <div className="isobaths text-cyan/[0.08]" aria-hidden />
              <Users className="relative size-8 text-cyan-light" aria-hidden />
              <h3 className="relative mt-6 font-display text-3xl font-semibold">Membre du bureau</h3>
              <p className="relative mt-4 leading-relaxed text-mist">
                Le bureau fait vivre la Junior-Entreprise : démarchage, suivi des études, communication, gestion. Pour
                grandir, Sea&apos;Lab veut passer d&apos;un bureau polyvalent à de vrais pôles.
              </p>
              <ul className="relative mt-6 flex flex-wrap gap-2">
                {poles.map((p) => (
                  <li key={p} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/15">
                    Pôle {p.toLowerCase()}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="isobaths isobaths-alt text-cyan/[0.08]" aria-hidden />
        <div className="wrap relative">
          <SectionTitle
            tone="dark"
            index="03"
            eyebrow="La relève"
            title="Une passation pensée pour durer."
            lead="Vous êtes en 2A ? C'est le moment idéal pour préparer la suite."
          />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {passation.map((p, i) => (
              <li key={p.title} className="bg-navy p-7">
                <span className="font-mono text-sm text-cyan-light">0{i + 1}</span>
                <p className="mt-3 font-display text-xl font-semibold">{p.title}</p>
                <p className="mt-2 text-mist">{p.text}</p>
              </li>
            ))}
          </ol>
          <div className="reveal mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-cyan p-8 text-abyss sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="eyebrow text-abyss">Envie d&apos;embarquer ?</p>
              <p className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Écrivez-nous ou passez nous voir à SeaTech.</p>
            </div>
            <a
              href={mailto}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3.5 font-semibold text-white transition hover:bg-abyss"
            >
              <Mail className="size-4" aria-hidden /> {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

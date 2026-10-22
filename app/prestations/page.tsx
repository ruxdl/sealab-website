import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, Download } from "lucide-react";
import { CtaBand, PageHero, SectionTitle } from "../components/ui";
import { PrestationsExplorer } from "../components/prestations-explorer";
import { JsonLd } from "../components/json-ld";
import { filieres, poleCount, poles, prestationsCount } from "../data/prestations";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Prestations",
  description: `Les ${prestationsCount} prestations de Sea'Lab : ingénierie (mécanique, fluides, prototypage, architecture navale, hydrographie, matériaux, robotique, électronique), digitalisation, environnement & transition, stratégie & conseil.`,
  alternates: { canonical: "/prestations" },
};

const catalogueLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Prestations de Sea'Lab",
  url: `${site.url}/prestations`,
  itemListElement: poles.map((pole) => ({
    "@type": "OfferCatalog",
    name: pole.title,
    description: pole.intro,
    itemListElement: pole.domaines.flatMap((d) =>
      d.prestations.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: p.title,
          description: p.description,
          category: `${pole.title} › ${d.title}`,
          provider: { "@id": `${site.url}/#organisation` },
          areaServed: "FR",
        },
      })),
    ),
  })),
};

export default function PrestationsPage() {
  return (
    <>
      <JsonLd data={catalogueLd} />
      <PageHero
        eyebrow="Nos prestations"
        title={
          <>
            Quatre pôles, {prestationsCount} prestations,{" "}
            <span className="text-sea">six filières d&apos;ingénieurs.</span>
          </>
        }
        lead="De la simulation d'un écoulement au bilan carbone, du site web à l'étude de marché : nos prestations couvrent les domaines de formation de SeaTech et s'appuient sur les laboratoires de l'école."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#catalogue"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 font-semibold text-white transition hover:bg-navy-2"
          >
            Parcourir le catalogue <ArrowDown className="size-4" aria-hidden />
          </a>
          <a
            href={site.brochure}
            download
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-navy ring-1 ring-line transition hover:ring-navy/40"
          >
            <Download className="size-4" aria-hidden /> Télécharger la plaquette ({site.brochureLabel})
          </a>
        </div>

        <nav aria-label="Sommaire des pôles" className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {poles.map((p) => (
            <Link key={p.id} href={`#${p.id}`} className="group bg-white/80 p-6 transition hover:bg-white">
              <span className="font-mono text-xs text-sea">0{p.number} · {poleCount(p)} prestations</span>
              <span className="mt-3 block font-display text-xl font-semibold text-navy">{p.title}</span>
              <span className="mt-3 block space-y-1 text-sm text-slate">
                {p.domaines.map((d) => (
                  <span key={d.code} className="block">
                    {d.code} {d.title}
                  </span>
                ))}
              </span>
            </Link>
          ))}
        </nav>
      </PageHero>

      <div id="catalogue" className="scroll-mt-16">
        <PrestationsExplorer />
      </div>

      <section className="border-t border-line bg-white py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <SectionTitle
            className="lg:col-span-5"
            eyebrow="Légende"
            title="Les filières derrière chaque prestation"
            lead="Les étiquettes indiquent les filières de SeaTech mobilisées sur chaque prestation. Une même mission peut croiser plusieurs filières."
          />
          <dl className="grid gap-px self-start overflow-hidden rounded-3xl bg-line sm:grid-cols-2 lg:col-span-7">
            {filieres.map((f) => (
              <div key={f.code} className="bg-foam p-6">
                <dt className="font-mono text-sm font-medium text-sea">{f.code}</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-navy">{f.domaine}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

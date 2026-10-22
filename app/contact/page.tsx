import type { Metadata } from "next";
import { MapPin, Plus } from "lucide-react";
import { ContactForm } from "../components/contact-form";
import { JsonLd } from "../components/json-ld";
import { Eyebrow, PageHero, SectionTitle } from "../components/ui";
import { faq, site } from "../data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Sea'Lab, la Junior-Entreprise de SeaTech Toulon : décrivez votre projet et recevez une proposition personnalisée.",
  alternates: { canonical: "/contact" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const suite = [
  { title: "Nous vous recontactons", text: "Un membre du bureau revient vers vous pour échanger sur votre projet." },
  { title: "Étude du besoin", text: "Nous précisons ensemble le contexte, les objectifs et les livrables attendus." },
  { title: "Proposition personnalisée", text: "Vous recevez une proposition adaptée, puis la convention d'étude si elle vous convient." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de <span className="text-sea">votre projet.</span>
          </>
        }
        lead="Un besoin en ingénierie, en digitalisation, en environnement ou en stratégie ? Décrivez-le en quelques lignes : nous revenons vers vous avec une proposition personnalisée."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-line p-7">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-ice text-sea">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-navy">Où nous trouver</p>
                  <p className="mt-1 text-slate">
                    SeaTech, école d&apos;ingénieurs de l&apos;Université de Toulon
                    <br />
                    {site.campus}
                  </p>
                  <p className="eyebrow mt-3 text-[0.68rem] text-sea">{site.coordinates}</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white">
              <div className="isobaths text-cyan/[0.08]" aria-hidden />
              <div className="relative">
                <Eyebrow tone="dark">Et ensuite ?</Eyebrow>
                <ol className="mt-6 space-y-5">
                  {suite.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-cyan/50 font-mono text-xs text-cyan-light">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p className="mt-0.5 text-sm text-mist">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 bg-foam py-24 sm:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <SectionTitle
            className="lg:col-span-4"
            eyebrow="Questions fréquentes"
            title="Tout savoir avant de nous confier une mission."
          />
          <div className="divide-y divide-line rounded-3xl border border-line bg-white lg:col-span-8">
            {faq.map((item) => (
              <details key={item.q} className="group p-6 sm:p-7">
                <summary className="flex items-start justify-between gap-6 font-display text-lg font-semibold text-navy">
                  {item.q}
                  <Plus className="faq-icon mt-1 size-5 shrink-0 text-sea transition-transform" aria-hidden />
                </summary>
                <p className="mt-4 leading-relaxed text-slate">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

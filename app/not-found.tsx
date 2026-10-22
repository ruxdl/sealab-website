import { ButtonLink, WaterLevel } from "./components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy pt-24 text-white">
      <div className="isobaths drift text-cyan/[0.09]" aria-hidden />
      <div className="wrap relative">
        <WaterLevel className="size-10 text-cyan-light" />
        <p className="eyebrow mt-8 text-cyan-light">Erreur 404 · Hors carte</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] font-semibold tracking-tight sm:text-7xl">
          Cette page a pris le large.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-mist">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Reprenons le cap.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="light">
            Retour à l&apos;accueil
          </ButtonLink>
          <ButtonLink href="/prestations" variant="ghost-dark">
            Nos prestations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

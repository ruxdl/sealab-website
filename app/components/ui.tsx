import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Eyebrow({
  index,
  children,
  tone = "light",
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${tone === "dark" ? "text-cyan-light" : "text-sea"}`}>
      <span className="relative flex size-2">
        <span className="absolute inset-0 rounded-full bg-cyan opacity-60 motion-safe:animate-ping" />
        <span className="relative size-2 rounded-full bg-cyan" />
      </span>
      {index && <span className={tone === "dark" ? "text-white/60" : "text-slate"}>{index}</span>}
      {children}
    </p>
  );
}

export function SectionTitle({
  index,
  eyebrow,
  title,
  lead,
  tone = "light",
  className = "",
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`reveal max-w-3xl ${className}`}>
      <Eyebrow index={index} tone={tone}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl ${
          tone === "dark" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${tone === "dark" ? "text-mist" : "text-slate"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost-dark";
  className?: string;
}) {
  const styles = {
    primary: "bg-navy text-white hover:bg-navy-2",
    secondary: "bg-white text-navy ring-1 ring-line hover:ring-navy/40",
    light: "bg-cyan text-abyss hover:bg-cyan-light",
    "ghost-dark": "text-white ring-1 ring-white/25 hover:bg-white/10",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}

export function Tag({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[0.7rem] font-medium tracking-wide ${
        tone === "dark" ? "bg-white/10 text-cyan-light" : "bg-cyan/12 text-sea"
      }`}
    >
      {children}
    </span>
  );
}

/** Symbole « niveau d'eau » des plans techniques. */
export function WaterLevel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M5 4h14l-7 10z" strokeLinejoin="round" />
      <path d="M7 17.5h10M9.5 21h5" strokeLinecap="round" />
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ice pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="isobaths drift text-navy/[0.07]" aria-hidden />
      <div className="wrap relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.98] font-semibold tracking-tight text-balance text-navy sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lead && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-slate sm:text-xl">{lead}</p>}
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-navy/10" aria-hidden />
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="isobaths text-cyan/[0.09]" aria-hidden />
      <div className="pointer-events-none absolute top-1/2 right-[-10rem] size-[34rem] -translate-y-1/2 text-cyan/25 sm:right-[-4rem]" aria-hidden>
        <span className="sonar inset-0" />
        <span className="sonar inset-[16%]" />
        <span className="sonar inset-[32%]" />
        <span className="sonar sonar-ping inset-[32%]" />
      </div>
      <div className="wrap relative">
        <div className="reveal max-w-3xl">
          <Eyebrow tone="dark">Un projet, une question ?</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl">
            Ensemble, accompagnons vos projets <span className="text-cyan-light">au rythme des vagues.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-mist">
            Décrivez-nous votre besoin : nous revenons vers vous avec une proposition personnalisée.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="light">
              Nous contacter
            </ButtonLink>
            <ButtonLink href="/prestations" variant="ghost-dark">
              Voir les prestations
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

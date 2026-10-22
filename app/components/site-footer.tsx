import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { legalNav, nav, site } from "../data/site";
import { poles } from "../data/prestations";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-abyss text-white">
      <div className="isobaths isobaths-alt text-cyan/[0.07]" aria-hidden />

      <div className="wrap relative grid gap-12 pt-20 pb-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/brand/sl-mark-light.png" alt="" width={80} height={49} className="h-10 w-auto" />
            <span className="font-display text-2xl font-bold tracking-tight">Sea&apos;Lab</span>
          </Link>
          <p className="mt-5 max-w-sm text-mist">
            La Junior-Entreprise de SeaTech, école d&apos;ingénieurs de l&apos;Université de Toulon.
          </p>
          <p className="mt-6 font-display text-xl font-medium text-white">{site.motto}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <p className="eyebrow text-cyan-light">Prestations</p>
            <ul className="mt-4 space-y-2.5">
              {poles.map((pole) => (
                <li key={pole.id}>
                  <Link
                    href={`/prestations#${pole.id}`}
                    className="text-mist transition-colors hover:text-white"
                  >
                    {pole.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.brochure}
                  className="inline-flex items-center gap-1.5 text-mist transition-colors hover:text-white"
                  download
                >
                  <Download className="size-3.5" aria-hidden />
                  Plaquette ({site.brochureLabel})
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-cyan-light">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="text-mist transition-colors hover:text-white">
                  Accueil
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-mist transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact#faq" className="text-mist transition-colors hover:text-white">
                  Questions fréquentes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-cyan-light">Restez connectés</p>
            <ul className="mt-4 space-y-3 text-mist">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-start gap-2 break-all transition-colors hover:text-white"
                >
                  <Mail className="mt-1 size-4 shrink-0" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="inline-flex items-start gap-2 transition-colors hover:text-white">
                  <Phone className="mt-1 size-4 shrink-0" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-1 size-4 shrink-0" aria-hidden />
                <span>
                  SeaTech · Université de Toulon
                  <br />
                  {site.campus}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap relative">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 py-8">
          <p className="eyebrow text-mist">Notre réseau</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://seatech.univ-tln.fr"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2.5 transition hover:opacity-90"
            >
              <Image src="/brand/seatech.png" alt="Site de SeaTech Toulon (nouvel onglet)" width={144} height={32} className="h-7 w-auto" />
            </a>
            <a
              href="https://www.univ-tln.fr"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2.5 transition hover:opacity-90"
            >
              <Image
                src="/brand/universite-toulon.png"
                alt="Site de l'Université de Toulon (nouvel onglet)"
                width={134}
                height={32}
                className="h-7 w-auto"
              />
            </a>
            <a
              href="https://junior-entreprises.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-3 py-1.5 transition hover:opacity-90"
            >
              <Image
                src="/brand/junior-entreprises.png"
                alt="Site de la Confédération Nationale des Junior-Entreprises (nouvel onglet)"
                width={48}
                height={40}
                className="h-9 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-mist lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p>© {new Date().getFullYear()} Sea&apos;Lab · Association loi 1901 · Junior-Création CNJE</p>
            <p className="mt-1 text-xs">Ce site ne dépose aucun cookie de suivi.</p>
          </div>
          <nav aria-label="Informations légales">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

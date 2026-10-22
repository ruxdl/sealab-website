"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, site } from "../data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Menu ouvert : le reste de la page devient inaccessible au clavier et aux lecteurs d'écran.
    document.querySelectorAll("main, footer").forEach((el) => el.toggleAttribute("inert", open));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled && !open
          ? "bg-foam/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Sea'Lab, retour à l'accueil"
          onClick={() => setOpen(false)}
        >
          <Image
            src={open ? "/brand/sl-mark-light.png" : "/brand/sl-mark.png"}
            alt=""
            width={64}
            height={39}
            priority
            className="h-8 w-auto transition-transform duration-300 group-hover:-rotate-3"
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-xl font-bold tracking-tight ${open ? "text-white" : "text-navy"}`}
            >
              Sea&apos;Lab
            </span>
            <span
              className={`eyebrow mt-1 hidden !text-[0.6rem] whitespace-nowrap sm:block ${open ? "text-cyan-light" : "text-sea"}`}
            >
              Junior-Entreprise · SeaTech
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative rounded-full px-4 py-2 text-[0.94rem] font-medium transition-colors ${
                item.href === "/contact" ? "lg:hidden" : ""
              } ${
                isActive(item.href)
                  ? "text-navy after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-cyan"
                  : "text-slate hover:text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[0.94rem] font-semibold whitespace-nowrap text-white transition hover:bg-navy-2 lg:inline-flex"
          >
            Parler de votre projet
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </nav>

        <button
          type="button"
          className={`grid size-11 place-items-center rounded-full md:hidden ${
            open ? "bg-white/10 text-white" : "bg-navy text-white"
          }`}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-navy pt-24 pb-10 text-white md:hidden"
        >
          <div className="isobaths text-cyan/10" aria-hidden />
          <nav aria-label="Navigation mobile" className="wrap relative flex flex-col">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-3xl font-semibold"
            >
              Accueil
            </Link>
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="flex items-baseline justify-between border-b border-white/10 py-4 font-display text-3xl font-semibold"
              >
                {item.label}
                <span className="eyebrow text-cyan-light">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div className="wrap relative mt-auto space-y-1 pt-10 text-sm text-mist">
            <p className="eyebrow mb-3 text-cyan-light">{site.coordinates}</p>
            <a className="block text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="block text-white" href={site.phoneHref}>
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

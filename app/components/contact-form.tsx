"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Copy, Send } from "lucide-react";
import { site } from "../data/site";
import { poles } from "../data/prestations";

const structures = ["Entreprise", "Collectivité", "Laboratoire", "Porteur de projet", "École / Université", "Autre"];
const echeances = ["Dès que possible", "Dans 1 à 3 mois", "Dans plus de 3 mois", "Pas encore définie"];
const poleOptions = [...poles.map((p) => p.title), "Je ne sais pas encore"];

const field =
  "mt-2 w-full rounded-xl border-0 bg-white px-4 py-3 text-navy ring-1 ring-line placeholder:text-slate focus:ring-2 focus:ring-cyan focus:outline-none";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `[Site Sea'Lab] ${get("pole") || "Demande"} · ${get("organisation") || get("nom")}`;
    const body = [
      `Nom : ${get("nom")}`,
      `Structure : ${get("organisation") || "—"} (${get("structure")})`,
      `E-mail : ${get("email")}`,
      `Téléphone : ${get("telephone") || "—"}`,
      `Pôle concerné : ${get("pole")}`,
      `Échéance souhaitée : ${get("echeance")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-foam p-6 sm:p-10">
      <p className="mb-6 text-sm text-slate">Les champs marqués d&apos;un astérisque (*) sont obligatoires.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Nom et prénom *
          <input name="nom" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy">
          Structure
          <input name="organisation" autoComplete="organization" placeholder="Entreprise, laboratoire…" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy">
          E-mail *
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy">
          Téléphone
          <input name="telephone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block text-sm font-medium text-navy">
          Vous êtes
          <select name="structure" className={field} defaultValue={structures[0]}>
            {structures.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-navy">
          Échéance souhaitée
          <select name="echeance" className={field} defaultValue={echeances[3]}>
            {echeances.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-navy">Pôle concerné</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {poleOptions.map((p, i) => (
            <label key={p} className="cursor-pointer">
              <input type="radio" name="pole" value={p} defaultChecked={i === poleOptions.length - 1} className="peer sr-only" />
              <span className="inline-block rounded-full bg-white px-4 py-2 text-sm text-slate ring-1 ring-line transition peer-checked:bg-navy peer-checked:text-white peer-checked:ring-navy peer-focus-visible:ring-2 peer-focus-visible:ring-cyan">
                {p}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block text-sm font-medium text-navy">
        Votre projet *
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Contexte, objectifs, livrables attendus, contraintes…"
          className={`${field} resize-y`}
        />
      </label>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-slate">
          Le formulaire ouvre votre messagerie avec un e-mail prérempli : aucune donnée n&apos;est enregistrée par ce
          site. Vos données servent uniquement à répondre à votre demande (
          <Link href="/politique-de-confidentialite" className="font-medium text-sea underline underline-offset-2">
            politique de confidentialité
          </Link>
          ).
        </p>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 font-semibold text-white transition hover:bg-navy-2"
        >
          <Send className="size-4" aria-hidden /> Préparer mon e-mail
        </button>
      </div>

      {sent && (
        <div role="status" className="mt-6 rounded-2xl bg-ice p-5 text-sm text-navy">
          Votre messagerie devrait s&apos;ouvrir. Si rien ne se passe, écrivez-nous directement à{" "}
          <strong>{site.email}</strong>
          <button
            type="button"
            onClick={copyEmail}
            className="ml-2 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 font-medium text-sea ring-1 ring-line"
          >
            {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
            {copied ? "Copié" : "Copier"}
          </button>
        </div>
      )}
    </form>
  );
}

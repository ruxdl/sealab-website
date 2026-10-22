import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components/legal-page";
import { legal, site } from "../data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Sea'Lab : éditeur, directeur de la publication, hébergeur.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <LegalPage
      title="Mentions légales"
      lead="Informations prévues par la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN)."
      current="/mentions-legales"
      sections={[
        {
          title: "Éditeur du site",
          content: (
            <ul>
              <li>
                <strong>Sea&apos;Lab</strong>, Junior-Entreprise de SeaTech, école d&apos;ingénieurs de
                l&apos;Université de Toulon
              </li>
              <li>Forme juridique : {legal.form}</li>
              <li>Siège : {legal.siege}</li>
              <li>
                Téléphone : <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                E-mail : <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          ),
        },
        {
          title: "Directeur de la publication",
          content: <p>{site.president}, Président de Sea&apos;Lab.</p>,
        },
        {
          title: "Hébergeur",
          content: (
            <ul>
              <li>{legal.host.name}</li>
              <li>{legal.host.address}</li>
              <li>
                Contact : <a href={legal.host.contact}>vercel.com/contact</a>
              </li>
            </ul>
          ),
        },
        {
          title: "Propriété intellectuelle et crédits",
          content: (
            <>
              <p>
                L&apos;ensemble des contenus de ce site est la propriété de Sea&apos;Lab, sauf mention contraire. Les
                conditions de réutilisation figurent dans les{" "}
                <Link href="/conditions-utilisation">conditions d&apos;utilisation</Link>.
              </p>
              <p>
                Photographies : Sea&apos;Lab et SeaTech – Université de Toulon. Logos : SeaTech, Université de Toulon
                et Confédération Nationale des Junior-Entreprises, propriété de leurs détenteurs respectifs.
              </p>
            </>
          ),
        },
        {
          title: "Données personnelles et cookies",
          content: (
            <p>
              Voir la <Link href="/politique-de-confidentialite">politique de confidentialité</Link> et la{" "}
              <Link href="/politique-cookies">politique de cookies</Link>. Ce site ne dépose aucun cookie soumis à
              consentement.
            </p>
          ),
        },
      ]}
    />
  );
}

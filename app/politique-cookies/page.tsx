import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components/legal-page";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Le site de Sea'Lab n'utilise aucun cookie de suivi ni aucun traceur soumis à consentement.",
  alternates: { canonical: "/politique-cookies" },
};

export default function PolitiqueCookies() {
  return (
    <LegalPage
      title="Politique de cookies"
      lead="En résumé : ce site ne dépose aucun cookie de suivi, de mesure d'audience ou de publicité. C'est pourquoi aucun bandeau de consentement ne vous est présenté."
      current="/politique-cookies"
      sections={[
        {
          title: "1. Qu'est-ce qu'un cookie ?",
          content: (
            <p>
              Un cookie, ou plus largement un traceur, est une information enregistrée ou lue sur votre terminal
              (ordinateur, téléphone) lors de la consultation d&apos;un site : cookie, stockage local du navigateur,
              pixel invisible, identifiant d&apos;appareil… Leur usage est encadré par l&apos;article 82 de la loi
              Informatique et Libertés et par les lignes directrices de la CNIL.
            </p>
          ),
        },
        {
          title: "2. Les traceurs utilisés sur ce site",
          content: (
            <>
              <p>
                <strong>Aucun.</strong> Le site de Sea&apos;Lab ne dépose aucun cookie et n&apos;écrit rien dans le
                stockage de votre navigateur. En particulier, il n&apos;utilise :
              </p>
              <ul>
                <li>aucun outil de mesure d&apos;audience ou de statistiques ;</li>
                <li>aucune régie publicitaire ni pixel de suivi ;</li>
                <li>aucun bouton ou module de réseau social ;</li>
                <li>aucun contenu tiers intégré (vidéo, carte, formulaire externe) ;</li>
                <li>aucune police de caractères chargée depuis un service tiers : elles sont hébergées avec le site.</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Cookies strictement nécessaires",
          content: (
            <p>
              Le site ne dépose lui-même aucun cookie. Le cas échéant, l&apos;hébergeur peut recourir à des mécanismes
              strictement nécessaires à la sécurité du service (par exemple contre une attaque automatisée). Ces
              traceurs, indispensables au fonctionnement du site, sont exemptés de consentement par l&apos;article 82
              de la loi Informatique et Libertés.
            </p>
          ),
        },
        {
          title: "4. Pourquoi aucun bandeau de consentement ?",
          content: (
            <>
              <p>
                Le consentement n&apos;est exigé que pour les traceurs qui ne sont pas strictement nécessaires (mesure
                d&apos;audience non exemptée, publicité, réseaux sociaux…). Ce site n&apos;en utilisant aucun, un
                bandeau n&apos;a pas lieu d&apos;être.
              </p>
              <p>
                Si nous ajoutions un jour un tel traceur, un module de consentement serait mis en place avant tout
                dépôt, avec un bouton « Tout refuser » aussi simple que « Tout accepter », et cette page serait mise à
                jour.
              </p>
            </>
          ),
        },
        {
          title: "5. Une garantie technique",
          content: (
            <p>
              Le site applique une politique de sécurité du contenu (Content Security Policy) qui interdit au navigateur
              de charger des scripts, polices, images ou connexions depuis un domaine autre que celui du site. Aucun
              traceur tiers ne peut donc s&apos;y glisser, même par erreur.
            </p>
          ),
        },
        {
          title: "6. Liens vers d'autres sites",
          content: (
            <p>
              Les liens vers les sites de SeaTech, de l&apos;Université de Toulon ou de la CNJE vous mènent vers des
              sites qui appliquent leur propre politique de cookies.
            </p>
          ),
        },
        {
          title: "7. Gérer les cookies dans votre navigateur",
          content: (
            <p>
              Vous pouvez à tout moment consulter et supprimer les cookies enregistrés, ou les bloquer, depuis les
              paramètres de confidentialité de votre navigateur (Chrome, Firefox, Safari, Edge…). La CNIL propose des
              conseils sur{" "}
              <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs">
                cnil.fr
              </a>
              .
            </p>
          ),
        },
        {
          title: "8. Contact",
          content: (
            <p>
              Pour toute question : <a href={`mailto:${site.email}`}>{site.email}</a>. Voir aussi notre{" "}
              <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}

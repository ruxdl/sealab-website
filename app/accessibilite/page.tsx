import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components/legal-page";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Accessibilité",
  description: "Engagement de Sea'Lab pour l'accessibilité numérique de son site.",
  alternates: { canonical: "/accessibilite" },
};

export default function Accessibilite() {
  return (
    <LegalPage
      title="Accessibilité"
      lead="Nous voulons que ce site soit utilisable par toutes et tous, quels que soient le handicap, l'appareil ou la façon de naviguer."
      current="/accessibilite"
      sections={[
        {
          title: "Notre démarche",
          content: (
            <p>
              Le site a été conçu en suivant les principes du Référentiel général d&apos;amélioration de
              l&apos;accessibilité (RGAA 4.1) et des règles internationales WCAG 2.1 de niveau AA. Il n&apos;a pas
              encore fait l&apos;objet d&apos;un audit de conformité complet : son état de conformité n&apos;est donc
              pas déclaré à ce jour.
            </p>
          ),
        },
        {
          title: "Ce qui a été mis en place",
          content: (
            <ul>
              <li>Structure sémantique : titres hiérarchisés, zones de navigation et de contenu identifiées ;</li>
              <li>lien d&apos;évitement « Aller au contenu » et navigation complète au clavier, avec focus visible ;</li>
              <li>contrastes de couleurs conformes pour les textes et les éléments d&apos;interface ;</li>
              <li>textes alternatifs sur les images porteuses d&apos;information ;</li>
              <li>
                animations désactivées si votre système demande de réduire les mouvements, et bandeau défilant avec un
                bouton pause ;
              </li>
              <li>formulaire de contact avec étiquettes explicites et champs obligatoires signalés ;</li>
              <li>affichage adapté aux mobiles et au zoom jusqu&apos;à 200 % ;</li>
              <li>format et poids indiqués pour les fichiers à télécharger.</li>
            </ul>
          ),
        },
        {
          title: "Limites connues",
          content: (
            <p>
              La plaquette de prestations au format PDF est un document graphique qui n&apos;est pas entièrement
              accessible. Tout son contenu est disponible en HTML sur la page{" "}
              <Link href="/prestations">Prestations</Link>.
            </p>
          ),
        },
        {
          title: "Signaler un problème",
          content: (
            <>
              <p>
                Si vous ne parvenez pas à accéder à un contenu ou à un service, écrivez-nous à{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> : nous vous transmettrons l&apos;information sous une
                autre forme et corrigerons le problème.
              </p>
              <p>
                Vous pouvez également contacter le{" "}
                <a href="https://www.defenseurdesdroits.fr">Défenseur des droits</a>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components/legal-page";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions générales d'utilisation du site de Sea'Lab, Junior-Entreprise de SeaTech.",
  alternates: { canonical: "/conditions-utilisation" },
};

export default function ConditionsUtilisation() {
  const domain = site.url.replace("https://", "");
  return (
    <LegalPage
      title="Conditions d'utilisation"
      lead={`Les présentes conditions encadrent l'accès et l'utilisation du site ${domain}. En le consultant, vous les acceptez.`}
      current="/conditions-utilisation"
      sections={[
        {
          title: "1. Objet",
          content: (
            <p>
              Ce site, édité par Sea&apos;Lab (voir les <Link href="/mentions-legales">mentions légales</Link>),
              présente l&apos;association, ses prestations et les moyens de la contacter. Les présentes conditions
              définissent les règles d&apos;utilisation du site.
            </p>
          ),
        },
        {
          title: "2. Accès au site",
          content: (
            <p>
              Le site est accessible gratuitement, sans inscription. Sea&apos;Lab s&apos;efforce de le maintenir
              disponible mais ne peut garantir un accès permanent : il peut être interrompu pour maintenance, mise à
              jour ou en cas de difficulté technique, sans que cela ouvre droit à indemnisation.
            </p>
          ),
        },
        {
          title: "3. Informations présentées",
          content: (
            <>
              <p>
                Les informations publiées sur le site, notamment la liste des prestations, sont fournies à titre
                indicatif. Cette liste n&apos;est ni exhaustive ni contractuelle.
              </p>
              <p>
                Toute mission fait l&apos;objet d&apos;une proposition personnalisée puis d&apos;une convention
                d&apos;étude signée par les deux parties : seule cette convention définit le contenu, le prix, les
                délais et les engagements de chacun.
              </p>
            </>
          ),
        },
        {
          title: "4. Propriété intellectuelle",
          content: (
            <>
              <p>
                Les textes, visuels, logos et éléments graphiques de ce site sont protégés par le Code de la propriété
                intellectuelle. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite de
                Sea&apos;Lab est interdite.
              </p>
              <p>
                La plaquette de prestations peut être téléchargée et partagée dans son intégralité, à des fins
                d&apos;information. Les logos de SeaTech, de l&apos;Université de Toulon et de la Confédération
                Nationale des Junior-Entreprises appartiennent à leurs détenteurs respectifs.
              </p>
            </>
          ),
        },
        {
          title: "5. Liens hypertextes",
          content: (
            <>
              <p>
                Le site contient des liens vers d&apos;autres sites. Sea&apos;Lab n&apos;exerce aucun contrôle sur
                leur contenu et décline toute responsabilité à leur égard.
              </p>
              <p>
                Vous pouvez créer un lien vers ce site sans autorisation préalable, à condition de ne pas l&apos;afficher
                à l&apos;intérieur d&apos;un autre site (cadre, iframe) et de ne pas porter atteinte à l&apos;image de
                Sea&apos;Lab.
              </p>
            </>
          ),
        },
        {
          title: "6. Responsabilité",
          content: (
            <p>
              Sea&apos;Lab veille à l&apos;exactitude des informations publiées, sans pouvoir garantir l&apos;absence
              d&apos;erreur ou d&apos;omission. Sa responsabilité ne saurait être engagée pour un dommage indirect lié
              à l&apos;utilisation du site, ni pour une interruption de service. Il appartient à chaque utilisateur de
              protéger son équipement contre les virus et intrusions.
            </p>
          ),
        },
        {
          title: "7. Données personnelles et cookies",
          content: (
            <p>
              Le traitement de vos données est décrit dans la{" "}
              <Link href="/politique-de-confidentialite">politique de confidentialité</Link>. Le site n&apos;utilise
              aucun cookie soumis à consentement (voir la <Link href="/politique-cookies">politique de cookies</Link>).
            </p>
          ),
        },
        {
          title: "8. Droit applicable",
          content: (
            <p>
              Les présentes conditions sont régies par le droit français. En cas de différend, une solution amiable
              sera recherchée en priorité. À défaut, les tribunaux français compétents pourront être saisis.
            </p>
          ),
        },
        {
          title: "9. Modification et contact",
          content: (
            <p>
              Sea&apos;Lab peut modifier ces conditions à tout moment ; la version en ligne est celle qui
              s&apos;applique. Pour toute question : <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}

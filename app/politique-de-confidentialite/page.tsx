import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../components/legal-page";
import { legal, site } from "../data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Sea'Lab traite vos données personnelles, conformément au RGPD et à la loi Informatique et Libertés.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

const traitements = [
  {
    finalite: "Répondre à vos demandes de contact et vous adresser une proposition",
    donnees: "Nom, structure, coordonnées, contenu de votre message",
    base: "Mesures précontractuelles prises à votre demande (art. 6.1.b RGPD)",
  },
  {
    finalite: "Réaliser et suivre une étude après signature d'une convention",
    donnees: "Coordonnées des interlocuteurs, éléments du projet",
    base: "Exécution du contrat (art. 6.1.b RGPD) et obligations légales (art. 6.1.c)",
  },
  {
    finalite: "Gérer les candidatures et adhésions des élèves",
    donnees: "Nom, année d'études, filière, coordonnées",
    base: "Exécution du contrat d'adhésion (art. 6.1.b RGPD)",
  },
  {
    finalite: "Assurer la sécurité et le bon fonctionnement du site",
    donnees: "Journaux techniques de l'hébergeur : adresse IP, date, page demandée, navigateur",
    base: "Intérêt légitime (art. 6.1.f RGPD)",
  },
];

export default function Confidentialite() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      lead="Ce site ne collecte presque rien : pas de compte, pas de base de données, pas de traceur publicitaire. Voici, en toute transparence, ce que nous faisons des données que vous choisissez de nous transmettre."
      current="/politique-de-confidentialite"
      sections={[
        {
          title: "1. Responsable du traitement",
          content: (
            <>
              <p>
                <strong>Sea&apos;Lab</strong>, {legal.form.toLowerCase()}, Junior-Entreprise de SeaTech, dont le siège est
                situé {legal.siege}, représentée par son Président, {site.president}.
              </p>
              <p>
                Contact pour toute question relative à vos données :{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </>
          ),
        },
        {
          title: "2. Ce que ce site collecte",
          content: (
            <>
              <p>
                <strong>Le site lui-même ne collecte ni n&apos;enregistre aucune donnée personnelle.</strong> Il ne
                propose pas de compte utilisateur, n&apos;utilise aucun outil de mesure d&apos;audience, aucune
                publicité et aucun module de réseau social.
              </p>
              <p>
                Le formulaire de contact ne transmet rien au site : il prépare un e-mail dans votre propre messagerie.
                Vos données ne nous parviennent que si vous décidez d&apos;envoyer cet e-mail.
              </p>
            </>
          ),
        },
        {
          title: "3. Données traitées, finalités et bases légales",
          content: (
            <div className="overflow-x-auto rounded-2xl border border-line">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <caption className="sr-only">Traitements de données personnelles réalisés par Sea&apos;Lab</caption>
                <thead className="bg-ice text-navy">
                  <tr>
                    <th scope="col" className="p-4 font-semibold">Finalité</th>
                    <th scope="col" className="p-4 font-semibold">Données</th>
                    <th scope="col" className="p-4 font-semibold">Base légale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {traitements.map((t) => (
                    <tr key={t.finalite}>
                      <th scope="row" className="p-4 align-top font-medium text-navy">{t.finalite}</th>
                      <td className="p-4 align-top">{t.donnees}</td>
                      <td className="p-4 align-top">{t.base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          title: "4. Destinataires",
          content: (
            <>
              <p>
                Vos données sont accessibles uniquement aux membres du bureau de Sea&apos;Lab qui en ont besoin et, pour
                une étude, aux intervenants qui y participent. Elles ne sont jamais vendues ni utilisées à des fins
                publicitaires.
              </p>
              <p>Nous faisons appel à deux prestataires techniques, qui agissent pour notre compte :</p>
              <ul>
                <li>
                  <strong>Vercel Inc.</strong> pour l&apos;hébergement du site (journaux techniques) ;
                </li>
                <li>
                  <strong>Google</strong> pour la messagerie Gmail qui reçoit les e-mails envoyés à {site.email}.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "5. Transferts hors de l'Union européenne",
          content: (
            <p>
              Ces deux prestataires sont établis aux États-Unis. Les transferts sont encadrés par la décision
              d&apos;adéquation de la Commission européenne du 10 juillet 2023 relative au cadre de protection des
              données UE–États-Unis (Data Privacy Framework), auquel ils sont certifiés, et, le cas échéant, par les
              clauses contractuelles types de la Commission européenne.
            </p>
          ),
        },
        {
          title: "6. Durées de conservation",
          content: (
            <ul>
              <li>Demande de contact sans suite : 3 ans à compter du dernier échange.</li>
              <li>
                Étude réalisée : pendant la durée de la relation, puis pendant les durées légales applicables (10 ans
                pour les pièces comptables).
              </li>
              <li>Adhésion : pendant la durée de l&apos;adhésion, puis 3 ans pour la gestion de l&apos;association.</li>
              <li>Journaux techniques : durée limitée fixée par l&apos;hébergeur, à des fins de sécurité.</li>
            </ul>
          ),
        },
        {
          title: "7. Vos droits",
          content: (
            <>
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès,
                de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données,
                ainsi que du droit de définir des directives relatives à leur sort après votre décès.
              </p>
              <p>
                Pour les exercer, écrivez à <a href={`mailto:${site.email}`}>{site.email}</a>. Nous répondons dans un
                délai d&apos;un mois. En cas de doute raisonnable sur votre identité, un justificatif pourra vous être
                demandé.
              </p>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de
                la CNIL : <a href="https://www.cnil.fr/fr/plaintes">www.cnil.fr</a> ou 3 place de Fontenoy, TSA 80715,
                75334 Paris Cedex 07.
              </p>
            </>
          ),
        },
        {
          title: "8. Sécurité",
          content: (
            <p>
              Le site est servi exclusivement en HTTPS. Une politique de sécurité du contenu empêche le chargement de
              scripts ou de ressources provenant de domaines tiers. L&apos;accès aux e-mails reçus est réservé aux
              membres habilités du bureau.
            </p>
          ),
        },
        {
          title: "9. Cookies",
          content: (
            <p>
              Ce site n&apos;utilise aucun cookie soumis à consentement. Le détail figure dans notre{" "}
              <Link href="/politique-cookies">politique de cookies</Link>.
            </p>
          ),
        },
        {
          title: "10. Modifications",
          content: (
            <p>
              Cette politique peut être mise à jour, notamment en cas d&apos;évolution du site ou de la réglementation.
              La date de dernière mise à jour figure en haut de la page.
            </p>
          ),
        },
      ]}
    />
  );
}

import { site } from "../data/site";

/** Données structurées schema.org, lues par les moteurs de recherche et les assistants IA. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organisation`,
  name: "Sea'Lab",
  alternateName: "Sea'Lab, Junior-Entreprise de SeaTech",
  url: site.url,
  logo: `${site.url}/icon.png`,
  image: `${site.url}/images/equipe-sealab.jpg`,
  description:
    "Junior-Entreprise de SeaTech, école d'ingénieurs de l'Université de Toulon : études en ingénierie, digitalisation, environnement et stratégie réalisées par des élèves-ingénieurs.",
  slogan: site.motto,
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Garde",
    postalCode: "83130",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  areaServed: "FR",
  knowsLanguage: ["fr", "en"],
  memberOf: {
    "@type": "Organization",
    name: "Confédération Nationale des Junior-Entreprises",
    url: "https://junior-entreprises.com",
  },
  knowsAbout: [
    "Ingénierie marine",
    "Architecture navale et offshore",
    "Mécanique",
    "Mécanique des fluides",
    "Prototypage et modélisation 3D",
    "Hydrographie",
    "Matériaux",
    "Robotique et électronique",
    "Développement web, mobile et logiciel",
    "Bilan carbone et analyse du cycle de vie",
    "Étude de marché et finance",
    "Traduction technique",
  ],
};

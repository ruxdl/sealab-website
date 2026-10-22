import { atouts, faq, methode, site } from "../data/site";
import { filieres, poles, prestationsCount } from "../data/prestations";

// /llms.txt : résumé du site en Markdown, destiné aux assistants IA (convention llmstxt.org).
export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# Sea'Lab",
    "",
    `> Sea'Lab est la Junior-Entreprise de SeaTech, école d'ingénieurs de l'Université de Toulon (France). Association loi 1901 membre de la CNJE au statut Junior-Création, elle réalise des missions rétribuées (études) pour des entreprises, collectivités, laboratoires et porteurs de projets, menées par des élèves-ingénieurs de six filières. Devise : « ${site.motto} »`,
    "",
    "## Contact",
    "",
    `- E-mail : ${site.email}`,
    `- Téléphone : ${site.phone}`,
    `- Président : ${site.president}`,
    `- Localisation : SeaTech, ${site.campus} (${site.coordinates})`,
    `- Formulaire : ${site.url}/contact`,
    "",
    "## Pages",
    "",
    `- [Accueil](${site.url}/) : présentation, pôles, méthode, atouts`,
    `- [Prestations](${site.url}/prestations) : catalogue complet des ${prestationsCount} prestations`,
    `- [L'association](${site.url}/association) : histoire, parcours CNJE, bureau, passation`,
    `- [Rejoindre](${site.url}/rejoindre) : informations pour les élèves de SeaTech`,
    `- [Contact et FAQ](${site.url}/contact)`,
    `- [Plaquette de prestations (PDF)](${site.url}${site.brochure})`,
    "",
    "## Méthode",
    "",
    ...methode.map((m, i) => `${i + 1}. ${m.title} : ${m.text}`),
    "",
    "## Atouts",
    "",
    ...atouts.map((a) => `- ${a.title} : ${a.text}`),
    "",
    "## Filières de SeaTech mobilisables",
    "",
    ...filieres.map((f) => `- ${f.code} : ${f.domaine}`),
    "",
    "## Catalogue des prestations",
    "",
    "Liste non exhaustive. Chaque mission fait l'objet d'une proposition personnalisée puis d'une convention d'étude, facturée en JEH au tarif encadré par la CNJE.",
    "",
    ...poles.flatMap((pole) => [
      `### ${pole.number}. ${pole.title}`,
      "",
      pole.intro,
      "",
      ...pole.domaines.flatMap((d) => [
        `#### ${d.code} ${d.title}`,
        "",
        ...d.prestations.map((p) => {
          const apps = p.applications ? ` Applications : ${p.applications.join(", ")}.` : "";
          return `- **${p.title}** : ${p.description}${apps} (${p.tags.join(", ")})`;
        }),
        "",
      ]),
    ]),
    "## Questions fréquentes",
    "",
    ...faq.flatMap((item) => [`### ${item.q}`, "", item.a, ""]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

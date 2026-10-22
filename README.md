# Sea'Lab — site web

Site de Sea'Lab, la Junior-Entreprise de SeaTech (Université de Toulon). Next.js 16 (App Router), React 19, Tailwind CSS 4.

## Lancer le site

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000. Build de production : `npm run build`.

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Accueil : présentation, pôles, exemples de missions, méthode, cibles, atouts, filières, réseau |
| `/prestations` | Catalogue complet, filtrable par pôle et par recherche texte |
| `/association` | Qui sommes-nous, parcours CNJE, histoire, bureau, passation |
| `/rejoindre` | Adhésion des élèves : intérêt, rôles, relève |
| `/contact` | Formulaire (ouvre la messagerie, sans backend), localisation, FAQ |
| `/mentions-legales`, `/politique-de-confidentialite`, `/politique-cookies`, `/conditions-utilisation`, `/accessibilite` | Pages légales (LCEN, RGPD, cookies, CGU, accessibilité) |
| `/llms.txt`, `/robots.txt`, `/sitemap.xml` | Lecture du site par les moteurs et assistants IA |

## Conformité

- Aucun cookie ni traceur : pas de bandeau de consentement nécessaire. En production, une Content Security Policy (`next.config.ts`) bloque toute ressource tierce. Ajouter un outil de mesure d'audience ou un contenu externe imposera de revoir cette politique et, le plus souvent, d'ajouter un module de consentement.
- Les informations légales (siège, hébergeur, date de mise à jour) sont dans `legal` (`app/data/site.ts`).

## Modifier le contenu

Les textes ne sont pas dans les pages mais dans deux fichiers :

- `app/data/prestations.ts` : pôles, domaines, prestations, applications et filières.
- `app/data/site.ts` : coordonnées, chiffres clés, méthode, atouts, histoire, bureau, passation, FAQ.

Les compteurs (nombre de prestations, prestations par filière) se recalculent automatiquement.

## Ressources

- `public/brand/` : logo SL (version claire et foncée), logos partenaires, lignes de niveau (isobathes).
- `public/images/` : photo de l'équipe, campus SeaTech.
- `public/plaquette-sealab.pdf` : plaquette de prestations téléchargeable.

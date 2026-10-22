// Contenu issu de la plaquette de prestations Sea'Lab (fiches de prestations).

export type FiliereCode = "GM" | "IMecaD" | "IRIS" | "MDE" | "MOCA" | "SYSMER";

export type Prestation = {
  id: string;
  title: string;
  description: string;
  applications?: string[];
  tags: string[];
};

export type Domaine = {
  code: string;
  title: string;
  prestations: Prestation[];
};

export type Pole = {
  id: string;
  number: number;
  title: string;
  short: string;
  intro: string;
  highlights: string[];
  domaines: Domaine[];
};

export const filieres: { code: FiliereCode; domaine: string }[] = [
  { code: "GM", domaine: "Ingénierie marine" },
  { code: "IMecaD", domaine: "Mécanique" },
  { code: "IRIS", domaine: "Génie logiciel" },
  { code: "MDE", domaine: "Matériaux" },
  { code: "MOCA", domaine: "Modélisation & simulation" },
  { code: "SYSMER", domaine: "Mécatronique & robotique" },
];

export const poles: Pole[] = [
  {
    id: "ingenierie",
    number: 1,
    title: "Ingénierie",
    short:
      "Conception, analyse, simulation et prototypage de systèmes mécaniques, fluidiques, électroniques et maritimes.",
    intro:
      "Sea'Lab accompagne les entreprises, collectivités et porteurs de projets dans la conception, l'analyse, la simulation et le prototypage de systèmes mécaniques, fluidiques, électroniques et maritimes. Les prestations peuvent être adaptées à un besoin ponctuel ou s'intégrer dans un projet plus global.",
    highlights: [
      "Mécanique, fluides, prototypage",
      "Architecture navale & offshore, matériaux",
      "Robotique, automatique, électronique",
    ],
    domaines: [
      {
        code: "1.1",
        title: "Mécanique",
        prestations: [
          {
            id: "contraintes",
            title: "Modélisation et étude de contraintes",
            description:
              "Modélisation numérique de systèmes mécaniques et analyse de leur comportement sous différentes sollicitations : identification des zones critiques, évaluation des déformations et contraintes, accompagnement à l'optimisation d'une conception.",
            tags: ["IMecaD", "MOCA", "MDE"],
          },
          {
            id: "meca-experimentale",
            title: "Mécanique expérimentale",
            description:
              "Mise en place et analyse d'essais permettant de caractériser le comportement mécanique d'une pièce ou d'un système et de confronter les résultats expérimentaux aux modèles numériques.",
            tags: ["IMecaD", "MDE", "MOCA"],
          },
        ],
      },
      {
        code: "1.2",
        title: "Fluides",
        prestations: [
          {
            id: "calculs-fluides",
            title: "Modélisation et calculs fluides",
            description:
              "Étude numérique des écoulements et de leurs interactions avec les systèmes étudiés : analyse des performances, identification des phénomènes physiques, optimisation d'une géométrie.",
            applications: [
              "Écoulements internes ou externes",
              "Hydrodynamique",
              "Aérodynamique",
              "Thermique",
              "Interactions fluide-structure",
            ],
            tags: ["MOCA", "GM"],
          },
          {
            id: "fluides-experimentaux",
            title: "Calculs fluides expérimentaux",
            description:
              "Conception et réalisation d'essais permettant d'étudier expérimentalement un écoulement ou de caractériser les performances d'un système soumis à un environnement fluidique.",
            tags: ["MOCA", "GM", "MDE"],
          },
        ],
      },
      {
        code: "1.3",
        title: "Prototypage",
        prestations: [
          {
            id: "dimensionnement",
            title: "Dimensionnement et prototypage",
            description:
              "Accompagnement dans la transformation d'une idée ou d'un concept en prototype fonctionnel : choix des solutions techniques, dimensionnement, conception et réalisation d'une première version du produit.",
            tags: ["IMecaD", "MDE", "SYSMER"],
          },
          {
            id: "modelisation-3d",
            title: "Modélisation 3D",
            description:
              "Création ou modification de modèles 3D de pièces, assemblages et systèmes mécaniques à partir d'un cahier des charges, de plans existants ou d'un concept.",
            applications: [
              "Conception de pièces et assemblages",
              "Modification d'une conception existante",
              "Préparation d'un prototype",
              "Préparation de plans de fabrication",
              "Représentation 3D d'un système existant",
            ],
            tags: ["IMecaD", "MDE", "SYSMER"],
          },
        ],
      },
      {
        code: "1.4",
        title: "Architecture navale et offshore",
        prestations: [
          {
            id: "archi-navale",
            title: "Architecture navale et offshore",
            description:
              "Étude et conception de systèmes et structures destinés à évoluer en milieu maritime ou offshore : conception, dimensionnement et analyse liés aux contraintes spécifiques de cet environnement.",
            applications: [
              "Structures et équipements maritimes",
              "Systèmes offshore",
              "Équipements flottants ou immergés",
              "Études hydrodynamiques",
              "Interactions entre structures et environnement marin",
            ],
            tags: ["GM", "MOCA", "IMecaD", "MDE"],
          },
        ],
      },
      {
        code: "1.5",
        title: "Hydrographie",
        prestations: [
          {
            id: "hydrographie",
            title: "Hydrographie",
            description:
              "Traitement et exploitation de données permettant de caractériser, représenter et analyser un environnement marin ou côtier.",
            applications: [
              "Traitement de données hydrographiques",
              "Cartographie marine",
              "Modélisation de terrain",
              "Analyse de données issues de campagnes de mesure",
              "Représentation et visualisation de données marines",
            ],
            tags: ["GM", "IRIS"],
          },
        ],
      },
      {
        code: "1.6",
        title: "Matériaux",
        prestations: [
          {
            id: "materiaux",
            title: "Matériaux",
            description:
              "Étude et caractérisation de matériaux destinés à des applications industrielles, mécaniques ou marines : accompagnement du choix d'un matériau en fonction de ses propriétés et des contraintes auxquelles il sera soumis.",
            applications: [
              "Comparaison de matériaux",
              "Caractérisation de propriétés",
              "Comportement mécanique et thermique",
              "Vieillissement et durabilité",
              "Corrosion et environnement marin",
              "Choix de matériaux pour une application donnée",
            ],
            tags: ["MDE", "IMecaD"],
          },
        ],
      },
      {
        code: "1.7",
        title: "Robotique et automatique",
        prestations: [
          {
            id: "robotique",
            title: "Robotique et automatique",
            description:
              "Conception et développement de systèmes automatisés ou robotisés, de la définition du besoin jusqu'à l'intégration des différents composants.",
            applications: [
              "Automatisation de systèmes",
              "Commande et pilotage",
              "Robotique mobile",
              "Robots sous-marins ou de surface",
              "Systèmes autonomes",
              "Intégration de capteurs et d'actionneurs",
            ],
            tags: ["SYSMER", "IRIS", "IMecaD"],
          },
        ],
      },
      {
        code: "1.8",
        title: "Électronique",
        prestations: [
          {
            id: "conception-electronique",
            title: "Conception électronique",
            description:
              "Conception et prototypage de systèmes électroniques répondant à un besoin spécifique : acquisition de données, commande, communication ou intégration de capteurs.",
            tags: ["SYSMER", "IRIS"],
          },
          {
            id: "systemes-embarques",
            title: "Amélioration de systèmes embarqués",
            description:
              "Analyse et amélioration de systèmes électroniques ou embarqués existants afin d'en augmenter les fonctionnalités, la fiabilité ou les capacités de mesure et de communication.",
            applications: [
              "Intégration de capteurs",
              "Acquisition de données",
              "Systèmes embarqués",
              "Communication entre équipements",
              "Instrumentation",
              "Systèmes connectés",
            ],
            tags: ["IRIS", "SYSMER"],
          },
        ],
      },
    ],
  },
  {
    id: "digitalisation",
    number: 2,
    title: "Digitalisation",
    short:
      "Conception, développement et amélioration de vos outils numériques : web, mobile et logiciel sur mesure.",
    intro:
      "Sea'Lab accompagne les entreprises dans la conception, le développement et l'amélioration de leurs outils numériques, depuis la création d'une solution sur mesure jusqu'à l'optimisation d'un système existant. Les prestations couvrent le développement web, les applications mobiles et le développement logiciel, avec la possibilité d'intégrer des problématiques de données, d'automatisation et de systèmes connectés. Ces compétences s'appuient notamment sur les domaines de formation d'IRIS et de SYSMER.",
    highlights: ["Développement web", "Développement mobile", "Développement logiciel"],
    domaines: [
      {
        code: "2.1",
        title: "Développement web",
        prestations: [
          {
            id: "sites-web",
            title: "Développement de sites web",
            description:
              "Conception et développement de sites web adaptés aux besoins spécifiques de votre entreprise ou de votre projet, de l'architecture à la mise en œuvre, avec une interface claire et fonctionnelle.",
            applications: [
              "Sites vitrines",
              "Sites institutionnels",
              "Plateformes de présentation de produits ou services",
              "Interfaces web personnalisées",
              "Sites à fonctionnalités spécifiques",
            ],
            tags: ["IRIS"],
          },
          {
            id: "applications-web",
            title: "Applications web",
            description:
              "Développement d'applications accessibles depuis un navigateur pour répondre à des besoins métier spécifiques : centraliser des données, automatiser des tâches, faciliter le suivi d'une activité.",
            applications: [
              "Tableaux de bord",
              "Outils de gestion",
              "Plateformes collaboratives",
              "Interfaces de suivi et de visualisation de données",
              "Outils internes sur mesure",
            ],
            tags: ["IRIS", "SYSMER"],
          },
          {
            id: "web-responsive",
            title: "Web responsive",
            description:
              "Adaptation d'un site ou d'une application web aux différents formats d'écran pour garantir une utilisation cohérente sur ordinateur, tablette et smartphone.",
            tags: ["IRIS"],
          },
        ],
      },
      {
        code: "2.2",
        title: "Développement mobile",
        prestations: [
          {
            id: "applications-mobiles",
            title: "Création d'applications sur mesure",
            description:
              "Conception et développement d'applications mobiles répondant à un besoin spécifique, de la définition des fonctionnalités jusqu'au développement de la solution.",
            applications: [
              "Applications professionnelles",
              "Outils de suivi ou de collecte de données",
              "Applications liées à un produit ou service",
              "Interfaces de contrôle",
              "Applications connectées à des systèmes ou capteurs",
            ],
            tags: ["IRIS", "SYSMER"],
          },
          {
            id: "audit-mobile",
            title: "Audit et amélioration d'applications",
            description:
              "Analyse d'une application existante pour identifier les difficultés d'utilisation, les dysfonctionnements ou les possibilités d'amélioration, puis mise en œuvre d'évolutions ciblées.",
            tags: ["IRIS"],
          },
        ],
      },
      {
        code: "2.3",
        title: "Développement logiciel",
        prestations: [
          {
            id: "automatisation",
            title: "Automatisation de vos procédés informatiques",
            description:
              "Développement de solutions permettant d'automatiser des tâches répétitives ou chronophages et de simplifier les processus informatiques de votre entreprise.",
            applications: [
              "Automatisation du traitement de données",
              "Génération automatique de documents ou rapports",
              "Traitement de fichiers",
              "Transfert et transformation de données",
              "Automatisation de tâches répétitives",
            ],
            tags: ["IRIS", "SYSMER"],
          },
          {
            id: "logiciels-sur-mesure",
            title: "Développement de logiciels sur mesure",
            description:
              "Conception et développement de logiciels adaptés à un besoin métier ou technique particulier lorsque les solutions existantes n'y répondent pas suffisamment.",
            applications: [
              "Outils métiers",
              "Logiciels de calcul ou de traitement",
              "Outils de visualisation",
              "Logiciels scientifiques ou techniques",
              "Interfaces de pilotage",
            ],
            tags: ["IRIS", "SYSMER", "MOCA"],
          },
          {
            id: "audit-logiciel",
            title: "Audit et amélioration de logiciels",
            description:
              "Analyse d'un logiciel ou d'un outil informatique existant pour identifier ses points de blocage, limites fonctionnelles ou possibilités d'évolution, puis accompagnement de la correction ou de l'ajout de fonctionnalités.",
            tags: ["IRIS", "SYSMER"],
          },
        ],
      },
    ],
  },
  {
    id: "environnement",
    number: 3,
    title: "Environnement & transition",
    short:
      "Évaluation de vos impacts environnementaux et identification des leviers pour les réduire.",
    intro:
      "Sea'Lab accompagne les entreprises et organisations dans l'évaluation de leurs impacts environnementaux et dans l'identification de leviers permettant de les réduire. Les prestations peuvent porter aussi bien sur l'analyse des émissions de gaz à effet de serre que sur l'évaluation environnementale complète d'un produit ou d'un procédé.",
    highlights: [
      "Comptabilité carbone & ACV",
      "Stratégies de réduction et décarbonation",
    ],
    domaines: [
      {
        code: "3.1",
        title: "Comptabilité carbone et développement durable",
        prestations: [
          {
            id: "ges",
            title: "Évaluation des émissions de gaz à effet de serre",
            description:
              "Évaluation des émissions de GES associées à une activité, un produit, un service ou un projet : identification des principales sources, quantification de leur contribution, base pour définir des actions de réduction.",
            applications: [
              "Bilan des émissions d'une activité",
              "Empreinte carbone d'un produit ou service",
              "Comparaison de plusieurs solutions techniques",
              "Identification des principaux postes d'émissions",
              "Accompagnement d'une démarche de réduction",
            ],
            tags: ["MDE", "GM"],
          },
          {
            id: "acv-carbone",
            title: "Analyse du Cycle de Vie (ACV) carbone",
            description:
              "Analyse de l'empreinte carbone d'un produit ou d'un service sur l'ensemble de son cycle de vie, de l'extraction des matières premières jusqu'à sa fin de vie, pour comparer différentes solutions de conception, production ou utilisation.",
            applications: [
              "Comparaison de matériaux",
              "Comparaison de procédés de fabrication",
              "Analyse de différentes solutions de conception",
              "Impact du transport et de l'utilisation",
              "Identification des étapes les plus contributrices",
            ],
            tags: ["MDE", "IMecaD"],
          },
        ],
      },
      {
        code: "3.2",
        title: "Analyse et stratégie en environnement",
        prestations: [
          {
            id: "acv-globale",
            title: "Analyse du Cycle de Vie (ACV) globale",
            description:
              "Évaluation des impacts environnementaux d'un produit, d'un service ou d'un procédé au-delà de sa seule empreinte carbone, pour identifier les principaux impacts et les possibilités d'amélioration.",
            applications: [
              "Comparaison de plusieurs solutions techniques",
              "Choix de matériaux ou de procédés",
              "Analyse environnementale d'un produit",
              "Impact d'une modification de conception",
              "Aide à la conception de solutions plus durables",
            ],
            tags: ["MDE", "IMecaD", "GM"],
          },
          {
            id: "decarbonation",
            title: "Stratégies de réduction et de décarbonation",
            description:
              "À partir des résultats des analyses environnementales, Sea'Lab accompagne l'identification et l'évaluation de leviers de réduction des impacts, en mettant en évidence les solutions techniquement envisageables.",
            applications: [
              "Réduction des émissions de GES",
              "Optimisation des choix de matériaux",
              "Réduction de la consommation de ressources",
              "Amélioration des procédés",
              "Analyse comparative de scénarios de décarbonation",
              "Intégration de critères environnementaux dans la conception",
            ],
            tags: ["MDE", "IMecaD", "GM", "MOCA"],
          },
        ],
      },
    ],
  },
  {
    id: "strategie",
    number: 4,
    title: "Stratégie & conseil",
    short:
      "Analyse de marché, viabilité économique, financement et traduction technique pour éclairer vos décisions.",
    intro:
      "Sea'Lab accompagne les entreprises et porteurs de projets dans l'analyse de leur environnement, l'évaluation de leurs projets et la structuration de leur développement. Les prestations combinent analyse de données, étude de marché et approche technique afin de fournir des éléments concrets d'aide à la décision.",
    highlights: [
      "Stratégie commerciale, étude de marché",
      "Finance & finance verte",
      "Traduction technique",
    ],
    domaines: [
      {
        code: "4.1",
        title: "Stratégie commerciale",
        prestations: [
          {
            id: "analyse-marche",
            title: "Analyse de marché",
            description:
              "Étude d'un marché pour en comprendre les acteurs, tendances, opportunités et contraintes, afin d'aider à identifier les opportunités de développement et à mieux positionner une offre.",
            applications: [
              "Étude d'un marché avant lancement",
              "Analyse de la concurrence",
              "Identification de nouveaux marchés",
              "Étude des tendances d'un secteur",
              "Analyse du positionnement d'une offre",
            ],
            tags: ["Stratégie", "Data", "Ingénierie"],
          },
          {
            id: "viabilite",
            title: "Étude de la viabilité économique",
            description:
              "Évaluation de la faisabilité économique d'un projet ou d'une nouvelle activité à partir de ses coûts, besoins, hypothèses de développement et perspectives économiques.",
            applications: [
              "Lancement d'un nouveau produit ou service",
              "Création d'une activité",
              "Étude de faisabilité",
              "Comparaison de scénarios",
              "Analyse prévisionnelle des coûts et revenus",
            ],
            tags: ["Stratégie", "Finance", "Ingénierie"],
          },
          {
            id: "audit",
            title: "Audit interne et externe",
            description:
              "Analyse de l'environnement interne et externe d'une organisation pour identifier ses forces, contraintes, opportunités et axes d'amélioration.",
            applications: [
              "Analyse organisationnelle",
              "Diagnostic d'une activité",
              "Analyse des processus",
              "Étude de l'environnement concurrentiel",
              "Identification de pistes d'amélioration",
            ],
            tags: ["Stratégie", "Analyse", "Ingénierie"],
          },
        ],
      },
      {
        code: "4.2",
        title: "Finance",
        prestations: [
          {
            id: "financement",
            title: "Financement de projet",
            description:
              "Analyse des besoins financiers d'un projet et étude des différentes possibilités de financement adaptées, pour structurer les besoins et comparer les scénarios.",
            applications: [
              "Recherche de solutions de financement",
              "Analyse des besoins d'investissement",
              "Comparaison de scénarios",
              "Préparation d'un dossier de financement",
              "Identification de dispositifs d'aide",
            ],
            tags: ["Finance", "Stratégie"],
          },
          {
            id: "finance-verte",
            title: "Finance verte",
            description:
              "Analyse des dimensions économiques et environnementales d'un projet intégrant des objectifs de transition écologique ou de réduction des impacts environnementaux.",
            applications: [
              "Étude économique d'un projet de transition",
              "Investissements liés à la réduction des impacts",
              "Comparaison de solutions",
              "Identification de dispositifs de financement",
              "Analyse économique de projets environnementaux",
            ],
            tags: ["Finance", "Environnement", "Stratégie"],
          },
        ],
      },
      {
        code: "4.3",
        title: "Traduction",
        prestations: [
          {
            id: "traduction-technique",
            title: "Traduction de documents techniques",
            description:
              "Traduction de documents techniques en conservant la précision et la cohérence du vocabulaire spécialisé, grâce à la proximité avec les domaines scientifiques et techniques de SeaTech.",
            applications: [
              "Notices techniques",
              "Rapports",
              "Documents de conception",
              "Cahiers des charges",
              "Présentations scientifiques ou techniques",
              "Documentation produit",
            ],
            tags: ["Ingénierie", "Anglais"],
          },
          {
            id: "traduction-web",
            title: "Traduction de sites internet et applications mobiles",
            description:
              "Adaptation linguistique de sites web et d'applications mobiles pour un public international, en conservant la cohérence du contenu et de l'interface.",
            applications: [
              "Sites vitrines",
              "Sites institutionnels",
              "Applications mobiles",
              "Plateformes web",
              "Documentation associée à un produit numérique",
            ],
            tags: ["IRIS", "Anglais"],
          },
        ],
      },
    ],
  },
];

export const allPrestations = poles.flatMap((pole) =>
  pole.domaines.flatMap((domaine) =>
    domaine.prestations.map((prestation) => ({ pole, domaine, prestation })),
  ),
);

export const prestationsCount = allPrestations.length;

export function countByFiliere(code: FiliereCode) {
  return allPrestations.filter(({ prestation }) => prestation.tags.includes(code)).length;
}

export function poleCount(pole: Pole) {
  return pole.domaines.reduce((n, d) => n + d.prestations.length, 0);
}

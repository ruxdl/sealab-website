// Contenu issu du dossier de présentation, de la plaquette et des cartes de visite Sea'Lab.

export const site = {
  name: "Sea'Lab",
  tagline: "Ingénierie & innovation au service de la mer",
  motto: "Ensemble, accompagnons vos projets au rythme des vagues.",
  url: "https://sealab-website-kappa.vercel.app",
  email: "sealab.seatech@gmail.com",
  phone: "+33 7 68 74 31 93",
  phoneHref: "tel:+33768743193",
  president: "Ruben Riedel",
  school: "SeaTech, école d'ingénieurs de l'Université de Toulon",
  campus: "Campus de La Garde · Toulon",
  coordinates: "43°08′N · 6°01′E",
  brochure: "/plaquette-sealab.pdf",
  brochureLabel: "PDF, 9,9 Mo",
};

// Informations légales (LCEN, RGPD). À tenir à jour : siège tel qu'inscrit dans les statuts.
export const legal = {
  updated: "22 octobre 2026",
  form: "Association loi 1901",
  siege: "SeaTech, Université de Toulon, avenue de l'Université, 83130 La Garde",
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    contact: "https://vercel.com/contact",
  },
};

export const legalNav = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
  { href: "/politique-cookies", label: "Cookies" },
  { href: "/conditions-utilisation", label: "Conditions d'utilisation" },
  { href: "/accessibilite", label: "Accessibilité" },
];

export const nav = [
  { href: "/prestations", label: "Prestations" },
  { href: "/association", label: "L'association" },
  { href: "/rejoindre", label: "Rejoindre" },
  { href: "/contact", label: "Contact" },
];

export const keyFigures = [
  { value: "6", label: "filières SeaTech mobilisables" },
  { value: "4", label: "pôles d'expertise" },
  { value: "16", label: "membres cotisants, de la 1A à la 3A" },
  { value: "2", label: "passations de bureau réussies" },
];

export const methode = [
  {
    title: "Étude du besoin",
    text: "Nous analysons votre demande avec vous et vous adressons une proposition personnalisée.",
  },
  {
    title: "Convention d'étude",
    text: "Rédaction de la convention et sélection des intervenants dont les compétences correspondent à votre projet.",
  },
  {
    title: "Suivi dédié",
    text: "Un responsable d'étude reste en contact avec vous du lancement jusqu'à la livraison.",
  },
  {
    title: "Livraison garantie",
    text: "Le livrable vous est remis dans les délais, avec une phase de garantie.",
  },
  {
    title: "Et après ?",
    text: "Possibilité de prolonger le travail par une étude complémentaire.",
  },
];

export const atouts = [
  {
    title: "Un ancrage unique dans les sciences de la mer",
    text: "SeaTech est la seule école d'ingénieurs publique de la région Sud à proposer une formation pluridisciplinaire tournée vers l'ingénierie marine, les matériaux, la mécanique, le numérique et la robotique. Sea'Lab mobilise ainsi des compétences rares, en lien direct avec l'écosystème maritime et de défense de Toulon.",
  },
  {
    title: "Six filières, une seule équipe",
    text: "Contrairement aux Junior-Entreprises mono-filière, Sea'Lab s'appuie sur les six majors de SeaTech. Une même mission peut croiser mécanique, logiciel et matériaux : un vrai atout pour les projets d'ingénierie transverses.",
  },
  {
    title: "Un lien direct avec la recherche",
    text: "La proximité avec les enseignants-chercheurs de SeaTech permet de mobiliser une expertise pointue et d'accéder aux équipements et laboratoires de l'école pour des analyses approfondies.",
  },
  {
    title: "Un territoire propice à l'innovation",
    text: "Implantée à Toulon, au cœur d'un bassin industriel maritime et de défense majeur, Sea'Lab bénéficie d'un réseau d'entreprises et de partenaires technologiques directement liés à ses domaines d'expertise.",
  },
];

export const audiences = [
  {
    title: "Entreprises",
    text: "PME, industriels du maritime et de la défense, bureaux d'études : un renfort ponctuel ou une étude complète.",
  },
  {
    title: "Collectivités",
    text: "Bilans d'émissions, études techniques ou outils numériques au service de votre territoire.",
  },
  {
    title: "Laboratoires",
    text: "Modélisation 3D, prototypage d'une pièce ou d'un banc d'essai, simulations numériques, appui aux essais expérimentaux.",
  },
  {
    title: "Porteurs de projets",
    text: "De l'idée au premier prototype, de l'étude de marché au dossier de financement.",
  },
];

export const exemplesMissions = [
  { pole: "Ingénierie", text: "Identifier les zones critiques d'une pièce par simulation des contraintes" },
  { pole: "Ingénierie", text: "Étudier le comportement hydrodynamique d'un équipement flottant" },
  { pole: "Ingénierie", text: "Traiter et cartographier les données d'une campagne de mesure en mer" },
  { pole: "Ingénierie", text: "Passer d'un concept à un premier prototype fonctionnel" },
  { pole: "Ingénierie", text: "Choisir un matériau résistant à la corrosion en milieu marin" },
  { pole: "Ingénierie", text: "Intégrer des capteurs et l'acquisition de données à un banc d'essai" },
  { pole: "Digitalisation", text: "Concevoir le site vitrine de votre entreprise" },
  { pole: "Digitalisation", text: "Développer un tableau de bord pour suivre votre activité" },
  { pole: "Digitalisation", text: "Automatiser la génération de vos rapports" },
  { pole: "Environnement", text: "Réaliser le bilan carbone d'un événement ou d'un bâtiment" },
  { pole: "Environnement", text: "Comparer deux procédés de fabrication par ACV" },
  { pole: "Stratégie", text: "Étudier un marché avant le lancement d'un produit" },
  { pole: "Stratégie", text: "Préparer un dossier de financement de projet" },
  { pole: "Stratégie", text: "Traduire une notice ou un cahier des charges technique" },
];

export const missionsEcole = [
  {
    title: "Pour les laboratoires",
    text: "Modélisation 3D, prototypage d'une pièce ou d'un banc d'essai, simulations numériques, appui à des essais expérimentaux.",
  },
  {
    title: "Pour les services de l'école",
    text: "Site web, outil interne, application ou automatisation d'une tâche administrative.",
  },
  {
    title: "Pour la démarche RSE",
    text: "Bilan carbone d'un événement, d'un équipement ou d'un bâtiment ; pistes de réduction des impacts.",
  },
  {
    title: "Pour l'international",
    text: "Traduction technique de documents, de supports de cours ou de présentations de l'école.",
  },
];

export const histoire = [
  {
    year: "2024",
    title: "Création",
    text: "Des élèves de SeaTech fondent Sea'Lab, la première Junior-Entreprise de l'école : statuts, premier bureau, premiers adhérents.",
  },
  {
    year: "2025",
    title: "1re passation",
    text: "Un nouveau bureau reprend la structure et consolide le cadre : compte bancaire, cotisations, dons et une première subvention.",
  },
  {
    year: "2026",
    title: "2e passation",
    text: "Bureau actuel. Statut Junior-Création auprès de la CNJE, plaquette de prestations, site web, 16 membres cotisants et premier démarchage auprès des alumni.",
  },
  {
    year: "2027",
    title: "Objectif",
    text: "Signer une première convention d'étude pour passer Junior-Initiative et lancer pleinement l'activité.",
    upcoming: true,
  },
];

export const bilan = [
  { label: "Statuts & compte bancaire", done: true },
  { label: "Junior-Création CNJE", done: true },
  { label: "Plaquette & site web", done: true },
  { label: "16 cotisants", done: true },
  { label: "2 passations", done: true },
  { label: "Première étude", done: false },
];

export const bureau = [
  { role: "Président", name: "Ruben Riedel" },
  { role: "Vice-Président", name: "Bollini--Danigo" },
  { role: "Secrétaire général", name: "Théo Rieffel" },
  { role: "Trésorier", name: "Guillaume Cabanac" },
];

export const passation = [
  { title: "Repérage en 2A", text: "Les futurs membres du bureau sont identifiés dès la deuxième année." },
  { title: "Une année en binôme", text: "Chaque 3A forme et accompagne son successeur de 2A." },
  { title: "Relève avant le stage", text: "Le relais est pris avant le départ en stage des 3A, sans rupture d'activité." },
  { title: "Des anciens joignables", text: "Les anciens membres restent disponibles pour conseiller le nouveau bureau." },
];

export const apports = [
  {
    title: "Rayonnement",
    text: "Une Junior-Entreprise reconnue par la CNJE, vitrine du savoir-faire de SeaTech.",
  },
  {
    title: "Professionnalisation",
    text: "Des élèves confrontés à de vrais clients, de vrais cahiers des charges et de vrais délais.",
  },
  {
    title: "Lien avec les entreprises",
    text: "De nouveaux contacts pour l'école : stages, alternances, partenariats.",
  },
  {
    title: "Attractivité",
    text: "Un argument concret pour les futurs élèves et une vie associative plus riche.",
  },
];

export const statutsCnje = [
  {
    name: "Junior-Création",
    text: "Première étape du parcours CNJE : le cadre administratif et l'accompagnement du réseau sont en place.",
    current: true,
  },
  {
    name: "Junior-Initiative",
    text: "Statut obtenu après la réalisation des premières études : l'activité est lancée.",
  },
  {
    name: "Junior-Entreprise",
    text: "Label délivré par la CNJE après audit, gage de qualité et de sérieux auprès des clients.",
  },
];

export const faq = [
  {
    q: "Qu'est-ce qu'une Junior-Entreprise ?",
    a: "Une association étudiante à but non lucratif (loi 1901), à vocation pédagogique, qui réalise des missions rétribuées pour des professionnels dans les domaines de compétence de son école. Les Junior-Entreprises sont fédérées par la Confédération Nationale des Junior-Entreprises (CNJE), premier mouvement étudiant de France, qui garantit leur qualité par des audits réguliers.",
  },
  {
    q: "Qui réalise les missions ?",
    a: "Des élèves-ingénieurs de SeaTech, sélectionnés pour chaque étude selon les compétences requises parmi les six filières de l'école. Chaque étude est suivie par un responsable dédié, votre interlocuteur du début à la fin.",
  },
  {
    q: "Comment se déroule une étude ?",
    a: "Nous étudions d'abord votre besoin et vous adressons une proposition personnalisée. Une convention d'étude est ensuite signée et les intervenants sont sélectionnés. Un responsable dédié assure le suivi, puis le livrable vous est remis dans les délais, avec une phase de garantie. Une étude complémentaire peut prolonger le travail si besoin.",
  },
  {
    q: "Comment le prix est-il fixé ?",
    a: "Les missions sont facturées en JEH (Jour-Étude-Homme), l'unité de référence des Junior-Entreprises, au tarif encadré par la CNJE. Le montant dépend du volume de travail nécessaire : contactez-nous pour recevoir une proposition adaptée à votre projet.",
  },
  {
    q: "Mon besoin n'apparaît pas dans la liste des prestations, que faire ?",
    a: "Notre liste n'est pas exhaustive. Grâce aux six filières de SeaTech, nous pouvons étudier de nombreux sujets transverses. Décrivez-nous votre projet : nous vous dirons rapidement s'il est à notre portée.",
  },
  {
    q: "Où en est Sea'Lab dans le parcours de la CNJE ?",
    a: "Sea'Lab est membre de la CNJE au statut Junior-Création : le cadre administratif est posé. La réalisation de nos premières études nous fera passer Junior-Initiative, étape vers le label Junior-Entreprise.",
  },
  {
    q: "Où êtes-vous situés ?",
    a: "Sea'Lab est hébergée par SeaTech, l'école d'ingénieurs de l'Université de Toulon, sur le campus de La Garde, au cœur du bassin maritime et industriel toulonnais.",
  },
];

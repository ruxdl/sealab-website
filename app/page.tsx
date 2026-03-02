"use client";

import React, { useState } from 'react';
import { Code, Cpu, Wrench, ChevronRight, Mail, MapPin, Phone, Menu, X, ArrowRight, Anchor, Send } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Fonction pour gérer la soumission du formulaire (simulation pour l'instant)
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message envoyé avec succès ! (Ceci est une simulation)");
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="relative w-30 h-30 sm:w-20 sm:h-20 flex items-center justify-center">
                {/* L'image pointe vers public/logo.png */}
                <img src="/logo.png" alt="Logo SeaTech JE" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-slate-900 block leading-none">SeaLab</span>
                <span className="text-sm font-medium text-blue-600 tracking-widest uppercase">Junior-Entreprise</span>
              </div>
            </div>
          </div>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section id="accueil" className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
          <div className="w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Nouvelle Junior Entreprise à Toulon
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Vos projets concrétisés par <span className="text-blue-600">l'ingénierie</span> des étudiants.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Confiez vos études, développements et projets mécaniques aux futurs ingénieurs de l'école SeaTech. Innovation, rigueur et dynamisme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group">
                Découvrir nos services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-slate-600">
              Forts des enseignements de pointe dispensés à SeaTech, nos intervenants vous accompagnent sur des missions techniques complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Informatique & Numérique</h3>
              <p className="text-slate-600">
                Développement d'applications web et mobiles, création de sites vitrines, bases de données et solutions logicielles sur mesure.
              </p>
              {/* Texte supplémentaire qui s'affiche au survol */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="pt-4 text-slate-500 text-sm border-t border-slate-100 mt-4">
                    Notre équipe maîtrise des technologies modernes telles que React, Next.js, Node.js et Python. Nous concevons des outils internes optimisés et des plateformes e-commerce performantes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mécanique & Matériaux</h3>
              <p className="text-slate-600">
                Modélisation CAO, études de résistance des matériaux, conception de pièces et systèmes mécaniques innovants.
              </p>
              {/* Texte supplémentaire qui s'affiche au survol */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="pt-4 text-slate-500 text-sm border-t border-slate-100 mt-4">
                    Utilisation de logiciels professionnels (SolidWorks, Catia). Nous réalisons également de la simulation numérique (CFD, éléments finis) et du prototypage rapide via impression 3D.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Cpu size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Systèmes Électroniques</h3>
              <p className="text-slate-600">
                Conception de circuits, systèmes embarqués, IoT et automatisation de processus industriels.
              </p>
              {/* Texte supplémentaire qui s'affiche au survol */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <p className="pt-4 text-slate-500 text-sm border-t border-slate-100 mt-4">
                    Programmation de microcontrôleurs (Arduino, STM32), routage de cartes PCB, et intégration de capteurs pour créer des solutions connectées, intelligentes et autonomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="a-propos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <div className="aspect-square md:aspect-video lg:aspect-square bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200 shadow-inner">
                {/* L'image pointe vers public/equipe.jpg */}
                <img src="/equipe.jpg" alt="Équipe SeaTech JE" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">La force d'une école d'ingénieurs d'excellence.</h2>
              <p className="text-lg text-slate-600 mb-6">
                En tant que Junior-Entreprise de <strong>SeaTech</strong> à Toulon, nous fonctionnons comme un cabinet de conseil étudiant. Nous permettons à nos intervenants, futurs ingénieurs, de mettre en pratique leurs connaissances théoriques sur des projets concrets.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-700"><strong>Qualité garantie :</strong> Des processus contrôlés et encadrés.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-700"><strong>Tarifs compétitifs :</strong> Un modèle associatif avantageux.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">✓</div>
                  <span className="text-slate-700"><strong>Innovation :</strong> Les technologies et méthodes les plus récentes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT PRE-FOOTER */}
      <section className="bg-blue-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Un projet à nous confier ?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Discutons de vos besoins. Notre équipe est réactive et prête à transformer vos idées en réalisations concrètes.
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Demander un premier rendez-vous
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl overflow-hidden p-2 shadow-sm">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-xl text-white">SeaTech JE</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-6">
                La Junior-Entreprise de l'école d'ingénieurs SeaTech, au service des professionnels et particuliers.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contacts</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={16} className="text-blue-500" />
                  Campus de La Garde, Toulon
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <Mail size={16} className="text-blue-500" />
                  sealab.seatech@gmail.com
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400">
                  <Phone size={16} className="text-blue-500" />
                  +33 (0)7 68 74 31 93
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Liens Utiles</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setIsLegalModalOpen(true)} className="text-sm text-slate-400 hover:text-white transition-colors text-left">Mentions légales</button></li>
                <li><button onClick={() => setIsPrivacyModalOpen(true)} className="text-sm text-slate-400 hover:text-white transition-colors text-left">Politique de confidentialité</button></li>
                <li><a href="https://www.seatech.fr/" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">École SeaTech</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} SeaTech Junior-Entreprise. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      {/* MODAL DE CONTACT (POP-UP) */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Arrière-plan flou qui ferme la modale si on clique dessus */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          
          {/* Contenu de la modale */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900">Contactez-nous</h3>
              <button 
                onClick={() => setIsContactModalOpen(false)} 
                className="text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleContactSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="prenom" className="text-sm font-medium text-slate-700">Prénom</label>
                  <input type="text" id="prenom" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" placeholder="Jean" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="nom" className="text-sm font-medium text-slate-700">Nom</label>
                  <input type="text" id="nom" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" placeholder="Dupont" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Adresse e-mail</label>
                <input type="email" id="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all" placeholder="jean.dupont@exemple.fr" />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Votre message</label>
                <textarea id="message" required rows={4} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none" placeholder="Décrivez-nous votre projet ou votre besoin..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-4 shadow-md hover:shadow-lg">
                <Send size={18} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL MENTIONS LÉGALES */}
      {isLegalModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsLegalModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-slate-100 shrink-0">
              <h3 className="text-2xl font-bold text-slate-900">Mentions Légales</h3>
              <button 
                onClick={() => setIsLegalModalOpen(false)} 
                className="text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto text-slate-600 space-y-4">
              <h4 className="font-bold text-slate-900">1. Éditeur du site</h4>
              <p>Le présent site est édité par SeaLab Junior-Entreprise, association loi 1901 à but non lucratif.</p>
              <p><strong>Siège social :</strong> Campus de La Garde, Avenue de l'Université, 83130 La Garde, France.</p>
              <p><strong>Email :</strong> sealab.seatech@gmail.com</p>
              <p><strong>Téléphone :</strong> +33 (0)7 68 74 31 93</p>
              
              <h4 className="font-bold text-slate-900 mt-6">2. Directeur de la publication</h4>
              <p>Le directeur de la publication est le Président en exercice de SeaLab Junior-Entreprise.</p>
              
              <h4 className="font-bold text-slate-900 mt-6">3. Hébergement</h4>
              <p>Ce site est hébergé par [Nom de l'hébergeur, ex: Vercel Inc.], [Adresse de l'hébergeur].</p>
              
              <h4 className="font-bold text-slate-900 mt-6">4. Propriété intellectuelle</h4>
              <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL POLITIQUE DE CONFIDENTIALITÉ */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsPrivacyModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-slate-100 shrink-0">
              <h3 className="text-2xl font-bold text-slate-900">Politique de Confidentialité</h3>
              <button 
                onClick={() => setIsPrivacyModalOpen(false)} 
                className="text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto text-slate-600 space-y-4">
              <h4 className="font-bold text-slate-900">1. Collecte des données</h4>
              <p>Nous collectons les informations suivantes lors de l'utilisation de notre formulaire de contact : nom, prénom, adresse e-mail et contenu du message.</p>
              
              <h4 className="font-bold text-slate-900 mt-6">2. Utilisation des données</h4>
              <p>Les informations recueillies sont utilisées uniquement pour :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Répondre à vos demandes de devis ou d'information.</li>
                <li>Vous recontacter dans le cadre de la gestion de votre projet.</li>
              </ul>
              
              <h4 className="font-bold text-slate-900 mt-6">3. Protection des données</h4>
              <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Vos données ne sont ni vendues, ni échangées, ni transférées à des tiers sans votre consentement.</p>
              
              <h4 className="font-bold text-slate-900 mt-6">4. Vos droits (RGPD)</h4>
              <p>Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Pour exercer ce droit, veuillez nous contacter à l'adresse : sealab.seatech@gmail.com.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
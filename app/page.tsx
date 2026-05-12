"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Code, Cpu, Wrench, ArrowRight, Mail, MapPin, Phone, X, Send, Menu, ChevronRight } from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<Record<string,boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const p = String(fd.get('prenom')||''), n = String(fd.get('nom')||'');
    const em = String(fd.get('email')||''), msg = String(fd.get('message')||'');
    const to = 'sealab.seatech@gmail.com';
    const subject = `Demande de devis - ${p} ${n}`;
    const body = `Nom: ${p} ${n}\nEmail: ${em}\n\n${msg}`;
    window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setContactOpen(false);
    e.currentTarget.reset();
  };

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#a-propos', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    { icon: <Code size={28}/>, title: 'Informatique & Numérique', desc: "Développement d'applications web et mobiles, création de sites vitrines, bases de données et solutions logicielles sur mesure.", extra: "Notre équipe maîtrise des technologies modernes telles que Next.js et Python. Nous concevons des outils internes optimisés pour vos projets.", id: 'e1' },
    { icon: <Wrench size={28}/>, title: 'Mécanique & Matériaux', desc: "Modélisation CAO, études de résistance des matériaux, conception de pièces et systèmes mécaniques innovants.", extra: "Utilisation de logiciels professionnels (SolidWorks). Nous réalisons également de la simulation numérique (éléments finis) et du prototypage rapide via impression 3D.", id: 'e2' },
    { icon: <Cpu size={28}/>, title: 'Systèmes Électroniques', desc: "Conception de circuits, systèmes embarqués.", extra: "Programmation de microcontrôleurs (Arduino, STM32), et intégration de capteurs pour créer des solutions connectées, intelligentes et autonomes.", id: 'e3' },
  ];

  return (
    <div className="min-h-screen font-sans" style={{ background: '#020617' }}>

      {/* ═══ NAV ═══ */}
      <nav className={`glass-nav fixed top-0 w-full z-50 ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#accueil" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1">
                <img src="/favicon.ico" alt="Logo Sea'Lab" className="w-full h-full object-contain"/>
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-none">Sea&apos;Lab</span>
                <span className="text-xs font-medium text-sky-400 tracking-[0.2em] uppercase">Junior-Entreprise</span>
              </div>
            </a>
            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
              <button onClick={() => setContactOpen(true)} className="btn-glow text-sm !py-2.5 !px-6">
                <span>Devis gratuit</span><ArrowRight size={16}/>
              </button>
            </div>
            {/* Mobile burger */}
            <button className="md:hidden text-slate-300" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 px-4 pb-4 space-y-1">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block py-3 text-slate-300 hover:text-white transition-colors">{l.label}</a>
            ))}
            <button onClick={() => { setContactOpen(true); setMenuOpen(false); }}
              className="btn-glow w-full mt-2 justify-center text-sm !py-2.5">
              <span>Devis gratuit</span><ArrowRight size={16}/>
            </button>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="gradient-mesh"/>
        {/* Particles */}
        {[...Array(6)].map((_,i) => (
          <div key={i} className="particle" style={{
            width: 3+i*2, height: 3+i*2, left: `${10+i*15}%`,
            bottom: '-10px', animationDuration: `${8+i*3}s`, animationDelay: `${i*1.5}s`
          }}/>
        ))}
        {/* Hero image */}
        <div className="absolute top-24 right-0 z-[1] pointer-events-none opacity-30 sm:opacity-40 lg:opacity-50">
          <img src="/avionbat.png" alt="" className="w-64 sm:w-96 lg:w-[700px] object-contain"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-sm font-semibold mb-8 border border-sky-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-sky-400"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"/>
              </span>
              Nouvelle Junior-Entreprise à Toulon
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
              <span className="text-white">Vos projets concrétisés par </span>
              <span className="text-glow bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">l&apos;ingénierie</span>
              <span className="text-white"> des étudiants.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Confiez vos études, développements et projets mécaniques aux futurs ingénieurs de l&apos;école SeaTech. Innovation, rigueur et dynamisme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setContactOpen(true)} className="btn-glow">
                <span>Demander un devis</span><ArrowRight size={20}/>
              </button>
              <a href="#services" className="btn-outline">Nos services</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-24 relative" style={{ background: '#0a1228' }}>
        <div className="gradient-line w-full mb-24"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-sky-400 font-semibold text-sm tracking-widest uppercase mb-3">Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nos Domaines d&apos;Expertise</h2>
            <p className="text-slate-400">Les étudiants de SeaTech mettent leurs compétences au service de vos projets techniques.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
            {services.map(s => (
              <div key={s.id} className="glass-card rounded-2xl p-8 group cursor-default reveal">
                <div className="icon-box w-14 h-14 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                {/* Desktop expand on hover */}
                <div className="hidden sm:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                  <div className="overflow-hidden">
                    <p className="pt-4 text-slate-500 text-sm border-t border-white/5 mt-4">{s.extra}</p>
                  </div>
                </div>
                {/* Mobile expand on tap */}
                <div className={`grid sm:hidden ${expanded[s.id] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-500`}>
                  <div className="overflow-hidden">
                    <p className="pt-4 text-slate-500 text-sm border-t border-white/5 mt-4">{s.extra}</p>
                  </div>
                </div>
                <div className="mt-3 sm:hidden">
                  <button onClick={() => setExpanded(p => ({...p,[s.id]:!p[s.id]}))} className="text-sm font-medium text-sky-400">
                    {expanded[s.id] ? 'Voir moins' : 'Voir plus'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ À PROPOS ═══ */}
      <section id="a-propos" className="py-24" style={{ background: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full reveal">
              <div className="aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/5 relative">
                <img src="/equipe.jpg" alt="Équipe Sea'Lab" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent"/>
              </div>
            </div>
            <div className="lg:w-1/2 reveal">
              <p className="text-sky-400 font-semibold text-sm tracking-widest uppercase mb-3">À propos</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">La force d&apos;une école d&apos;ingénieurs d&apos;excellence.</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                En tant que Junior-Entreprise de <strong className="text-white">SeaTech</strong> à Toulon, nous fonctionnons comme un cabinet de conseil étudiant. Nous permettons à nos intervenants, futurs ingénieurs, de mettre en pratique leurs connaissances théoriques sur des projets concrets.
              </p>
              <ul className="space-y-4">
                {[
                  ['Qualité garantie :', 'Des processus contrôlés et encadrés.'],
                  ['Tarifs compétitifs :', 'Un modèle associatif avantageux.'],
                  ['Innovation :', 'Les technologies et méthodes les plus récentes.'],
                ].map(([t,d],i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 rounded-full bg-sky-500/15 text-sky-400 flex items-center justify-center shrink-0 text-xs font-bold">✓</div>
                    <span className="text-slate-300"><strong className="text-white">{t}</strong> {d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="contact" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)' }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}/>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Un projet à nous confier ?</h2>
          <p className="text-sky-100/80 text-lg mb-10 max-w-2xl mx-auto">
            Discutons de vos besoins. Notre équipe est réactive et prête à transformer vos idées en réalisations concrètes.
          </p>
          <button onClick={() => setContactOpen(true)}
            className="bg-white text-sky-700 px-8 py-4 rounded-full font-bold hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer">
            Demander un premier rendez-vous
          </button>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 border-t border-white/5" style={{ background: '#020617' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-1">
                  <img src="/favicon.ico" alt="Logo" className="w-full h-full object-contain"/>
                </div>
                <span className="font-bold text-xl text-white">Sea&apos;Lab</span>
              </div>
              <p className="text-slate-500 max-w-sm">La Junior-Entreprise de l&apos;école d&apos;ingénieurs SeaTech, au service des professionnels et particuliers.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacts</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-400"><MapPin size={16} className="text-sky-500"/>Campus de La Garde, Toulon</li>
                <li className="flex items-center gap-2 text-sm text-slate-400"><Mail size={16} className="text-sky-500"/>sealab.seatech@gmail.com</li>
                <li className="flex items-center gap-2 text-sm text-slate-400"><Phone size={16} className="text-sky-500"/>+33 (0)7 68 74 31 93</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Liens Utiles</h4>
              <ul className="space-y-2">
                <li><button onClick={() => setLegalOpen(true)} className="text-sm text-slate-400 hover:text-white transition-colors">Mentions légales</button></li>
                <li><button onClick={() => setPrivacyOpen(true)} className="text-sm text-slate-400 hover:text-white transition-colors">Politique de confidentialité</button></li>
                <li><a href="https://www.seatech.fr/" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">École SeaTech</a></li>
              </ul>
            </div>
          </div>
          <div className="gradient-line mb-8"/>
          <p className="text-sm text-slate-600 text-center">© {new Date().getFullYear()} Sea&apos;Lab Junior-Entreprise. Tous droits réservés.</p>
        </div>
      </footer>

      {/* ═══ CONTACT MODAL ═══ */}
      {contactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="modal-overlay absolute inset-0" onClick={() => setContactOpen(false)}/>
          <div className="modal-glass relative rounded-2xl w-full max-w-lg overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h3 className="text-2xl font-bold text-white">Contactez-nous</h3>
              <button onClick={() => setContactOpen(false)} className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"><X size={20}/></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-sm font-medium text-slate-300 mb-1.5 block">Prénom</label><input name="prenom" required className="form-input" placeholder="Jean"/></div>
                <div><label className="text-sm font-medium text-slate-300 mb-1.5 block">Nom</label><input name="nom" required className="form-input" placeholder="Dupont"/></div>
              </div>
              <div><label className="text-sm font-medium text-slate-300 mb-1.5 block">Adresse e-mail</label><input name="email" type="email" required className="form-input" placeholder="jean.dupont@exemple.fr"/></div>
              <div><label className="text-sm font-medium text-slate-300 mb-1.5 block">Votre message</label><textarea name="message" required rows={4} className="form-input resize-none" placeholder="Décrivez-nous votre projet ou votre besoin..."/></div>
              <button type="submit" className="btn-glow w-full justify-center mt-2"><Send size={18}/><span>Envoyer le message</span></button>
            </form>
          </div>
        </div>
      )}

      {/* ═══ LEGAL MODAL ═══ */}
      {legalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="modal-overlay absolute inset-0" onClick={() => setLegalOpen(false)}/>
          <div className="modal-glass relative rounded-2xl w-full max-w-3xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-white/5 shrink-0">
              <h3 className="text-2xl font-bold text-white">Mentions Légales</h3>
              <button onClick={() => setLegalOpen(false)} className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"><X size={20}/></button>
            </div>
            <div className="p-6 overflow-y-auto text-slate-400 space-y-4">
              <h4 className="font-bold text-white">1. Éditeur du site</h4>
              <p>Le présent site est édité par SeaLab Junior-Entreprise.</p>
              <p><strong className="text-white">Siège social :</strong> Campus de La Garde, Avenue de l&apos;Université, 83130 La Garde, France.</p>
              <p><strong className="text-white">Email :</strong> sealab.seatech@gmail.com</p>
              <p><strong className="text-white">Téléphone :</strong> +33 (0)7 68 74 31 93</p>
              <h4 className="font-bold text-white mt-6">2. Directeur de la publication</h4>
              <p>Le directeur de la publication est le Président en exercice de SeaLab Junior-Entreprise.</p>
              <h4 className="font-bold text-white mt-6">3. Hébergement</h4>
              <p>Ce site est hébergé par Vercel.</p>
              <h4 className="font-bold text-white mt-6">4. Propriété intellectuelle</h4>
              <p>L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══ PRIVACY MODAL ═══ */}
      {privacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="modal-overlay absolute inset-0" onClick={() => setPrivacyOpen(false)}/>
          <div className="modal-glass relative rounded-2xl w-full max-w-3xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-white/5 shrink-0">
              <h3 className="text-2xl font-bold text-white">Politique de Confidentialité</h3>
              <button onClick={() => setPrivacyOpen(false)} className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"><X size={20}/></button>
            </div>
            <div className="p-6 overflow-y-auto text-slate-400 space-y-4">
              <h4 className="font-bold text-white">1. Collecte des données</h4>
              <p>Nous collectons les informations suivantes lors de l&apos;utilisation de notre formulaire de contact : nom, prénom, adresse e-mail et contenu du message.</p>
              <h4 className="font-bold text-white mt-6">2. Utilisation des données</h4>
              <p>Les informations recueillies sont utilisées uniquement pour :</p>
              <ul className="list-disc pl-5 space-y-1"><li>Répondre à vos demandes de devis ou d&apos;information.</li><li>Vous recontacter dans le cadre de la gestion de votre projet.</li></ul>
              <h4 className="font-bold text-white mt-6">3. Protection des données</h4>
              <p>Vos données ne sont ni vendues, ni échangées, ni transférées à des tiers sans votre consentement.</p>
              <h4 className="font-bold text-white mt-6">4. Vos droits (RGPD)</h4>
              <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant. Contact : sealab.seatech@gmail.com.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
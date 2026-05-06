// seo.js — Gestion SEO dynamique par page — Pôle Santé Antibes Centre
(function () {
  var BASE = 'https://www.pole-sante-antibes.com';
  var SITE = 'Pôle Santé Antibes Centre';

  window.SEO_PAGES = {
    accueil: {
      title: SITE + ' — Médecin du Sport, Kinésithérapeutes & Ostéopathes à Antibes',
      description: "Centre de médecine du sport à Antibes (06600). Médecin du sport (Dr Jalliffier-Verne), médecin généraliste, chirurgien orthopédique du genou, kinésithérapeutes, ostéopathes et infirmières. Traumatologie sportive, certificats médicaux, rééducation post-opératoire, équipements de pointe. RDV Doctolib.",
      keywords: 'médecin du sport Antibes, médecin sportif Antibes, traumatologie sportive Antibes, certificat médical sport Antibes, certificat médical aptitude sportive Antibes, pôle santé Antibes, centre médical Antibes, centre paramédical Antibes, médecine sportive Antibes, médecin du sport 06600, médecin du sport Alpes-Maritimes, médecin du sport Côte d\'Azur, kinésithérapeute Antibes, ostéopathe Antibes, chirurgien orthopédique genou Antibes, rééducation sportive Antibes, blessure sportive Antibes, tractions robotisées Antibes, Dr Jalliffier-Verne médecin du sport',
      canonical: BASE + '/',
    },
    kine: {
      title: 'Kinésithérapeutes à Antibes — Rééducation Sportive & Thérapie Manuelle | ' + SITE,
      description: "Kinésithérapeutes à Antibes pour rééducation post-opératoire, sportive et fonctionnelle. Thérapie manuelle, renforcement musculaire, mobilité articulaire, traitement des entorses, tendinites, lombalgies. Antoine Basset, Elouan Poisson, Anaïs Creignou, Alexandre Redon, Klaudia Duda, Jacques Campana.",
      keywords: 'kinésithérapeute Antibes, kiné Antibes 06600, kiné du sport Antibes, masseur-kinésithérapeute Antibes, rééducation sportive Antibes, rééducation post-opératoire Antibes, thérapie manuelle Antibes, renforcement musculaire Antibes, kinésithérapie sportive Antibes, kiné sportif Côte d\'Azur, rééducation entorse cheville Antibes, rééducation genou Antibes, rééducation épaule Antibes, traitement tendinite Antibes, kiné Cannes, kiné Juan-les-Pins, kiné Vallauris, kiné Biot, Antoine Basset kiné Antibes',
      canonical: BASE + '/kinesitherapeutes',
    },
    medecins: {
      title: 'Médecins à Antibes — Médecin du Sport, Généraliste & Chirurgien du Genou | ' + SITE,
      description: "Équipe médicale au Pôle Santé Antibes Centre : Dr Jalliffier-Verne médecin du sport (traumatologie sportive, certificats médicaux, suivi sportifs amateurs et professionnels), Dr Aurora Toma médecin généraliste, Dr Tsiry Andriamananaivo chirurgien orthopédique spécialiste du genou. Infirmières Julie Faleiro et Christine Da Ponte. RDV Doctolib.",
      keywords: 'médecin du sport Antibes, médecin sportif Antibes, médecine du sport Antibes 06600, Dr Jalliffier-Verne médecin sport, médecin généraliste Antibes, médecin Antibes Doctolib, chirurgien du genou Antibes, chirurgien orthopédique Antibes, traumatologie sportive Antibes, certificat médical sport Antibes, certificat aptitude sport Antibes, certificat non contre-indication sport, consultation médecin sport Antibes, médecin sport Côte d\'Azur, Dr Aurora Toma, Dr Tsiry Andriamananaivo, infirmière Antibes, médecin du sport Cannes Antibes',
      canonical: BASE + '/medecins',
    },
    'medecine-sport': {
      title: 'Médecin du Sport à Antibes — Dr Jalliffier-Verne, Traumatologie Sportive | ' + SITE,
      description: "Consultation de médecine du sport à Antibes avec le Dr Jalliffier-Verne. Diagnostic et traitement des blessures sportives : entorses, tendinopathies, lésions musculaires, douleurs articulaires. Certificat médical d'aptitude sportive, suivi des sportifs amateurs et professionnels, prévention des blessures. RDV en ligne sur Doctolib.",
      keywords: 'médecin du sport Antibes, médecin sportif Antibes 06600, médecine sportive Antibes, médecine du sport Côte d\'Azur, médecin du sport Alpes-Maritimes, médecine du sport Cannes Antibes, Dr Jalliffier-Verne, Jalliffier-Verne médecin sport Antibes, consultation médecine du sport Antibes, traumatologie sportive Antibes, blessure sportive Antibes, certificat médical sport Antibes, certificat médical d\'aptitude sportive, certificat non contre-indication sport, certificat de non contre-indication à la pratique sportive, certificat sport compétition Antibes, certificat médical fédération sportive, visite médicale sportive Antibes, suivi sportif Antibes, suivi sportif haut niveau, médecin sport amateur, médecin sport professionnel, entorse cheville médecin Antibes, entorse genou Antibes, tendinite traitement Antibes, tendinopathie traitement Antibes, tendinite épaule Antibes, tendinite achille Antibes, tendinite rotulienne Antibes, déchirure musculaire Antibes, élongation musculaire Antibes, claquage musculaire Antibes, contracture musculaire Antibes, lésion ligamentaire Antibes, douleur musculo-squelettique Antibes, fracture de fatigue Antibes, périostite tibiale Antibes, syndrome rotulien Antibes, conflit fémoro-acétabulaire, prévention blessure sportive Antibes, retour au sport après blessure, reprise sportive après blessure, médecin marathon Antibes, médecin coureur Antibes, médecin trail Antibes, médecin cycliste Antibes, médecin triathlon Antibes, médecin tennis Antibes, médecin football Antibes, médecin rugby Antibes, médecin natation Antibes, médecin crossfit Antibes, médecin musculation Antibes, médecin escalade Antibes, médecin équitation Antibes, médecin ski Antibes, médecin sport voile Antibes, médecin sport Riviera, suivi nutritionnel sportif Antibes, conseil entraînement sportif, gestion charge entraînement, dopage médecin sport, contrôle anti-dopage Antibes, échographie sportive Antibes, infiltration épaule Antibes, infiltration genou Antibes, mésothérapie sport Antibes, PRP plasma riche plaquettes Antibes, ondes de choc sportif Antibes, médecin sport dimanche, médecin sport samedi, médecin sport en urgence Antibes',
      canonical: BASE + '/medecine-du-sport',
    },
    osteo: {
      title: 'Ostéopathes à Antibes — Adultes, Sportifs, Nourrissons | ' + SITE,
      description: "Ostéopathe à Antibes : prise en charge des douleurs dorsales, cervicales, maux de tête, troubles digestifs, suivi de grossesse, nourrissons et sportifs. Ostéopathie sportive en complément de la médecine du sport. Jacques Campana, kinésithérapeute et ostéopathe.",
      keywords: 'ostéopathe Antibes, ostéopathie Antibes 06600, ostéopathe sportif Antibes, ostéopathie sport Antibes, ostéopathe nourrisson Antibes, ostéopathe sport Côte d\'Azur, douleurs dos ostéopathe Antibes, maux de tête ostéopathe, ostéopathe grossesse Antibes, Jacques Campana ostéopathe Antibes, ostéopathe Cannes Antibes, ostéopathie sportive prévention blessure',
      canonical: BASE + '/osteopathes',
    },
    equipements: {
      title: 'Équipements Rééducation Sportive — Tractions Robotisées, Ondes de Choc, Pressothérapie | ' + SITE,
      description: "Plateau technique de pointe pour la rééducation et la médecine du sport à Antibes : pressothérapie, Game Ready (cryothérapie active), Imoove 300 (proprioception), ondes de choc, Técathérapie Winback, tractions robotisées SOS DOS. Traitement hernie discale, lombalgie, cervicalgie, tendinopathie, récupération sportive.",
      keywords: 'tractions robotisées Antibes, ondes de choc Antibes, ondes de choc tendinite Antibes, pressothérapie Antibes, pressothérapie sportif Antibes, SOS DOS Antibes, hernie discale traitement Antibes, lombalgie traitement Antibes, kinésithérapie haute technologie Antibes, Imoove Antibes, proprioception sportif, Tecartherapie Antibes, Winback Antibes, Game Ready Antibes, cryothérapie sportif Antibes, récupération sportive Antibes, équipement médecine du sport Antibes, plateau technique sport Antibes',
      canonical: BASE + '/equipements',
    },
    recrutement: {
      title: "Recrutement Santé Antibes — Offres d'Emploi Kiné, Ostéo & Médecin du Sport | " + SITE,
      description: "Rejoignez le Pôle Santé Antibes Centre : offres d'emploi pour kinésithérapeutes, ostéopathes et médecins du sport en libéral. Cabinet moderne, patientèle établie, équipements haut de gamme. Candidature spontanée acceptée.",
      keywords: 'emploi kinésithérapeute Antibes, recrutement kiné Alpes-Maritimes, offre emploi santé Antibes, poste ostéopathe Antibes, recrutement médecin du sport Antibes, cabinet kinésithérapie rejoindre Antibes, offre emploi médical 06, emploi médecin sport Côte d\'Azur',
      canonical: BASE + '/recrutement',
    },
    contact: {
      title: 'Contact & Accès — 27 Bd Gustave Chancel, 06600 Antibes | ' + SITE,
      description: "Pôle Santé Antibes Centre : 27 Boulevard Gustave Chancel 06600 Antibes. Médecin du sport, kinésithérapeutes, ostéopathes, médecins. Tél. 04 22 32 88 10. Lun–Ven 8h–20h · Sam 8h–18h. Bus A, 08, 16, 620 arrêt Dugommier. 1h gratuite parking EFFIA.",
      keywords: 'contact pôle santé Antibes, adresse cabinet médical Antibes, médecin du sport adresse Antibes, 27 boulevard Gustave Chancel, horaires pôle santé Antibes, accès transport Antibes médecin, parking Antibes cabinet, médecin du sport ouvert samedi Antibes',
      canonical: BASE + '/contact',
    },
    equipe: {
      title: 'Notre Équipe à Antibes — Médecin du Sport, Médecins, Kinés & Ostéo | ' + SITE,
      description: "Rencontrez l'équipe du Pôle Santé Antibes : Dr Jalliffier-Verne médecin du sport, Dr Aurora Toma médecin généraliste, Dr Tsiry Andriamananaivo chirurgien orthopédique du genou, kinésithérapeutes Antoine Basset, Elouan Poisson, Anaïs Creignou, Alexandre Redon, Klaudia Duda, ostéopathe Jacques Campana, infirmières Julie Faleiro et Christine Da Ponte.",
      keywords: 'équipe médicale Antibes, médecins Antibes, médecin du sport Antibes équipe, kinésithérapeutes Antibes, ostéopathe Antibes, praticiens de santé Antibes, Dr Jalliffier-Verne, Dr Aurora Toma Antibes, Antoine Basset kiné, Dr Tsiry Andriamananaivo chirurgien genou',
      canonical: BASE + '/equipe',
    },
    mentions: {
      title: 'Mentions Légales | ' + SITE,
      description: 'Mentions légales du Pôle Santé Antibes Centre.',
      keywords: '',
      canonical: BASE + '/mentions-legales',
      noindex: true,
    },
    cgu: {
      title: "CGU — Conditions Générales d'Utilisation | " + SITE,
      description: "Conditions Générales d'Utilisation du site Pôle Santé Antibes Centre.",
      keywords: '',
      canonical: BASE + '/cgu',
      noindex: true,
    },
    donnees: {
      title: 'Politique de Protection des Données | ' + SITE,
      description: 'Politique de protection des données personnelles (RGPD) — Pôle Santé Antibes Centre.',
      keywords: '',
      canonical: BASE + '/donnees-personnelles',
      noindex: true,
    },
  };

  window.SEO_URL_MAP = {
    accueil: '/', kine: '/kinesitherapeutes', medecins: '/medecins',
    'medecine-sport': '/medecine-du-sport',
    osteo: '/osteopathes', equipements: '/equipements', recrutement: '/recrutement',
    contact: '/contact', equipe: '/equipe',
    mentions: '/mentions-legales', cgu: '/cgu', donnees: '/donnees-personnelles',
  };
  window.SEO_PAGE_FROM_URL = {};
  Object.keys(window.SEO_URL_MAP).forEach(function (k) {
    window.SEO_PAGE_FROM_URL[window.SEO_URL_MAP[k]] = k;
  });

  function setMeta(nameAttr, nameVal, content) {
    var el = document.querySelector('meta[' + nameAttr + '="' + nameVal + '"]');
    if (!el) { el = document.createElement('meta'); el.setAttribute(nameAttr, nameVal); document.head.appendChild(el); }
    el.setAttribute('content', content);
  }
  function setCanonical(href) {
    var el = document.querySelector('link[rel="canonical"]');
    if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
    el.href = href;
  }

  // Schema.org JSON-LD additionnel par page (BreadcrumbList toujours, schémas spécifiques en plus)
  function setExtraSchema(pageId) {
    var existing = document.getElementById('seo-extra-schema');
    if (existing) existing.parentNode.removeChild(existing);

    var labels = {
      accueil: 'Accueil',
      'medecine-sport': 'Médecin du Sport',
      medecins: 'Médecins',
      kine: 'Kinésithérapeutes',
      osteo: 'Ostéopathes',
      equipements: 'Équipements',
      equipe: 'Notre Équipe',
      recrutement: 'Recrutement',
      contact: 'Contact'
    };
    var graph = [];

    // BreadcrumbList sur toutes les pages indexables (pas accueil seul)
    if (pageId !== 'accueil' && labels[pageId] && window.SEO_PAGES[pageId] && !window.SEO_PAGES[pageId].noindex) {
      graph.push({
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE + "/" },
          { "@type": "ListItem", "position": 2, "name": labels[pageId], "item": window.SEO_PAGES[pageId].canonical }
        ]
      });
    }

    // Page d'accueil : WebSite + SearchAction (si jamais ajout d'une recherche), et MedicalClinic enrichi
    if (pageId === 'accueil') {
      graph.push({
        "@type": "WebSite",
        "@id": BASE + "#website",
        "url": BASE + "/",
        "name": SITE,
        "inLanguage": "fr-FR",
        "publisher": { "@id": BASE + "#organization" }
      });
    }

    // Page médecine du sport : tout l'arsenal
    if (pageId === 'medecine-sport') {
      graph.push({
        "@type": "MedicalBusiness",
        "@id": BASE + "/medecine-du-sport#business",
        "name": "Médecine du Sport — Pôle Santé Antibes Centre",
        "alternateName": ["Cabinet de médecine du sport Antibes","Médecin du sport Antibes 06600"],
        "url": BASE + "/medecine-du-sport",
        "telephone": "+33422328810",
        "email": "secretariat.polesanteantibes@gmail.com",
        "priceRange": "€€",
        "image": BASE + "/assets/logo.png",
        "logo": BASE + "/assets/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 Boulevard Gustave Chancel",
          "addressLocality": "Antibes",
          "postalCode": "06600",
          "addressRegion": "Alpes-Maritimes",
          "addressCountry": "FR"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 43.5808, "longitude": 7.1239 },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "20:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "18:00" }
        ],
        "medicalSpecialty": "SportsMedicine",
        "areaServed": [
          { "@type": "City", "name": "Antibes" },
          { "@type": "City", "name": "Juan-les-Pins" },
          { "@type": "City", "name": "Vallauris" },
          { "@type": "City", "name": "Biot" },
          { "@type": "City", "name": "Cannes" },
          { "@type": "City", "name": "Le Cannet" },
          { "@type": "City", "name": "Mougins" },
          { "@type": "City", "name": "Cagnes-sur-Mer" },
          { "@type": "City", "name": "Villeneuve-Loubet" },
          { "@type": "City", "name": "Nice" },
          { "@type": "AdministrativeArea", "name": "Alpes-Maritimes" },
          { "@type": "AdministrativeArea", "name": "Côte d'Azur" }
        ],
        "availableService": [
          { "@type": "MedicalProcedure", "name": "Consultation de médecine du sport", "procedureType": "https://schema.org/DiagnosticProcedure" },
          { "@type": "MedicalProcedure", "name": "Certificat médical d'aptitude à la pratique sportive" },
          { "@type": "MedicalProcedure", "name": "Diagnostic et traitement de la traumatologie sportive" },
          { "@type": "MedicalProcedure", "name": "Suivi médical du sportif amateur et professionnel" },
          { "@type": "MedicalProcedure", "name": "Prévention des blessures sportives" },
          { "@type": "MedicalProcedure", "name": "Traitement des tendinopathies (Achille, rotulienne, coiffe des rotateurs)" },
          { "@type": "MedicalProcedure", "name": "Prise en charge des entorses de cheville et de genou" },
          { "@type": "MedicalProcedure", "name": "Diagnostic des lésions musculaires (déchirure, élongation, claquage)" },
          { "@type": "MedicalProcedure", "name": "Reprise progressive du sport après blessure ou chirurgie" },
          { "@type": "MedicalProcedure", "name": "Bilan médical avant compétition" }
        ]
      });

      graph.push({
        "@type": "Physician",
        "@id": BASE + "/medecine-du-sport#physician",
        "name": "Dr Jalliffier-Verne",
        "jobTitle": "Médecin du Sport",
        "medicalSpecialty": "SportsMedicine",
        "worksFor": { "@id": BASE + "#organization" },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 Boulevard Gustave Chancel",
          "addressLocality": "Antibes",
          "postalCode": "06600",
          "addressCountry": "FR"
        },
        "availableService": [
          "Consultation de médecine du sport",
          "Certificat médical d'aptitude sportive",
          "Traumatologie sportive",
          "Suivi du sportif"
        ]
      });

      // HowTo : très efficace pour SERP enrichi
      graph.push({
        "@type": "HowTo",
        "name": "Comment obtenir un certificat médical de sport à Antibes",
        "description": "Étapes pour obtenir un certificat médical d'aptitude à la pratique sportive avec le Dr Jalliffier-Verne au Pôle Santé Antibes Centre.",
        "totalTime": "PT30M",
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "30" },
        "supply": [
          { "@type": "HowToSupply", "name": "Carte Vitale" },
          { "@type": "HowToSupply", "name": "Carte de mutuelle" },
          { "@type": "HowToSupply", "name": "Antécédents médicaux et sportifs" }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Prendre rendez-vous en ligne",
            "text": "Réservez votre créneau directement sur Doctolib pour une consultation avec le Dr Jalliffier-Verne, médecin du sport à Antibes.",
            "url": BASE + "/medecine-du-sport"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Examen clinique complet",
            "text": "Le médecin réalise un examen clinique : auscultation cardio-pulmonaire, examen musculo-squelettique, évaluation articulaire et interrogatoire sur vos antécédents et votre pratique sportive."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Évaluation cardio-vasculaire",
            "text": "Selon votre âge, votre niveau et la discipline pratiquée, des examens complémentaires (ECG, épreuve d'effort) peuvent être recommandés avant la délivrance du certificat."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Délivrance du certificat",
            "text": "Si aucune contre-indication n'est détectée, le certificat médical d'aptitude à la pratique sportive vous est remis le jour même, valable pour les fédérations, clubs ou compétitions."
          }
        ]
      });

      // Service schema spécifique
      graph.push({
        "@type": "Service",
        "@id": BASE + "/medecine-du-sport#service",
        "name": "Médecine du sport à Antibes",
        "serviceType": "Médecine du sport",
        "provider": { "@id": BASE + "/medecine-du-sport#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Alpes-Maritimes" },
        "audience": {
          "@type": "Audience",
          "audienceType": "Sportifs amateurs et professionnels, coureurs, cyclistes, traileurs, triathlètes, joueurs de tennis, footballeurs, rugbymen, nageurs, pratiquants de CrossFit, musculation, escalade, sports de combat"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Prestations de médecine du sport",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consultation médecine du sport" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Certificat médical d'aptitude sportive" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diagnostic blessure sportive" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Suivi du sportif de haut niveau" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bilan avant compétition" } }
          ]
        }
      });

      // FAQ enrichie
      graph.push({
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Qu'est-ce qu'un médecin du sport ?", "acceptedAnswer": { "@type": "Answer", "text": "Le médecin du sport est un médecin spécialisé dans la prévention, le diagnostic et le traitement des pathologies liées à la pratique sportive : entorses, tendinopathies, déchirures musculaires, douleurs articulaires, lésions ligamentaires, fractures de fatigue. Il accompagne les sportifs amateurs comme professionnels dans leur retour à la performance." } },
          { "@type": "Question", "name": "Quand consulter un médecin du sport à Antibes ?", "acceptedAnswer": { "@type": "Answer", "text": "Vous pouvez consulter le médecin du sport au Pôle Santé Antibes Centre pour un certificat médical d'aptitude sportive, une douleur survenue après ou pendant le sport, une blessure sportive aiguë (entorse, contracture, déchirure), une douleur chronique liée à votre pratique (tendinite, périostite), un suivi de reprise du sport après opération, un bilan avant compétition, ou un conseil sur l'entraînement et la prévention des blessures." } },
          { "@type": "Question", "name": "Comment obtenir un certificat médical de sport à Antibes ?", "acceptedAnswer": { "@type": "Answer", "text": "Le Dr Jalliffier-Verne, médecin du sport au Pôle Santé Antibes Centre, délivre les certificats médicaux d'aptitude à la pratique sportive (loisir et compétition) après examen clinique complet. Prenez rendez-vous directement en ligne sur Doctolib." } },
          { "@type": "Question", "name": "Le médecin du sport traite-t-il les sportifs amateurs ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. La médecine du sport s'adresse à tous les pratiquants : du marcheur occasionnel au sportif de haut niveau, en passant par les coureurs amateurs, cyclistes, joueurs de tennis, footballeurs, nageurs, traileurs, triathlètes, pratiquants de musculation et CrossFit. Le médecin adapte son approche à votre niveau et vos objectifs." } },
          { "@type": "Question", "name": "Quelles blessures sportives sont prises en charge à Antibes ?", "acceptedAnswer": { "@type": "Answer", "text": "Le Pôle Santé Antibes Centre prend en charge l'ensemble des pathologies sportives : entorses (cheville, genou, poignet), tendinopathies (Achille, rotulienne, épaule, coude), déchirures et élongations musculaires, contractures, lombalgies sportives, périostites tibiales, fractures de fatigue, syndrome rotulien, conflits articulaires, douleurs chroniques. Une équipe pluridisciplinaire (médecin du sport, chirurgien orthopédique, kinés, ostéopathes) assure le parcours de soins complet." } },
          { "@type": "Question", "name": "Combien coûte une consultation de médecine du sport ?", "acceptedAnswer": { "@type": "Answer", "text": "La consultation de médecine du sport est conventionnée par l'Assurance Maladie au tarif prévu par la convention. Une partie peut être prise en charge par votre mutuelle. Le tarif exact et les modalités de remboursement vous seront précisés lors de la prise de rendez-vous sur Doctolib." } },
          { "@type": "Question", "name": "Quelle est la différence entre un médecin du sport et un médecin généraliste ?", "acceptedAnswer": { "@type": "Answer", "text": "Le médecin du sport possède une formation spécifique en pathologies de l'appareil locomoteur, en physiologie de l'effort, en traumatologie sportive et en accompagnement de la performance. Il est particulièrement formé pour diagnostiquer les blessures sportives, comprendre leurs mécanismes et coordonner la rééducation." } },
          { "@type": "Question", "name": "Peut-on consulter un médecin du sport en urgence à Antibes ?", "acceptedAnswer": { "@type": "Answer", "text": "Le cabinet propose des créneaux rapprochés pour les blessures sportives récentes nécessitant une prise en charge précoce. Vérifiez les disponibilités sur Doctolib ou appelez le 04 22 32 88 10." } },
          { "@type": "Question", "name": "Le cabinet de médecine du sport reçoit-il des patients de Cannes, Nice, Juan-les-Pins ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, situé en plein cœur d'Antibes (06600), au 27 Boulevard Gustave Chancel, le Pôle Santé reçoit des patients de toute la Côte d'Azur : Antibes, Juan-les-Pins, Vallauris, Biot, Cannes, Le Cannet, Mougins, Cagnes-sur-Mer, Villeneuve-Loubet et Nice. Accès facile en voiture (parking EFFIA, 1h offerte) ou en bus (lignes A, 08, 16, 620 — arrêt Dugommier)." } }
        ]
      });
    }

    // Page médecins : ajout MedicalClinic + Physician pour chaque médecin
    if (pageId === 'medecins') {
      graph.push({
        "@type": "MedicalClinic",
        "@id": BASE + "/medecins#clinic",
        "name": "Pôle Santé Antibes Centre — Médecins",
        "url": BASE + "/medecins",
        "telephone": "+33422328810",
        "address": { "@type": "PostalAddress", "streetAddress": "27 Boulevard Gustave Chancel", "addressLocality": "Antibes", "postalCode": "06600", "addressCountry": "FR" },
        "medicalSpecialty": ["GeneralPractice","SportsMedicine","Orthopedic"],
        "physician": [
          { "@type": "Physician", "name": "Dr Aurora Toma", "medicalSpecialty": "GeneralPractice" },
          { "@type": "Physician", "name": "Dr Tsiry Andriamananaivo", "medicalSpecialty": "Orthopedic" },
          { "@type": "Physician", "name": "Dr Jalliffier-Verne", "medicalSpecialty": "SportsMedicine" }
        ]
      });
    }

    if (graph.length > 0) {
      var schema = { "@context": "https://schema.org", "@graph": graph };
      var s = document.createElement('script');
      s.id = 'seo-extra-schema';
      s.type = 'application/ld+json';
      s.text = JSON.stringify(schema);
      document.head.appendChild(s);
    }
  }

  window.updatePageSEO = function (pageId) {
    var seo = window.SEO_PAGES[pageId] || window.SEO_PAGES.accueil;
    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords || '');
    setMeta('name', 'robots', seo.noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', seo.canonical);
    setMeta('name', 'twitter:title', seo.title);
    setMeta('name', 'twitter:description', seo.description);
    if (seo.canonical) setCanonical(seo.canonical);
    setExtraSchema(pageId);
  };

  var initialPage = window.SEO_PAGE_FROM_URL[location.pathname] || 'accueil';
  window.updatePageSEO(initialPage);
})();
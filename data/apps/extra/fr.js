// Français — pages des nouvelles apps. Les champs absents héritent de l'anglais.
export default {
  "electrician-calculator": {
    head: {
      title: "Calculatrice d'électricien pour iPhone : chute de tension, section, conduit et boîte (hors ligne)",
      description:
        "Huit calculatrices d'électricien fondées sur le NEC dans une seule app iPhone hors ligne : chute de tension, section avec déclassement, remplissage de conduit et de boîte, charge et disjoncteur, loi d'Ohm, code des résistances et tableaux. Achat unique, sans abonnement, 19 langues.",
      keywords:
        "calculatrice électricien, calcul chute de tension, calcul section de câble, calcul ampacité, remplissage de conduit, remplissage de boîte, calcul disjoncteur, loi d'ohm, calculatrice nec, calculatrice électrique iphone, awg",
      ogTitle: "Electrician Calculator Toolkit : chute de tension, section, conduit et boîte sur iPhone",
      ogDescription: "Huit calculatrices de chantier fondées sur les tableaux du NEC 2023, entièrement hors ligne. Achat unique, sans abonnement.",
    },
    h1: "Une calculatrice d'électricien pour le chantier : chute de tension, section, remplissage de conduit et de boîte, hors ligne",
    answer:
      "Electrician Calculator Toolkit réunit huit calculatrices fondées sur le NEC américain sur votre iPhone : chute de tension (monophasé, triphasé, CC), section de câble avec la règle des 125 % et le déclassement selon la température et le nombre de conducteurs, remplissage de conduit pour EMT, PVC, RMC et IMC, remplissage de boîte selon 314.16, charge et disjoncteur à partir des watts, loi d'Ohm, code couleur des résistances et les tableaux de référence qui les sous-tendent. Chaque résultat indique le tableau dont il provient. L'app fonctionne sans réseau, sans compte et sans abonnement, en 19 langues.",
    quickFacts: [
      ["Prix", "Achat unique. Sans abonnement"],
      ["Outils", "Chute de tension, section, conduit, boîte, charge et disjoncteur, loi d'Ohm, résistances, tableaux"],
      ["Base", "Tableaux du NEC 2023 (NFPA 70)"],
      ["Confidentialité", "Hors ligne, sans compte, sans statistiques"],
    ],
    screenshotsTitle: "Ce que vous obtenez : un résultat, le tableau dont il vient et la plus petite section qui passe",
    screenshots: [
      { alt: "Calculatrice de chute de tension sur iPhone affichant la chute en volts et en pourcentage et la section minimale pour 3 %", caption: "Chute de tension avec la section minimale pour 3 %" },
      { alt: "Calculatrice de section appliquant le déclassement selon la température ambiante et le nombre de conducteurs", caption: "Section avec déclassement intégré" },
      { alt: "Calculatrice de remplissage de conduit comparant la taille minimale en EMT, PVC, RMC et IMC", caption: "Remplissage de conduit pour cinq types de canalisation" },
    ],
    howTo: {
      title: "Dimensionner un circuit en moins d'une minute",
      intro: "Sur le chantier, ce sont presque toujours les trois mêmes questions : la chute de tension passe-t-elle, quel câble tirer et quel conduit lui faut-il. Voici l'enchaînement.",
      steps: [
        { name: "Charge et disjoncteur", text: "Saisissez les watts, la tension et le nombre de phases. Marquez la charge continue si elle dure trois heures ou plus. Vous obtenez le courant de charge, le courant de dimensionnement à 125 %, le disjoncteur normalisé suivant selon 240.6(A) et le conducteur minimal à 75 °C." },
        { name: "Section de câble", text: "Ouvrez Section avec ce courant, réglez la température des bornes, la température ambiante et le nombre de conducteurs actifs dans la canalisation. L'app applique 310.15(B)(1) et 310.15(C)(1) et affiche l'ampacité corrigée de chaque section autour de la réponse." },
        { name: "Chute de tension", text: "Saisissez la longueur aller. Si la chute dépasse 3 %, l'app affiche déjà le plus petit conducteur qui passe. Passez à l'aluminium ou ajoutez des jeux en parallèle pour comparer." },
        { name: "Remplissage de conduit", text: "Ajoutez les conducteurs (section, isolant, quantité) et lisez la taille minimale pour EMT, PVC Schedule 40 et 80, RMC et IMC côte à côte." },
      ],
    },
    featuresTitle: "Huit outils, un geste chacun",
    features: [
      { title: "Chute de tension", text: "ΔU = 2·K·I·L ÷ CM en monophasé et CC, 1,732 en triphasé ; K = 12,9 cuivre / 21,2 aluminium. Pieds ou mètres, du #14 AWG au 750 kcmil, jeux en parallèle et la plus petite section sous 3 %." },
      { title: "Section de câble (ampacité)", text: "Tableau 310.16 pour le cuivre et l'aluminium à 60/75/90 °C, règle des 125 % pour les charges continues, correction d'ambiante, ajustement selon le nombre de conducteurs et limites 240.4(D) des petites sections." },
      { title: "Remplissage de conduit", text: "Chapitre 9, tableaux 1, 4 et 5 : tout mélange de THHN/THWN, XHHW et THW, taille minimale par type de canalisation, ou le nombre maximal d'un conducteur dans un conduit donné." },
      { title: "Remplissage de boîte", text: "Volumes selon 314.16(B) pour les conducteurs, serre-câbles, supports, étriers d'appareils et terres, avec vérification par rapport à votre boîte." },
      { title: "Charge et disjoncteur, loi d'Ohm, résistances", text: "Des watts aux ampères, au disjoncteur et au câble sur un seul écran ; deux valeurs parmi U, I, R et P ; décodage des résistances à quatre et cinq anneaux." },
      { title: "Tableaux du code", text: "Ampacité, calibres de disjoncteurs, facteurs de déclassement, volumes de boîtes et couleurs des fils américaines et CEI, toujours à portée de geste." },
    ],
    intentsTitle: "Questions auxquelles cette app répond",
    intents: [
      { h: "Comment calculer la chute de tension d'un circuit terminal ?", p: "Saisissez la tension, le courant, la section, le matériau et la longueur aller. L'app renvoie la chute en volts et en pourcentage et la tension à la charge, et signale tout dépassement des repères de 3 % (terminal) et 5 % (total) de 210.19(A)." },
      { h: "Quelle section pour un circuit de 50 ampères ?", p: "Pour une charge continue de 40 A (50 A requis) en cuivre à 75 °C, le tableau 310.16 donne du #8 AWG. S'il fait chaud ou si plus de trois conducteurs actifs partagent la canalisation, l'app applique le déclassement et monte d'une section si nécessaire." },
      { h: "Combien de #12 THHN dans un EMT de 3/4 de pouce ?", p: "Seize, selon le chapitre 9 : tableau 1 (40 %), tableau 4 (surface de l'EMT) et tableau 5 (surface du THHN). Le mode Conducteurs max. répond pour toute section, tout isolant et toute canalisation." },
      { h: "L'app a-t-elle besoin d'internet ou d'un compte ?", p: "Non. Tous les tableaux sont dans l'app ; rien n'est téléchargé ni envoyé. Ni compte, ni statistiques, ni publicité, ni abonnement." },
    ],
    compare: {
      title: "Electrician Calculator Toolkit face au livre du code et aux calculatrices gratuites à fonction unique",
      intro: "Le livre fait autorité mais se feuillette mal avec des gants. Les calculatrices gratuites ne couvrent qu'un calcul chacune et se financent en général par la publicité. Cette app réunit les huit calculs du quotidien avec la référence du tableau sur chaque résultat.",
      columns: ["", "Electrician Calculator Toolkit", "Livre du NEC", "Apps gratuites à fonction unique"],
      rows: [
        ["Chute, section, conduit et boîte au même endroit", "✓ Huit outils", "✓ Tous les tableaux, calcul manuel", "✗ Un outil par app"],
        ["Déclassement appliqué automatiquement", "✓ Ambiante + nombre de conducteurs", "✗ Manuel", "Variable"],
        ["Indique le tableau d'origine du résultat", "✓ Sur chaque écran", "✓ C'est le tableau", "✗ Rarement"],
        ["Fonctionne hors ligne", "✓ Oui", "✓ Oui", "✗ Nécessite souvent des pubs"],
        ["Langues", "19", "Anglais", "Généralement une"],
        ["Prix", "Achat unique", "Prix du livre", "Gratuit avec publicité"],
      ],
    },
    faqs: [
      { q: "De quelle édition du code viennent les tableaux ?", a: "De l'édition 2023 de la NFPA 70, le National Electrical Code. Votre juridiction peut appliquer une édition antérieure ou des amendements locaux ; considérez les résultats comme une aide au calcul et vérifiez avec le code adopté et votre inspecteur." },
      { q: "La section inclut-elle le déclassement ?", a: "Oui : la règle des 125 % pour les charges continues, la correction de température ambiante de 310.15(B)(1), l'ajustement pour plus de trois conducteurs actifs de 310.15(C)(1) et les limites de 240.4(D) pour les #14, #12 et #10." },
      { q: "Quels conduits et isolants sont couverts ?", a: "EMT, PVC Schedule 40, PVC Schedule 80, RMC et IMC, avec les surfaces THHN/THWN, XHHW et THW du tableau 5 du chapitre 9." },
      { q: "Puis-je utiliser des unités métriques ?", a: "La longueur se saisit en mètres et la température ambiante en °C ou °F. Les sections suivent l'AWG/kcmil, comme les tableaux." },
      { q: "Est-ce un abonnement ?", a: "Non. C'est un achat unique sans achats intégrés." },
      { q: "L'app est-elle affiliée à la NFPA ?", a: "Non. NEC et National Electrical Code sont des marques déposées de la National Fire Protection Association, qui ne parraine ni n'approuve cette app." },
      { q: "Existe-t-il une version Android ?", a: "Pas encore. L'app iPhone sort en premier ; une version Android est prévue et cette page renverra vers Google Play dès sa mise en ligne." },
    ],
    related: [
      { blurb: "Photographiez un ticket, indiquez la durée de garantie, soyez prévenu avant l'échéance. Hors ligne, achat unique." },
      { blurb: "Comparez le prix à l'unité, ajoutez la taxe, appliquez une remise. Gratuit." },
      { blurb: "Notez café et thé, voyez ce qu'il reste dans votre organisme et fixez une heure limite avant le coucher. Gratuit." },
    ],
    disclaimer:
      "Electrician Calculator Toolkit est une aide au calcul et ne remplace ni le code, ni le jugement professionnel, ni l'autorité compétente. NEC et National Electrical Code sont des marques déposées de la National Fire Protection Association, qui ne parraine ni n'approuve cette app.",
  },
  "warranty-tracker": {
    head: {
      title: "Application de suivi des garanties pour iPhone : photos de tickets, rappels d'expiration, hors ligne",
      description: "Suivez toutes vos garanties sur iPhone : photographiez le ticket, indiquez la durée de garantie, recevez un rappel avant l'expiration. Hors ligne, sans compte, sans abonnement. Achat unique, 19 langues.",
      keywords: "application garantie, suivi garantie iphone, application ticket de caisse, garder ses tickets de caisse, rappel garantie, gestion des garanties, application reçus hors ligne, garantie électroménager app, organiseur de garanties",
      ogTitle: "Garanties & Tickets de caisse : chaque garantie avec son ticket, d'un coup d'œil",
      ogDescription: "Photographiez le ticket, indiquez la durée de garantie, soyez prévenu avant l'échéance. Hors ligne, achat unique, sans compte.",
    },
    h1: "Un suivi des garanties qui conserve le ticket et vous prévient avant l'expiration, hors ligne",
    answer: "Garanties & Tickets de caisse enregistre chaque produit acheté avec la photo du ticket, la date d'achat, le prix, le numéro de série et la durée de garantie, puis vous prévient avant la fin de la garantie. Vous voyez combien d'articles sont actifs, bientôt expirés ou expirés, et la valeur totale encore couverte. Tout reste sur votre iPhone : ni compte, ni cloud, ni abonnement, ni publicité. Achat unique, disponible en 19 langues.",
    quickFacts: [
      ["Prix", "Achat unique. Sans abonnement"],
      ["Enregistre", "Photos du ticket et du produit, date d'achat, prix, magasin, numéro de série, notes"],
      ["Rappels", "Notifications locales 90, 60, 30, 14, 7 ou 1 jour avant l'expiration"],
      ["Confidentialité", "Hors ligne, sans compte, sans statistiques, export CSV"],
    ],
    screenshotsTitle: "Ce que vous obtenez : toutes les garanties d'un coup d'œil, le ticket joint, un rappel avant qu'il ne soit trop tard",
    screenshots: [
      { alt: "Écran d'accueil du suivi des garanties sur iPhone avec le nombre d'articles actifs, bientôt expirés et expirés et une liste de produits avec les jours restants", caption: "Toutes vos garanties, en un coup d'œil" },
      { alt: "Fiche d'un article avec photo du ticket, date d'achat, prix, numéro de série et compte à rebours de la garantie", caption: "Le ticket, pile quand il vous faut" },
      { alt: "Formulaire d'ajout avec nom, magasin, prix, date d'achat et boutons de durée de garantie", caption: "Ajouté en 20 secondes" },
      { alt: "Réglages des rappels avec des délais de 30 et 7 jours et l'heure de la journée", caption: "Prévenu avant l'expiration" },
    ],
    howTo: {
      title: "Comment enregistrer une garantie en moins d'une minute",
      intro: "Le meilleur moment pour sauvegarder un ticket, c'est le jour où on vous le donne. Le parcours est conçu pour ça : le téléphone dans une main, le ticket dans l'autre.",
      steps: [
        { name: "Ajoutez l'achat", text: "Touchez +, saisissez le nom du produit et le magasin, le prix et la date d'achat. Choisissez une catégorie pour garder une liste lisible." },
        { name: "Indiquez la durée de garantie", text: "Touchez 6 mois, 1, 2, 3 ou 5 ans, ou saisissez n'importe quel nombre de mois. Ajoutez une extension de garantie si vous en avez une ; l'application affiche la couverture totale et la date exacte d'expiration." },
        { name: "Photographiez le ticket", text: "Prenez en photo le ticket et, si vous voulez, le produit et son étiquette de numéro de série. Les photos restent attachées à l'article en taille réelle." },
        { name: "Laissez les rappels travailler", text: "Par défaut, vous êtes prévenu 30 et 7 jours avant l'expiration à 9 h. Modifiez les délais et l'heure dans les Réglages ; tout passe par des notifications locales, rien n'est envoyé." },
      ],
    },
    featuresTitle: "Conçue pour le jour où quelque chose tombe en panne",
    features: [
      { icon: "🧾", title: "Photos de tickets", text: "Appareil photo ou photothèque, plusieurs photos par article, visionneuse en pleine résolution avec zoom. Montrez-le au SAV au lieu de fouiller vos e-mails." },
      { icon: "⏳", title: "Compte à rebours", text: "Jours restants, barre de progression et statut (active, bientôt expirée, expirée) sur chaque article. Triez par ce qui expire en premier." },
      { icon: "🔔", title: "Rappels", text: "N'importe quelle combinaison de 90, 60, 30, 14, 7 et 1 jour avant, plus l'heure de la journée. Notifications locales uniquement." },
      { icon: "➕", title: "Extensions de garantie", text: "Garantie constructeur plus extension du magasin ou de la carte bancaire, additionnées en une seule période de couverture." },
      { icon: "📊", title: "Vue d'ensemble", text: "Nombre d'articles actifs, bientôt expirés et expirés, et valeur totale encore sous garantie. Filtrez par statut, cherchez par nom, magasin ou numéro de série." },
      { icon: "📤", title: "Export CSV", text: "Exportez tous les articles en CSV à tout moment, pour un tableur, une déclaration d'assurance ou un passage à une autre application. Vos données ne sont jamais enfermées." },
    ],
    intentsTitle: "Les questions auxquelles cette application répond",
    intents: [
      { h: "Comment suivre les garanties de tout ce que je possède ?", p: "Ajoutez chaque achat une fois, avec la photo du ticket et la durée de garantie. L'écran d'accueil liste tout par ordre d'expiration, avec le nombre d'articles actifs, bientôt expirés et expirés et la valeur totale couverte." },
      { h: "Où conserver les tickets pour une réclamation de garantie ?", p: "Attachés à l'article, sur votre téléphone. Photographiez le ticket le jour de l'achat ; quand quelque chose casse, ouvrez l'article et montrez le ticket, la date d'achat et le numéro de série au comptoir." },
      { h: "Comment être prévenu avant qu'une garantie expire ?", p: "Activez les rappels dans les Réglages et choisissez les délais (90, 60, 30, 14, 7 ou 1 jour) et l'heure. L'application programme des notifications locales pour chaque article ; rien ne quitte l'appareil." },
      { h: "Puis-je suivre une extension de garantie ?", p: "Oui. Chaque article a une garantie constructeur et une extension facultative ; l'application les additionne en une seule période de couverture et une seule date d'expiration." },
      { h: "Faut-il un compte ou Internet ?", p: "Non. Elle fonctionne hors ligne, sans compte, sans synchronisation cloud et sans statistiques. Incluez l'application dans la sauvegarde de votre iPhone et exportez en CSV quand vous voulez une copie." },
    ],
    compare: {
      title: "Garanties & Tickets de caisse face à l'album photo et aux applications de reçus par abonnement",
      intro: "La plupart des gens gardent leurs tickets dans la pellicule ou un dossier e-mail et se fient à leur mémoire pour la date de garantie. Les applications de reçus par abonnement envoient tout sur un serveur et facturent chaque mois. Cette application garde le ticket avec la date de garantie, sur l'appareil, pour un achat unique.",
      columns: ["", "Garanties & Tickets de caisse", "Album photo / e-mail", "Apps de reçus par abonnement"],
      rows: [
        ["Ticket attaché au produit et à sa date de garantie", "✓", "✗ Séparés", "✓"],
        ["Rappel avant expiration", "✓ Jusqu'à six délais", "✗", "Parfois"],
        ["Extension de garantie", "✓", "✗", "Variable"],
        ["Hors ligne, rien n'est envoyé", "✓", "✓", "✗ Cloud"],
        ["Exporter vos données", "✓ CSV", "✗", "Variable"],
        ["Prix", "Achat unique", "Gratuit", "Mensuel ou annuel"],
      ],
    },
    faqs: [
      { q: "Où sont stockées mes photos et mes données ?", a: "Dans l'espace propre à l'application sur votre iPhone. Rien n'est envoyé. Si l'application fait partie de votre sauvegarde iPhone ou iCloud, elle est restaurée avec le reste du téléphone." },
      { q: "Dois-je autoriser l'accès à l'appareil photo ou aux photos ?", a: "Seulement si vous voulez ajouter des photos. L'autorisation caméra est demandée la première fois que vous touchez Prendre une photo ; choisir dans la photothèque utilise le sélecteur d'Apple et ne demande aucune autorisation." },
      { q: "Puis-je changer les horaires des rappels ?", a: "Oui. Les Réglages permettent de choisir n'importe quelle combinaison de 90, 60, 30, 14, 7 et 1 jour avant l'expiration et l'heure de la journée. Les rappels se mettent à jour automatiquement quand vous modifiez un article." },
      { q: "Comment passer à un nouvel iPhone ?", a: "Restaurez le nouveau téléphone depuis une sauvegarde et l'application arrive avec ses données. Vous pouvez aussi exporter en CSV comme copie supplémentaire. L'achat est lié à votre compte Apple, vous ne payez pas deux fois." },
      { q: "Synchronise-t-elle plusieurs appareils ?", a: "Pas dans cette version. C'est une application mono-appareil, entièrement hors ligne, par conception." },
      { q: "Est-ce un abonnement ?", a: "Non. Achat unique, sans achats intégrés, sans publicité." },
      { q: "Quelles langues sont prises en charge ?", a: "Anglais, espagnol, allemand, français, italien, portugais, néerlandais, polonais, russe, ukrainien, turc, arabe, hindi, indonésien, vietnamien, thaï, japonais, coréen et chinois simplifié. Vous pouvez forcer une langue dans les Réglages." },
      { q: "Existe-t-il une version Android ?", a: "Pas encore. L'application iPhone sort en premier ; une version Android est prévue et cette page renverra vers Google Play dès qu'elle sera disponible." },
    ],
    related: [
      { name: "Electrician Calculator Toolkit", href: "/apps/electrician-calculator", blurb: "Chute de tension, section, remplissage de conduit et de boîte d'après les tables NEC 2023, hors ligne. Achat unique." },
      { name: "Unit Price Calculator & Tax", href: "/apps/unit-price-calculator", blurb: "Comparez le prix à l'unité, ajoutez la taxe, appliquez une remise. Gratuit." },
      { name: "Caffeine Tracker: Curfew", href: "/apps/caffeine-tracker", blurb: "Notez café et thé, voyez ce qu'il reste dans votre organisme et obtenez une heure limite avant le coucher. Gratuit." },
    ],
    disclaimer: "Garanties & Tickets de caisse est un outil personnel de suivi. Les conditions de garantie sont fixées par le fabricant ou le vendeur ; vérifiez toujours les conditions d'origine avant toute réclamation.",
  },
  "unit-price-calculator": {
    "head": {
      "title": "Calculatrice de prix au kilo pour iPhone : prix au kg, au litre, à la pièce, remises, TVA, budget courses",
      "description": "Calculatrice de courses gratuite pour iPhone : comparez le prix au kg, à la livre, au litre ou à la pièce entre paquets, cumulez remises et bons, ajoutez ou retirez la TVA, gardez le panier dans le budget et partagez l'addition. Hors ligne, sans compte, 19 langues.",
      "keywords": "calculatrice prix au kilo, prix unitaire calculatrice, comparer prix supermarché app, calculatrice courses, calculatrice remise, calcul pourcentage, calculatrice tva, calcul ht ttc, calculatrice panier, partager addition app, calculatrice pourboire",
      "ogTitle": "Unit Price Calculator & Tax : quel paquet est vraiment moins cher ?",
      "ogDescription": "Comparez le prix au kg, à la livre ou au litre, cumulez les remises, ajoutez la TVA, gardez le panier dans le budget, partagez l'addition. App iPhone gratuite, hors ligne."
    },
    "h1": "Une calculatrice de prix unitaire pour le rayon du supermarché : prix au kg ou au litre, remises cumulées, TVA, budget panier et partage d'addition",
    "answer": "Unit Price Calculator & Tax est une calculatrice de courses gratuite pour iPhone. Saisissez le prix et la taille de chaque paquet : l'app ramène tout à une même base (au kg, à la livre, au litre, au fl oz ou à la pièce) et marque le meilleur prix. Elle cumule aussi les remises comme les magasins les appliquent, ajoute ou retire la TVA, tient un total de panier face à un budget et partage une addition avec pourboire. Tout fonctionne hors ligne, sans compte. La version gratuite affiche une petite bannière ; un achat unique la supprime.",
    "quickFacts": [
      [
        "Prix",
        "Gratuit. Suppression des pubs en achat unique facultatif, sans abonnement"
      ],
      [
        "Outils",
        "Comparaison de prix unitaire, remise, TVA, total du panier avec budget, partage et pourboire"
      ],
      [
        "Unités",
        "g, kg, oz, lb, ml, l, fl oz, gal, pièces, paquets, multipacks"
      ],
      [
        "Confidentialité",
        "Hors ligne, sans compte ; les listes restent sur le téléphone"
      ]
    ],
    "screenshotsTitle": "Ce que vous obtenez : le paquet le moins cher, le vrai prix de la promo et un panier qui reste dans le budget",
    "screenshots": [
      {
        "alt": "Calculatrice de prix unitaire sur iPhone comparant trois paquets avec le prix au kilo et le meilleur prix en évidence",
        "caption": "Quel paquet est vraiment moins cher"
      },
      {
        "alt": "Calculatrice de remise avec 30 % de remise, 10 % supplémentaires, un bon et la taxe, affichant le prix final et l'économie",
        "caption": "Remises cumulées, prix final"
      },
      {
        "alt": "Total du panier avec articles, taxe et reste d'un budget de 60",
        "caption": "Restez dans le budget en faisant les courses"
      },
      {
        "alt": "Calculatrice de taxe retirant 19 % de TVA d'un prix TTC",
        "caption": "Ajouter ou retirer la TVA"
      },
      {
        "alt": "Partage d'addition avec 15 % de pourboire pour quatre personnes, arrondi",
        "caption": "Partagez l'addition, arrondissez"
      }
    ],
    "howTo": {
      "title": "Comment comparer les prix unitaires en magasin",
      "intro": "Les étiquettes affichent le prix aux 100 g sur un produit et au kg sur le suivant, ou rien du tout sur les multipacks. Voici la version en 20 secondes.",
      "steps": [
        {
          "name": "Choisissez la mesure",
          "text": "Poids, volume, pièces ou longueur. Le menu des unités n'affiche alors que celles qui ont un sens (g, kg, oz, lb pour le poids ; ml, l, fl oz, gal pour le volume)."
        },
        {
          "name": "Saisissez chaque paquet",
          "text": "Prix, quantité et unité pour A et B. Pour un multipack, mettez Paquets à 6 et Quantité à 330 ml. Jusqu'à six options."
        },
        {
          "name": "Lisez le résultat",
          "text": "Le meilleur prix reçoit un badge vert et chaque autre option affiche son surcoût en pourcentage. Changez la base (au kg, aux 100 g, à la livre) dans le menu Prix affiché par."
        },
        {
          "name": "Puis vérifiez la promo",
          "text": "Passez à Remise pour cumuler la remise en rayon, le pourcentage supplémentaire en caisse et un bon, avec la taxe si votre pays l'ajoute au paiement."
        }
      ]
    },
    "featuresTitle": "Cinq calculatrices pour la caisse",
    "features": [
      {
        "icon": "⚖️",
        "title": "Comparaison de prix unitaire",
        "text": "Jusqu'à six paquets, unités métriques et impériales mélangées, multipacks, meilleur prix en évidence avec le surcoût en pourcentage des autres options."
      },
      {
        "icon": "🏷️",
        "title": "Remises cumulées",
        "text": "Pourcentage, pourcentage supplémentaire sur le prix réduit, bon fixe, puis taxe : dans l'ordre du magasin, avec ce que vous payez et ce que vous économisez."
      },
      {
        "icon": "🧾",
        "title": "TVA et taxes",
        "text": "Ajoutez la taxe à un prix ou retirez-la d'un prix TTC. Raccourcis pour les taux courants ; épinglez le vôtre par défaut."
      },
      {
        "icon": "🛒",
        "title": "Total du panier avec budget",
        "text": "Ajoutez les articles au fil des courses, cochez-les, voyez la taxe et le reste du budget avec une barre de progression."
      },
      {
        "icon": "👥",
        "title": "Partage et pourboire",
        "text": "Addition, pourcentage de pourboire, nombre de personnes et arrondi pour que chaque part soit un montant rond."
      },
      {
        "icon": "🌍",
        "title": "Votre devise et votre langue",
        "text": "Suit votre symbole monétaire et votre séparateur décimal ; 19 langues ; mémorise vos listes et votre taux de taxe d'une fois sur l'autre."
      }
    ],
    "intentsTitle": "Les questions auxquelles cette app répond",
    "intents": [
      {
        "h": "Comment calculer le prix à l'unité ?",
        "p": "Divisez le prix par la quantité, dans une unité commune. L'app fait la conversion : 500 g à 4,49 font 8,98 le kg ; 1,2 lb à 4,99 font 9,17 le kg. Le plus petit nombre est la meilleure affaire."
      },
      {
        "h": "Le grand format est-il toujours moins cher ?",
        "p": "Souvent, mais pas toujours, et les multipacks et promotions cassent la règle assez souvent pour vérifier. Saisissez les deux et l'app affiche l'écart exact en pourcentage."
      },
      {
        "h": "Combien font 30 % de remise plus 10 % supplémentaires ?",
        "p": "Pas 40 %. Les 10 % supplémentaires s'appliquent au prix déjà réduit : 100 devient 70 puis 63, soit 37 % d'économie. L'onglet Remise montre chaque étape."
      },
      {
        "h": "Comment retirer la TVA d'un prix ?",
        "p": "Divisez par 1 plus le taux : 119 à 19 % de TVA font 100 HT. Choisissez Retirer la taxe, saisissez le montant et le taux."
      },
      {
        "h": "Faut-il Internet ou un compte ?",
        "p": "Non. Chaque calcul se fait sur le téléphone et vos listes restent locales. Le seul usage réseau est la petite bannière de la version gratuite, qu'un achat unique supprime."
      }
    ],
    "compare": {
      "title": "Unit Price Calculator & Tax face à la calculatrice du téléphone et aux apps mono-usage",
      "intro": "La calculatrice intégrée fonctionne si vous connaissez les conversions et les faites deux fois. La plupart des apps mono-usage font une seule de ces tâches. Cette app réunit les cinq calculs de caisse et mémorise vos réglages.",
      "columns": [
        "",
        "Unit Price Calculator & Tax",
        "Calculatrice du téléphone",
        "Apps mono-usage"
      ],
      "rows": [
        [
          "Convertit g, kg, oz, lb, ml, l automatiquement",
          "✓",
          "✗ Manuel",
          "Certaines"
        ],
        [
          "Multipacks et jusqu'à six options",
          "✓",
          "✗",
          "Rarement"
        ],
        [
          "Remises cumulées avec bon et taxe",
          "✓",
          "✗ Étape par étape",
          "Apps de remise seulement"
        ],
        [
          "Total du panier face à un budget",
          "✓",
          "✗",
          "Apps de listes seulement"
        ],
        [
          "Partage d'addition avec pourboire et arrondi",
          "✓",
          "✗",
          "Apps de pourboire seulement"
        ],
        [
          "Prix",
          "Gratuit, suppression des pubs en achat unique",
          "Gratuit",
          "Gratuit avec pubs ou abonnement"
        ]
      ]
    },
    "faqs": [
      {
        "q": "L'app est-elle gratuite ?",
        "a": "Oui. La version gratuite affiche une petite bannière en bas. Supprimer les pubs est un achat unique ; il n'y a ni abonnement ni autre achat intégré."
      },
      {
        "q": "Quelles unités sont prises en charge ?",
        "a": "Poids : mg, g, kg, oz, lb. Volume : ml, l, fl oz, tasse, gal. Pièces : pièce, paquet, douzaine. Longueur : cm, m, in, ft. Vous pouvez mélanger métrique et impérial dans une même comparaison."
      },
      {
        "q": "Puis-je changer l'unité d'affichage du prix ?",
        "a": "Oui. Prix affiché par permet de choisir au kg, aux 100 g, à la livre, au litre, aux 100 ml, au fl oz, au gallon, etc."
      },
      {
        "q": "Mémorise-t-elle mon taux de taxe ?",
        "a": "Oui. Épinglez un taux par défaut depuis l'onglet Taxe ou dans les Réglages ; Remise et Panier l'utilisent automatiquement."
      },
      {
        "q": "Quelle devise utilise-t-elle ?",
        "a": "Celle de votre appareil par défaut. Vous pouvez en choisir une autre dans les Réglages."
      },
      {
        "q": "Fonctionne-t-elle hors ligne ?",
        "a": "Oui. Les calculs et les listes ne quittent jamais le téléphone. Sans connexion, aucune pub n'est affichée."
      },
      {
        "q": "Quelles langues ?",
        "a": "Anglais, espagnol, allemand, français, italien, portugais, néerlandais, polonais, russe, ukrainien, turc, arabe, hindi, indonésien, vietnamien, thaï, japonais, coréen et chinois simplifié."
      },
      {
        "q": "Existe-t-il une version Android ?",
        "a": "Pas encore. L'app iPhone sort en premier ; une version Android est prévue et cette page renverra vers Google Play dès qu'elle sera disponible."
      }
    ],
    "related": [
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Photographiez le ticket, fixez la garantie, soyez prévenu avant l'expiration. Hors ligne, achat unique."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Chute de tension, section, remplissage de conduit et de boîte selon NEC 2023, hors ligne. Achat unique."
      },
      {
        "name": "Caffeine Tracker: Curfew",
        "href": "/apps/caffeine-tracker",
        "blurb": "Combien de caféine il vous reste et jusqu'à quelle heure le dernier café. Gratuit."
      }
    ],
    "disclaimer": "Unit Price Calculator & Tax est une aide aux courses. Les taux de taxe et les règles d'arrondi varient selon le pays et le magasin ; vérifiez le montant final sur le ticket."
  },
  "caffeine-tracker": {
    "head": {
      "title": "Application de suivi de la caféine pour iPhone : ce qu'il vous en reste et votre heure limite avant le coucher",
      "description": "Suivi de caféine gratuit pour iPhone : notez café, thé et boissons énergisantes en deux gestes, voyez les milligrammes encore actifs grâce à un modèle de demi-vie et obtenez un couvre-feu pour la dernière tasse. Hors ligne, sans compte, 19 langues.",
      "keywords": "application caféine, suivi caféine iphone, calculateur caféine, demi-vie caféine calcul, compteur café, journal caféine, combien de temps dure la caféine, quand arrêter le café avant de dormir, caféine sommeil calcul",
      "ogTitle": "Caffeine Tracker: Curfew : combien de caféine vous reste-t-il ?",
      "ogDescription": "Notez une boisson en deux gestes, regardez le niveau baisser et obtenez l'heure limite du dernier café pour dormir à l'heure. App iPhone gratuite."
    },
    "h1": "Un suivi de caféine qui montre ce qui circule encore dans votre corps et l'heure limite du dernier café",
    "answer": "Caffeine Tracker: Curfew estime la caféine active dans votre corps à partir de ce que vous notez, avec un modèle de demi-vie (environ 5 heures pour la plupart des adultes, réglable). Notez espresso, café filtre, latte, thé, matcha, boissons énergisantes et plus en deux gestes, suivez une courbe sur 12 heures, restez sous 400 mg aujourd'hui et fixez une heure de coucher avec une cible (25, 50 ou 100 mg) pour obtenir un couvre-feu : l'heure limite de votre dernière boisson. Fonctionne hors ligne, sans compte. Un Pro en achat unique ajoute la synchro Apple Santé, l'historique sur 30 jours et les boissons personnalisées.",
    "quickFacts": [
      [
        "Prix",
        "Gratuit. Pro en achat unique, sans abonnement"
      ],
      [
        "Modèle",
        "Décroissance par demi-vie, 2,5 à 8 h, 5 h par défaut"
      ],
      [
        "Boissons",
        "21 préréglages avec mg typiques, petit / normal / grand, personnalisées avec Pro"
      ],
      [
        "Confidentialité",
        "Hors ligne, sans compte ; Apple Santé en écriture seulement si vous l'activez"
      ]
    ],
    "screenshotsTitle": "Ce que vous obtenez : le chiffre qui compte maintenant, un couvre-feu pour ce soir et une semaine lisible",
    "screenshots": [
      {
        "alt": "Accueil du suivi de caféine sur iPhone avec 128 mg dans l'organisme, total du jour face à 400 mg, couvre-feu et courbe de décroissance sur 12 heures",
        "caption": "Combien de caféine il vous reste"
      },
      {
        "alt": "Feuille d'ajout avec cold brew sélectionné, choix de la taille et de l'heure et liste de cafés avec recherche",
        "caption": "Un café noté en deux gestes"
      },
      {
        "alt": "Écran historique avec graphique en barres des totaux quotidiens sur sept jours et la moyenne",
        "caption": "Voyez la semaine, repérez l'habitude"
      },
      {
        "alt": "Réglages avec heure du coucher, caféine restante au coucher, demi-vie et limite quotidienne",
        "caption": "Fixez l'heure du coucher, obtenez un couvre-feu"
      }
    ],
    "howTo": {
      "title": "Comment trouver votre heure limite de caféine",
      "intro": "La question n'est pas combien de cafés vous buvez, mais combien il en reste quand vous posez la tête sur l'oreiller. Trois réglages, l'app fait le calcul.",
      "steps": [
        {
          "name": "Fixez l'heure du coucher",
          "text": "Réglages → Sommeil → Heure du coucher. L'app vise toujours le coucher de ce soir, même si vous notez une boisson tardive après minuit."
        },
        {
          "name": "Choisissez la dose avec laquelle vous dormez",
          "text": "25 mg pour un sommeil léger, 50 mg pour la plupart des gens, 100 mg si la caféine vous affecte peu. C'est le niveau cible au coucher."
        },
        {
          "name": "Notez ce que vous buvez",
          "text": "Touchez une boisson sur l'accueil (espresso, filtre, latte, thé, énergisante) ou ouvrez la liste complète avec tailles et heure pour la tasse oubliée."
        },
        {
          "name": "Lisez le couvre-feu",
          "text": "La carte Couvre-feu dit par exemple : « Dernière boisson de 95 mg avant 15 h 40 pour être sous 50 mg au coucher. » Passé ce moment, elle indique ce qu'une tasse de plus laisserait au coucher."
        }
      ]
    },
    "featuresTitle": "Conçue autour d'un chiffre : ce qui agit maintenant",
    "features": [
      {
        "icon": "☕",
        "title": "Niveau en direct",
        "text": "Chaque dose décroît selon une demi-vie. Voyez les milligrammes actifs, un statut (dégagé, actif, survolté) et le temps avant de passer sous votre cible."
      },
      {
        "icon": "🌙",
        "title": "Couvre-feu caféine",
        "text": "Heure limite de votre boisson habituelle pour rester sous la cible au coucher. Demi-vie réglable pour la grossesse, les médicaments ou les métabolismes rapides."
      },
      {
        "icon": "⚡",
        "title": "Saisie en deux gestes",
        "text": "Six favoris sur l'accueil ; 21 préréglages avec teneurs typiques ; petit, normal et grand ; boisson antidatée."
      },
      {
        "icon": "📊",
        "title": "Limite quotidienne et historique",
        "text": "Progression face à 400, 300 ou 200 mg. Sept jours de totaux avec moyenne et jours de dépassement ; 30 jours avec Pro."
      },
      {
        "icon": "❤️",
        "title": "Apple Santé (Pro)",
        "text": "Écrit la caféine dans Santé pour la placer à côté de vos données de sommeil. Supprimer une boisson supprime l'échantillon."
      },
      {
        "icon": "🌍",
        "title": "19 langues, hors ligne",
        "text": "Rien ne quitte le téléphone. Ni compte, ni publicité, ni statistiques."
      }
    ],
    "intentsTitle": "Les questions auxquelles cette app répond",
    "intents": [
      {
        "h": "Combien de temps la caféine reste-t-elle dans l'organisme ?",
        "p": "Sa demi-vie est d'environ 5 heures pour la plupart des adultes : une tasse de 95 mg à 15 h fait environ 48 mg à 20 h et 24 mg à 1 h. L'app trace exactement cette courbe pour tout ce que vous avez noté."
      },
      {
        "h": "Quand arrêter le café pour dormir ?",
        "p": "Cela dépend de votre coucher, de votre sensibilité et de ce que vous avez déjà bu. Avec une cible de 50 mg et un coucher à 23 h, un seul café de 95 mg doit être bu avant 18 h 20 environ ; après deux tasses plus tôt, bien avant. La carte couvre-feu fait ce calcul en continu."
      },
      {
        "h": "Combien de caféine dans un espresso, un latte ou un cold brew ?",
        "p": "Valeurs typiques : espresso 63 mg, latte ou cappuccino 75 mg (un shot), café filtre 95 mg, cold brew 200 mg, thé noir 47 mg, thé vert 28 mg, matcha 70 mg, une énergisante de 250 ml 80 mg. Tous les préréglages se modulent par taille et Pro permet des quantités exactes."
      },
      {
        "h": "Combien de caféine par jour est-ce trop ?",
        "p": "Le repère couramment cité pour un adulte en bonne santé est 400 mg par jour ; 200 mg pendant la grossesse. L'app tient une barre de progression face à la limite choisie."
      },
      {
        "h": "Faut-il Internet ou un compte ?",
        "p": "Non. Tout fonctionne sur le téléphone. Apple Santé n'est écrit que si vous l'activez dans Pro."
      }
    ],
    "compare": {
      "title": "Caffeine Tracker: Curfew face à une app de notes et aux suivis par abonnement",
      "intro": "Compter les tasses ne dit rien de ce soir. La plupart des apps de caféine calculent bien le niveau, mais font payer un abonnement mensuel. Cette app offre le niveau, le couvre-feu et l'historique gratuitement, avec un Pro en achat unique pour la synchro Santé.",
      "columns": [
        "",
        "Caffeine Tracker: Curfew",
        "Notes / mémoire",
        "Suivis par abonnement"
      ],
      "rows": [
        [
          "Caféine active avec courbe de décroissance",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Couvre-feu pour la dernière boisson",
          "✓",
          "✗",
          "Certains"
        ],
        [
          "Saisie en deux gestes avec mg typiques",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Synchro Apple Santé",
          "✓ Pro (achat unique)",
          "✗",
          "✓ Abonnement"
        ],
        [
          "Hors ligne, sans compte",
          "✓",
          "✓",
          "Variable"
        ],
        [
          "Prix",
          "Gratuit, Pro en achat unique",
          "Gratuit",
          "Mensuel ou annuel"
        ]
      ]
    },
    "faqs": [
      {
        "q": "Quelle est la précision de l'estimation ?",
        "a": "C'est une estimation. La teneur en caféine varie selon la préparation et la marque, et la demi-vie selon les personnes (environ 3 à 7 heures). Ajustez la demi-vie dans les Réglages si vous savez éliminer la caféine lentement ou vite. Ceci n'est pas un avis médical."
      },
      {
        "q": "Que comprend Pro ?",
        "a": "La synchro Apple Santé (caféine), l'historique sur 30 jours au lieu de 7 et les boissons personnalisées avec quantités exactes. Un seul achat unique ; pas d'abonnement."
      },
      {
        "q": "Lit-elle mes données Santé ?",
        "a": "Non. Avec Pro et l'option activée, elle écrit des échantillons de caféine dans Santé et les supprime quand vous supprimez une boisson. Elle ne lit jamais rien."
      },
      {
        "q": "Puis-je noter une boisson oubliée ?",
        "a": "Oui. Ouvrez la liste complète et changez l'heure avant d'ajouter."
      },
      {
        "q": "Et si je me couche après minuit ?",
        "a": "Réglez-la normalement (par exemple 1 h 00). Une boisson notée à 23 h compte quand même pour ce soir."
      },
      {
        "q": "Quelles langues ?",
        "a": "Anglais, espagnol, allemand, français, italien, portugais, néerlandais, polonais, russe, ukrainien, turc, arabe, hindi, indonésien, vietnamien, thaï, japonais, coréen et chinois simplifié."
      },
      {
        "q": "Existe-t-il une version Android ?",
        "a": "Pas encore. L'app iPhone sort en premier ; une version Android est prévue et cette page renverra vers Google Play dès qu'elle sera disponible."
      }
    ],
    "related": [
      {
        "name": "Unit Price Calculator & Tax",
        "href": "/apps/unit-price-calculator",
        "blurb": "Quel paquet est moins cher au kg ou au litre, remises cumulées, TVA, budget panier et partage d'addition. Gratuit."
      },
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Photographiez le ticket, fixez la garantie, soyez prévenu avant l'expiration. Hors ligne, achat unique."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Chute de tension, section, remplissage de conduit et de boîte selon NEC 2023, hors ligne. Achat unique."
      }
    ],
    "disclaimer": "Caffeine Tracker: Curfew utilise un modèle simple de demi-vie et des teneurs moyennes en caféine. Ce n'est ni un dispositif médical ni un avis médical ; parlez de la caféine et de votre santé avec un professionnel."
  },
};

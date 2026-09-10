import Link from "next/link";
import styled from "styled-components";

// Translations + shared helpers for the localized
// /apps/teleprompter-camera-overlay/[lang] landing pages.

export const BASE_URL = "https://vilvaathiban.com/apps/teleprompter-camera-overlay";
export const APP_STORE_BASE =
  "https://apps.apple.com/app/teleprompter-camera-overlay/id6805037497";

export const LOCALES = {
  de: {
    name: "Deutsch",
    storeL: "de",
    title: "Teleprompter App kostenlos – Kamera-Overlay, scrollt beim Sprechen",
    description:
      "Kostenlose Teleprompter-App für iPhone: Dein Skript schwebt über der Kamera und scrollt automatisch, während du sprichst. 4K-Aufnahme, 100 % offline, ohne Wasserzeichen – perfekt für Reels, Shorts & TikTok.",
    keywords:
      "teleprompter app kostenlos, teleprompter kamera, teleprompter iphone, prompter app, teleprompter für reels, teleprompter deutsch, video aufnehmen und text ablesen",
    eyebrow: "Apps · iOS · Kostenlos",
    freePill: "100 % kostenlose iOS-App",
    h1: "Kostenloser Teleprompter mit Kamera-Overlay",
    lead: "Eine 100 % kostenlose Teleprompter-App, die dein Skript direkt über das Kamerabild legt und automatisch scrollt, während du sprichst. Nimm Reels, Shorts und TikToks in 4K auf – mit perfektem Blickkontakt, ohne Auswendiglernen und ohne zwanzig Takes.",
    introH2: "Skript ablesen und trotzdem in die Kamera schauen",
    introP:
      "Jeder Creator kennt das Problem: Du schreibst ein gutes Skript, drückst auf Aufnahme – und deine Augen wandern beim Ablesen vom Objektiv weg. Das Video wirkt abgelesen, weil es abgelesen ist. Teleprompter: Camera Overlay löst das wie im Nachrichtenstudio: Das Skript liegt direkt über der Live-Vorschau, neben der Frontkamera. Ablesen heißt hier automatisch in die Kamera schauen.",
    featuresH2: "Was die App besonders macht",
    cards: [
      {
        h3: "🎙️ Scrollt, während du sprichst",
        p: "Die Spracherkennung auf dem iPhone folgt deiner Stimme Wort für Wort – auch auf Deutsch. Sprich schneller, langsamer oder mach eine Pause: Das Skript findet dein Tempo und deine Stelle von selbst.",
      },
      {
        h3: "🎬 Nimmt auf, während du liest",
        p: "4K-Video im Hochformat mit Front- oder Rückkamera, während das Skript scrollt. Das Overlay erscheint nie im fertigen Video – du bekommst einen sauberen, postfertigen Clip ohne Wasserzeichen.",
      },
      {
        h3: "✈️ 100 % offline & privat",
        p: "Die Spracherkennung läuft komplett auf deinem iPhone. Skripte, Stimme und Videos verlassen dein Gerät nie – die App funktioniert sogar im Flugmodus.",
      },
      {
        h3: "🆓 Wirklich kostenlos",
        p: "Alle Funktionen gratis, ohne Wasserzeichen und ohne Abo. Gelegentliche Werbung hält die App kostenlos; ein kleiner Einmalkauf entfernt sie für immer.",
      },
    ],
    faqH2: "Häufige Fragen",
    faqs: [
      {
        q: "Ist die Teleprompter-App wirklich kostenlos?",
        a: "Ja. Der Download ist kostenlos und alle Funktionen sind in der Gratis-Version enthalten – Scrollen per Stimme, 4K-Aufnahme und unbegrenzte Skripte. Gelegentlich erscheint Werbung; ein kleiner Einmalkauf entfernt sie dauerhaft. Kein Abo, kein Wasserzeichen.",
      },
      {
        q: "Wie scrollt der Teleprompter, während ich spreche?",
        a: "Die App hört mit der integrierten Spracherkennung deines iPhones zu und vergleicht deine gesprochenen Wörter in Echtzeit mit dem Skript – Deutsch wird vollständig unterstützt. Sprich schneller, langsamer oder pausiere: Der Text folgt genau deinem Tempo, und nach einem Versprecher findet er deine Stelle automatisch wieder.",
      },
      {
        q: "Werden meine Stimme oder Videos irgendwohin hochgeladen?",
        a: "Nein. Die Spracherkennung läuft zu 100 % auf dem Gerät mit Apples Frameworks. Skripte, Stimme und Aufnahmen verlassen dein iPhone nie – die ganze App funktioniert auch im Flugmodus.",
      },
    ],
    storeAlt: "Im App Store laden",
    switcherLabel: "Diese Seite in anderen Sprachen",
  },
  fr: {
    name: "Français",
    storeL: "fr",
    title: "Application prompteur gratuite – Téléprompteur caméra qui suit votre voix",
    description:
      "Application prompteur gratuite pour iPhone : votre texte flotte sur la caméra et défile automatiquement quand vous parlez. Enregistrement 4K, 100 % hors ligne, sans filigrane – idéale pour Reels, Shorts et TikTok.",
    keywords:
      "application prompteur, prompteur gratuit, téléprompteur caméra, téléprompteur iphone, prompteur pour reels, teleprompter français, lire un texte en regardant la caméra",
    eyebrow: "Apps · iOS · Gratuit",
    freePill: "App iOS 100 % gratuite",
    h1: "Prompteur gratuit en surimpression sur la caméra",
    lead: "Une application prompteur 100 % gratuite qui affiche votre texte directement sur l'image de la caméra et le fait défiler au rythme de votre voix. Enregistrez vos Reels, Shorts et TikToks en 4K en gardant un contact visuel parfait – sans rien mémoriser, sans vingt prises.",
    introH2: "Lire son texte tout en regardant l'objectif",
    introP:
      "Tous les créateurs connaissent le problème : vous écrivez un bon script, vous lancez l'enregistrement… et vos yeux quittent l'objectif pour lire. Le résultat sonne « lu », parce qu'il l'est. Teleprompter: Camera Overlay règle ça comme à la télévision : le texte est posé directement sur l'aperçu caméra, juste à côté de l'objectif avant. Lire, c'est regarder la caméra.",
    featuresH2: "Ce qui la rend différente",
    cards: [
      {
        h3: "🎙️ Défile quand vous parlez",
        p: "La reconnaissance vocale intégrée à l'iPhone suit votre voix mot à mot – y compris en français. Parlez vite, ralentissez, faites une pause : le texte s'adapte à votre rythme et retrouve votre position tout seul.",
      },
      {
        h3: "🎬 Filme pendant que vous lisez",
        p: "Vidéo 4K verticale avec la caméra avant ou arrière pendant que le texte défile. Le prompteur n'apparaît jamais dans la vidéo : vous obtenez un clip propre, prêt à publier, sans filigrane.",
      },
      {
        h3: "✈️ 100 % hors ligne et privé",
        p: "La reconnaissance vocale s'exécute entièrement sur votre iPhone. Scripts, voix et vidéos ne quittent jamais l'appareil – l'app fonctionne même en mode avion.",
      },
      {
        h3: "🆓 Gratuite, vraiment",
        p: "Toutes les fonctions sont gratuites, sans filigrane ni abonnement. Une publicité occasionnelle finance l'app ; un petit achat unique la supprime pour toujours.",
      },
    ],
    faqH2: "Questions fréquentes",
    faqs: [
      {
        q: "L'application prompteur est-elle vraiment gratuite ?",
        a: "Oui. Le téléchargement est gratuit et toutes les fonctions sont incluses : défilement à la voix, enregistrement 4K et scripts illimités. Une publicité s'affiche de temps en temps ; un petit achat unique la supprime définitivement. Pas d'abonnement, pas de filigrane.",
      },
      {
        q: "Comment le prompteur défile-t-il quand je parle ?",
        a: "L'app écoute avec la reconnaissance vocale intégrée de l'iPhone et compare vos mots au script en temps réel – le français est entièrement pris en charge. Parlez plus vite, plus lentement ou faites une pause : le texte suit exactement votre rythme et retrouve votre position après une hésitation.",
      },
      {
        q: "Ma voix ou mes vidéos sont-elles envoyées quelque part ?",
        a: "Non. La reconnaissance vocale fonctionne à 100 % sur l'appareil avec les frameworks d'Apple. Vos scripts, votre voix et vos enregistrements ne quittent jamais votre iPhone – toute l'app fonctionne en mode avion.",
      },
    ],
    storeAlt: "Télécharger dans l'App Store",
    switcherLabel: "Cette page dans d'autres langues",
  },
  es: {
    name: "Español",
    storeL: "es",
    title: "Teleprompter gratis para iPhone – apuntador sobre la cámara que sigue tu voz",
    description:
      "App de teleprompter gratis para iPhone: el guion flota sobre la cámara y avanza solo mientras hablas. Graba en 4K, funciona 100 % sin conexión y sin marca de agua. Perfecta para Reels, Shorts y TikTok.",
    keywords:
      "teleprompter gratis, teleprompter app, apuntador de cámara, teleprompter iphone, teleprompter para reels, teleprompter español, leer guion mirando a la cámara",
    eyebrow: "Apps · iOS · Gratis",
    freePill: "App iOS 100 % gratis",
    h1: "Teleprompter gratis superpuesto a la cámara",
    lead: "Un teleprompter 100 % gratis que coloca tu guion directamente sobre la imagen de la cámara y lo desplaza al ritmo de tu voz. Graba Reels, Shorts y TikToks en 4K con contacto visual perfecto: sin memorizar nada y sin repetir veinte tomas.",
    introH2: "Leer el guion sin dejar de mirar a la cámara",
    introP:
      "Todos los creadores conocen el problema: escribes un buen guion, pulsas grabar y los ojos se te van del objetivo para leer. El resultado suena leído, porque lo es. Teleprompter: Camera Overlay lo resuelve como en un plató de televisión: el guion está justo encima de la vista previa de la cámara, al lado del objetivo frontal. Leer es, literalmente, mirar a la cámara.",
    featuresH2: "Qué la hace diferente",
    cards: [
      {
        h3: "🎙️ Avanza mientras hablas",
        p: "El reconocimiento de voz del iPhone sigue tu voz palabra por palabra, también en español. Habla rápido, despacio o haz una pausa: el guion encuentra tu ritmo y tu posición automáticamente.",
      },
      {
        h3: "🎬 Graba mientras lees",
        p: "Vídeo 4K vertical con la cámara frontal o trasera mientras el guion se desplaza. El texto nunca aparece en el vídeo final: obtienes un clip limpio y listo para publicar, sin marca de agua.",
      },
      {
        h3: "✈️ 100 % sin conexión y privado",
        p: "El reconocimiento de voz se ejecuta por completo en tu iPhone. Los guiones, tu voz y los vídeos nunca salen del dispositivo: la app funciona incluso en modo avión.",
      },
      {
        h3: "🆓 Gratis de verdad",
        p: "Todas las funciones son gratis, sin marca de agua ni suscripción. Un anuncio ocasional mantiene la app gratuita; una pequeña compra única los elimina para siempre.",
      },
    ],
    faqH2: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿El teleprompter es gratis de verdad?",
        a: "Sí. La descarga es gratuita y todas las funciones están incluidas: desplazamiento por voz, grabación en 4K y guiones ilimitados. De vez en cuando aparece un anuncio; una pequeña compra única los elimina para siempre. Sin suscripción y sin marca de agua.",
      },
      {
        q: "¿Cómo avanza el guion mientras hablo?",
        a: "La app escucha con el reconocimiento de voz integrado del iPhone y compara tus palabras con el guion en tiempo real; el español es totalmente compatible. Habla más rápido, más despacio o haz una pausa: el texto sigue exactamente tu ritmo y, si te equivocas, vuelve a encontrar tu posición solo.",
      },
      {
        q: "¿Mi voz o mis vídeos se suben a algún sitio?",
        a: "No. El reconocimiento de voz funciona al 100 % en el dispositivo con los frameworks de Apple. Tus guiones, tu voz y tus grabaciones nunca salen de tu iPhone: toda la app funciona en modo avión.",
      },
    ],
    storeAlt: "Descargar en el App Store",
    switcherLabel: "Esta página en otros idiomas",
  },
  it: {
    name: "Italiano",
    storeL: "it",
    title: "Teleprompter gratis – gobbo elettronico sulla fotocamera che segue la tua voce",
    description:
      "App teleprompter gratis per iPhone: il copione fluttua sopra la fotocamera e scorre da solo mentre parli. Registra in 4K, funziona 100 % offline e senza filigrana. Perfetta per Reels, Shorts e TikTok.",
    keywords:
      "teleprompter gratis, gobbo elettronico app, teleprompter iphone, app teleprompter, teleprompter per reels, teleprompter italiano, leggere copione guardando la fotocamera",
    eyebrow: "App · iOS · Gratis",
    freePill: "App iOS 100 % gratuita",
    h1: "Teleprompter gratis in sovrimpressione sulla fotocamera",
    lead: "Un teleprompter 100 % gratuito che mostra il copione direttamente sopra l'immagine della fotocamera e lo fa scorrere al ritmo della tua voce. Registra Reels, Shorts e TikTok in 4K con un contatto visivo perfetto: niente da memorizzare, niente venti ciak.",
    introH2: "Leggere il copione continuando a guardare in camera",
    introP:
      "Ogni creator conosce il problema: scrivi un buon copione, premi registra e gli occhi scappano dall'obiettivo per leggere. Il risultato sembra letto, perché lo è. Teleprompter: Camera Overlay lo risolve come in uno studio televisivo: il testo sta direttamente sopra l'anteprima della fotocamera, accanto all'obiettivo frontale. Leggere significa guardare in camera.",
    featuresH2: "Cosa la rende diversa",
    cards: [
      {
        h3: "🎙️ Scorre mentre parli",
        p: "Il riconoscimento vocale dell'iPhone segue la tua voce parola per parola, anche in italiano. Parla veloce, rallenta o fai una pausa: il copione trova da solo il tuo ritmo e il punto giusto.",
      },
      {
        h3: "🎬 Registra mentre leggi",
        p: "Video 4K verticale con fotocamera anteriore o posteriore mentre il testo scorre. Il gobbo non appare mai nel video finale: ottieni una clip pulita, pronta da pubblicare, senza filigrana.",
      },
      {
        h3: "✈️ 100 % offline e privato",
        p: "Il riconoscimento vocale gira interamente sul tuo iPhone. Copioni, voce e video non lasciano mai il dispositivo: l'app funziona anche in modalità aereo.",
      },
      {
        h3: "🆓 Gratis davvero",
        p: "Tutte le funzioni sono gratuite, senza filigrana né abbonamento. Una pubblicità occasionale tiene l'app gratis; un piccolo acquisto una tantum la rimuove per sempre.",
      },
    ],
    faqH2: "Domande frequenti",
    faqs: [
      {
        q: "Il teleprompter è davvero gratis?",
        a: "Sì. Il download è gratuito e tutte le funzioni sono incluse: scorrimento con la voce, registrazione in 4K e copioni illimitati. Ogni tanto compare una pubblicità; un piccolo acquisto una tantum la elimina per sempre. Nessun abbonamento, nessuna filigrana.",
      },
      {
        q: "Come fa il copione a scorrere mentre parlo?",
        a: "L'app ascolta con il riconoscimento vocale integrato dell'iPhone e confronta in tempo reale le parole pronunciate con il copione; l'italiano è pienamente supportato. Parla più veloce, più piano o fermati: il testo segue esattamente il tuo ritmo e, se sbagli, ritrova da solo il punto giusto.",
      },
      {
        q: "La mia voce o i miei video vengono caricati da qualche parte?",
        a: "No. Il riconoscimento vocale funziona al 100 % sul dispositivo con i framework di Apple. Copioni, voce e registrazioni non lasciano mai il tuo iPhone: tutta l'app funziona in modalità aereo.",
      },
    ],
    storeAlt: "Scarica su App Store",
    switcherLabel: "Questa pagina in altre lingue",
  },
  pt: {
    name: "Português",
    storeL: "pt",
    title: "Teleprompter grátis para iPhone – teleponto sobre a câmera que segue sua voz",
    description:
      "App de teleprompter grátis para iPhone: o roteiro flutua sobre a câmera e rola sozinho enquanto você fala. Grave em 4K, 100 % offline e sem marca d'água. Perfeito para Reels, Shorts e TikTok.",
    keywords:
      "teleprompter gratis, teleprompter app, teleponto, teleprompter iphone, teleprompter para reels, teleprompter portugues, ler roteiro olhando para a camera",
    eyebrow: "Apps · iOS · Grátis",
    freePill: "App iOS 100 % grátis",
    h1: "Teleprompter grátis sobreposto à câmera",
    lead: "Um teleprompter 100 % grátis que coloca o roteiro diretamente sobre a imagem da câmera e o rola no ritmo da sua voz. Grave Reels, Shorts e TikToks em 4K com contato visual perfeito — sem decorar nada e sem repetir vinte takes.",
    introH2: "Ler o roteiro sem tirar os olhos da câmera",
    introP:
      "Todo criador conhece o problema: você escreve um bom roteiro, aperta gravar e os olhos fogem da lente para ler. O resultado soa lido, porque é. O Teleprompter: Camera Overlay resolve isso como nos telejornais: o texto fica diretamente sobre a pré-visualização da câmera, ao lado da lente frontal. Ler é, literalmente, olhar para a câmera.",
    featuresH2: "O que o torna diferente",
    cards: [
      {
        h3: "🎙️ Rola enquanto você fala",
        p: "O reconhecimento de voz do iPhone acompanha sua fala palavra por palavra — também em português. Fale rápido, devagar ou faça uma pausa: o roteiro encontra seu ritmo e sua posição sozinho.",
      },
      {
        h3: "🎬 Grava enquanto você lê",
        p: "Vídeo 4K vertical com a câmera frontal ou traseira enquanto o texto rola. O teleponto nunca aparece no vídeo final: você recebe um clipe limpo, pronto para postar, sem marca d'água.",
      },
      {
        h3: "✈️ 100 % offline e privado",
        p: "O reconhecimento de voz roda inteiramente no seu iPhone. Roteiros, voz e vídeos nunca saem do aparelho — o app funciona até no modo avião.",
      },
      {
        h3: "🆓 Grátis de verdade",
        p: "Todos os recursos são grátis, sem marca d'água e sem assinatura. Um anúncio ocasional mantém o app gratuito; uma pequena compra única remove os anúncios para sempre.",
      },
    ],
    faqH2: "Perguntas frequentes",
    faqs: [
      {
        q: "O teleprompter é grátis mesmo?",
        a: "Sim. O download é gratuito e todos os recursos estão incluídos: rolagem por voz, gravação em 4K e roteiros ilimitados. De vez em quando aparece um anúncio; uma pequena compra única os remove para sempre. Sem assinatura e sem marca d'água.",
      },
      {
        q: "Como o roteiro rola enquanto eu falo?",
        a: "O app escuta com o reconhecimento de voz integrado do iPhone e compara suas palavras com o roteiro em tempo real — o português é totalmente suportado. Fale mais rápido, mais devagar ou pause: o texto segue exatamente o seu ritmo e, se você errar, ele encontra sua posição de novo sozinho.",
      },
      {
        q: "Minha voz ou meus vídeos são enviados para algum lugar?",
        a: "Não. O reconhecimento de voz funciona 100 % no aparelho com os frameworks da Apple. Seus roteiros, sua voz e suas gravações nunca saem do iPhone — o app inteiro funciona em modo avião.",
      },
    ],
    storeAlt: "Baixar na App Store",
    switcherLabel: "Esta página em outros idiomas",
  },
  nl: {
    name: "Nederlands",
    storeL: "nl",
    title: "Gratis teleprompter app – autocue over de camera, scrolt terwijl je praat",
    description:
      "Gratis teleprompter-app voor iPhone: je script zweeft over de camera en scrolt vanzelf mee terwijl je spreekt. Opnemen in 4K, 100 % offline, zonder watermerk – ideaal voor Reels, Shorts en TikTok.",
    keywords:
      "teleprompter app gratis, autocue app, teleprompter camera, teleprompter iphone, teleprompter voor reels, teleprompter nederlands, script lezen en in de camera kijken",
    eyebrow: "Apps · iOS · Gratis",
    freePill: "100 % gratis iOS-app",
    h1: "Gratis teleprompter als overlay op de camera",
    lead: "Een 100 % gratis teleprompter die je script direct over het camerabeeld legt en automatisch meescrolt terwijl je praat. Neem Reels, Shorts en TikToks op in 4K met perfect oogcontact – niets uit je hoofd leren, geen twintig takes.",
    introH2: "Je script lezen en toch in de camera kijken",
    introP:
      "Elke creator kent het probleem: je schrijft een goed script, drukt op opnemen en je ogen dwalen van de lens af om te lezen. Het resultaat klinkt voorgelezen, omdat het dat is. Teleprompter: Camera Overlay lost dat op zoals bij het journaal: het script staat direct over het live camerabeeld, naast de frontcamera. Lezen ís in de camera kijken.",
    featuresH2: "Wat de app anders maakt",
    cards: [
      {
        h3: "🎙️ Scrolt terwijl je praat",
        p: "De spraakherkenning op je iPhone volgt je stem woord voor woord – ook in het Nederlands. Praat sneller, langzamer of pauzeer: het script vindt vanzelf jouw tempo en jouw plek.",
      },
      {
        h3: "🎬 Neemt op terwijl je leest",
        p: "4K-video in portretstand met de voor- of achtercamera terwijl het script scrolt. De overlay komt nooit in je video terecht: je krijgt een schone, publiceerklare clip zonder watermerk.",
      },
      {
        h3: "✈️ 100 % offline & privé",
        p: "De spraakherkenning draait volledig op je iPhone. Scripts, stem en video's verlaten je toestel nooit – de app werkt zelfs in vliegtuigmodus.",
      },
      {
        h3: "🆓 Echt gratis",
        p: "Alle functies gratis, zonder watermerk en zonder abonnement. Af en toe een advertentie houdt de app gratis; een kleine eenmalige aankoop verwijdert die voorgoed.",
      },
    ],
    faqH2: "Veelgestelde vragen",
    faqs: [
      {
        q: "Is de teleprompter-app echt gratis?",
        a: "Ja. De download is gratis en alle functies zitten in de gratis versie: scrollen op je stem, 4K-opnames en onbeperkt scripts. Af en toe zie je een advertentie; een kleine eenmalige aankoop verwijdert die voorgoed. Geen abonnement, geen watermerk.",
      },
      {
        q: "Hoe scrolt de teleprompter terwijl ik praat?",
        a: "De app luistert met de ingebouwde spraakherkenning van je iPhone en vergelijkt je gesproken woorden realtime met je script – Nederlands wordt volledig ondersteund. Praat sneller, langzamer of pauzeer: de tekst volgt precies jouw tempo en vindt na een verspreking vanzelf je plek terug.",
      },
      {
        q: "Wordt mijn stem of video ergens geüpload?",
        a: "Nee. De spraakherkenning draait 100 % op het toestel met Apples frameworks. Je scripts, stem en opnames verlaten je iPhone nooit – de hele app werkt in vliegtuigmodus.",
      },
    ],
    storeAlt: "Download in de App Store",
    switcherLabel: "Deze pagina in andere talen",
  },
  pl: {
    name: "Polski",
    storeL: "pl",
    title: "Darmowy teleprompter – prompter na kamerze, przewija się gdy mówisz",
    description:
      "Darmowa aplikacja teleprompter na iPhone'a: tekst unosi się nad kamerą i przewija automatycznie, gdy mówisz. Nagrywanie w 4K, 100 % offline, bez znaku wodnego – idealna do Reels, Shorts i TikToka.",
    keywords:
      "teleprompter za darmo, aplikacja prompter, teleprompter na iphone, prompter do kamery, teleprompter do reels, teleprompter po polsku, czytanie tekstu patrząc w kamerę",
    eyebrow: "Aplikacje · iOS · Za darmo",
    freePill: "W 100 % darmowa aplikacja iOS",
    h1: "Darmowy teleprompter nałożony na kamerę",
    lead: "W 100 % darmowy teleprompter, który wyświetla tekst bezpośrednio na podglądzie kamery i przewija go w rytmie Twojego głosu. Nagrywaj Reels, Shorts i TikToki w 4K z idealnym kontaktem wzrokowym – bez uczenia się na pamięć i bez dwudziestu dubli.",
    introH2: "Czytaj tekst, patrząc cały czas w obiektyw",
    introP:
      "Każdy twórca zna ten problem: piszesz dobry scenariusz, włączasz nagrywanie, a oczy uciekają z obiektywu, żeby czytać. Efekt brzmi jak czytanka, bo nią jest. Teleprompter: Camera Overlay rozwiązuje to jak w studiu telewizyjnym: tekst leży bezpośrednio na podglądzie kamery, tuż obok przedniego obiektywu. Czytanie oznacza patrzenie w kamerę.",
    featuresH2: "Co ją wyróżnia",
    cards: [
      {
        h3: "🎙️ Przewija się, gdy mówisz",
        p: "Rozpoznawanie mowy na iPhonie podąża za Twoim głosem słowo po słowie – także po polsku. Mów szybciej, wolniej albo zrób pauzę: tekst sam znajdzie Twoje tempo i miejsce.",
      },
      {
        h3: "🎬 Nagrywa, gdy czytasz",
        p: "Pionowe wideo 4K z przedniej lub tylnej kamery, podczas gdy tekst się przewija. Nakładka nigdy nie pojawia się w nagraniu – dostajesz czysty klip gotowy do publikacji, bez znaku wodnego.",
      },
      {
        h3: "✈️ 100 % offline i prywatnie",
        p: "Rozpoznawanie mowy działa w całości na Twoim iPhonie. Scenariusze, głos i nagrania nigdy nie opuszczają urządzenia – aplikacja działa nawet w trybie samolotowym.",
      },
      {
        h3: "🆓 Naprawdę za darmo",
        p: "Wszystkie funkcje za darmo, bez znaku wodnego i bez abonamentu. Sporadyczna reklama utrzymuje aplikację darmową; drobny jednorazowy zakup usuwa reklamy na zawsze.",
      },
    ],
    faqH2: "Najczęstsze pytania",
    faqs: [
      {
        q: "Czy ten teleprompter naprawdę jest darmowy?",
        a: "Tak. Pobranie jest bezpłatne, a wszystkie funkcje są dostępne w wersji darmowej: przewijanie głosem, nagrywanie w 4K i nieograniczona liczba scenariuszy. Od czasu do czasu pojawia się reklama; drobny jednorazowy zakup usuwa ją na zawsze. Bez abonamentu i bez znaku wodnego.",
      },
      {
        q: "Jak teleprompter przewija tekst, gdy mówię?",
        a: "Aplikacja słucha za pomocą wbudowanego rozpoznawania mowy iPhone'a i w czasie rzeczywistym porównuje wypowiadane słowa ze scenariuszem – polski jest w pełni obsługiwany. Mów szybciej, wolniej lub zrób pauzę: tekst podąża dokładnie za Twoim tempem, a po pomyłce sam odnajduje właściwe miejsce.",
      },
      {
        q: "Czy mój głos lub nagrania są gdzieś wysyłane?",
        a: "Nie. Rozpoznawanie mowy działa w 100 % na urządzeniu, z użyciem frameworków Apple. Scenariusze, głos i nagrania nigdy nie opuszczają iPhone'a – cała aplikacja działa w trybie samolotowym.",
      },
    ],
    storeAlt: "Pobierz w App Store",
    switcherLabel: "Ta strona w innych językach",
  },
  ru: {
    name: "Русский",
    storeL: "ru",
    title: "Телесуфлёр бесплатно – суфлёр поверх камеры, листает текст под вашу речь",
    description:
      "Бесплатный телесуфлёр для iPhone: текст парит поверх камеры и прокручивается сам, пока вы говорите. Запись в 4K, работает 100 % офлайн, без водяных знаков — идеально для Reels, Shorts и TikTok.",
    keywords:
      "телесуфлёр бесплатно, приложение суфлёр, телесуфлер для айфона, суфлёр поверх камеры, телесуфлер для reels, читать текст глядя в камеру",
    eyebrow: "Приложения · iOS · Бесплатно",
    freePill: "Полностью бесплатное приложение для iOS",
    h1: "Бесплатный телесуфлёр поверх камеры",
    lead: "Полностью бесплатный телесуфлёр, который накладывает текст прямо на изображение камеры и прокручивает его в темпе вашей речи. Записывайте Reels, Shorts и TikTok в 4K с идеальным зрительным контактом — ничего не нужно заучивать, никаких двадцати дублей.",
    introH2: "Читайте текст, не отводя глаз от камеры",
    introP:
      "Каждый автор знает эту проблему: вы пишете хороший сценарий, нажимаете запись — и глаза убегают от объектива, чтобы читать. Результат звучит «по бумажке», потому что так и есть. Teleprompter: Camera Overlay решает это как в теленовостях: текст лежит прямо на превью камеры, рядом с фронтальным объективом. Читать — значит смотреть в камеру.",
    featuresH2: "Чем приложение отличается",
    cards: [
      {
        h3: "🎙️ Листает, пока вы говорите",
        p: "Распознавание речи на iPhone следует за вашим голосом слово за словом — в том числе на русском. Говорите быстрее, медленнее или сделайте паузу: текст сам подстроится под ваш темп и найдёт нужное место.",
      },
      {
        h3: "🎬 Записывает, пока вы читаете",
        p: "Вертикальное видео 4K с фронтальной или основной камеры, пока текст прокручивается. Суфлёр никогда не попадает в готовое видео — вы получаете чистый ролик без водяных знаков, готовый к публикации.",
      },
      {
        h3: "✈️ 100 % офлайн и приватно",
        p: "Распознавание речи работает полностью на вашем iPhone. Сценарии, голос и видео никогда не покидают устройство — приложение работает даже в авиарежиме.",
      },
      {
        h3: "🆓 Действительно бесплатно",
        p: "Все функции бесплатны, без водяных знаков и подписок. Редкая реклама поддерживает приложение бесплатным; небольшая разовая покупка убирает её навсегда.",
      },
    ],
    faqH2: "Частые вопросы",
    faqs: [
      {
        q: "Телесуфлёр действительно бесплатный?",
        a: "Да. Загрузка бесплатна, и все функции доступны в бесплатной версии: прокрутка по голосу, запись в 4K и неограниченное количество сценариев. Иногда показывается реклама; небольшая разовая покупка убирает её навсегда. Без подписки и без водяных знаков.",
      },
      {
        q: "Как текст прокручивается, пока я говорю?",
        a: "Приложение слушает с помощью встроенного распознавания речи iPhone и в реальном времени сопоставляет произнесённые слова со сценарием — русский язык полностью поддерживается. Говорите быстрее, медленнее или остановитесь: текст точно следует вашему темпу, а после оговорки сам находит нужное место.",
      },
      {
        q: "Мой голос или видео куда-то загружаются?",
        a: "Нет. Распознавание речи работает на 100 % на устройстве с помощью фреймворков Apple. Сценарии, голос и записи никогда не покидают ваш iPhone — всё приложение работает в авиарежиме.",
      },
    ],
    storeAlt: "Загрузить в App Store",
    switcherLabel: "Эта страница на других языках",
  },
  tr: {
    name: "Türkçe",
    storeL: "tr",
    title: "Ücretsiz prompter uygulaması – kamera üzerinde metin, konuştukça kayar",
    description:
      "iPhone için ücretsiz teleprompter uygulaması: metniniz kameranın üzerinde durur ve siz konuştukça kendiliğinden kayar. 4K kayıt, %100 çevrimdışı, filigransız – Reels, Shorts ve TikTok için ideal.",
    keywords:
      "prompter uygulaması ücretsiz, teleprompter türkçe, kamera prompter, iphone teleprompter, reels için prompter, kameraya bakarak metin okuma",
    eyebrow: "Uygulamalar · iOS · Ücretsiz",
    freePill: "%100 ücretsiz iOS uygulaması",
    h1: "Kamera üzerine bindirilmiş ücretsiz prompter",
    lead: "Metninizi doğrudan kamera görüntüsünün üzerine yerleştiren ve siz konuştukça sesinizin temposunda kaydıran %100 ücretsiz bir teleprompter. Reels, Shorts ve TikTok videolarınızı 4K çekin; göz teması kusursuz olsun – ezber yok, yirmi tekrar yok.",
    introH2: "Metni okurken kameraya bakmaya devam edin",
    introP:
      "Her içerik üreticisi bu sorunu bilir: Güzel bir metin yazarsınız, kayda basarsınız ve gözleriniz okumak için objektiften kaçar. Sonuç okunmuş gibi durur, çünkü öyledir. Teleprompter: Camera Overlay bunu haber stüdyolarındaki gibi çözer: Metin, ön kameranın hemen yanında, canlı kamera önizlemesinin tam üzerinde durur. Okumak, kameraya bakmak demektir.",
    featuresH2: "Onu farklı kılan ne?",
    cards: [
      {
        h3: "🎙️ Siz konuştukça kayar",
        p: "iPhone'daki konuşma tanıma, sesinizi kelime kelime takip eder – Türkçe dahil. Hızlı konuşun, yavaşlayın ya da durun: Metin temponuzu ve kaldığınız yeri kendiliğinden bulur.",
      },
      {
        h3: "🎬 Siz okurken kaydeder",
        p: "Metin kayarken ön veya arka kamerayla dikey 4K video. Bindirilen metin videoya asla girmez – filigransız, paylaşıma hazır temiz bir klip elde edersiniz.",
      },
      {
        h3: "✈️ %100 çevrimdışı ve gizli",
        p: "Konuşma tanıma tamamen iPhone'unuzda çalışır. Metinler, ses ve videolar cihazınızdan asla çıkmaz – uygulama uçak modunda bile çalışır.",
      },
      {
        h3: "🆓 Gerçekten ücretsiz",
        p: "Tüm özellikler ücretsiz; filigran yok, abonelik yok. Ara sıra çıkan reklam uygulamayı ücretsiz tutar; küçük bir tek seferlik satın alma reklamları kalıcı olarak kaldırır.",
      },
    ],
    faqH2: "Sık sorulan sorular",
    faqs: [
      {
        q: "Prompter uygulaması gerçekten ücretsiz mi?",
        a: "Evet. İndirmek ücretsizdir ve tüm özellikler ücretsiz sürümde vardır: sesle kaydırma, 4K kayıt ve sınırsız metin. Ara sıra reklam görürsünüz; küçük bir tek seferlik satın alma reklamları kalıcı olarak kaldırır. Abonelik yok, filigran yok.",
      },
      {
        q: "Ben konuşurken metin nasıl kayıyor?",
        a: "Uygulama, iPhone'un yerleşik konuşma tanımasıyla dinler ve söylediğiniz kelimeleri gerçek zamanlı olarak metinle eşleştirir – Türkçe tam olarak desteklenir. Daha hızlı ya da daha yavaş konuşun, isterseniz durun: Metin tam temponuzda ilerler ve takılırsanız kaldığınız yeri kendiliğinden bulur.",
      },
      {
        q: "Sesim veya videolarım bir yere yükleniyor mu?",
        a: "Hayır. Konuşma tanıma, Apple'ın çerçeveleriyle %100 cihaz üzerinde çalışır. Metinleriniz, sesiniz ve kayıtlarınız iPhone'unuzdan asla çıkmaz – uygulamanın tamamı uçak modunda çalışır.",
      },
    ],
    storeAlt: "App Store'dan indir",
    switcherLabel: "Bu sayfa diğer dillerde",
  },
  uk: {
    name: "Українська",
    storeL: "uk",
    title: "Телесуфлер безкоштовно – суфлер поверх камери, гортає текст під ваш голос",
    description:
      "Безкоштовний телесуфлер для iPhone: текст висить поверх камери й прокручується сам, поки ви говорите. Запис у 4K, працює 100 % офлайн, без водяних знаків — ідеально для Reels, Shorts і TikTok.",
    keywords:
      "телесуфлер безкоштовно, додаток суфлер, телесуфлер для айфона, суфлер поверх камери, телесуфлер для reels, читати текст дивлячись у камеру",
    eyebrow: "Застосунки · iOS · Безкоштовно",
    freePill: "Повністю безкоштовний застосунок для iOS",
    h1: "Безкоштовний телесуфлер поверх камери",
    lead: "Повністю безкоштовний телесуфлер, який накладає текст просто на зображення камери та прокручує його в темпі вашого мовлення. Записуйте Reels, Shorts і TikTok у 4K з ідеальним зоровим контактом — нічого не треба вчити напам'ять, жодних двадцяти дублів.",
    introH2: "Читайте текст, не відводячи очей від камери",
    introP:
      "Кожен автор знає цю проблему: ви пишете гарний сценарій, натискаєте запис — і очі тікають від об'єктива, щоб читати. Результат звучить «з папірця», бо так і є. Teleprompter: Camera Overlay розв'язує це як у теленовинах: текст лежить просто на прев'ю камери, поруч із фронтальним об'єктивом. Читати — означає дивитися в камеру.",
    featuresH2: "Чим застосунок особливий",
    cards: [
      {
        h3: "🎙️ Гортає, поки ви говорите",
        p: "Розпізнавання мовлення на iPhone слідує за вашим голосом слово за словом — зокрема українською. Говоріть швидше, повільніше або зробіть паузу: текст сам підлаштується під ваш темп і знайде потрібне місце.",
      },
      {
        h3: "🎬 Записує, поки ви читаєте",
        p: "Вертикальне відео 4K з фронтальної або основної камери, поки текст прокручується. Суфлер ніколи не потрапляє в готове відео — ви отримуєте чистий ролик без водяних знаків, готовий до публікації.",
      },
      {
        h3: "✈️ 100 % офлайн і приватно",
        p: "Розпізнавання мовлення працює повністю на вашому iPhone. Сценарії, голос і відео ніколи не залишають пристрій — застосунок працює навіть в авіарежимі.",
      },
      {
        h3: "🆓 Справді безкоштовно",
        p: "Усі функції безкоштовні, без водяних знаків і підписок. Зрідка показується реклама, яка тримає застосунок безкоштовним; невелика разова покупка прибирає її назавжди.",
      },
    ],
    faqH2: "Часті запитання",
    faqs: [
      {
        q: "Телесуфлер справді безкоштовний?",
        a: "Так. Завантаження безкоштовне, і всі функції доступні в безкоштовній версії: прокручування голосом, запис у 4K та необмежена кількість сценаріїв. Інколи з'являється реклама; невелика разова покупка прибирає її назавжди. Без підписки та без водяних знаків.",
      },
      {
        q: "Як текст прокручується, поки я говорю?",
        a: "Застосунок слухає за допомогою вбудованого розпізнавання мовлення iPhone і в реальному часі зіставляє вимовлені слова зі сценарієм — українська підтримується повністю. Говоріть швидше, повільніше або зупиніться: текст точно слідує вашому темпу, а після обмовки сам знаходить потрібне місце.",
      },
      {
        q: "Чи завантажуються кудись мій голос або відео?",
        a: "Ні. Розпізнавання мовлення працює на 100 % на пристрої за допомогою фреймворків Apple. Сценарії, голос і записи ніколи не залишають ваш iPhone — увесь застосунок працює в авіарежимі.",
      },
    ],
    storeAlt: "Завантажити в App Store",
    switcherLabel: "Ця сторінка іншими мовами",
  },
  ar: {
    name: "العربية",
    dir: "rtl",
    storeL: "ar",
    title: "تطبيق تلقين مجاني – تيليبرومبتر فوق الكاميرا يتحرك مع صوتك",
    description:
      "تطبيق تيليبرومبتر مجاني للآيفون: النص يطفو فوق الكاميرا ويتحرك تلقائيًا أثناء كلامك. تصوير بدقة 4K، يعمل دون إنترنت بالكامل وبلا علامة مائية — مثالي لريلز وشورتس وتيك توك.",
    keywords:
      "تطبيق تلقين مجاني, تيليبرومبتر, برنامج قراءة النص اثناء التصوير, تلقين نصوص للايفون, تيليبرومبتر للريلز, قراءة السكربت مع النظر الى الكاميرا",
    eyebrow: "التطبيقات · iOS · مجاني",
    freePill: "تطبيق iOS مجاني 100٪",
    h1: "تيليبرومبتر مجاني فوق الكاميرا مباشرة",
    lead: "تطبيق تلقين مجاني بالكامل يعرض نصك فوق صورة الكاميرا مباشرة ويُحرّكه بإيقاع صوتك أثناء الكلام. صوّر ريلز وشورتس وتيك توك بدقة 4K مع تواصل بصري مثالي — من دون حفظ ومن دون عشرين محاولة.",
    introH2: "اقرأ نصك وأنت تنظر إلى الكاميرا",
    introP:
      "كل صانع محتوى يعرف المشكلة: تكتب نصًا جيدًا، تضغط تسجيل، ثم تبتعد عيناك عن العدسة لتقرأ. تبدو النتيجة وكأنها قراءة، لأنها كذلك فعلًا. يحل تطبيق Teleprompter: Camera Overlay المشكلة كما في استوديوهات الأخبار: النص موضوع فوق معاينة الكاميرا مباشرة، بجوار العدسة الأمامية. القراءة هنا تعني النظر إلى الكاميرا.",
    featuresH2: "ما الذي يميّزه",
    cards: [
      {
        h3: "🎙️ يتحرك النص أثناء كلامك",
        p: "يتابع التعرف على الكلام في الآيفون صوتك كلمة بكلمة — والعربية مدعومة. تكلّم بسرعة أو ببطء أو توقّف: يجد النص إيقاعك وموضعك تلقائيًا.",
      },
      {
        h3: "🎬 يصوّر وأنت تقرأ",
        p: "فيديو عمودي بدقة 4K بالكاميرا الأمامية أو الخلفية بينما يتحرك النص. لا يظهر النص أبدًا في الفيديو النهائي — تحصل على مقطع نظيف جاهز للنشر بلا علامة مائية.",
      },
      {
        h3: "✈️ يعمل دون إنترنت وبخصوصية تامة",
        p: "يعمل التعرف على الكلام بالكامل على جهازك. النصوص والصوت والفيديوهات لا تغادر الآيفون أبدًا — التطبيق يعمل حتى في وضع الطيران.",
      },
      {
        h3: "🆓 مجاني فعلًا",
        p: "كل الميزات مجانية، بلا علامة مائية وبلا اشتراك. إعلان عابر يُبقي التطبيق مجانيًا؛ وشراء صغير لمرة واحدة يزيل الإعلانات للأبد.",
      },
    ],
    faqH2: "الأسئلة الشائعة",
    faqs: [
      {
        q: "هل التطبيق مجاني فعلًا؟",
        a: "نعم. التنزيل مجاني وكل الميزات متاحة في النسخة المجانية: تحريك النص بالصوت، والتصوير بدقة 4K، ونصوص غير محدودة. يظهر إعلان من حين لآخر؛ وشراء صغير لمرة واحدة يزيل الإعلانات نهائيًا. لا اشتراك ولا علامة مائية.",
      },
      {
        q: "كيف يتحرك النص أثناء كلامي؟",
        a: "يستمع التطبيق عبر التعرف على الكلام المدمج في الآيفون ويطابق كلماتك المنطوقة مع النص لحظيًا — والعربية مدعومة بالكامل. تكلّم أسرع أو أبطأ أو توقّف: يتبع النص إيقاعك تمامًا، وإذا تلعثمت يجد موضعك من جديد تلقائيًا.",
      },
      {
        q: "هل يُرفع صوتي أو فيديوهاتي إلى أي مكان؟",
        a: "لا. يعمل التعرف على الكلام بنسبة 100٪ على الجهاز باستخدام أُطر Apple. نصوصك وصوتك وتسجيلاتك لا تغادر الآيفون أبدًا — التطبيق كله يعمل في وضع الطيران.",
      },
    ],
    storeAlt: "التنزيل من App Store",
    switcherLabel: "هذه الصفحة بلغات أخرى",
  },
  hi: {
    name: "हिन्दी",
    storeL: "hi",
    title: "टेलीप्रॉम्प्टर ऐप मुफ़्त – कैमरे पर स्क्रिप्ट, बोलते ही अपने आप स्क्रॉल",
    description:
      "iPhone के लिए मुफ़्त टेलीप्रॉम्प्टर ऐप: स्क्रिप्ट कैमरे के ऊपर दिखती है और आपके बोलते ही अपने आप स्क्रॉल होती है। 4K रिकॉर्डिंग, 100% ऑफ़लाइन, बिना वॉटरमार्क — Reels, Shorts और TikTok के लिए बेहतरीन।",
    keywords:
      "टेलीप्रॉम्प्टर ऐप, teleprompter app free, टेलीप्रॉम्प्टर मुफ़्त, कैमरा टेलीप्रॉम्प्टर, reels के लिए teleprompter, कैमरे में देखकर स्क्रिप्ट पढ़ना",
    eyebrow: "ऐप्स · iOS · मुफ़्त",
    freePill: "100% मुफ़्त iOS ऐप",
    h1: "कैमरे के ऊपर चलने वाला मुफ़्त टेलीप्रॉम्प्टर",
    lead: "एक 100% मुफ़्त टेलीप्रॉम्प्टर जो आपकी स्क्रिप्ट को सीधे कैमरा प्रीव्यू के ऊपर रखता है और आपकी आवाज़ की रफ़्तार से स्क्रॉल करता है। Reels, Shorts और TikTok वीडियो 4K में रिकॉर्ड करें — कैमरे से नज़रें हटाए बिना, कुछ भी याद किए बिना, बीस रीटेक के बिना।",
    introH2: "स्क्रिप्ट पढ़ें और फिर भी कैमरे में देखें",
    introP:
      "हर क्रिएटर यह समस्या जानता है: आप अच्छी स्क्रिप्ट लिखते हैं, रिकॉर्ड दबाते हैं, और पढ़ने के लिए आपकी नज़रें लेंस से हट जाती हैं। वीडियो पढ़ा हुआ लगता है, क्योंकि वह पढ़ा ही जा रहा है। Teleprompter: Camera Overlay इसे न्यूज़ स्टूडियो की तरह हल करता है — स्क्रिप्ट सीधे कैमरा प्रीव्यू के ऊपर, फ्रंट लेंस के ठीक बगल में दिखती है। यानी पढ़ना ही कैमरे में देखना है।",
    featuresH2: "यह ऐप अलग क्यों है",
    cards: [
      {
        h3: "🎙️ बोलते ही स्क्रॉल होती है",
        p: "iPhone की स्पीच रिकग्निशन आपकी आवाज़ को शब्द-दर-शब्द फॉलो करती है — हिन्दी में भी। तेज़ बोलें, धीरे बोलें या रुक जाएँ: स्क्रिप्ट आपकी रफ़्तार और जगह अपने आप पकड़ लेती है।",
      },
      {
        h3: "🎬 पढ़ते-पढ़ते रिकॉर्ड करें",
        p: "स्क्रिप्ट स्क्रॉल होते हुए फ्रंट या बैक कैमरे से पोर्ट्रेट 4K वीडियो। ओवरले कभी वीडियो में नहीं आता — आपको बिना वॉटरमार्क, पोस्ट के लिए तैयार साफ़ क्लिप मिलती है।",
      },
      {
        h3: "✈️ 100% ऑफ़लाइन और निजी",
        p: "स्पीच रिकग्निशन पूरी तरह आपके iPhone पर चलती है। स्क्रिप्ट, आवाज़ और वीडियो कभी डिवाइस से बाहर नहीं जाते — ऐप एयरप्लेन मोड में भी काम करता है।",
      },
      {
        h3: "🆓 सचमुच मुफ़्त",
        p: "सारे फ़ीचर मुफ़्त, न वॉटरमार्क, न सब्सक्रिप्शन। कभी-कभार दिखने वाला विज्ञापन ऐप को मुफ़्त रखता है; एक छोटी एक-बार की खरीद से विज्ञापन हमेशा के लिए हट जाते हैं।",
      },
    ],
    faqH2: "अक्सर पूछे जाने वाले सवाल",
    faqs: [
      {
        q: "क्या टेलीप्रॉम्प्टर ऐप सच में मुफ़्त है?",
        a: "हाँ। डाउनलोड मुफ़्त है और सारे फ़ीचर मुफ़्त वर्ज़न में मिलते हैं — आवाज़ से स्क्रॉलिंग, 4K रिकॉर्डिंग और अनलिमिटेड स्क्रिप्ट। कभी-कभार विज्ञापन दिखता है; एक छोटी एक-बार की खरीद से विज्ञापन हमेशा के लिए हट जाते हैं। न कोई सब्सक्रिप्शन, न वॉटरमार्क।",
      },
      {
        q: "बोलते समय स्क्रिप्ट कैसे स्क्रॉल होती है?",
        a: "ऐप iPhone की इन-बिल्ट स्पीच रिकग्निशन से सुनता है और आपके बोले शब्दों को रीयल-टाइम में स्क्रिप्ट से मिलाता है — हिन्दी पूरी तरह सपोर्टेड है। तेज़ बोलें, धीरे बोलें या रुक जाएँ: टेक्स्ट ठीक आपकी रफ़्तार से चलता है, और अटकने पर आपकी जगह अपने आप ढूँढ लेता है।",
      },
      {
        q: "क्या मेरी आवाज़ या वीडियो कहीं अपलोड होते हैं?",
        a: "नहीं। स्पीच रिकग्निशन Apple के फ्रेमवर्क से 100% डिवाइस पर ही चलती है। आपकी स्क्रिप्ट, आवाज़ और रिकॉर्डिंग कभी iPhone से बाहर नहीं जातीं — पूरा ऐप एयरप्लेन मोड में काम करता है।",
      },
    ],
    storeAlt: "App Store से डाउनलोड करें",
    switcherLabel: "यह पेज अन्य भाषाओं में",
  },
  ja: {
    name: "日本語",
    storeL: "ja",
    title: "プロンプターアプリ 無料 – カメラに原稿を重ねて、話すだけで自動スクロール",
    description:
      "iPhone向け無料テレプロンプターアプリ。原稿がカメラ映像の上に浮かび、話す速さに合わせて自動でスクロール。4K撮影、完全オフライン、透かしなし。リール・ショート・TikTokの撮影に最適。",
    keywords:
      "プロンプターアプリ 無料, テレプロンプター アプリ, カンペ アプリ, iphone プロンプター, リール 台本 読みながら撮影, カメラ目線 原稿",
    eyebrow: "アプリ · iOS · 無料",
    freePill: "100%無料のiOSアプリ",
    h1: "カメラに重なる無料プロンプター",
    lead: "原稿をカメラ映像の真上に表示し、あなたが話す速さに合わせて自動でスクロールする、完全無料のテレプロンプターです。リール・ショート・TikTokを4Kで撮影しながら、視線はずっとカメラのまま。暗記も、20回の撮り直しも要りません。",
    introH2: "原稿を読みながら、カメラ目線をキープ",
    introP:
      "クリエイターなら誰でも経験があります。良い台本を書いて録画を始めても、読むために視線がレンズから外れてしまう。結果は「読んでいる感」丸出しの動画に。Teleprompter: Camera Overlayは、ニュース番組と同じ方法でこれを解決します。原稿はカメラのプレビューの真上、フロントレンズのすぐ横に表示されるので、読むこと＝カメラを見ることになります。",
    featuresH2: "このアプリの特長",
    cards: [
      {
        h3: "🎙️ 話すだけで自動スクロール",
        p: "iPhoneの音声認識があなたの声を一語ずつ追いかけます。日本語にも対応。速く話しても、ゆっくりでも、途中で止まっても、原稿はあなたのペースと現在位置を自動で見つけます。",
      },
      {
        h3: "🎬 読みながら録画",
        p: "原稿がスクロールする間、フロント/バックカメラで縦向き4K動画を撮影。オーバーレイは動画には一切写らず、透かしのないクリーンな投稿用クリップが手に入ります。",
      },
      {
        h3: "✈️ 完全オフライン・プライベート",
        p: "音声認識はすべてiPhone上で動作。原稿・音声・動画が端末の外に出ることはありません。機内モードでも使えます。",
      },
      {
        h3: "🆓 本当に無料",
        p: "全機能が無料、透かしなし、サブスクなし。ときどき表示される広告が無料を支えており、少額の買い切りで広告を永久に削除できます。",
      },
    ],
    faqH2: "よくある質問",
    faqs: [
      {
        q: "本当に無料で使えますか？",
        a: "はい。ダウンロードは無料で、音声スクロール、4K撮影、原稿数無制限など、すべての機能を無料版で使えます。ときどき広告が表示されますが、少額の買い切り購入で永久に非表示にできます。サブスクリプションも透かしもありません。",
      },
      {
        q: "話すと原稿がスクロールする仕組みは？",
        a: "iPhone内蔵の音声認識で聞き取り、話した言葉と原稿をリアルタイムで照合します。日本語も完全対応。速く話しても、ゆっくりでも、途中で止まっても原稿はあなたのペースに追従し、言い直しても現在位置を自動で見つけ直します。",
      },
      {
        q: "音声や動画がアップロードされることはありますか？",
        a: "ありません。音声認識はAppleのフレームワークで100%端末上で動作し、原稿・音声・録画がiPhoneの外に出ることはありません。アプリ全体が機内モードでも動作します。",
      },
    ],
    storeAlt: "App Storeでダウンロード",
    switcherLabel: "他の言語でこのページを見る",
  },
  ko: {
    name: "한국어",
    storeL: "ko",
    title: "무료 프롬프터 앱 – 카메라 위 대본, 말하면 자동 스크롤",
    description:
      "아이폰용 무료 텔레프롬프터 앱: 대본이 카메라 화면 위에 떠 있고 말하는 속도에 맞춰 자동으로 스크롤됩니다. 4K 촬영, 100% 오프라인, 워터마크 없음 — 릴스·쇼츠·틱톡 촬영에 최적.",
    keywords:
      "프롬프터 앱 무료, 텔레프롬프터 앱, 아이폰 프롬프터, 카메라 프롬프터, 릴스 대본 앱, 카메라 보면서 대본 읽기",
    eyebrow: "앱 · iOS · 무료",
    freePill: "100% 무료 iOS 앱",
    h1: "카메라 위에 겹쳐지는 무료 프롬프터",
    lead: "대본을 카메라 화면 바로 위에 띄우고 말하는 속도에 맞춰 자동으로 스크롤하는 100% 무료 텔레프롬프터입니다. 릴스·쇼츠·틱톡을 4K로 촬영하면서 시선은 계속 카메라에 — 외울 필요도, 스무 번 다시 찍을 필요도 없습니다.",
    introH2: "대본을 읽으면서도 카메라를 바라보세요",
    introP:
      "크리에이터라면 누구나 아는 문제입니다. 좋은 대본을 쓰고 녹화를 시작해도, 읽으려면 시선이 렌즈에서 벗어나죠. 결과물은 '읽는 티'가 나는 영상이 됩니다. Teleprompter: Camera Overlay는 뉴스 스튜디오와 같은 방식으로 해결합니다. 대본이 전면 렌즈 바로 옆, 카메라 미리보기 위에 표시되므로 읽는 것이 곧 카메라를 보는 것입니다.",
    featuresH2: "이 앱이 다른 점",
    cards: [
      {
        h3: "🎙️ 말하면 스크롤",
        p: "아이폰의 음성 인식이 목소리를 단어 단위로 따라갑니다. 한국어도 지원. 빠르게 말하든, 천천히 말하든, 잠시 멈추든 대본이 속도와 위치를 알아서 찾아갑니다.",
      },
      {
        h3: "🎬 읽는 동안 촬영",
        p: "대본이 스크롤되는 동안 전면 또는 후면 카메라로 세로 4K 영상을 촬영합니다. 오버레이는 영상에 절대 찍히지 않아 워터마크 없는 깔끔한 클립을 얻습니다.",
      },
      {
        h3: "✈️ 100% 오프라인·프라이버시",
        p: "음성 인식은 전부 아이폰에서 실행됩니다. 대본·음성·영상이 기기 밖으로 나가지 않으며, 비행기 모드에서도 작동합니다.",
      },
      {
        h3: "🆓 진짜 무료",
        p: "모든 기능 무료, 워터마크 없음, 구독 없음. 가끔 표시되는 광고가 앱을 무료로 유지하며, 소액의 일회성 구매로 광고를 영구 제거할 수 있습니다.",
      },
    ],
    faqH2: "자주 묻는 질문",
    faqs: [
      {
        q: "정말 무료인가요?",
        a: "네. 다운로드는 무료이며 음성 스크롤, 4K 촬영, 무제한 대본 등 모든 기능을 무료 버전에서 사용할 수 있습니다. 가끔 광고가 표시되며, 소액의 일회성 구매로 영구 제거할 수 있습니다. 구독도 워터마크도 없습니다.",
      },
      {
        q: "말하면 대본이 어떻게 스크롤되나요?",
        a: "아이폰에 내장된 음성 인식으로 듣고, 말한 단어를 실시간으로 대본과 대조합니다. 한국어도 완벽 지원. 빠르게, 천천히, 또는 잠시 멈춰도 텍스트가 정확히 내 속도를 따라오고, 말이 꼬여도 현재 위치를 자동으로 다시 찾습니다.",
      },
      {
        q: "제 목소리나 영상이 어딘가로 업로드되나요?",
        a: "아니요. 음성 인식은 Apple 프레임워크로 100% 기기에서 실행됩니다. 대본·음성·녹화 영상은 아이폰 밖으로 나가지 않으며, 앱 전체가 비행기 모드에서도 작동합니다.",
      },
    ],
    storeAlt: "App Store에서 다운로드",
    switcherLabel: "다른 언어로 보기",
  },
  zh: {
    name: "中文",
    storeL: "zh-Hans",
    title: "免费提词器App – 台词悬浮在相机上，边说边自动滚动",
    description:
      "iPhone免费提词器App：文稿悬浮在相机画面上，跟着你的语速自动滚动。支持4K录制，100%离线运行，无水印——拍Reels、Shorts和短视频的理想选择。",
    keywords:
      "提词器app免费, 提词器软件, 悬浮提词器, iphone提词器, 拍视频看稿神器, 边看稿边看镜头",
    eyebrow: "应用 · iOS · 免费",
    freePill: "100%免费的iOS应用",
    h1: "悬浮在相机上的免费提词器",
    lead: "一款100%免费的提词器：文稿直接叠加在相机画面上，随着你的语速自动滚动。以4K拍摄Reels、Shorts和短视频，全程保持眼神交流——不用背稿，也不用重拍二十遍。",
    introH2: "边读稿，边看镜头",
    introP:
      "每个创作者都遇到过这个问题：写好了台词，按下录制，眼睛却离开镜头去看稿。成片一听就是在念稿——因为确实是在念。Teleprompter: Camera Overlay 用新闻主播的方式解决它：文稿直接显示在相机预览画面上、前置镜头旁边，读稿就等于看镜头。",
    featuresH2: "它的与众不同之处",
    cards: [
      {
        h3: "🎙️ 边说边滚动",
        p: "iPhone的语音识别逐字跟随你的声音——支持中文。说快、说慢或停顿，文稿都会自动匹配你的语速和位置。",
      },
      {
        h3: "🎬 边读边录制",
        p: "文稿滚动的同时，用前置或后置摄像头录制竖屏4K视频。提词内容绝不会出现在成片里——你得到的是无水印、可直接发布的干净视频。",
      },
      {
        h3: "✈️ 100%离线、保护隐私",
        p: "语音识别完全在iPhone本地运行。文稿、声音和视频从不离开设备——开飞行模式也能用。",
      },
      {
        h3: "🆓 真正免费",
        p: "所有功能免费，无水印、无订阅。偶尔出现的广告让App保持免费；一次性小额购买即可永久去除广告。",
      },
    ],
    faqH2: "常见问题",
    faqs: [
      {
        q: "这款提词器真的免费吗？",
        a: "是的。下载免费，所有功能都在免费版中可用：语音滚动、4K录制、不限文稿数量。偶尔会显示广告；一次性小额购买即可永久去除。没有订阅，也没有水印。",
      },
      {
        q: "文稿是怎么跟着我说话滚动的？",
        a: "App使用iPhone内置的语音识别实时聆听，并将你说出的词语与文稿逐字匹配——完整支持中文。说快、说慢或停顿，文字都精准跟随你的节奏；说错了重来，它也会自动找回你的位置。",
      },
      {
        q: "我的声音或视频会被上传吗？",
        a: "不会。语音识别通过Apple的框架100%在设备本地运行，你的文稿、声音和录像从不离开iPhone——整个App在飞行模式下也能正常使用。",
      },
    ],
    storeAlt: "在 App Store 下载",
    switcherLabel: "其他语言版本",
  },
  vi: {
    name: "Tiếng Việt",
    storeL: "vi",
    title: "Ứng dụng máy nhắc chữ miễn phí – kịch bản nổi trên camera, cuộn theo giọng nói",
    description:
      "Ứng dụng máy nhắc chữ (teleprompter) miễn phí cho iPhone: kịch bản nổi trên khung hình camera và tự cuộn theo tốc độ bạn nói. Quay 4K, hoạt động 100% ngoại tuyến, không watermark — lý tưởng cho Reels, Shorts và TikTok.",
    keywords:
      "máy nhắc chữ, teleprompter miễn phí, ứng dụng nhắc kịch bản, teleprompter iphone, đọc kịch bản khi quay video, nhắc chữ cho reels",
    eyebrow: "Ứng dụng · iOS · Miễn phí",
    freePill: "Ứng dụng iOS miễn phí 100%",
    h1: "Máy nhắc chữ miễn phí phủ trên camera",
    lead: "Một máy nhắc chữ miễn phí 100%, hiển thị kịch bản ngay trên khung hình camera và tự cuộn theo tốc độ giọng nói của bạn. Quay Reels, Shorts và TikTok ở 4K với ánh mắt luôn hướng vào ống kính — không cần học thuộc, không cần quay lại hai mươi lần.",
    introH2: "Đọc kịch bản mà vẫn nhìn thẳng vào camera",
    introP:
      "Nhà sáng tạo nào cũng gặp vấn đề này: bạn viết một kịch bản hay, bấm quay, rồi mắt lại rời ống kính để đọc. Video trông như đang đọc — vì đúng là đang đọc. Teleprompter: Camera Overlay giải quyết theo cách của các bản tin truyền hình: kịch bản nằm ngay trên khung xem trước của camera, sát ống kính trước. Đọc chính là nhìn vào camera.",
    featuresH2: "Điều làm nên khác biệt",
    cards: [
      {
        h3: "🎙️ Cuộn theo lời bạn nói",
        p: "Nhận dạng giọng nói trên iPhone theo sát giọng bạn từng từ một — hỗ trợ cả tiếng Việt. Nói nhanh, nói chậm hay tạm dừng: kịch bản tự tìm đúng nhịp và đúng vị trí của bạn.",
      },
      {
        h3: "🎬 Quay trong khi bạn đọc",
        p: "Video dọc 4K bằng camera trước hoặc sau trong khi kịch bản cuộn. Phần chữ không bao giờ xuất hiện trong video — bạn nhận được clip sạch, sẵn sàng đăng, không watermark.",
      },
      {
        h3: "✈️ 100% ngoại tuyến và riêng tư",
        p: "Nhận dạng giọng nói chạy hoàn toàn trên iPhone của bạn. Kịch bản, giọng nói và video không bao giờ rời khỏi thiết bị — ứng dụng hoạt động cả ở chế độ máy bay.",
      },
      {
        h3: "🆓 Miễn phí thật sự",
        p: "Mọi tính năng đều miễn phí, không watermark, không thuê bao. Quảng cáo thi thoảng giúp ứng dụng miễn phí; một lần mua nhỏ sẽ gỡ quảng cáo vĩnh viễn.",
      },
    ],
    faqH2: "Câu hỏi thường gặp",
    faqs: [
      {
        q: "Ứng dụng máy nhắc chữ này có thật sự miễn phí không?",
        a: "Có. Tải về miễn phí và mọi tính năng đều dùng được ở bản miễn phí: cuộn theo giọng nói, quay 4K và số kịch bản không giới hạn. Thi thoảng có quảng cáo; một lần mua nhỏ sẽ gỡ quảng cáo vĩnh viễn. Không thuê bao, không watermark.",
      },
      {
        q: "Kịch bản cuộn theo lời nói như thế nào?",
        a: "Ứng dụng lắng nghe bằng nhận dạng giọng nói tích hợp của iPhone và so khớp từng từ bạn nói với kịch bản theo thời gian thực — tiếng Việt được hỗ trợ đầy đủ. Nói nhanh hơn, chậm hơn hay dừng lại: chữ chạy đúng nhịp của bạn, và nếu bạn vấp, nó tự tìm lại đúng vị trí.",
      },
      {
        q: "Giọng nói hay video của tôi có bị tải lên đâu không?",
        a: "Không. Nhận dạng giọng nói chạy 100% trên thiết bị bằng các framework của Apple. Kịch bản, giọng nói và bản ghi của bạn không bao giờ rời khỏi iPhone — toàn bộ ứng dụng hoạt động ở chế độ máy bay.",
      },
    ],
    storeAlt: "Tải trên App Store",
    switcherLabel: "Trang này bằng ngôn ngữ khác",
  },
};

export const LOCALE_CODES = Object.keys(LOCALES);

// <link rel="alternate" hreflang> entries shared by the English page and
// every localized page: 17 language variants + x-default → English.
export const HREFLANG_LINKS = [
  { hrefLang: "en", href: BASE_URL },
  ...LOCALE_CODES.map((code) => ({
    hrefLang: code,
    href: `${BASE_URL}/${code}`,
  })),
  { hrefLang: "x-default", href: BASE_URL },
];

const SwitcherRow = styled.nav`
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #ececea;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
  font-size: 13.5px;
  color: #64748b;
  line-height: 2;

  span.label {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 6px;
  }

  a {
    color: #475569;
    text-decoration: none;
    border-bottom: 1px solid #e2e8f0;
    white-space: nowrap;
  }
  a:hover {
    color: #111827;
    border-color: #111827;
  }
`;

// Plain-link language switcher. `current` is a locale code or "en".
export const LanguageSwitcher = ({ current = "en", label = "Other languages" }) => {
  const entries = [
    { code: "en", name: "English", href: "/apps/teleprompter-camera-overlay" },
    ...LOCALE_CODES.map((code) => ({
      code,
      name: LOCALES[code].name,
      href: `/apps/teleprompter-camera-overlay/${code}`,
    })),
  ].filter((e) => e.code !== current);

  return (
    <SwitcherRow dir="ltr" aria-label="Language switcher">
      <span className="label">{label}</span>
      {entries.map((e, i) => (
        <span key={e.code}>
          {i > 0 && " · "}
          <Link href={e.href}>{e.name}</Link>
        </span>
      ))}
    </SwitcherRow>
  );
};

// Italiano — pagine delle nuove app. I campi mancanti ereditano l'inglese.
export default {
  "electrician-calculator": {
    head: {
      title: "Calcolatrice per elettricisti su iPhone: caduta di tensione, sezione, tubo e scatola (offline)",
      description:
        "Otto calcolatrici per elettricisti basate sul NEC in una sola app iPhone offline: caduta di tensione, sezione con declassamento, riempimento di tubo e scatola, carico e interruttore, legge di Ohm, codice resistori e tabelle. Acquisto unico, nessun abbonamento, 19 lingue.",
      keywords:
        "calcolatrice elettricista, calcolo caduta di tensione, calcolo sezione cavo, calcolo portata, riempimento tubo, riempimento scatola, calcolo interruttore, legge di ohm, calcolatrice nec, calcolatrice elettrica iphone, awg",
      ogTitle: "Electrician Calculator Toolkit: caduta di tensione, sezione, tubo e scatola su iPhone",
      ogDescription: "Otto calcolatrici da cantiere basate sulle tabelle NEC 2023, completamente offline. Acquisto unico, nessun abbonamento.",
    },
    h1: "Una calcolatrice per elettricisti in cantiere: caduta di tensione, sezione, riempimento tubo e scatola, offline",
    answer:
      "Electrician Calculator Toolkit porta sull'iPhone otto calcolatrici basate sul NEC statunitense: caduta di tensione (monofase, trifase, CC), sezione con la regola del 125 % e la correzione per temperatura e numero di conduttori, riempimento tubo per EMT, PVC, RMC e IMC, riempimento scatola secondo 314.16, carico e interruttore dai watt, legge di Ohm, codice colori dei resistori e le tabelle di riferimento dietro ogni calcolo. Ogni risultato indica la tabella da cui proviene. Funziona senza rete, senza account e senza abbonamento, in 19 lingue.",
    quickFacts: [
      ["Prezzo", "Acquisto unico. Nessun abbonamento"],
      ["Strumenti", "Caduta di tensione, sezione, tubo, scatola, carico e interruttore, legge di Ohm, resistori, tabelle"],
      ["Base", "Tabelle NEC 2023 (NFPA 70)"],
      ["Privacy", "Offline, nessun account, nessuna analisi"],
    ],
    screenshotsTitle: "Cosa ottieni: un risultato, la tabella da cui viene e la sezione più piccola che passa",
    screenshots: [
      { alt: "Calcolatrice di caduta di tensione su iPhone con caduta in volt e percentuale e sezione minima per il 3 %", caption: "Caduta di tensione con la sezione minima per il 3 %" },
      { alt: "Calcolatrice di sezione con correzione per temperatura ambiente e numero di conduttori", caption: "Sezione con declassamento integrato" },
      { alt: "Calcolatrice di riempimento tubo che confronta la misura minima in EMT, PVC, RMC e IMC", caption: "Riempimento tubo su cinque tipi di canalizzazione" },
    ],
    howTo: {
      title: "Come dimensionare un circuito in meno di un minuto",
      intro: "In cantiere le domande sono quasi sempre le stesse tre: la caduta di tensione passa, che cavo tiro e che tubo serve. Ecco il flusso.",
      steps: [
        { name: "Carico e interruttore", text: "Inserisci watt, tensione e fasi. Segna il carico come continuo se dura tre ore o più. Ottieni corrente di carico, corrente di progetto al 125 %, il prossimo interruttore standard da 240.6(A) e il conduttore minimo a 75 °C." },
        { name: "Sezione cavo", text: "Apri Sezione con quella corrente, imposta temperatura dei terminali, temperatura ambiente e quanti conduttori attivi condividono la canalizzazione. L'app applica 310.15(B)(1) e 310.15(C)(1) e mostra la portata corretta di ogni sezione vicina." },
        { name: "Caduta di tensione", text: "Inserisci la lunghezza di sola andata. Se la caduta supera il 3 %, l'app mostra già il conduttore più piccolo che passa. Passa all'alluminio o aggiungi gruppi in parallelo per confrontare." },
        { name: "Riempimento tubo", text: "Aggiungi i conduttori (sezione, isolamento, quantità) e leggi la misura minima per EMT, PVC Schedule 40 e 80, RMC e IMC affiancate." },
      ],
    },
    featuresTitle: "Otto strumenti, un tocco ciascuno",
    features: [
      { title: "Caduta di tensione", text: "ΔV = 2·K·I·L ÷ CM per monofase e CC, 1,732 per trifase; K = 12,9 rame / 21,2 alluminio. Piedi o metri, da #14 AWG a 750 kcmil, gruppi in parallelo e la sezione più piccola sotto il 3 %." },
      { title: "Sezione cavo (portata)", text: "Tabella 310.16 per rame e alluminio a 60/75/90 °C, regola del 125 % per carichi continui, correzione ambiente, correzione per numero di conduttori e limiti 240.4(D) per le sezioni piccole." },
      { title: "Riempimento tubo", text: "Capitolo 9, tabelle 1, 4 e 5: qualsiasi mix di THHN/THWN, XHHW e THW, misura minima per tipo di canalizzazione o numero massimo di un conduttore in un tubo dato." },
      { title: "Riempimento scatola", text: "Volumi secondo 314.16(B) per conduttori, fermacavi, supporti, dispositivi e terre, con verifica rispetto alla scatola che hai." },
      { title: "Carico e interruttore, legge di Ohm, resistori", text: "Da watt ad ampere, interruttore e cavo in una schermata; due valori qualsiasi tra V, I, R e P; decodifica resistori a quattro e cinque fasce." },
      { title: "Tabelle del codice", text: "Portata, interruttori standard, fattori di declassamento, volumi scatole e colori dei cavi USA e IEC, sempre a un tocco." },
    ],
    intentsTitle: "Domande a cui risponde questa app",
    intents: [
      { h: "Come calcolo la caduta di tensione di un circuito terminale?", p: "Inserisci tensione, corrente, sezione, materiale e lunghezza di andata. L'app restituisce la caduta in volt e percentuale e la tensione al carico, segnalando ciò che supera i limiti indicativi del 3 % (terminale) e 5 % (totale) di 210.19(A)." },
      { h: "Che sezione serve per un circuito da 50 ampere?", p: "Per un carico continuo di 40 A (50 A richiesti) in rame a 75 °C, la tabella 310.16 dà #8 AWG. Se fa caldo o più di tre conduttori attivi condividono la canalizzazione, l'app applica i fattori e sale di una sezione quando serve." },
      { h: "Quanti #12 THHN entrano in un EMT da 3/4 di pollice?", p: "Sedici, secondo il capitolo 9: tabella 1 (40 %), tabella 4 (area dell'EMT) e tabella 5 (area del THHN). La modalità Max conduttori risponde per qualsiasi sezione, isolamento e canalizzazione." },
      { h: "L'app ha bisogno di internet o di un account?", p: "No. Tutte le tabelle sono nell'app; nulla viene scaricato o caricato. Nessun account, analisi, pubblicità o abbonamento." },
    ],
    compare: {
      title: "Electrician Calculator Toolkit rispetto al libro del codice e alle calcolatrici gratuite monofunzione",
      intro: "Il libro fa testo, ma sfogliarlo con i guanti è lento. Le calcolatrici gratuite coprono un calcolo ciascuna e di solito si pagano con la pubblicità. Questa app riunisce gli otto calcoli quotidiani con il riferimento alla tabella su ogni risultato.",
      columns: ["", "Electrician Calculator Toolkit", "Libro del NEC", "App gratuite monofunzione"],
      rows: [
        ["Caduta, sezione, tubo e scatola in un unico posto", "✓ Otto strumenti", "✓ Tutte le tabelle, calcolo a mano", "✗ Uno strumento per app"],
        ["Declassamento applicato in automatico", "✓ Ambiente + numero conduttori", "✗ Manuale", "Varia"],
        ["Indica la tabella di origine del risultato", "✓ In ogni schermata", "✓ È la tabella", "✗ Raramente"],
        ["Funziona offline", "✓ Sì", "✓ Sì", "✗ Di solito servono le pubblicità"],
        ["Lingue", "19", "Inglese", "Di solito una"],
        ["Prezzo", "Acquisto unico", "Prezzo del libro", "Gratis con pubblicità"],
      ],
    },
    faqs: [
      { q: "Da quale edizione del codice vengono le tabelle?", a: "Dall'edizione 2023 di NFPA 70, il National Electrical Code. La tua giurisdizione può applicare un'edizione precedente o modifiche locali: considera i risultati un ausilio di calcolo e verifica con il codice adottato e il tuo ispettore." },
      { q: "La sezione include il declassamento?", a: "Sì: la regola del 125 % per carichi continui, la correzione per temperatura ambiente di 310.15(B)(1), la correzione per più di tre conduttori attivi di 310.15(C)(1) e i limiti 240.4(D) per #14, #12 e #10." },
      { q: "Quali tubi e isolamenti sono coperti?", a: "EMT, PVC Schedule 40, PVC Schedule 80, RMC e IMC, con le aree THHN/THWN, XHHW e THW della tabella 5 del capitolo 9." },
      { q: "Posso usare unità metriche?", a: "La lunghezza si inserisce in metri e la temperatura ambiente in °C o °F. Le sezioni seguono AWG/kcmil, come le tabelle." },
      { q: "È un abbonamento?", a: "No. È un acquisto unico senza acquisti in-app." },
      { q: "È affiliata alla NFPA?", a: "No. NEC e National Electrical Code sono marchi registrati della National Fire Protection Association, che non sponsorizza né approva questa app." },
      { q: "Esiste una versione Android?", a: "Non ancora. L'app iPhone esce per prima; una versione Android è prevista e questa pagina rimanderà a Google Play quando sarà disponibile." },
    ],
    related: [
      { blurb: "Fotografa uno scontrino, imposta la durata della garanzia, ricevi un promemoria prima della scadenza. Offline, acquisto unico." },
      { blurb: "Confronta il prezzo per unità, aggiungi l'imposta, applica uno sconto. Gratis." },
      { blurb: "Registra caffè e tè, vedi quanta caffeina è ancora in circolo e imposta un orario limite prima di dormire. Gratis." },
    ],
    disclaimer:
      "Electrician Calculator Toolkit è un ausilio di calcolo e non sostituisce il codice, il giudizio tecnico o l'autorità competente. NEC e National Electrical Code sono marchi registrati della National Fire Protection Association, che non sponsorizza né approva questa app.",
  },
  "warranty-tracker": {
    head: {
      title: "App per gestire le garanzie su iPhone: foto degli scontrini, avvisi di scadenza, offline",
      description: "Tieni sotto controllo tutte le garanzie sull'iPhone: fotografa lo scontrino, imposta la durata della garanzia, ricevi un avviso prima della scadenza. Offline, senza account, senza abbonamento. Acquisto unico, 19 lingue.",
      keywords: "app garanzie, app gestione garanzie iphone, app scontrini, conservare scontrini app, promemoria garanzia, organizer garanzie, app ricevute offline, garanzia elettrodomestici app, scadenza garanzia",
      ogTitle: "Garanzie e Scontrini: ogni garanzia con il suo scontrino, a colpo d'occhio",
      ogDescription: "Fotografa lo scontrino, imposta la durata della garanzia, ricevi un avviso prima della scadenza. Offline, acquisto unico, senza account.",
    },
    h1: "Un gestore di garanzie che conserva lo scontrino e ti avvisa prima della scadenza, offline",
    answer: "Garanzie e Scontrini salva ogni prodotto acquistato con la foto dello scontrino, la data di acquisto, il prezzo, il numero di serie e la durata della garanzia, poi ti avvisa prima che la garanzia finisca. Vedi quanti articoli sono attivi, in scadenza o scaduti e il valore totale ancora coperto. Tutto resta sul tuo iPhone: nessun account, nessun cloud, nessun abbonamento, nessuna pubblicità. Acquisto unico, disponibile in 19 lingue.",
    quickFacts: [
      ["Prezzo", "Acquisto unico. Nessun abbonamento"],
      ["Salva", "Foto dello scontrino e del prodotto, data di acquisto, prezzo, negozio, numero di serie, note"],
      ["Avvisi", "Notifiche locali 90, 60, 30, 14, 7 o 1 giorno prima della scadenza"],
      ["Privacy", "Offline, nessun account, nessuna analisi, esportazione CSV"],
    ],
    screenshotsTitle: "Cosa ottieni: tutte le garanzie a colpo d'occhio, lo scontrino allegato, un avviso prima che sia tardi",
    screenshots: [
      { alt: "Schermata iniziale del gestore garanzie su iPhone con conteggio di attive, in scadenza e scadute e un elenco di prodotti con i giorni rimanenti", caption: "Tutte le garanzie, a colpo d'occhio" },
      { alt: "Dettaglio di un articolo con foto dello scontrino, data di acquisto, prezzo, numero di serie e conto alla rovescia della garanzia", caption: "Lo scontrino, proprio quando serve" },
      { alt: "Modulo di aggiunta con nome, negozio, prezzo, data di acquisto e pulsanti per la durata della garanzia", caption: "Aggiungilo in 20 secondi" },
      { alt: "Impostazioni degli avvisi con anticipo di 30 e 7 giorni e ora del giorno", caption: "Avvisato prima della scadenza" },
    ],
    howTo: {
      title: "Come registrare una garanzia in meno di un minuto",
      intro: "Il momento migliore per salvare uno scontrino è il giorno in cui te lo danno. Il flusso è pensato per questo: telefono in una mano, scontrino nell'altra.",
      steps: [
        { name: "Aggiungi l'acquisto", text: "Tocca +, scrivi il nome del prodotto e il negozio, inserisci prezzo e data di acquisto. Scegli una categoria per tenere l'elenco leggibile." },
        { name: "Imposta la durata della garanzia", text: "Tocca 6 mesi, 1, 2, 3 o 5 anni, oppure digita qualsiasi numero di mesi. Aggiungi una garanzia estesa se l'hai acquistata; l'app mostra la copertura totale e la data esatta di scadenza." },
        { name: "Fotografa lo scontrino", text: "Scatta una foto dello scontrino e, se vuoi, del prodotto e dell'etichetta con il numero di serie. Le foto restano allegate all'articolo a grandezza piena." },
        { name: "Lascia lavorare gli avvisi", text: "Di default ricevi una notifica 30 e 7 giorni prima della scadenza alle 9:00. Cambia anticipo e ora nelle Impostazioni; sono tutte notifiche locali, nulla viene inviato." },
      ],
    },
    featuresTitle: "Pensata per il giorno in cui qualcosa si rompe",
    features: [
      { icon: "🧾", title: "Foto degli scontrini", text: "Fotocamera o libreria, più foto per articolo, visore a piena risoluzione con zoom. Mostralo all'assistenza invece di scavare tra le email." },
      { icon: "⏳", title: "Conto alla rovescia", text: "Giorni rimanenti, barra di avanzamento e stato (attiva, in scadenza, scaduta) su ogni articolo. Ordina per ciò che scade prima." },
      { icon: "🔔", title: "Avvisi", text: "Qualsiasi combinazione di 90, 60, 30, 14, 7 e 1 giorno prima, più l'ora del giorno. Solo notifiche locali." },
      { icon: "➕", title: "Garanzie estese", text: "Garanzia del produttore più estensione del negozio o della carta di credito, sommate in un unico periodo di copertura." },
      { icon: "📊", title: "Panoramica", text: "Conteggio di attive, in scadenza e scadute e valore totale ancora in garanzia. Filtra per stato, cerca per nome, negozio o numero di serie." },
      { icon: "📤", title: "Esportazione CSV", text: "Esporta tutti gli articoli in CSV quando vuoi, per un foglio di calcolo, una denuncia assicurativa o il passaggio a un'altra app. I tuoi dati non restano mai bloccati." },
    ],
    intentsTitle: "Domande a cui risponde questa app",
    intents: [
      { h: "Come tengo traccia delle garanzie di tutto ciò che possiedo?", p: "Aggiungi ogni acquisto una volta con la foto dello scontrino e la durata della garanzia. La schermata iniziale elenca tutto in ordine di scadenza, con conteggi di attive, in scadenza e scadute e il valore totale coperto." },
      { h: "Dove conservo gli scontrini per le richieste in garanzia?", p: "Allegati all'articolo, sul telefono. Fotografa lo scontrino il giorno dell'acquisto; quando qualcosa si rompe, apri l'articolo e mostra scontrino, data di acquisto e numero di serie al banco." },
      { h: "Come ricevo un avviso prima che una garanzia scada?", p: "Attiva gli avvisi nelle Impostazioni e scegli l'anticipo (90, 60, 30, 14, 7 o 1 giorno) e l'ora. L'app programma notifiche locali per ogni articolo; nulla lascia il dispositivo." },
      { h: "Posso registrare una garanzia estesa?", p: "Sì. Ogni articolo ha una garanzia del produttore e un'estensione facoltativa; l'app le somma in un unico periodo di copertura e una sola data di scadenza." },
      { h: "Serve un account o internet?", p: "No. Funziona offline, senza account, senza sincronizzazione cloud e senza analisi. Includi l'app nel backup dell'iPhone ed esporta CSV quando vuoi una copia." },
    ],
    compare: {
      title: "Garanzie e Scontrini rispetto all'album foto e alle app di ricevute in abbonamento",
      intro: "La maggior parte delle persone tiene gli scontrini nel rullino o in una cartella email e si affida alla memoria per la data della garanzia. Le app di ricevute in abbonamento caricano tutto su un server e fanno pagare ogni mese. Questa app tiene lo scontrino insieme alla data di garanzia, sul dispositivo, a un prezzo unico.",
      columns: ["", "Garanzie e Scontrini", "Album foto / email", "App di ricevute in abbonamento"],
      rows: [
        ["Scontrino allegato al prodotto e alla sua data di garanzia", "✓", "✗ Separati", "✓"],
        ["Avviso prima della scadenza", "✓ Fino a sei anticipi", "✗", "A volte"],
        ["Garanzia estesa", "✓", "✗", "Varia"],
        ["Offline, nulla viene caricato", "✓", "✓", "✗ Cloud"],
        ["Esporta i tuoi dati", "✓ CSV", "✗", "Varia"],
        ["Prezzo", "Acquisto unico", "Gratis", "Mensile o annuale"],
      ],
    },
    faqs: [
      { q: "Dove sono salvati foto e dati?", a: "Nello spazio dell'app sul tuo iPhone. Nulla viene caricato. Se includi l'app nel backup iPhone o iCloud, viene ripristinata con il resto del telefono." },
      { q: "Devo consentire l'accesso a fotocamera o foto?", a: "Solo se vuoi aggiungere foto. Il permesso della fotocamera viene chiesto la prima volta che tocchi Scatta foto; scegliere dalla libreria usa il selettore di Apple e non richiede permessi." },
      { q: "Posso cambiare gli orari degli avvisi?", a: "Sì. Nelle Impostazioni scegli qualsiasi combinazione di 90, 60, 30, 14, 7 e 1 giorno prima della scadenza e l'ora del giorno. Gli avvisi si aggiornano da soli quando modifichi un articolo." },
      { q: "Come passo a un nuovo iPhone?", a: "Ripristina il nuovo telefono da un backup e l'app arriva con i suoi dati. Puoi anche esportare CSV come copia extra. L'acquisto è legato al tuo account Apple, quindi non paghi due volte." },
      { q: "Sincronizza tra dispositivi?", a: "Non in questa versione. È un'app per singolo dispositivo, completamente offline per scelta." },
      { q: "È un abbonamento?", a: "No. Acquisto unico, nessun acquisto in-app, nessuna pubblicità." },
      { q: "Quali lingue supporta?", a: "Inglese, spagnolo, tedesco, francese, italiano, portoghese, olandese, polacco, russo, ucraino, turco, arabo, hindi, indonesiano, vietnamita, thai, giapponese, coreano e cinese semplificato. Puoi forzare una lingua nelle Impostazioni." },
      { q: "Esiste una versione Android?", a: "Non ancora. L'app per iPhone esce per prima; una versione Android è prevista e questa pagina rimanderà a Google Play quando sarà disponibile." },
    ],
    related: [
      { name: "Electrician Calculator Toolkit", href: "/apps/electrician-calculator", blurb: "Caduta di tensione, sezione, riempimento tubi e scatole dalle tabelle NEC 2023, offline. Acquisto unico." },
      { name: "Unit Price Calculator & Tax", href: "/apps/unit-price-calculator", blurb: "Confronta il prezzo unitario, aggiungi le tasse, applica uno sconto. Gratis." },
      { name: "Caffeine Tracker: Curfew", href: "/apps/caffeine-tracker", blurb: "Registra caffè e tè, vedi quanto è ancora in circolo e ricevi un orario limite prima di dormire. Gratis." },
    ],
    disclaimer: "Garanzie e Scontrini è uno strumento personale di registrazione. Le condizioni di garanzia sono stabilite dal produttore o dal rivenditore; controlla sempre le condizioni originali prima di un reclamo.",
  },
  "unit-price-calculator": {
    "head": {
      "title": "Calcolatrice prezzo al chilo per iPhone: prezzo al kg, al litro, al pezzo, sconti, IVA, budget spesa",
      "description": "Calcolatrice per la spesa gratuita per iPhone: confronta il prezzo al kg, alla libbra, al litro o al pezzo tra confezioni, cumula sconti e coupon, aggiungi o scorpora l'IVA, tieni il carrello nel budget e dividi il conto. Offline, senza account, 19 lingue.",
      "keywords": "calcolatrice prezzo al chilo, prezzo unitario calcolatrice, confronta prezzi supermercato app, calcolatrice spesa, calcolatrice sconti, calcolo percentuale, calcolatrice iva, scorporo iva, calcolatrice carrello, dividere il conto app, calcolatrice mancia",
      "ogTitle": "Unit Price Calculator & Tax: quale confezione conviene davvero?",
      "ogDescription": "Confronta il prezzo al kg, alla libbra o al litro, cumula gli sconti, aggiungi l'IVA, tieni il carrello nel budget, dividi il conto. App iPhone gratuita, offline."
    },
    "h1": "Una calcolatrice di prezzo unitario per la corsia del supermercato: prezzo al kg o al litro, sconti cumulati, IVA, budget del carrello e divisione del conto",
    "answer": "Unit Price Calculator & Tax è una calcolatrice per la spesa gratuita per iPhone. Inserisci prezzo e formato di ogni confezione e l'app riporta tutto a una stessa base (al kg, alla libbra, al litro, al fl oz o al pezzo) segnando la più conveniente. Cumula anche gli sconti come li applicano i negozi, aggiunge o scorpora l'IVA, tiene il totale del carrello rispetto a un budget e divide il conto con la mancia. Tutto funziona offline, senza account. La versione gratuita mostra un piccolo banner; un acquisto unico lo rimuove.",
    "quickFacts": [
      [
        "Prezzo",
        "Gratis. Rimozione pubblicità con acquisto unico facoltativo, nessun abbonamento"
      ],
      [
        "Strumenti",
        "Confronto prezzo unitario, sconto, IVA, totale carrello con budget, divisione e mancia"
      ],
      [
        "Unità",
        "g, kg, oz, lb, ml, l, fl oz, gal, pezzi, confezioni, multipack"
      ],
      [
        "Privacy",
        "Offline, nessun account; le liste restano sul telefono"
      ]
    ],
    "screenshotsTitle": "Cosa ottieni: la confezione più conveniente, il prezzo reale dell'offerta e un carrello che resta nel budget",
    "screenshots": [
      {
        "alt": "Calcolatrice di prezzo unitario su iPhone che confronta tre confezioni con il prezzo al chilo e la più conveniente evidenziata",
        "caption": "Quale confezione conviene davvero"
      },
      {
        "alt": "Calcolatrice sconti con 30% di sconto, 10% extra, coupon e IVA con prezzo finale e risparmio",
        "caption": "Sconti cumulati, prezzo finale"
      },
      {
        "alt": "Totale carrello con articoli, IVA e quanto resta di un budget di 60",
        "caption": "Resta nel budget mentre fai la spesa"
      },
      {
        "alt": "Calcolatrice IVA che scorpora il 19% da un prezzo IVA inclusa",
        "caption": "Aggiungi o scorpora l'IVA"
      },
      {
        "alt": "Divisione del conto con 15% di mancia per quattro persone, arrotondata",
        "caption": "Dividi il conto, arrotonda"
      }
    ],
    "howTo": {
      "title": "Come confrontare i prezzi unitari in negozio",
      "intro": "Le etichette mostrano il prezzo per 100 g su un prodotto e al kg su quello accanto, o nulla sui multipack. Ecco la versione da 20 secondi.",
      "steps": [
        {
          "name": "Scegli la misura",
          "text": "Peso, volume, pezzi o lunghezza. Il menu delle unità mostra solo quelle sensate (g, kg, oz, lb per il peso; ml, l, fl oz, gal per il volume)."
        },
        {
          "name": "Inserisci ogni confezione",
          "text": "Prezzo, quantità e unità per A e B. Per un multipack imposta Confezioni a 6 e Quantità a 330 ml. Fino a sei opzioni."
        },
        {
          "name": "Leggi il risultato",
          "text": "La più conveniente riceve un badge verde e ogni altra opzione mostra quanto costa in più in percentuale. Cambia la base (al kg, per 100 g, alla libbra) dal menu Mostra prezzo per."
        },
        {
          "name": "Poi controlla l'offerta",
          "text": "Passa a Sconto per cumulare lo sconto a scaffale, la percentuale extra in cassa e un coupon, con l'IVA se il tuo paese la aggiunge alla cassa."
        }
      ]
    },
    "featuresTitle": "Cinque calcolatrici per la cassa",
    "features": [
      {
        "icon": "⚖️",
        "title": "Confronto prezzo unitario",
        "text": "Fino a sei confezioni, unità metriche e imperiali mescolate, multipack, la più conveniente evidenziata con il sovrapprezzo percentuale delle altre."
      },
      {
        "icon": "🏷️",
        "title": "Sconti cumulati",
        "text": "Percentuale, percentuale extra sul prezzo ridotto, coupon fisso, poi IVA: nell'ordine del negozio, con quanto paghi e quanto risparmi."
      },
      {
        "icon": "🧾",
        "title": "IVA e imposte",
        "text": "Aggiungi l'imposta a un prezzo o scorporala da un prezzo IVA inclusa. Scorciatoie per le aliquote comuni; fissa la tua come predefinita."
      },
      {
        "icon": "🛒",
        "title": "Totale carrello con budget",
        "text": "Aggiungi gli articoli mentre fai la spesa, spuntali, vedi l'IVA e quanto resta del budget con una barra di avanzamento."
      },
      {
        "icon": "👥",
        "title": "Dividi e mancia",
        "text": "Conto, percentuale di mancia, numero di persone e arrotondamento perché ogni quota sia una cifra tonda."
      },
      {
        "icon": "🌍",
        "title": "La tua valuta e la tua lingua",
        "text": "Segue il tuo simbolo di valuta e il separatore decimale; 19 lingue; ricorda liste e aliquota tra una spesa e l'altra."
      }
    ],
    "intentsTitle": "Domande a cui risponde questa app",
    "intents": [
      {
        "h": "Come si calcola il prezzo unitario?",
        "p": "Dividi il prezzo per la quantità, in un'unità comune. L'app fa la conversione: 500 g a 4,49 sono 8,98 al kg; 1,2 lb a 4,99 sono 9,17 al kg. Il numero più basso è l'affare migliore."
      },
      {
        "h": "La confezione grande conviene sempre?",
        "p": "Di solito, ma non sempre, e multipack e promozioni rompono la regola abbastanza spesso da controllare. Inserisci entrambe e l'app mostra la differenza esatta in percentuale."
      },
      {
        "h": "Quanto fa 30% di sconto più un 10% extra?",
        "p": "Non il 40%. Il 10% extra si applica al prezzo già ridotto: 100 diventa 70 e poi 63, un risparmio del 37%. La scheda Sconto mostra ogni passaggio."
      },
      {
        "h": "Come scorporo l'IVA da un prezzo?",
        "p": "Dividi per 1 più l'aliquota: 119 con IVA al 19% sono 100 netti. Scegli Scorpora IVA, inserisci importo e aliquota."
      },
      {
        "h": "Serve internet o un account?",
        "p": "No. Ogni calcolo avviene sul telefono e le liste restano in locale. L'unico uso di rete è il piccolo banner della versione gratuita, che un acquisto unico rimuove."
      }
    ],
    "compare": {
      "title": "Unit Price Calculator & Tax rispetto alla calcolatrice del telefono e alle app monofunzione",
      "intro": "La calcolatrice integrata funziona se ricordi le conversioni e le fai due volte. La maggior parte delle app monofunzione fa una sola di queste cose. Questa app riunisce i cinque calcoli da cassa e ricorda le tue impostazioni.",
      "columns": [
        "",
        "Unit Price Calculator & Tax",
        "Calcolatrice del telefono",
        "App monofunzione"
      ],
      "rows": [
        [
          "Converte g, kg, oz, lb, ml, l automaticamente",
          "✓",
          "✗ Manuale",
          "Alcune"
        ],
        [
          "Multipack e fino a sei opzioni",
          "✓",
          "✗",
          "Raramente"
        ],
        [
          "Sconti cumulati con coupon e IVA",
          "✓",
          "✗ Passo dopo passo",
          "Solo app di sconti"
        ],
        [
          "Totale carrello rispetto a un budget",
          "✓",
          "✗",
          "Solo app di liste"
        ],
        [
          "Divisione del conto con mancia e arrotondamento",
          "✓",
          "✗",
          "Solo app di mance"
        ],
        [
          "Prezzo",
          "Gratis, rimozione pubblicità con acquisto unico",
          "Gratis",
          "Gratis con pubblicità o abbonamento"
        ]
      ]
    },
    "faqs": [
      {
        "q": "L'app è gratuita?",
        "a": "Sì. La versione gratuita mostra un piccolo banner in basso. Rimuovere la pubblicità è un unico acquisto; nessun abbonamento né altri acquisti in-app."
      },
      {
        "q": "Quali unità sono supportate?",
        "a": "Peso: mg, g, kg, oz, lb. Volume: ml, l, fl oz, tazza, gal. Pezzi: pezzo, confezione, dozzina. Lunghezza: cm, m, in, ft. Puoi mescolare metrico e imperiale in un confronto."
      },
      {
        "q": "Posso cambiare l'unità in cui è mostrato il prezzo?",
        "a": "Sì. Mostra prezzo per consente di scegliere al kg, per 100 g, alla libbra, al litro, per 100 ml, al fl oz, al gallone e altro."
      },
      {
        "q": "Ricorda la mia aliquota?",
        "a": "Sì. Fissa un'aliquota predefinita dalla scheda IVA o nelle Impostazioni; Sconto e Carrello la usano automaticamente."
      },
      {
        "q": "Quale valuta usa?",
        "a": "Quella del dispositivo per impostazione predefinita. Puoi sceglierne un'altra nelle Impostazioni."
      },
      {
        "q": "Funziona offline?",
        "a": "Sì. Calcoli e liste non lasciano mai il telefono. Senza connessione non viene mostrata pubblicità."
      },
      {
        "q": "Quali lingue?",
        "a": "Inglese, spagnolo, tedesco, francese, italiano, portoghese, olandese, polacco, russo, ucraino, turco, arabo, hindi, indonesiano, vietnamita, thai, giapponese, coreano e cinese semplificato."
      },
      {
        "q": "Esiste una versione Android?",
        "a": "Non ancora. L'app per iPhone esce per prima; una versione Android è prevista e questa pagina rimanderà a Google Play quando sarà disponibile."
      }
    ],
    "related": [
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Fotografa lo scontrino, imposta la garanzia, ricevi un avviso prima della scadenza. Offline, acquisto unico."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Caduta di tensione, sezione, riempimento tubi e scatole secondo NEC 2023, offline. Acquisto unico."
      },
      {
        "name": "Caffeine Tracker: Curfew",
        "href": "/apps/caffeine-tracker",
        "blurb": "Quanta caffeina hai ancora in corpo e fino a che ora puoi bere l'ultimo caffè. Gratis."
      }
    ],
    "disclaimer": "Unit Price Calculator & Tax è un aiuto per la spesa. Aliquote e regole di arrotondamento variano per paese e negozio; controlla l'importo finale sullo scontrino."
  },
  "caffeine-tracker": {
    "head": {
      "title": "App per la caffeina su iPhone: quanta caffeina hai ancora in corpo e l'orario limite prima di dormire",
      "description": "Tracker di caffeina gratuito per iPhone: registra caffè, tè ed energy drink in due tocchi, vedi i milligrammi ancora attivi con un modello di emivita e ricevi un coprifuoco per l'ultima tazza. Offline, senza account, 19 lingue.",
      "keywords": "app caffeina, tracker caffeina iphone, calcolatore caffeina, emivita caffeina calcolo, contatore caffè, diario caffeina, quanto dura la caffeina, quando smettere di bere caffè per dormire, caffeina sonno calcolo",
      "ogTitle": "Caffeine Tracker: Curfew: quanta caffeina hai ancora in corpo?",
      "ogDescription": "Registra una bevanda in due tocchi, guarda il livello scendere e scopri l'orario limite dell'ultimo caffè per dormire in orario. App iPhone gratuita."
    },
    "h1": "Un tracker di caffeina che mostra cosa è ancora in circolo e fino a che ora puoi bere l'ultimo caffè",
    "answer": "Caffeine Tracker: Curfew stima la caffeina attiva nel corpo da ciò che registri, con un modello di emivita (circa 5 ore per la maggior parte degli adulti, regolabile). Registra espresso, caffè filtro, latte, tè, matcha, energy drink e altro in due tocchi, guarda una curva di 12 ore, resta sotto i 400 mg oggi e imposta l'ora di dormire con un obiettivo (25, 50 o 100 mg) per ricevere un coprifuoco: l'orario limite dell'ultima bevanda. Funziona offline, senza account. Un Pro con acquisto unico aggiunge sincronizzazione con Salute, cronologia di 30 giorni e bevande personalizzate.",
    "quickFacts": [
      [
        "Prezzo",
        "Gratis. Pro con acquisto unico, nessun abbonamento"
      ],
      [
        "Modello",
        "Decadimento per emivita, da 2,5 a 8 h, 5 h predefinite"
      ],
      [
        "Bevande",
        "21 preset con mg tipici, piccolo / normale / grande, personalizzate con Pro"
      ],
      [
        "Privacy",
        "Offline, nessun account; Salute solo in scrittura e solo se lo attivi"
      ]
    ],
    "screenshotsTitle": "Cosa ottieni: il numero che conta adesso, un coprifuoco per stasera e una settimana leggibile",
    "screenshots": [
      {
        "alt": "Schermata iniziale del tracker di caffeina su iPhone con 128 mg in corpo, totale del giorno su 400 mg, coprifuoco e curva di 12 ore",
        "caption": "Quanta caffeina hai ancora in corpo"
      },
      {
        "alt": "Foglio di aggiunta con cold brew selezionato, formato, orario ed elenco di caffè con ricerca",
        "caption": "Registra una bevanda in due tocchi"
      },
      {
        "alt": "Schermata cronologia con grafico a barre dei totali di sette giorni e la media giornaliera",
        "caption": "Guarda la settimana, scopri l'abitudine"
      },
      {
        "alt": "Impostazioni con ora di dormire, caffeina rimasta a letto, emivita e limite giornaliero",
        "caption": "Imposta l'ora di dormire, ricevi il coprifuoco"
      }
    ],
    "howTo": {
      "title": "Come trovare il tuo orario limite per la caffeina",
      "intro": "La domanda non è quanto caffè bevi, ma quanto ne resta quando appoggi la testa sul cuscino. Tre impostazioni e l'app fa i conti.",
      "steps": [
        {
          "name": "Imposta l'ora di dormire",
          "text": "Impostazioni → Sonno → Ora di dormire. L'app punta sempre all'ora di stasera, anche se registri una bevanda tardi, dopo mezzanotte."
        },
        {
          "name": "Scegli con quanta caffeina riesci a dormire",
          "text": "25 mg se hai il sonno leggero, 50 mg per la maggior parte, 100 mg se la caffeina ti tocca poco. È il livello obiettivo all'ora di dormire."
        },
        {
          "name": "Registra ciò che bevi",
          "text": "Tocca una bevanda nella schermata iniziale (espresso, filtro, latte, tè, energy drink) o apri l'elenco completo con formati e orario per la tazza dimenticata."
        },
        {
          "name": "Leggi il coprifuoco",
          "text": "La scheda Coprifuoco dice, per esempio: «Ultima bevanda da 95 mg entro le 15:40 per restare sotto 50 mg all'ora di dormire». Passato quell'orario, ti dice quanto lascerebbe un'altra tazza."
        }
      ]
    },
    "featuresTitle": "Costruita attorno a un numero: ciò che è attivo adesso",
    "features": [
      {
        "icon": "☕",
        "title": "Livello in tempo reale",
        "text": "Ogni dose decade con l'emivita. Vedi i milligrammi attivi, uno stato (libero, attivo, carico) e quanto manca per scendere sotto l'obiettivo."
      },
      {
        "icon": "🌙",
        "title": "Coprifuoco caffeina",
        "text": "Orario limite della tua bevanda abituale per restare sotto l'obiettivo a letto. Emivita regolabile per gravidanza, farmaci o metabolismo veloce."
      },
      {
        "icon": "⚡",
        "title": "Registrazione in due tocchi",
        "text": "Sei preferiti nella schermata iniziale; 21 preset con contenuti tipici; piccolo, normale e grande; registrazione a posteriori."
      },
      {
        "icon": "📊",
        "title": "Limite giornaliero e cronologia",
        "text": "Progresso rispetto a 400, 300 o 200 mg. Sette giorni di totali con media e giorni oltre il limite; 30 giorni con Pro."
      },
      {
        "icon": "❤️",
        "title": "Apple Salute (Pro)",
        "text": "Scrive la caffeina in Salute accanto ai dati del sonno. Eliminare una bevanda rimuove il campione."
      },
      {
        "icon": "🌍",
        "title": "19 lingue, offline",
        "text": "Nulla lascia il telefono. Nessun account, pubblicità o analisi."
      }
    ],
    "intentsTitle": "Domande a cui risponde questa app",
    "intents": [
      {
        "h": "Quanto resta la caffeina in corpo?",
        "p": "L'emivita è di circa 5 ore per la maggior parte degli adulti: una tazza da 95 mg alle 15 è circa 48 mg alle 20 e 24 mg all'1. L'app traccia esattamente questa curva per tutto ciò che hai registrato."
      },
      {
        "h": "Quando smettere di bere caffè per dormire?",
        "p": "Dipende dall'ora di dormire, dalla sensibilità e da ciò che hai già bevuto. Con obiettivo 50 mg e ora di dormire alle 23, un solo caffè da 95 mg va bevuto entro le 18:20 circa; dopo due tazze precedenti, molto prima. La scheda coprifuoco lo calcola di continuo."
      },
      {
        "h": "Quanta caffeina c'è in un espresso, un latte o un cold brew?",
        "p": "Valori tipici: espresso 63 mg, latte o cappuccino 75 mg (uno shot), caffè filtro 95 mg, cold brew 200 mg, tè nero 47 mg, tè verde 28 mg, matcha 70 mg, un energy drink da 250 ml 80 mg. Tutti i preset si regolano per formato e Pro consente quantità esatte."
      },
      {
        "h": "Quanta caffeina al giorno è troppa?",
        "p": "Il riferimento comune per adulti sani è 400 mg al giorno; 200 mg in gravidanza. L'app tiene una barra di avanzamento rispetto al limite scelto."
      },
      {
        "h": "Serve internet o un account?",
        "p": "No. Tutto funziona sul telefono. Salute viene scritto solo se lo attivi in Pro."
      }
    ],
    "compare": {
      "title": "Caffeine Tracker: Curfew rispetto a un'app di note e ai tracker in abbonamento",
      "intro": "Contare le tazze non dice nulla su stasera. La maggior parte delle app di caffeina calcola il livello, ma fa pagare un abbonamento mensile. Questa app offre livello, coprifuoco e cronologia gratis, con un Pro ad acquisto unico per la sincronizzazione con Salute.",
      "columns": [
        "",
        "Caffeine Tracker: Curfew",
        "Note / memoria",
        "Tracker in abbonamento"
      ],
      "rows": [
        [
          "Caffeina attiva con curva di decadimento",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Coprifuoco per l'ultima bevanda",
          "✓",
          "✗",
          "Alcuni"
        ],
        [
          "Registrazione in due tocchi con mg tipici",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Sincronizzazione con Apple Salute",
          "✓ Pro (acquisto unico)",
          "✗",
          "✓ Abbonamento"
        ],
        [
          "Offline, senza account",
          "✓",
          "✓",
          "Varia"
        ],
        [
          "Prezzo",
          "Gratis, Pro ad acquisto unico",
          "Gratis",
          "Mensile o annuale"
        ]
      ]
    },
    "faqs": [
      {
        "q": "Quanto è precisa la stima?",
        "a": "È una stima. Il contenuto di caffeina varia con preparazione e marca, l'emivita tra persone (circa 3-7 ore). Regola l'emivita nelle Impostazioni se sai di smaltire la caffeina lentamente o in fretta. Non è un consiglio medico."
      },
      {
        "q": "Cosa include Pro?",
        "a": "Sincronizzazione con Salute (caffeina), cronologia di 30 giorni invece di 7 e bevande personalizzate con quantità esatte. Un unico acquisto; nessun abbonamento."
      },
      {
        "q": "Legge i miei dati di Salute?",
        "a": "No. Con Pro e l'interruttore attivo scrive campioni di caffeina in Salute e li elimina quando cancelli una bevanda. Non legge mai nulla."
      },
      {
        "q": "Posso registrare una bevanda dimenticata?",
        "a": "Sì. Apri l'elenco completo e cambia l'orario prima di aggiungere."
      },
      {
        "q": "E se vado a dormire dopo mezzanotte?",
        "a": "Impostala normalmente (per esempio 1:00). Una bevanda registrata alle 23 conta comunque per stanotte."
      },
      {
        "q": "Quali lingue?",
        "a": "Inglese, spagnolo, tedesco, francese, italiano, portoghese, olandese, polacco, russo, ucraino, turco, arabo, hindi, indonesiano, vietnamita, thai, giapponese, coreano e cinese semplificato."
      },
      {
        "q": "Esiste una versione Android?",
        "a": "Non ancora. L'app per iPhone esce per prima; una versione Android è prevista e questa pagina rimanderà a Google Play quando sarà disponibile."
      }
    ],
    "related": [
      {
        "name": "Unit Price Calculator & Tax",
        "href": "/apps/unit-price-calculator",
        "blurb": "Quale confezione conviene al kg o al litro, sconti cumulati, IVA, budget del carrello e divisione del conto. Gratis."
      },
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Fotografa lo scontrino, imposta la garanzia, ricevi un avviso prima della scadenza. Offline, acquisto unico."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Caduta di tensione, sezione, riempimento tubi e scatole secondo NEC 2023, offline. Acquisto unico."
      }
    ],
    "disclaimer": "Caffeine Tracker: Curfew usa un semplice modello di emivita e contenuti medi di caffeina. Non è un dispositivo medico né un consiglio medico; parla con un professionista di caffeina e salute."
  },
};

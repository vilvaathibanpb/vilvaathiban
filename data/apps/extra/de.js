// Deutsch — Seiten der neuen Apps. Fehlende Felder erben das Englische.
export default {
  "electrician-calculator": {
    head: {
      title: "Elektriker-Rechner fürs iPhone: Spannungsabfall, Querschnitt, Rohr- und Dosenfüllung (offline)",
      description:
        "Acht Elektriker-Rechner auf Basis des US-NEC in einer Offline-App fürs iPhone: Spannungsabfall, Leiterquerschnitt mit Reduktionsfaktoren, Rohr- und Dosenfüllung, Last & Schutzschalter, Ohmsches Gesetz, Widerstandscode und Normtabellen. Einmalkauf, kein Abo, 19 Sprachen.",
      keywords:
        "elektriker rechner app, spannungsabfall rechner, leiterquerschnitt rechner, kabelquerschnitt berechnen, strombelastbarkeit rechner, rohrfüllung, dosenfüllung, sicherung berechnen, ohmsches gesetz rechner, nec rechner, elektro rechner iphone, awg",
      ogTitle: "Electrician Calculator Toolkit: Spannungsabfall, Querschnitt, Rohr- und Dosenfüllung auf dem iPhone",
      ogDescription: "Acht Baustellen-Rechner auf Basis der NEC-2023-Tabellen, komplett offline. Einmalkauf, kein Abo.",
    },
    h1: "Ein Elektriker-Rechner für die Baustelle: Spannungsabfall, Leiterquerschnitt, Rohr- und Dosenfüllung, offline",
    answer:
      "Electrician Calculator Toolkit bringt acht Rechner auf Basis des US-amerikanischen NEC aufs iPhone: Spannungsabfall (ein-, dreiphasig, DC), Leiterquerschnitt mit 125-%-Regel sowie Korrektur für Umgebungstemperatur und Leiterzahl, Rohrfüllung für EMT, PVC, RMC und IMC, Dosenfüllung nach 314.16, Last und Schutzschalter aus Watt, Ohmsches Gesetz, Widerstands-Farbcode und die Referenztabellen dahinter. Jedes Ergebnis nennt die Tabelle, aus der es stammt. Die App funktioniert ohne Netz, ohne Konto und ohne Abo und ist in 19 Sprachen verfügbar.",
    quickFacts: [
      ["Preis", "Einmalkauf. Kein Abo"],
      ["Tools", "Spannungsabfall, Querschnitt, Rohrfüllung, Dosenfüllung, Last & Schutzschalter, Ohmsches Gesetz, Widerstandscode, Tabellen"],
      ["Grundlage", "Tabellen des NEC 2023 (NFPA 70)"],
      ["Datenschutz", "Offline, kein Konto, keine Analysen"],
    ],
    screenshotsTitle: "Was du bekommst: ein Ergebnis, die Tabelle dahinter und den kleinsten Querschnitt, der besteht",
    screenshots: [
      { alt: "Spannungsabfall-Rechner auf dem iPhone mit Abfall in Volt und Prozent und dem Mindestquerschnitt für 3 %", caption: "Spannungsabfall mit Mindestquerschnitt für 3 %" },
      { alt: "Querschnitt-Rechner mit Korrektur für Umgebungstemperatur und Leiterzahl", caption: "Querschnitt mit eingebauter Reduktion" },
      { alt: "Rohrfüllungs-Rechner mit Mindest-Nenngröße für EMT, PVC, RMC und IMC im Vergleich", caption: "Rohrfüllung für fünf Rohrtypen" },
    ],
    howTo: {
      title: "So bemisst du einen Stromkreis in unter einer Minute",
      intro: "Auf der Baustelle sind es fast immer dieselben drei Fragen: Besteht der Spannungsabfall, welche Leitung ziehe ich, und welches Rohr braucht sie. So geht es.",
      steps: [
        { name: "Last & Schutzschalter", text: "Watt, Spannung und Phasenzahl eingeben. Dauerlast markieren, wenn sie drei Stunden oder länger läuft. Du bekommst Laststrom, Bemessungsstrom bei 125 %, den nächsten Standard-Schutzschalter nach 240.6(A) und den Mindestquerschnitt bei 75 °C." },
        { name: "Leiterquerschnitt", text: "Querschnitt mit diesem Strom öffnen, Anschlusstemperatur, Umgebungstemperatur und die Zahl der stromführenden Leiter im Rohr setzen. Die App wendet 310.15(B)(1) und 310.15(C)(1) an und zeigt die korrigierte Belastbarkeit aller Querschnitte rund um das Ergebnis." },
        { name: "Spannungsabfall", text: "Einfache Länge eingeben. Liegt der Abfall über 3 %, zeigt die App bereits den kleinsten Leiter, der besteht. Auf Aluminium wechseln oder Parallelleiter ergänzen, um zu vergleichen." },
        { name: "Rohrfüllung", text: "Leiter hinzufügen (Querschnitt, Isolierung, Anzahl) und die Mindest-Nenngröße für EMT, PVC Schedule 40 und 80, RMC und IMC nebeneinander ablesen." },
      ],
    },
    featuresTitle: "Acht Tools, je ein Tipp",
    features: [
      { title: "Spannungsabfall", text: "ΔU = 2·K·I·L ÷ CM für einphasig und DC, 1,732 für dreiphasig; K = 12,9 Kupfer / 21,2 Aluminium. Fuß oder Meter, #14 AWG bis 750 kcmil, Parallelleiter und der kleinste Querschnitt unter 3 %." },
      { title: "Leiterquerschnitt (Belastbarkeit)", text: "Tabelle 310.16 für Kupfer und Aluminium bei 60/75/90 °C, 125-%-Regel für Dauerlast, Umgebungskorrektur, Häufungsfaktor und die Grenzen nach 240.4(D) für kleine Leiter." },
      { title: "Rohrfüllung", text: "Kapitel 9, Tabellen 1, 4 und 5: beliebige Mischung aus THHN/THWN, XHHW und THW, Mindest-Nenngröße je Rohrtyp oder die maximale Zahl eines Leiters in einem gegebenen Rohr." },
      { title: "Dosenfüllung", text: "Volumenansätze nach 314.16(B) für Leiter, Klemmen, Halterungen, Geräteeinsätze und Schutzleiter, mit Prüfung gegen die vorhandene Dose." },
      { title: "Last & Schutzschalter, Ohmsches Gesetz, Widerstandscode", text: "Watt zu Ampere zu Schutzschalter zu Leiter auf einem Bildschirm; zwei beliebige von U, I, R und P; 4- und 5-Ring-Dekodierung." },
      { title: "Normtabellen", text: "Belastbarkeit, Standard-Schutzschalter, Reduktionsfaktoren, Dosenvolumen und Aderfarben nach US- und IEC-Norm, immer einen Tipp entfernt." },
    ],
    intentsTitle: "Fragen, die diese App beantwortet",
    intents: [
      { h: "Wie berechne ich den Spannungsabfall eines Endstromkreises?", p: "Spannung, Laststrom, Querschnitt, Material und einfache Länge eingeben. Die App liefert den Abfall in Volt und Prozent sowie die Spannung an der Last und markiert alles über den Richtwerten von 3 % (Endstromkreis) und 5 % (gesamt) aus 210.19(A)." },
      { h: "Welchen Querschnitt brauche ich für einen 50-A-Stromkreis?", p: "Für 40 A Dauerlast (50 A erforderlich) auf Kupfer bei 75 °C ergibt Tabelle 310.16 #8 AWG. Ist es heiß oder liegen mehr als drei stromführende Leiter im Rohr, wendet die App die Reduktionsfaktoren an und geht bei Bedarf einen Querschnitt höher." },
      { h: "Wie viele #12 THHN passen in ein 3/4-Zoll-EMT?", p: "Sechzehn, nach Kapitel 9 Tabelle 1 (40 % Füllung), Tabelle 4 (EMT-Fläche) und Tabelle 5 (THHN-Fläche). Der Modus „Max. Leiter“ beantwortet das für jeden Querschnitt, jede Isolierung und jedes Rohr." },
      { h: "Braucht die App Internet oder ein Konto?", p: "Nein. Alle Tabellen stecken in der App; nichts wird geladen oder hochgeladen. Kein Konto, keine Analysen, keine Werbung, kein Abo." },
    ],
    compare: {
      title: "Electrician Calculator Toolkit gegenüber dem Normbuch und kostenlosen Einzelrechnern",
      intro: "Das Normbuch ist verbindlich, aber mit Handschuhen langsam zu blättern. Kostenlose Rechner decken je eine Aufgabe ab und finanzieren sich meist über Werbung. Diese App bündelt die acht Alltagsrechnungen mit dem Tabellenverweis bei jedem Ergebnis.",
      columns: ["", "Electrician Calculator Toolkit", "NEC-Normbuch", "Kostenlose Einzelrechner"],
      rows: [
        ["Spannungsabfall, Querschnitt, Rohr- und Dosenfüllung an einem Ort", "✓ Acht Tools", "✓ Alle Tabellen, Handrechnung", "✗ Ein Tool pro App"],
        ["Reduktionsfaktoren automatisch", "✓ Umgebung + Leiterzahl", "✗ Manuell", "Unterschiedlich"],
        ["Zeigt die Quelltabelle des Ergebnisses", "✓ Auf jedem Bildschirm", "✓ Ist die Tabelle", "✗ Selten"],
        ["Funktioniert offline", "✓ Ja", "✓ Ja", "✗ Braucht meist Werbung"],
        ["Sprachen", "19", "Englisch", "Meist eine"],
        ["Preis", "Einmalkauf", "Buchpreis", "Kostenlos mit Werbung"],
      ],
    },
    faqs: [
      { q: "Aus welcher Normausgabe stammen die Tabellen?", a: "Aus der Ausgabe 2023 von NFPA 70, dem National Electrical Code. Dein Zuständigkeitsbereich kann eine ältere Ausgabe oder lokale Änderungen anwenden; betrachte die Ergebnisse als Rechenhilfe und prüfe sie gegen die gültige Norm und mit deinem Prüfer." },
      { q: "Enthält der Querschnitt die Reduktionsfaktoren?", a: "Ja: die 125-%-Regel für Dauerlast, die Umgebungstemperatur-Korrektur aus 310.15(B)(1), den Häufungsfaktor für mehr als drei stromführende Leiter aus 310.15(C)(1) und die Grenzen aus 240.4(D) für #14, #12 und #10." },
      { q: "Welche Rohrtypen und Isolierungen sind abgedeckt?", a: "EMT, PVC Schedule 40, PVC Schedule 80, RMC und IMC mit den Leiterflächen für THHN/THWN, XHHW und THW aus Kapitel 9 Tabelle 5." },
      { q: "Kann ich metrische Einheiten verwenden?", a: "Längen lassen sich in Metern und die Umgebungstemperatur in °C oder °F eingeben. Die Querschnitte folgen AWG/kcmil wie die Tabellen." },
      { q: "Ist es ein Abo?", a: "Nein. Einmalkauf ohne In-App-Käufe." },
      { q: "Ist die App mit der NFPA verbunden?", a: "Nein. NEC und National Electrical Code sind eingetragene Marken der National Fire Protection Association, die diese App weder unterstützt noch empfiehlt." },
      { q: "Gibt es eine Android-Version?", a: "Noch nicht. Die iPhone-App erscheint zuerst; eine Android-Version ist geplant, und diese Seite verlinkt Google Play, sobald sie live ist." },
    ],
    related: [
      { blurb: "Kassenbon fotografieren, Garantiedauer setzen, rechtzeitig vor Ablauf erinnert werden. Offline, Einmalkauf." },
      { blurb: "Preis pro Einheit vergleichen, Steuer aufschlagen, Prozente abziehen. Kostenlos." },
      { blurb: "Kaffee und Tee protokollieren, sehen, wie viel Koffein noch wirkt, und eine Schlafenszeit-Grenze setzen. Kostenlos." },
    ],
    disclaimer:
      "Electrician Calculator Toolkit ist eine Rechenhilfe und ersetzt weder die Norm noch fachliches Urteil oder die zuständige Behörde. NEC und National Electrical Code sind eingetragene Marken der National Fire Protection Association, die diese App weder unterstützt noch empfiehlt.",
  },
  "warranty-tracker": {
    head: {
      title: "Garantie-Tracker fürs iPhone: Kassenbon-Fotos, Ablauf-Erinnerungen, offline",
      description: "Alle Garantien auf dem iPhone im Blick: Beleg fotografieren, Garantiedauer setzen, rechtzeitig vor Ablauf erinnert werden. Komplett offline, kein Konto, kein Abo. Einmalkauf, 19 Sprachen.",
      keywords: "garantie tracker app, garantie app iphone, kassenbon app, beleg app, garantie erinnerung, garantie verwalten, kassenbon aufbewahren app, garantieverwaltung, gewährleistung app, belege organisieren offline",
      ogTitle: "Garantie & Kassenbon Tracker: jede Garantie mit Beleg, auf einen Blick",
      ogDescription: "Beleg fotografieren, Garantiedauer setzen, vor Ablauf erinnert werden. Offline, Einmalkauf, kein Konto.",
    },
    h1: "Ein Garantie-Tracker, der den Kassenbon aufbewahrt und vor Ablauf der Garantie erinnert, offline",
    answer: "Garantie & Kassenbon Tracker speichert jedes gekaufte Produkt mit Belegfoto, Kaufdatum, Preis, Seriennummer und Garantiedauer und erinnert dich, bevor die Garantie endet. Du siehst, wie viele Einträge aktiv, bald ablaufend oder abgelaufen sind und welcher Gesamtwert noch abgedeckt ist. Alles bleibt auf deinem iPhone: kein Konto, keine Cloud, kein Abo, keine Werbung. Einmalkauf, in 19 Sprachen verfügbar.",
    quickFacts: [
      ["Preis", "Einmalkauf. Kein Abo"],
      ["Speichert", "Beleg- und Produktfotos, Kaufdatum, Preis, Händler, Seriennummer, Notizen"],
      ["Erinnerungen", "Lokale Mitteilungen 90, 60, 30, 14, 7 oder 1 Tag vor Ablauf"],
      ["Datenschutz", "Offline, kein Konto, keine Analysen, CSV-Export"],
    ],
    screenshotsTitle: "Was du bekommst: alle Garantien auf einen Blick, der Beleg direkt dabei, eine Erinnerung, bevor es zu spät ist",
    screenshots: [
      { alt: "Startbildschirm des Garantie-Trackers auf dem iPhone mit Anzahl aktiver, bald ablaufender und abgelaufener Garantien und einer Produktliste mit Resttagen", caption: "Alle Garantien auf einen Blick" },
      { alt: "Eintragsdetail mit Belegfoto, Kaufdatum, Preis, Seriennummer und Garantie-Countdown", caption: "Der Beleg, genau wenn du ihn brauchst" },
      { alt: "Formular zum Hinzufügen mit Name, Händler, Preis, Kaufdatum und Garantiedauer-Chips", caption: "In 20 Sekunden erfasst" },
      { alt: "Erinnerungseinstellungen mit Vorlauf von 30 und 7 Tagen und Uhrzeit", caption: "Erinnert, bevor sie abläuft" },
    ],
    howTo: {
      title: "So erfasst du eine Garantie in unter einer Minute",
      intro: "Der beste Moment, einen Beleg zu sichern, ist der Kauftag. Genau dafür ist der Ablauf gebaut: Handy in der einen Hand, Kassenbon in der anderen.",
      steps: [
        { name: "Kauf hinzufügen", text: "Auf + tippen, Produktname und Händler eingeben, Preis und Kaufdatum setzen. Eine Kategorie wählen, damit die Liste übersichtlich bleibt." },
        { name: "Garantiedauer setzen", text: "6 Monate, 1, 2, 3 oder 5 Jahre antippen oder eine beliebige Monatszahl eingeben. Garantieverlängerung ergänzen, falls gekauft; die App zeigt die Gesamtdauer und das genaue Ablaufdatum." },
        { name: "Beleg fotografieren", text: "Kassenbon und bei Bedarf Produkt und Seriennummern-Aufkleber fotografieren. Die Fotos bleiben in voller Größe am Eintrag." },
        { name: "Erinnerungen arbeiten lassen", text: "Standardmäßig wirst du 30 und 7 Tage vor Ablauf um 9:00 Uhr benachrichtigt. Vorlauf und Uhrzeit änderst du in den Einstellungen; alles sind lokale Mitteilungen, nichts wird verschickt." },
      ],
    },
    featuresTitle: "Gebaut für den Tag, an dem etwas kaputtgeht",
    features: [
      { icon: "🧾", title: "Belegfotos", text: "Kamera oder Mediathek, mehrere Fotos pro Eintrag, Vollbild-Viewer mit Zoom. An der Servicetheke vorzeigen statt im E-Mail-Postfach zu wühlen." },
      { icon: "⏳", title: "Ablauf-Countdown", text: "Resttage, Fortschrittsbalken und Status (aktiv, läuft bald ab, abgelaufen) an jedem Eintrag. Sortieren nach dem, was zuerst abläuft." },
      { icon: "🔔", title: "Erinnerungen", text: "Beliebige Kombination aus 90, 60, 30, 14, 7 und 1 Tag vorher plus Uhrzeit. Nur lokale Mitteilungen." },
      { icon: "➕", title: "Garantieverlängerungen", text: "Herstellergarantie plus Händler- oder Kreditkarten-Verlängerung, zusammengerechnet zu einer Gesamtdauer." },
      { icon: "📊", title: "Überblick", text: "Anzahl aktiv, bald ablaufend und abgelaufen sowie der Gesamtwert unter Garantie. Nach Status filtern, nach Name, Händler oder Seriennummer suchen." },
      { icon: "📤", title: "CSV-Export", text: "Alle Einträge jederzeit als CSV exportieren, für eine Tabelle, eine Versicherungsmeldung oder den Wechsel zu einer anderen App. Deine Daten sind nie eingesperrt." },
    ],
    intentsTitle: "Fragen, die diese App beantwortet",
    intents: [
      { h: "Wie behalte ich die Garantien für alles, was ich besitze, im Blick?", p: "Jeden Kauf einmal mit Belegfoto und Garantiedauer anlegen. Der Startbildschirm listet alles sortiert nach Ablauf, mit Zählern für aktiv, bald ablaufend und abgelaufen sowie dem noch abgedeckten Gesamtwert." },
      { h: "Wo bewahre ich Kassenbons für Garantiefälle auf?", p: "Am Eintrag, auf deinem Handy. Fotografiere den Beleg am Kauftag; wenn etwas kaputtgeht, öffnest du den Eintrag und zeigst Beleg, Kaufdatum und Seriennummer an der Theke." },
      { h: "Wie werde ich erinnert, bevor eine Garantie abläuft?", p: "Erinnerungen in den Einstellungen aktivieren, Vorlauf (90, 60, 30, 14, 7 oder 1 Tag) und Uhrzeit wählen. Die App plant lokale Mitteilungen für jeden Eintrag; nichts verlässt das Gerät." },
      { h: "Kann ich eine Garantieverlängerung erfassen?", p: "Ja. Jeder Eintrag hat eine Herstellergarantie und eine optionale Verlängerung; die App addiert beide zu einer Gesamtdauer und einem Ablaufdatum." },
      { h: "Braucht die App ein Konto oder Internet?", p: "Nein. Sie funktioniert offline, ohne Konto, ohne Cloud-Sync und ohne Analysen. Nimm die App ins iPhone-Backup auf und exportiere jederzeit CSV als Kopie." },
    ],
    compare: {
      title: "Garantie & Kassenbon Tracker vs. Fotoalbum und Abo-Beleg-Apps",
      intro: "Die meisten heben Belege in der Fotomediathek oder im E-Mail-Ordner auf und verlassen sich beim Garantiedatum aufs Gedächtnis. Abo-Beleg-Apps laden alles auf einen Server und kassieren monatlich. Diese App hält Beleg und Garantiedatum zusammen, auf dem Gerät, zum Einmalpreis.",
      columns: ["", "Garantie & Kassenbon Tracker", "Fotoalbum / E-Mail", "Abo-Beleg-Apps"],
      rows: [
        ["Beleg am Produkt und seinem Garantiedatum", "✓", "✗ Getrennt", "✓"],
        ["Erinnerung vor Ablauf", "✓ Bis zu sechs Vorläufe", "✗", "Manchmal"],
        ["Garantieverlängerung", "✓", "✗", "Unterschiedlich"],
        ["Offline, nichts hochgeladen", "✓", "✓", "✗ Cloud"],
        ["Daten exportieren", "✓ CSV", "✗", "Unterschiedlich"],
        ["Preis", "Einmalkauf", "Kostenlos", "Monatlich oder jährlich"],
      ],
    },
    faqs: [
      { q: "Wo werden Fotos und Daten gespeichert?", a: "Im eigenen Speicher der App auf deinem iPhone. Nichts wird hochgeladen. Ist die App Teil deines iPhone- oder iCloud-Backups, wird sie mit dem Rest des Handys wiederhergestellt." },
      { q: "Muss ich Kamera- oder Fotozugriff erlauben?", a: "Nur, wenn du Fotos hinzufügen willst. Die Kamera wird beim ersten Tipp auf „Beleg fotografieren“ angefragt; die Auswahl aus der Mediathek nutzt Apples Picker und braucht keine Berechtigung." },
      { q: "Kann ich die Erinnerungszeiten ändern?", a: "Ja. In den Einstellungen wählst du beliebige Kombinationen aus 90, 60, 30, 14, 7 und 1 Tag vor Ablauf sowie die Uhrzeit. Erinnerungen aktualisieren sich automatisch, wenn du einen Eintrag bearbeitest." },
      { q: "Wie ziehe ich auf ein neues iPhone um?", a: "Neues Handy aus dem Backup wiederherstellen, die App kommt mit ihren Daten mit. Zusätzlich kannst du CSV exportieren. Der Kauf hängt an deinem Apple-Account, du zahlst nicht noch einmal." },
      { q: "Synchronisiert sie zwischen Geräten?", a: "In dieser Version nicht. Sie ist bewusst eine Einzelgerät-App, komplett offline." },
      { q: "Ist es ein Abo?", a: "Nein. Einmalkauf, keine In-App-Käufe, keine Werbung." },
      { q: "Welche Sprachen werden unterstützt?", a: "Englisch, Spanisch, Deutsch, Französisch, Italienisch, Portugiesisch, Niederländisch, Polnisch, Russisch, Ukrainisch, Türkisch, Arabisch, Hindi, Indonesisch, Vietnamesisch, Thai, Japanisch, Koreanisch und vereinfachtes Chinesisch. In den Einstellungen lässt sich eine Sprache erzwingen." },
      { q: "Gibt es eine Android-Version?", a: "Noch nicht. Die iPhone-App erscheint zuerst; eine Android-Version ist geplant, und diese Seite verlinkt Google Play, sobald sie live ist." },
    ],
    related: [
      { name: "Electrician Calculator Toolkit", href: "/apps/electrician-calculator", blurb: "Spannungsabfall, Querschnitt, Rohr- und Dosenfüllung nach den NEC-2023-Tabellen, offline. Einmalkauf." },
      { name: "Unit Price Calculator & Tax", href: "/apps/unit-price-calculator", blurb: "Preis pro Einheit vergleichen, Steuer aufschlagen, Prozent abziehen. Kostenlos." },
      { name: "Caffeine Tracker: Curfew", href: "/apps/caffeine-tracker", blurb: "Kaffee und Tee protokollieren, sehen, was noch im Körper ist, und eine Schlafenszeit-Grenze bekommen. Kostenlos." },
    ],
    disclaimer: "Garantie & Kassenbon Tracker ist ein persönliches Werkzeug zur Aufzeichnung. Garantiebedingungen legt der Hersteller oder Händler fest; prüfe vor einer Reklamation immer die Originalbedingungen.",
  },
  "unit-price-calculator": {
    "head": {
      "title": "Grundpreis-Rechner fürs iPhone: Preis pro kg, l, Stück, Rabatte, Mehrwertsteuer, Einkaufsbudget",
      "description": "Kostenloser Einkaufsrechner fürs iPhone: Preis pro kg, lb, Liter oder Stück über Packungen vergleichen, Rabatte und Gutscheine staffeln, Steuer aufschlagen oder herausrechnen, Korbsumme im Budget halten, Rechnung teilen. Offline, ohne Konto, 19 Sprachen.",
      "keywords": "grundpreis rechner, preis pro kilo rechner, preisvergleich app einkaufen, einkaufsrechner, rabatt rechner, prozent rechner, mehrwertsteuer rechner, brutto netto rechner, warenkorb rechner, rechnung teilen app, trinkgeld rechner",
      "ogTitle": "Unit Price Calculator & Tax: Welche Packung ist wirklich günstiger?",
      "ogDescription": "Preis pro kg, lb oder Liter vergleichen, Rabatte staffeln, Steuer aufschlagen, Korb im Budget halten, Rechnung teilen. Kostenlose iPhone-App, offline."
    },
    "h1": "Ein Grundpreis-Rechner für den Supermarktgang: Preis pro kg oder Liter, gestaffelte Rabatte, Steuer, Einkaufsbudget und Rechnung teilen",
    "answer": "Unit Price Calculator & Tax ist ein kostenloser Einkaufsrechner fürs iPhone. Gib Preis und Größe jeder Packung ein, und die App rechnet alles auf eine Basis um (pro kg, lb, l, fl oz oder Stück) und markiert den besten Preis. Sie staffelt Rabatte so, wie Läden sie anwenden, schlägt Mehrwertsteuer auf oder rechnet sie heraus, führt eine laufende Korbsumme gegen ein Budget und teilt eine Rechnung mit Trinkgeld. Alles läuft offline ohne Konto. Die Gratisversion zeigt ein kleines Banner; ein Einmalkauf entfernt es.",
    "quickFacts": [
      [
        "Preis",
        "Kostenlos. Optionaler Einmalkauf ohne Werbung, kein Abo"
      ],
      [
        "Werkzeuge",
        "Grundpreisvergleich, Rabatt, Steuer, Korbsumme mit Budget, Teilen & Trinkgeld"
      ],
      [
        "Einheiten",
        "g, kg, oz, lb, ml, l, fl oz, gal, Stück, Packungen, Multipacks"
      ],
      [
        "Datenschutz",
        "Offline, kein Konto; Listen bleiben auf dem Handy"
      ]
    ],
    "screenshotsTitle": "Was du bekommst: die günstigere Packung, den echten Aktionspreis und einen Korb, der im Budget bleibt",
    "screenshots": [
      {
        "alt": "Grundpreis-Rechner auf dem iPhone vergleicht drei Packungen mit Preis pro Kilogramm, bester Preis hervorgehoben",
        "caption": "Welche Packung wirklich günstiger ist"
      },
      {
        "alt": "Rabattrechner mit 30 % Rabatt, zusätzlichen 10 %, Gutschein und Steuer mit Endpreis und Ersparnis",
        "caption": "Gestaffelte Rabatte, Endpreis"
      },
      {
        "alt": "Korbsumme mit Artikeln, Steuer und Restbetrag eines 60er-Budgets",
        "caption": "Beim Einkauf im Budget bleiben"
      },
      {
        "alt": "Steuerrechner, der 19 % MwSt. aus einem Bruttopreis herausrechnet",
        "caption": "Steuer aufschlagen oder herausrechnen"
      },
      {
        "alt": "Rechnung teilen mit 15 % Trinkgeld für vier Personen, aufgerundet",
        "caption": "Rechnung teilen, aufrunden"
      }
    ],
    "howTo": {
      "title": "So vergleichst du Grundpreise im Laden",
      "intro": "Regaletiketten zeigen bei einem Produkt den Preis pro 100 g, beim nächsten pro kg und bei Multipacks gar nichts. Hier die 20-Sekunden-Version.",
      "steps": [
        {
          "name": "Maß wählen",
          "text": "Gewicht, Volumen, Stück oder Länge. Das Einheitenmenü zeigt dann nur passende Einheiten (g, kg, oz, lb bei Gewicht; ml, l, fl oz, gal bei Volumen)."
        },
        {
          "name": "Jede Packung eingeben",
          "text": "Preis, Menge und Einheit für A und B. Bei einem Multipack Packungen auf 6 und Menge auf 330 ml setzen. Bis zu sechs Optionen."
        },
        {
          "name": "Ergebnis lesen",
          "text": "Der beste Preis bekommt ein grünes Abzeichen, jede andere Option zeigt, wie viel Prozent sie mehr kostet. Die Basis (pro kg, pro 100 g, pro lb) wechselst du im Menü Preis anzeigen pro."
        },
        {
          "name": "Dann das Angebot prüfen",
          "text": "Wechsle zu Rabatt, um Regalrabatt, Zusatzprozent an der Kasse und Gutschein zu staffeln, mit Steuer, falls dein Land sie an der Kasse aufschlägt."
        }
      ]
    },
    "featuresTitle": "Fünf Rechner für den Kassenbereich",
    "features": [
      {
        "icon": "⚖️",
        "title": "Grundpreisvergleich",
        "text": "Bis zu sechs Packungen, metrische und imperiale Einheiten gemischt, Multipacks, bester Preis mit Aufschlag jeder anderen Option in Prozent."
      },
      {
        "icon": "🏷️",
        "title": "Gestaffelte Rabatte",
        "text": "Prozent Rabatt, Zusatzprozent auf den reduzierten Preis, fester Gutschein, dann Steuer: in Ladenreihenfolge, mit dem, was du zahlst und sparst."
      },
      {
        "icon": "🧾",
        "title": "Mehrwertsteuer",
        "text": "Steuer auf einen Preis aufschlagen oder aus einem Bruttopreis herausrechnen. Schnellchips für gängige Sätze; deinen als Standard anheften."
      },
      {
        "icon": "🛒",
        "title": "Korbsumme mit Budget",
        "text": "Artikel beim Einkaufen antippen, abhaken, Steuer und Restbudget mit Fortschrittsbalken sehen."
      },
      {
        "icon": "👥",
        "title": "Teilen und Trinkgeld",
        "text": "Rechnung, Trinkgeld in Prozent, Personenzahl und Aufrunden, damit jeder Anteil glatt ist."
      },
      {
        "icon": "🌍",
        "title": "Deine Währung und Sprache",
        "text": "Folgt deinem Währungssymbol und Dezimaltrennzeichen; 19 Sprachen; merkt sich Listen und Steuersatz zwischen Einkäufen."
      }
    ],
    "intentsTitle": "Fragen, die diese App beantwortet",
    "intents": [
      {
        "h": "Wie berechne ich den Preis pro Einheit?",
        "p": "Preis durch Menge in einer gemeinsamen Einheit teilen. Die App rechnet um: 500 g für 4,49 sind 8,98 pro kg; 1,2 lb für 4,99 sind 9,17 pro kg. Die kleinere Zahl ist das bessere Angebot."
      },
      {
        "h": "Ist die größere Packung immer günstiger?",
        "p": "Meistens, aber nicht immer, und Multipacks und Aktionen brechen die Regel oft genug, um nachzurechnen. Beide eingeben, und die App zeigt den genauen Prozentunterschied."
      },
      {
        "h": "Wie viel sind 30 % Rabatt plus 10 % extra?",
        "p": "Nicht 40 %. Die zusätzlichen 10 % gelten auf den bereits reduzierten Preis, aus 100 werden 70 und dann 63: 37 % Ersparnis. Der Rabatt-Tab zeigt jeden Schritt."
      },
      {
        "h": "Wie rechne ich die Mehrwertsteuer aus einem Preis heraus?",
        "p": "Durch 1 plus Satz teilen: 119 bei 19 % MwSt. sind 100 netto. Steuer herausrechnen wählen, Betrag und Satz eingeben."
      },
      {
        "h": "Braucht die App Internet oder ein Konto?",
        "p": "Nein. Jede Berechnung läuft auf dem Handy, deine Listen bleiben lokal. Die einzige Netznutzung ist das kleine Werbebanner der Gratisversion, das ein Einmalkauf entfernt."
      }
    ],
    "compare": {
      "title": "Unit Price Calculator & Tax vs. Handy-Taschenrechner und Einzweck-Apps",
      "intro": "Der eingebaute Taschenrechner funktioniert, wenn du die Umrechnungen im Kopf hast und sie zweimal machst. Die meisten Einzweck-Apps erledigen eine dieser Aufgaben. Diese App vereint die fünf Kassenrechnungen und merkt sich deine Einstellungen.",
      "columns": [
        "",
        "Unit Price Calculator & Tax",
        "Handy-Taschenrechner",
        "Einzweck-Apps"
      ],
      "rows": [
        [
          "Rechnet g, kg, oz, lb, ml, l automatisch um",
          "✓",
          "✗ Manuell",
          "Teils"
        ],
        [
          "Multipacks und bis zu sechs Optionen",
          "✓",
          "✗",
          "Selten"
        ],
        [
          "Gestaffelte Rabatte mit Gutschein und Steuer",
          "✓",
          "✗ Schritt für Schritt",
          "Nur Rabatt-Apps"
        ],
        [
          "Korbsumme gegen ein Budget",
          "✓",
          "✗",
          "Nur Listen-Apps"
        ],
        [
          "Rechnung teilen mit Trinkgeld und Aufrunden",
          "✓",
          "✗",
          "Nur Trinkgeld-Apps"
        ],
        [
          "Preis",
          "Kostenlos, Einmalkauf ohne Werbung",
          "Kostenlos",
          "Kostenlos mit Werbung oder Abo"
        ]
      ]
    },
    "faqs": [
      {
        "q": "Ist die App kostenlos?",
        "a": "Ja. Die Gratisversion zeigt unten ein kleines Banner. Werbung entfernen ist ein einziger Einmalkauf; es gibt kein Abo und keinen anderen In-App-Kauf."
      },
      {
        "q": "Welche Einheiten werden unterstützt?",
        "a": "Gewicht: mg, g, kg, oz, lb. Volumen: ml, l, fl oz, cup, gal. Stück: Stück, Packung, Dutzend. Länge: cm, m, in, ft. Metrisch und imperial lassen sich in einem Vergleich mischen."
      },
      {
        "q": "Kann ich die Basis des Grundpreises ändern?",
        "a": "Ja. Unter Preis anzeigen pro wählst du pro kg, pro 100 g, pro lb, pro l, pro 100 ml, pro fl oz, pro Gallone und mehr."
      },
      {
        "q": "Merkt sie sich meinen Steuersatz?",
        "a": "Ja. Hefte im Steuer-Tab einen Satz als Standard an oder setze ihn in den Einstellungen; Rabatt und Korb nutzen ihn automatisch."
      },
      {
        "q": "Welche Währung wird verwendet?",
        "a": "Standardmäßig deine Gerätewährung. In den Einstellungen kannst du eine andere wählen."
      },
      {
        "q": "Funktioniert sie offline?",
        "a": "Ja. Berechnungen und Listen verlassen das Handy nie. Ohne Verbindung wird keine Werbung gezeigt."
      },
      {
        "q": "Welche Sprachen?",
        "a": "Englisch, Spanisch, Deutsch, Französisch, Italienisch, Portugiesisch, Niederländisch, Polnisch, Russisch, Ukrainisch, Türkisch, Arabisch, Hindi, Indonesisch, Vietnamesisch, Thai, Japanisch, Koreanisch und vereinfachtes Chinesisch."
      },
      {
        "q": "Gibt es eine Android-Version?",
        "a": "Noch nicht. Die iPhone-App erscheint zuerst; eine Android-Version ist geplant, und diese Seite verlinkt Google Play, sobald sie live ist."
      }
    ],
    "related": [
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Beleg fotografieren, Garantiedauer setzen, vor Ablauf erinnert werden. Offline, Einmalkauf."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Spannungsabfall, Querschnitt, Rohr- und Dosenfüllung nach NEC 2023, offline. Einmalkauf."
      },
      {
        "name": "Caffeine Tracker: Curfew",
        "href": "/apps/caffeine-tracker",
        "blurb": "Wie viel Koffein noch wirkt und bis wann der letzte Kaffee sein darf. Kostenlos."
      }
    ],
    "disclaimer": "Unit Price Calculator & Tax ist eine Einkaufshilfe. Steuersätze und Rundungsregeln unterscheiden sich je nach Land und Laden; prüfe den Endbetrag auf dem Kassenbon."
  },
  "caffeine-tracker": {
    "head": {
      "title": "Koffein-Tracker fürs iPhone: Wie viel Koffein noch in dir steckt und deine Schlafenszeit-Grenze",
      "description": "Kostenloser Koffein-Tracker fürs iPhone: Kaffee, Tee und Energydrinks in zwei Tipps loggen, die noch wirksamen Milligramm per Halbwertszeit-Modell sehen und eine Sperrstunde für die letzte Tasse bekommen. Offline, ohne Konto, 19 Sprachen.",
      "keywords": "koffein tracker app, koffein rechner, koffein halbwertszeit rechner, kaffee tracker, koffein tagebuch, wie lange wirkt koffein, wann letzter kaffee vor dem schlafen, koffein schlaf rechner, koffein im körper berechnen",
      "ogTitle": "Caffeine Tracker: Curfew – wie viel Koffein wirkt noch in dir?",
      "ogDescription": "Ein Getränk in zwei Tipps loggen, den Spiegel sinken sehen und die späteste Zeit für den letzten Kaffee bekommen, wenn du pünktlich schlafen willst. Kostenlose iPhone-App."
    },
    "h1": "Ein Koffein-Tracker, der zeigt, was noch in deinem Körper wirkt und bis wann der letzte Kaffee sein darf",
    "answer": "Caffeine Tracker: Curfew schätzt aus deinen Einträgen das aktive Koffein im Körper mit einem Halbwertszeit-Modell (etwa 5 Stunden bei den meisten Erwachsenen, einstellbar). Logge Espresso, Filterkaffee, Latte, Tee, Matcha, Energydrinks und mehr in zwei Tipps, sieh eine 12-Stunden-Kurve, bleibe heute unter 400 mg und lege Schlafenszeit und Ziel (25, 50 oder 100 mg) fest, um eine Sperrstunde zu bekommen: die späteste Zeit für dein letztes Getränk. Funktioniert offline ohne Konto. Ein einmaliges Pro-Upgrade ergänzt Apple-Health-Sync, 30-Tage-Verlauf und eigene Getränke.",
    "quickFacts": [
      [
        "Preis",
        "Kostenlos. Einmaliges Pro-Upgrade, kein Abo"
      ],
      [
        "Modell",
        "Halbwertszeit-Abbau, 2,5 bis 8 h, Standard 5 h"
      ],
      [
        "Getränke",
        "21 Vorlagen mit typischen mg, klein / normal / groß, eigene mit Pro"
      ],
      [
        "Datenschutz",
        "Offline, kein Konto; Apple Health nur schreibend und nur auf Wunsch"
      ]
    ],
    "screenshotsTitle": "Was du bekommst: die Zahl, die jetzt zählt, eine Sperrstunde für heute Abend und eine lesbare Woche",
    "screenshots": [
      {
        "alt": "Startbildschirm des Koffein-Trackers auf dem iPhone mit 128 mg im Körper, Tagessumme gegen 400 mg, Schlafenszeit-Sperrstunde und 12-Stunden-Abbaukurve",
        "caption": "Wie viel Koffein noch in dir steckt"
      },
      {
        "alt": "Getränk hinzufügen mit ausgewähltem Cold Brew, Größenwahl, Zeitwahl und durchsuchbarer Kaffeeliste",
        "caption": "Ein Getränk in zwei Tipps loggen"
      },
      {
        "alt": "Verlaufsbildschirm mit Balkendiagramm der Tagessummen von sieben Tagen und dem Tagesdurchschnitt",
        "caption": "Deine Woche sehen, Muster erkennen"
      },
      {
        "alt": "Einstellungen mit Schlafenszeit, Koffein zur Schlafenszeit, Halbwertszeit-Stepper und Tageslimit",
        "caption": "Schlafenszeit setzen, Sperrstunde bekommen"
      }
    ],
    "howTo": {
      "title": "So findest du deine Koffein-Grenze",
      "intro": "Die Frage ist nicht, wie viel Kaffee du trinkst, sondern wie viel noch übrig ist, wenn du im Bett liegst. Drei Einstellungen, den Rest rechnet die App.",
      "steps": [
        {
          "name": "Schlafenszeit setzen",
          "text": "Einstellungen → Schlaf → Schlafenszeit. Die App zielt immer auf die heutige Schlafenszeit, auch wenn du ein spätes Getränk nach Mitternacht loggst."
        },
        {
          "name": "Wählen, womit du einschlafen kannst",
          "text": "25 mg bei leichtem Schlaf, 50 mg für die meisten, 100 mg, wenn Koffein dich kaum beeinflusst. Das ist der Zielwert zur Schlafenszeit."
        },
        {
          "name": "Loggen, was du trinkst",
          "text": "Tippe ein Getränk auf dem Startbildschirm an (Espresso, Filter, Latte, Tee, Energydrink) oder öffne die volle Liste mit Größen und Zeitwahl für die vergessene Tasse."
        },
        {
          "name": "Sperrstunde lesen",
          "text": "Die Karte Koffein-Sperrstunde sagt zum Beispiel: „Letztes Getränk mit 95 mg bis 15:40, um zur Schlafenszeit unter 50 mg zu sein.“ Danach zeigt sie, was eine weitere Tasse zur Schlafenszeit übrig ließe."
        }
      ]
    },
    "featuresTitle": "Gebaut um eine Zahl: was gerade wirkt",
    "features": [
      {
        "icon": "☕",
        "title": "Aktueller Spiegel",
        "text": "Jede Dosis klingt per Halbwertszeit ab. Sieh die aktiven Milligramm, einen Status (frei, aktiv, aufgedreht) und wie lange es bis unter dein Schlafziel dauert."
      },
      {
        "icon": "🌙",
        "title": "Koffein-Sperrstunde",
        "text": "Späteste Zeit für dein übliches Getränk, um zur Schlafenszeit unter dem Ziel zu bleiben. Einstellbare Halbwertszeit für Schwangerschaft, Medikamente oder schnellen Stoffwechsel."
      },
      {
        "icon": "⚡",
        "title": "Loggen in zwei Tipps",
        "text": "Sechs Favoriten auf dem Startbildschirm; 21 Vorlagen mit typischen Koffeingehalten; klein, normal und groß; Getränke nachtragen."
      },
      {
        "icon": "📊",
        "title": "Tageslimit und Verlauf",
        "text": "Fortschritt gegen 400, 300 oder 200 mg. Sieben Tage Summen mit Durchschnitt und Tagen über dem Limit; 30 Tage mit Pro."
      },
      {
        "icon": "❤️",
        "title": "Apple Health (Pro)",
        "text": "Koffein in Health schreiben, damit es neben deinen Schlafdaten liegt. Ein gelöschtes Getränk entfernt den Eintrag."
      },
      {
        "icon": "🌍",
        "title": "19 Sprachen, offline",
        "text": "Nichts verlässt das Handy. Kein Konto, keine Werbung, keine Analysen."
      }
    ],
    "intentsTitle": "Fragen, die diese App beantwortet",
    "intents": [
      {
        "h": "Wie lange bleibt Koffein im Körper?",
        "p": "Die Halbwertszeit liegt bei den meisten Erwachsenen bei etwa 5 Stunden: Eine Tasse mit 95 mg um 15 Uhr sind um 20 Uhr noch etwa 48 mg und um 1 Uhr 24 mg. Die App zeichnet genau diese Kurve für alles, was du geloggt hast."
      },
      {
        "h": "Wann sollte ich aufhören, Kaffee zu trinken, um zu schlafen?",
        "p": "Das hängt von Schlafenszeit, Empfindlichkeit und dem bereits Getrunkenen ab. Mit 50 mg Ziel und 23 Uhr Schlafenszeit muss ein einzelner Kaffee mit 95 mg bis etwa 18:20 Uhr getrunken sein; nach zwei früheren Tassen deutlich früher. Die Sperrstunden-Karte rechnet das laufend."
      },
      {
        "h": "Wie viel Koffein steckt in Espresso, Latte oder Cold Brew?",
        "p": "Typische Werte: Espresso 63 mg, Latte oder Cappuccino 75 mg (ein Shot), Filterkaffee 95 mg, Cold Brew 200 mg, Schwarztee 47 mg, Grüntee 28 mg, Matcha 70 mg, ein 250-ml-Energydrink 80 mg. Alle Vorlagen sind nach Größe anpassbar, mit Pro auch exakte Mengen."
      },
      {
        "h": "Wie viel Koffein am Tag ist zu viel?",
        "p": "Der häufig genannte Richtwert für gesunde Erwachsene liegt bei 400 mg am Tag, 200 mg in der Schwangerschaft. Die App führt einen Fortschrittsbalken gegen das gewählte Limit."
      },
      {
        "h": "Braucht die App Internet oder ein Konto?",
        "p": "Nein. Alles läuft auf dem Handy. In Apple Health wird nur geschrieben, wenn du es in Pro aktivierst."
      }
    ],
    "compare": {
      "title": "Caffeine Tracker: Curfew vs. Notizen-App und Abo-Koffein-Tracker",
      "intro": "Tassen zählen sagt nichts über heute Abend. Die meisten Koffein-Apps berechnen den Spiegel zwar, verlangen dafür aber ein Monatsabo. Diese App liefert Spiegel, Sperrstunde und Verlauf kostenlos, mit einem einmaligen Pro für den Health-Sync.",
      "columns": [
        "",
        "Caffeine Tracker: Curfew",
        "Notizen / Gedächtnis",
        "Abo-Tracker"
      ],
      "rows": [
        [
          "Aktives Koffein mit Abbaukurve",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Schlafenszeit-Sperrstunde für das letzte Getränk",
          "✓",
          "✗",
          "Teils"
        ],
        [
          "Loggen in zwei Tipps mit typischen mg",
          "✓",
          "✗",
          "✓"
        ],
        [
          "Apple-Health-Sync",
          "✓ Pro (einmalig)",
          "✗",
          "✓ Abo"
        ],
        [
          "Offline, ohne Konto",
          "✓",
          "✓",
          "Unterschiedlich"
        ],
        [
          "Preis",
          "Kostenlos, einmaliges Pro",
          "Kostenlos",
          "Monatlich oder jährlich"
        ]
      ]
    },
    "faqs": [
      {
        "q": "Wie genau ist die Schätzung?",
        "a": "Es ist eine Schätzung. Koffeingehalt variiert nach Zubereitung und Marke, die Halbwertszeit zwischen Menschen (etwa 3 bis 7 Stunden). Passe die Halbwertszeit in den Einstellungen an, wenn du Koffein langsam oder schnell abbaust. Keine medizinische Beratung."
      },
      {
        "q": "Was ist in Pro enthalten?",
        "a": "Apple-Health-Sync (Koffein), 30-Tage-Verlauf statt 7 und eigene Getränke mit exakten Mengen. Ein einziger Einmalkauf, kein Abo."
      },
      {
        "q": "Liest sie meine Health-Daten?",
        "a": "Nein. Mit Pro und aktiviertem Schalter schreibt sie Koffeineinträge in Health und löscht sie, wenn du ein Getränk löschst. Sie liest nie etwas."
      },
      {
        "q": "Kann ich ein vergessenes Getränk nachtragen?",
        "a": "Ja. Öffne die volle Getränkeliste und ändere die Zeit vor dem Hinzufügen."
      },
      {
        "q": "Was, wenn meine Schlafenszeit nach Mitternacht ist?",
        "a": "Stelle sie normal ein (zum Beispiel 1:00 Uhr). Ein um 23 Uhr geloggtes Getränk zählt trotzdem zu heute Nacht."
      },
      {
        "q": "Welche Sprachen?",
        "a": "Englisch, Spanisch, Deutsch, Französisch, Italienisch, Portugiesisch, Niederländisch, Polnisch, Russisch, Ukrainisch, Türkisch, Arabisch, Hindi, Indonesisch, Vietnamesisch, Thai, Japanisch, Koreanisch und vereinfachtes Chinesisch."
      },
      {
        "q": "Gibt es eine Android-Version?",
        "a": "Noch nicht. Die iPhone-App erscheint zuerst; eine Android-Version ist geplant, und diese Seite verlinkt Google Play, sobald sie live ist."
      }
    ],
    "related": [
      {
        "name": "Unit Price Calculator & Tax",
        "href": "/apps/unit-price-calculator",
        "blurb": "Welche Packung pro kg oder Liter günstiger ist, gestaffelte Rabatte, Steuer, Einkaufsbudget und Rechnung teilen. Kostenlos."
      },
      {
        "name": "Warranty Tracker & Receipt Log",
        "href": "/apps/warranty-tracker",
        "blurb": "Beleg fotografieren, Garantiedauer setzen, vor Ablauf erinnert werden. Offline, Einmalkauf."
      },
      {
        "name": "Electrician Calculator Toolkit",
        "href": "/apps/electrician-calculator",
        "blurb": "Spannungsabfall, Querschnitt, Rohr- und Dosenfüllung nach NEC 2023, offline. Einmalkauf."
      }
    ],
    "disclaimer": "Caffeine Tracker: Curfew nutzt ein einfaches Halbwertszeit-Modell und durchschnittliche Koffeingehalte. Es ist kein Medizinprodukt und keine medizinische Beratung; sprich mit einer Fachperson über Koffein und deine Gesundheit."
  },
};

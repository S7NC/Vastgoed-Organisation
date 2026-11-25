export const locales = [
  { code: "nl", name: "Nederlands" },
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
] as const;

export type Locale = "nl" | "en" | "fr" | "de";

export const content = {
  nl: {
    meta: {
      title: "Vastgoed.org | Jouw woning. Jouw sleutel.",
      description:
        "Ontdek open vastgoed met Nostr: onderteken je eigen aanbod, deel gestructureerde gegevens en houd de regie over je advertenties.",
    },
    nav: {
      principle: "Het principe",
      agents: "Voor makelaars",
      buyers: "Voor kopers",
      developers: "Voor developers",
      questions: "Vragen",
      visit: "Ontdek Vastgoed.net",
      language: "Taal kiezen",
      menu: "Menu openen",
      skip: "Naar de inhoud",
    },
    hero: {
      eyebrow: "Open vastgoed met Nostr",
      line1: "Jouw woning.",
      line2: "Jouw sleutel.",
      description:
        "Publiceer je aanbod met je eigen digitale sleutel. Laat deelnemende websites dezelfde advertentie lezen, zonder dat één portaal de enige bron wordt.",
      primary: "Ontdek het principe",
      secondary: "Voor makelaars",
      caption: "Genk, België",
      captionDetail: "Voorbeeldwoning · geen actief aanbod",
      note: "Jouw sleutels. Jouw advertenties. Een open netwerk.",
    },
    strip: ["Je eigen sleutel", "Eén gedeelde bron", "Open, leesbare data"],
    principle: {
      eyebrow: "Het principe",
      title: "Eén advertentie.",
      accent: "Meer mogelijkheden.",
      description:
        "Een woningadvertentie hoeft niet opgesloten te zitten in één platform. Met een open formaat kunnen eigenaars, makelaars en deelnemende websites dezelfde ondertekende gegevens gebruiken.",
      cards: [
        {
          title: "Zelf de afzender blijven",
          description:
            "Onderteken je aanbod met je eigen Nostr-sleutel. Anderen kunnen controleren welke sleutel de advertentie en latere updates heeft ondertekend.",
        },
        {
          title: "Delen zonder dubbel invoeren",
          description:
            "Je eigen website en compatibele portalen kunnen dezelfde bron lezen. Elk platform bepaalt zelf wat het overneemt en hoe vaak het bijwerkt.",
        },
        {
          title: "Verder bouwen op open data",
          description:
            "Gestructureerde JSON maakt eigen zoekfuncties, vergelijkingen en AI-toepassingen mogelijk, mits die toegang hebben tot de gegevens en ze juist verwerken.",
        },
      ],
    },
    ownership: {
      eyebrow: "Jouw sleutel, jouw verantwoordelijkheid",
      title: "Openbaar herkenbaar. Privé ondertekend.",
      description:
        "Een Nostr-identiteit bestaat uit een publieke en een private sleutel. Ze hebben elk een andere rol. Een handtekening bewijst niet dat je eigenaar bent van de woning.",
      publicLabel: "Publieke sleutel",
      publicDescription:
        "Dit is je herkenbare afzender. Je kunt deze sleutel delen en op je eigen website vermelden, zodat anderen je advertenties ermee kunnen vergelijken.",
      privateLabel: "Private sleutel",
      privateDescription:
        "Hiermee onderteken je advertenties en updates. Deel deze geheime sleutel nooit en plak hem niet in een advertentie, chat of onbekende website. Gebruik een betrouwbare signer en bewaar een veilige back-up.",
      note: "Wie je private sleutel heeft, kan namens die sleutel publiceren. De sleutel geeft geen juridisch eigendomsrecht op een woning.",
    },
    agents: {
      eyebrow: "Voor makelaars",
      title: "Eén prijswijziging.",
      accent: "Dezelfde bron.",
      description:
        "Stel: de vraagprijs van een woning in Genk verandert. Je ondertekent één nieuwe versie. Websites die deze bron volgen, kunnen de update ophalen en tonen.",
      try: "Probeer de prijswijziging",
      reset: "Voorbeeld herstellen",
      demo: "Interactief voorbeeld · geen live verbinding",
      location: "Genk · Limburg, België",
      property: "Woning met tuin",
      asking: "Vraagprijs",
      agency: "Website van het kantoor",
      updated: "Bijgewerkt in dit voorbeeld",
      initial: "Dezelfde advertentie op twee websites",
      signed: "Nieuwe versie ondertekend in dit voorbeeld",
      syncing: "De voorbeeldwebsites nemen de wijziging over",
      disclaimer:
        "Deze simulatie verstuurt of ondertekent niets. In de praktijk hangen verwerking en zichtbaarheid af van de relay, de website en hun beleid.",
    },
    buyers: {
      eyebrow: "Voor kopers",
      title: "Dezelfde woning, twee prijzen?",
      description:
        "Een open advertentie helpt je de bron en updates te vergelijken. Deelnemende websites kunnen dezelfde gegevens tonen, maar kunnen verschillen in timing, selectie en presentatie.",
      link: "Bekijk het prijsvoorbeeld",
      checks: [
        {
          title: "Vergelijk de laatste update",
          description:
            "Controleer de datum en de bron als prijzen verschillen. Vraag de makelaar welke prijs en voorwaarden op dit moment gelden.",
        },
        {
          title: "Controleer de afzender",
          description:
            "Vergelijk de publieke sleutel met die op de officiële website van het kantoor. Een geldige handtekening bevestigt de ondertekenende sleutel, niet de juistheid van het aanbod.",
        },
      ],
    },
    open: {
      eyebrow: "Open gegevens, nieuwe toepassingen",
      title: "Leesbaar voor mensen.",
      accent: "Bruikbaar voor software.",
      description:
        "Een ondertekend Nostr-bericht is gestructureerde JSON. Zo wordt je aanbod een bruikbare bron voor eigen websites, zoektools en slimme toepassingen.",
      cards: [
        {
          title: "Bouw je eigen overzicht",
          description:
            "Een compatibele client kan advertenties opvragen, versies groeperen en relevante velden tonen. Je kiest zelf de filters en presentatie.",
        },
        {
          title: "Geef AI een duidelijke bron",
          description:
            "Een AI-toepassing heeft een client, indexer of andere toegestane toegang nodig. JSON alleen geeft geen automatische toegang, toestemming of correcte interpretatie.",
        },
        {
          title: "Controleer onafhankelijk",
          description:
            "Tools kunnen bericht-ID en handtekening zelfstandig verifiëren. Dat helpt de herkomst te controleren, maar vervangt geen controle van prijs, woninggegevens of bevoegdheid.",
        },
      ],
    },
    developers: {
      eyebrow: "Voor developers",
      title: "Maak de bron onderdeel van je eigen site.",
      description:
        "Een Nostr-client kan via WebSocket advertenties bij een compatibele relay opvragen. Dit NIP-01-verzoek vraagt maximaal twintig bestaande NIP-99-berichten van kind 30402 en blijft luisteren naar nieuwe overeenkomende berichten, voor zover de relay dat toestaat.",
      request: "Advertenties opvragen",
      copy: "JSON kopiëren",
      copied: "JSON gekopieerd",
      copyError:
        "Kopiëren mislukt. Selecteer de JSON om deze handmatig te kopiëren.",
      note: "Controleer bericht-ID en handtekening; groepeer versies op kind, publieke sleutel en d-tag. Verwerk de nieuwste geldige versie en valideer de velden. Elke relay bepaalt zijn eigen toegangs- en bewaarbeleid.",
      protocol: "NIP-01 · Relayprotocol",
      format: "NIP-99 · Advertentieformaat",
      tabRequest: "Verzoek",
      tabEvent: "Velden (voorbeeld)",
    },
    faq: {
      eyebrow: "Veelgestelde vragen",
      title: "Over open vastgoed",
      items: [
        {
          q: "Wat zijn Nostr en een relay?",
          a: "Nostr is een open protocol voor ondertekende berichten. Een woningadvertentie kan zo een bericht zijn. Een relay is een server die deze berichten ontvangt, bewaart en doorgeeft aan toepassingen die ze opvragen. Elke relay bepaalt zelf welke berichten hij accepteert en hoelang hij ze bewaart.",
        },
        {
          q: "Wat levert dit een makelaarskantoor op?",
          a: "Eén ondertekende bron kan je eigen website en deelnemende portalen voeden. Dat kan dubbel invoerwerk beperken en maakt je aanbod makkelijker mee te nemen naar andere compatibele diensten. Je kiest zelf welke kanalen en extra zichtbaarheid bij je kantoor passen. Deelnemende toepassingen bepalen hoe ze je aanbod opnemen en tonen.",
        },
        {
          q: "Heb ik een sleutel nodig om woningen te bekijken?",
          a: "Voor publiek aanbod in een open client is geen eigen sleutel nodig. Een specifieke website kan wel toegangsregels hanteren. Om namens je eigen Nostr-identiteit te publiceren of bij te werken, moet je ondertekenen, bijvoorbeeld via een betrouwbare browserextensie of andere signer. Deel nooit je private sleutel.",
        },
        {
          q: "Heeft elke woning een aparte sleutel nodig?",
          a: "Nee. Eén sleutel kan het hele aanbod van een eigenaar of kantoor ondertekenen. Elke advertentie krijgt een eigen d-tag als identificatie. Versies worden onderscheiden op kind, publieke sleutel en d-tag, zodat een update van de ene advertentie de andere niet vervangt.",
        },
        {
          q: "Wat is het verschil tussen Vastgoed.org en Vastgoed.net?",
          a: "Vastgoed.org legt uit hoe open vastgoed werkt. Vastgoed.net is het platform dat we bouwen voor eigenaars en makelaars, met gratis publiceren en optionele betaalde zichtbaarheid als uitgangspunt. Voor lidmaatschappen plannen we een inschrijving via Ghost die je e-mailadres aan je publieke Nostr-sleutel koppelt. Je e-mailadres hoort niet in de openbare advertentie.",
        },
        {
          q: "Waar worden foto's bewaard?",
          a: "De geplande opzet houdt foto's en advertenties gescheiden. Beelden krijgen via Blossom een plek bij een opslagdienst zoals nostr.build; het Nostr-bericht bevat de links. Uploads kunnen met je eigen sleutel worden geautoriseerd. Zo blijft de advertentie compact en kan een compatibele toepassing de beelden ophalen. De gekozen opslagdienst bepaalt de opslagvoorwaarden.",
        },
        {
          q: "Bewijst een handtekening wie eigenaar is van de woning?",
          a: "Nee. Een geldige handtekening toont dat het bericht met de bijbehorende private sleutel is ondertekend en sindsdien niet is gewijzigd. Ze bewijst geen burgerlijke identiteit, eigendomsrecht, verkoopmandaat of juistheid van de inhoud. Controleer die zaken afzonderlijk.",
        },
        {
          q: "Welke gegevens mag ik openbaar maken?",
          a: "Behandel een openbare advertentie als publiek en kopieerbaar. Publiceer alleen gegevens en beelden die je mag delen. Upload geen identiteitsdocumenten, private sleutels, gegevens van bewoners of andere gevoelige informatie. Kopieën kunnen elders blijven bestaan, ook na een verwijderverzoek. Een privé-account maakt de advertentie zelf niet privé.",
        },
        {
          q: "Kan AI de advertenties automatisch vinden en controleren?",
          a: "Niet vanzelf. AI heeft toegang nodig via een client, indexer of koppeling, met de vereiste toestemming en volgens de toegangsregels. Gestructureerde JSON helpt bij verwerking, maar voorkomt geen fouten of verouderde informatie. Laat tools handtekeningen onafhankelijk controleren en verifieer belangrijke woninggegevens bij de bron.",
        },
      ],
    },
    cta: {
      eyebrow: "Van principe naar praktijk",
      title: "Open vastgoed begint hier.",
      description:
        "Ben je eigenaar of makelaar? Ontdek Vastgoed.net en zet de volgende stap naar je aanbod publiceren met je eigen sleutel, in een open netwerk.",
      button: "Naar Vastgoed.net",
      note: "Ontdek het platform voor eigenaars en makelaars.",
    },
    footer: {
      description: "Ontdek hoe open vastgoed werkt.",
      standard: "De Nostr-standaard voor advertenties",
      top: "Terug naar boven",
      credit: "Gebouwd rond open standaarden. Regie bij de afzender.",
    },
  },
  en: {
    meta: {
      title: "Vastgoed.org | Your property. Your key.",
      description:
        "Explore open real estate with Nostr: sign your own listings, share structured data and stay in control of what you publish.",
    },
    nav: {
      principle: "The principle",
      agents: "For agents",
      buyers: "For buyers",
      developers: "For developers",
      questions: "Questions",
      visit: "Explore Vastgoed.net",
      language: "Choose language",
      menu: "Open menu",
      skip: "Skip to content",
    },
    hero: {
      eyebrow: "Open real estate with Nostr",
      line1: "Your property.",
      line2: "Your key.",
      description:
        "Publish your listings with your own digital key. Let participating websites read the same listing, without making one portal the only source.",
      primary: "Explore the principle",
      secondary: "For agents",
      caption: "Genk, Belgium",
      captionDetail: "Example property · not an active listing",
      note: "Your keys. Your listings. An open network.",
    },
    strip: ["Your own key", "One shared source", "Open, readable data"],
    principle: {
      eyebrow: "The principle",
      title: "One listing.",
      accent: "More possibilities.",
      description:
        "A property listing need not be locked into one platform. An open format lets owners, agents and participating websites use the same signed data.",
      cards: [
        {
          title: "Remain the publisher",
          description:
            "Sign your listings with your own Nostr key. Others can check which key signed the listing and its subsequent updates.",
        },
        {
          title: "Share without re-entering",
          description:
            "Your own website and compatible portals can read the same source. Each platform decides what to include and how often to update.",
        },
        {
          title: "Build on open data",
          description:
            "Structured JSON enables custom search, comparisons and AI applications, provided they can access the data and process it correctly.",
        },
      ],
    },
    ownership: {
      eyebrow: "Your key, your responsibility",
      title: "Publicly identifiable. Privately signed.",
      description:
        "A Nostr identity consists of a public key and a private key. Each has a different role. A signature does not prove that you own the property.",
      publicLabel: "Public key",
      publicDescription:
        "This identifies you as the publisher. Share it and display it on your own website so others can compare it with the key on your listings.",
      privateLabel: "Private key",
      privateDescription:
        "This signs your listings and updates. Never share this secret key or paste it into a listing, chat or unfamiliar website. Use a trusted signer and keep a secure backup.",
      note: "Anyone with your private key can publish under that key. The key does not confer legal ownership of a property.",
    },
    agents: {
      eyebrow: "For agents",
      title: "One price change.",
      accent: "The same source.",
      description:
        "Imagine the asking price of a home in Genk changes. You sign one new version. Websites following that source can retrieve and display the update.",
      try: "Try the price change",
      reset: "Reset example",
      demo: "Interactive example · no live connection",
      location: "Genk · Limburg, Belgium",
      property: "House with a garden",
      asking: "Asking price",
      agency: "Agency website",
      updated: "Updated in this example",
      initial: "The same listing on two websites",
      signed: "New version signed in this example",
      syncing: "The example websites apply the change",
      disclaimer:
        "This simulation does not send or sign anything. In practice, processing and visibility depend on the relay, the website and their policies.",
    },
    buyers: {
      eyebrow: "For buyers",
      title: "The same home, two prices?",
      description:
        "An open listing helps you compare its source and updates. Participating websites can show the same data, but may differ in timing, selection and presentation.",
      link: "See the price example",
      checks: [
        {
          title: "Compare the latest update",
          description:
            "Check the date and source if prices differ. Ask the agent which price and conditions currently apply.",
        },
        {
          title: "Check the publisher",
          description:
            "Compare the public key with the one on the agency's official website. A valid signature confirms the signing key, not the accuracy of the listing.",
        },
      ],
    },
    open: {
      eyebrow: "Open data, new applications",
      title: "Readable by people.",
      accent: "Usable by software.",
      description:
        "A signed Nostr event is structured JSON. Your listings become a useful source for your own websites, search tools and smart applications.",
      cards: [
        {
          title: "Build your own view",
          description:
            "A compatible client can request listings, group versions and display relevant fields. You choose the filters and presentation.",
        },
        {
          title: "Give AI a clear source",
          description:
            "An AI application needs a client, indexer or another permitted access path. JSON alone does not provide automatic access, permission or correct interpretation.",
        },
        {
          title: "Verify independently",
          description:
            "Tools can independently verify event IDs and signatures. This helps check provenance, but does not replace checks on price, property details or authority to sell.",
        },
      ],
    },
    developers: {
      eyebrow: "For developers",
      title: "Make the source part of your own site.",
      description:
        "A Nostr client can request listings from a compatible relay over WebSocket. This NIP-01 request asks for up to twenty existing NIP-99 events of kind 30402 and keeps listening for new matching events, subject to relay policy.",
      request: "Request listings",
      copy: "Copy JSON",
      copied: "JSON copied",
      copyError: "Copy failed. Select the JSON to copy it manually.",
      note: "Verify event IDs and signatures; group versions by kind, public key and d-tag. Process the latest valid version and validate its fields. Each relay sets its own access and retention policies.",
      protocol: "NIP-01 · Relay protocol",
      format: "NIP-99 · Listing format",
      tabRequest: "Request",
      tabEvent: "Fields (example)",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "About open real estate",
      items: [
        {
          q: "What are Nostr and a relay?",
          a: "Nostr is an open protocol for signed messages. A property listing can be one of those messages. A relay is a server that receives, stores and forwards these messages to applications that request them. Each relay decides which messages it accepts and how long it retains them.",
        },
        {
          q: "How does this help an estate agency?",
          a: "One signed source can supply your own website and participating portals. This can reduce duplicate entry and make it easier to move your listings to other compatible services. You choose which channels and additional visibility suit your agency. Participating applications decide how to include and display your listings.",
        },
        {
          q: "Do I need a key to browse properties?",
          a: "You do not need your own key to browse public listings in an open client. A particular website may still set access rules. Publishing or updating under your own Nostr identity requires a signature, for example through a trusted browser extension or another signer. Never share your private key.",
        },
        {
          q: "Does each property need a separate key?",
          a: "No. One key can sign all listings for an owner or agency. Each listing has its own identifying d-tag. Versions are distinguished by kind, public key and d-tag, so updating one listing does not replace another.",
        },
        {
          q: "What is the difference between Vastgoed.org and Vastgoed.net?",
          a: "Vastgoed.org explains how open real estate works. Vastgoed.net is the platform we are building for owners and agents, designed around free publishing and optional paid prominence. The planned membership setup uses Ghost to link your email address to your public Nostr key. Your email address does not belong in the public listing.",
        },
        {
          q: "Where are photos stored?",
          a: "The planned design keeps photos separate from listings. Images are stored through Blossom with a service such as nostr.build, while the Nostr event contains the links. Uploads can be authorised with your own key. This keeps the listing compact and lets compatible applications retrieve the images. Storage terms are set by the chosen service.",
        },
        {
          q: "Does a signature prove who owns the property?",
          a: "No. A valid signature shows that the event was signed with the corresponding private key and has not changed since. It does not prove legal identity, property ownership, an agency mandate or the accuracy of the content. Check those separately.",
        },
        {
          q: "What information should I make public?",
          a: "Treat a public listing as public and copyable. Publish only data and images you have the right to share. Do not upload identity documents, private keys, residents' personal details or other sensitive information. Copies may remain elsewhere even after a deletion request. A private account does not make the listing itself private.",
        },
        {
          q: "Can AI automatically find and verify the listings?",
          a: "Not by itself. AI needs access through a client, indexer or integration, with any required permission and subject to access rules. Structured JSON helps processing but does not prevent errors or outdated information. Use tools to verify signatures independently and check important property details with the source.",
        },
      ],
    },
    cta: {
      eyebrow: "From principle to practice",
      title: "A more open future starts here.",
      description:
        "Own a property or run an agency? Explore Vastgoed.net and take the next step towards publishing your listings with your own key, in an open network.",
      button: "Visit Vastgoed.net",
      note: "Discover the platform for property owners and agents.",
    },
    footer: {
      description: "Discover how open real estate works.",
      standard: "The Nostr standard for listings",
      top: "Back to top",
      credit: "Built around open standards. Control stays with the publisher.",
    },
  },
  fr: {
    meta: {
      title: "Vastgoed.org | Votre bien. Votre clé.",
      description:
        "Découvrez l’immobilier ouvert avec Nostr : signez vos annonces, partagez des données structurées et gardez la maîtrise de vos publications.",
    },
    nav: {
      principle: "Le principe",
      agents: "Pour les agences",
      buyers: "Pour les acheteurs",
      developers: "Pour les développeurs",
      questions: "Questions",
      visit: "Découvrir Vastgoed.net",
      language: "Choisir la langue",
      menu: "Ouvrir le menu",
      skip: "Aller au contenu",
    },
    hero: {
      eyebrow: "L’immobilier ouvert avec Nostr",
      line1: "Votre bien.",
      line2: "Votre clé.",
      description:
        "Publiez vos annonces avec votre propre clé numérique. Les sites participants peuvent lire la même annonce, sans qu’un seul portail en devienne l’unique source.",
      primary: "Découvrir le principe",
      secondary: "Pour les agences",
      caption: "Genk, Belgique",
      captionDetail: "Bien fictif · aucune offre en cours",
      note: "Vos clés. Vos annonces. Un réseau ouvert.",
    },
    strip: [
      "Votre propre clé",
      "Une source partagée",
      "Des données ouvertes et lisibles",
    ],
    principle: {
      eyebrow: "Le principe",
      title: "Une annonce.",
      accent: "Plus de possibilités.",
      description:
        "Une annonce immobilière ne doit pas rester enfermée dans une seule plateforme. Un format ouvert permet aux propriétaires, aux agences et aux sites participants d’utiliser les mêmes données signées.",
      cards: [
        {
          title: "Rester à l’origine de vos annonces",
          description:
            "Signez vos annonces avec votre propre clé Nostr. Chacun peut vérifier quelle clé a signé l’annonce et ses mises à jour.",
        },
        {
          title: "Partager sans ressaisir",
          description:
            "Votre site et les portails compatibles peuvent lire la même source. Chaque plateforme décide des données reprises et de sa fréquence de mise à jour.",
        },
        {
          title: "Créer à partir de données ouvertes",
          description:
            "Le JSON structuré permet de concevoir des recherches, des comparaisons et des applications d’IA, à condition qu’elles puissent accéder aux données et les traiter correctement.",
        },
      ],
    },
    ownership: {
      eyebrow: "Votre clé, votre responsabilité",
      title: "Une identité publique. Une signature privée.",
      description:
        "Une identité Nostr comporte une clé publique et une clé privée. Leurs rôles sont différents. Une signature ne prouve pas que vous êtes propriétaire du bien.",
      publicLabel: "Clé publique",
      publicDescription:
        "Elle vous identifie comme émetteur. Vous pouvez la partager et l’afficher sur votre site pour permettre de la comparer à celle de vos annonces.",
      privateLabel: "Clé privée",
      privateDescription:
        "Elle sert à signer vos annonces et leurs mises à jour. Ne partagez jamais cette clé secrète et ne la collez pas dans une annonce, une conversation ou un site inconnu. Utilisez un outil de signature fiable et conservez une sauvegarde sécurisée.",
      note: "Toute personne détenant votre clé privée peut publier avec cette clé. Celle-ci ne confère aucun droit de propriété sur un bien.",
    },
    agents: {
      eyebrow: "Pour les agences",
      title: "Un changement de prix.",
      accent: "La même source.",
      description:
        "Imaginez que le prix demandé pour une maison à Genk change. Vous signez une nouvelle version. Les sites qui suivent cette source peuvent récupérer et afficher la mise à jour.",
      try: "Essayer le changement de prix",
      reset: "Réinitialiser l’exemple",
      demo: "Exemple interactif · sans connexion en direct",
      location: "Genk · Limbourg, Belgique",
      property: "Maison avec jardin",
      asking: "Prix demandé",
      agency: "Site de l’agence",
      updated: "Mis à jour dans cet exemple",
      initial: "La même annonce sur deux sites",
      signed: "Nouvelle version signée dans cet exemple",
      syncing: "Les sites de démonstration reprennent la modification",
      disclaimer:
        "Cette simulation n’envoie ni ne signe rien. En pratique, le traitement et la visibilité dépendent du relais, du site et de leurs règles.",
    },
    buyers: {
      eyebrow: "Pour les acheteurs",
      title: "La même maison, deux prix ?",
      description:
        "Une annonce ouverte vous aide à comparer sa source et ses mises à jour. Les sites participants peuvent afficher les mêmes données, mais leurs délais, leur sélection et leur présentation peuvent différer.",
      link: "Voir l’exemple de prix",
      checks: [
        {
          title: "Comparer la dernière mise à jour",
          description:
            "Si les prix diffèrent, vérifiez la date et la source. Demandez à l’agence quels prix et conditions sont actuellement applicables.",
        },
        {
          title: "Vérifier l’émetteur",
          description:
            "Comparez la clé publique à celle du site officiel de l’agence. Une signature valide confirme la clé utilisée, pas l’exactitude de l’annonce.",
        },
      ],
    },
    open: {
      eyebrow: "Données ouvertes, nouveaux usages",
      title: "Lisibles par les personnes.",
      accent: "Exploitables par les logiciels.",
      description:
        "Un événement Nostr signé est du JSON structuré. Vos annonces deviennent une source exploitable pour vos sites, vos outils de recherche et vos applications intelligentes.",
      cards: [
        {
          title: "Créer votre propre sélection",
          description:
            "Un client compatible peut demander des annonces, regrouper leurs versions et afficher les champs utiles. Vous choisissez les filtres et la présentation.",
        },
        {
          title: "Donner une source claire à l’IA",
          description:
            "Une application d’IA a besoin d’un client, d’un indexeur ou d’un autre accès autorisé. Le JSON seul ne donne ni accès automatique, ni permission, ni interprétation correcte.",
        },
        {
          title: "Vérifier indépendamment",
          description:
            "Des outils peuvent vérifier les identifiants et les signatures des événements de façon indépendante. Cela aide à contrôler la provenance, sans remplacer la vérification du prix, du bien ou du mandat.",
        },
      ],
    },
    developers: {
      eyebrow: "Pour les développeurs",
      title: "Intégrez la source à votre propre site.",
      description:
        "Un client Nostr peut demander des annonces à un relais compatible via WebSocket. Cette requête NIP-01 demande jusqu’à vingt événements NIP-99 existants de type 30402 et reste à l’écoute des nouveaux événements correspondants, selon les règles du relais.",
      request: "Demander des annonces",
      copy: "Copier le JSON",
      copied: "JSON copié",
      copyError:
        "Échec de la copie. Sélectionnez le JSON pour le copier manuellement.",
      note: "Vérifiez les identifiants et les signatures ; regroupez les versions par type, clé publique et tag d. Traitez la version valide la plus récente et validez ses champs. Chaque relais définit ses règles d’accès et de conservation.",
      protocol: "NIP-01 · Protocole des relais",
      format: "NIP-99 · Format des annonces",
      tabRequest: "Requête",
      tabEvent: "Champs (exemple)",
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Comprendre l’immobilier ouvert",
      items: [
        {
          q: "Que sont Nostr et un relais ?",
          a: "Nostr est un protocole ouvert d’échange de messages signés. Une annonce immobilière peut être l’un de ces messages. Un relais est un serveur qui reçoit, conserve et transmet ces messages aux applications qui les demandent. Chaque relais décide des messages acceptés et de leur durée de conservation.",
        },
        {
          q: "Quel intérêt pour une agence immobilière ?",
          a: "Une source signée peut alimenter votre site et les portails participants. Cela peut limiter les doubles saisies et faciliter le transfert de vos annonces vers d’autres services compatibles. Vous choisissez les canaux et la visibilité supplémentaire adaptés à votre agence. Les applications participantes décident comment intégrer et présenter vos annonces.",
        },
        {
          q: "Faut-il une clé pour consulter les biens ?",
          a: "Vous n’avez pas besoin de clé personnelle pour consulter des annonces publiques dans un client ouvert. Un site donné peut toutefois imposer ses propres règles d’accès. Pour publier ou modifier sous votre identité Nostr, vous devez signer, par exemple avec une extension de navigateur fiable ou un autre outil de signature. Ne partagez jamais votre clé privée.",
        },
        {
          q: "Chaque bien nécessite-t-il une clé différente ?",
          a: "Non. Une seule clé peut signer toutes les annonces d’un propriétaire ou d’une agence. Chaque annonce possède son propre identifiant dans un tag d. Les versions se distinguent par le type, la clé publique et ce tag : mettre à jour une annonce n’en remplace donc pas une autre.",
        },
        {
          q: "Quelle différence entre Vastgoed.org et Vastgoed.net ?",
          a: "Vastgoed.org explique le fonctionnement de l’immobilier ouvert. Vastgoed.net est la plateforme que nous développons pour les propriétaires et les agences, autour de la publication gratuite et d’une mise en avant payante facultative. Le système d’abonnement prévu utilise Ghost pour relier votre adresse e-mail à votre clé publique Nostr. Votre adresse e-mail n’a pas sa place dans l’annonce publique.",
        },
        {
          q: "Où les photos sont-elles stockées ?",
          a: "L’architecture prévue sépare les photos des annonces. Les images sont stockées via Blossom auprès d’un service tel que nostr.build, tandis que l’événement Nostr contient les liens. Les envois peuvent être autorisés avec votre propre clé. L’annonce reste ainsi légère et les applications compatibles peuvent récupérer les images. Le service choisi fixe les conditions de stockage.",
        },
        {
          q: "Une signature prouve-t-elle la propriété du bien ?",
          a: "Non. Une signature valide montre que l’événement a été signé avec la clé privée correspondante et n’a pas été modifié depuis. Elle ne prouve ni l’identité civile, ni la propriété du bien, ni le mandat de vente, ni l’exactitude du contenu. Ces éléments doivent être vérifiés séparément.",
        },
        {
          q: "Quelles informations puis-je rendre publiques ?",
          a: "Considérez toute annonce publique comme accessible et copiable. Ne publiez que des données et des images que vous avez le droit de partager. N’envoyez ni pièces d’identité, ni clés privées, ni données personnelles des occupants, ni autres informations sensibles. Des copies peuvent subsister ailleurs après une demande de suppression. Un compte privé ne rend pas l’annonce elle-même privée.",
        },
        {
          q: "L’IA peut-elle trouver et vérifier automatiquement les annonces ?",
          a: "Pas à elle seule. Elle a besoin d’un accès via un client, un indexeur ou une intégration, avec les autorisations nécessaires et dans le respect des règles d’accès. Le JSON structuré facilite le traitement, mais n’empêche ni les erreurs ni les informations périmées. Faites vérifier les signatures indépendamment par des outils et confirmez les données importantes auprès de la source.",
        },
      ],
    },
    cta: {
      eyebrow: "Du principe à la pratique",
      title: "Un immobilier plus ouvert commence ici.",
      description:
        "Vous êtes propriétaire ou agent immobilier ? Découvrez Vastgoed.net et faites un pas vers la publication de vos annonces avec votre propre clé, dans un réseau ouvert.",
      button: "Visiter Vastgoed.net",
      note: "Découvrez la plateforme pour les propriétaires et les agences.",
    },
    footer: {
      description: "Découvrez le fonctionnement de l’immobilier ouvert.",
      standard: "La norme Nostr pour les annonces",
      top: "Retour en haut",
      credit: "Des standards ouverts. La maîtrise reste à l’émetteur.",
    },
  },
  de: {
    meta: {
      title: "Vastgoed.org | Deine Immobilie. Dein Schlüssel.",
      description:
        "Entdecke offene Immobilienangebote mit Nostr: Signiere eigene Inserate, teile strukturierte Daten und behalte die Kontrolle über deine Veröffentlichungen.",
    },
    nav: {
      principle: "Das Prinzip",
      agents: "Für Makler",
      buyers: "Für Käufer",
      developers: "Für Entwickler",
      questions: "Fragen",
      visit: "Vastgoed.net entdecken",
      language: "Sprache wählen",
      menu: "Menü öffnen",
      skip: "Zum Inhalt",
    },
    hero: {
      eyebrow: "Offene Immobilienangebote mit Nostr",
      line1: "Deine Immobilie.",
      line2: "Dein Schlüssel.",
      description:
        "Veröffentliche deine Angebote mit deinem eigenen digitalen Schlüssel. Teilnehmende Websites können dasselbe Inserat lesen, ohne dass ein einziges Portal zur alleinigen Quelle wird.",
      primary: "Das Prinzip entdecken",
      secondary: "Für Makler",
      caption: "Genk, Belgien",
      captionDetail: "Beispielimmobilie · kein aktives Angebot",
      note: "Deine Schlüssel. Deine Inserate. Ein offenes Netzwerk.",
    },
    strip: [
      "Dein eigener Schlüssel",
      "Eine gemeinsame Quelle",
      "Offene, lesbare Daten",
    ],
    principle: {
      eyebrow: "Das Prinzip",
      title: "Ein Inserat.",
      accent: "Mehr Möglichkeiten.",
      description:
        "Ein Immobilieninserat muss nicht an eine einzige Plattform gebunden sein. Ein offenes Format ermöglicht es Eigentümern, Maklern und teilnehmenden Websites, dieselben signierten Daten zu nutzen.",
      cards: [
        {
          title: "Selbst der Absender bleiben",
          description:
            "Signiere deine Angebote mit deinem eigenen Nostr-Schlüssel. Andere können prüfen, welcher Schlüssel das Inserat und spätere Änderungen signiert hat.",
        },
        {
          title: "Teilen statt mehrfach eingeben",
          description:
            "Deine Website und kompatible Portale können dieselbe Quelle lesen. Jede Plattform entscheidet selbst, was sie übernimmt und wie oft sie aktualisiert.",
        },
        {
          title: "Auf offenen Daten aufbauen",
          description:
            "Strukturiertes JSON ermöglicht eigene Suchfunktionen, Vergleiche und KI-Anwendungen, sofern diese auf die Daten zugreifen und sie korrekt verarbeiten können.",
        },
      ],
    },
    ownership: {
      eyebrow: "Dein Schlüssel, deine Verantwortung",
      title: "Öffentlich erkennbar. Privat signiert.",
      description:
        "Eine Nostr-Identität besteht aus einem öffentlichen und einem privaten Schlüssel. Beide erfüllen unterschiedliche Aufgaben. Eine Signatur beweist nicht, dass dir die Immobilie gehört.",
      publicLabel: "Öffentlicher Schlüssel",
      publicDescription:
        "Er kennzeichnet dich als Absender. Du kannst ihn teilen und auf deiner Website angeben, damit andere ihn mit dem Schlüssel deiner Inserate vergleichen können.",
      privateLabel: "Privater Schlüssel",
      privateDescription:
        "Damit signierst du Inserate und Änderungen. Teile diesen geheimen Schlüssel niemals und füge ihn nicht in Inserate, Chats oder unbekannte Websites ein. Nutze ein vertrauenswürdiges Signaturwerkzeug und bewahre eine sichere Sicherungskopie auf.",
      note: "Wer deinen privaten Schlüssel besitzt, kann unter diesem Schlüssel veröffentlichen. Der Schlüssel begründet kein rechtliches Eigentum an einer Immobilie.",
    },
    agents: {
      eyebrow: "Für Makler",
      title: "Eine Preisänderung.",
      accent: "Dieselbe Quelle.",
      description:
        "Angenommen, der Angebotspreis eines Hauses in Genk ändert sich. Du signierst eine neue Version. Websites, die dieser Quelle folgen, können die Änderung abrufen und anzeigen.",
      try: "Preisänderung ausprobieren",
      reset: "Beispiel zurücksetzen",
      demo: "Interaktives Beispiel · keine Live-Verbindung",
      location: "Genk · Limburg, Belgien",
      property: "Haus mit Garten",
      asking: "Angebotspreis",
      agency: "Website des Maklerbüros",
      updated: "In diesem Beispiel aktualisiert",
      initial: "Dasselbe Inserat auf zwei Websites",
      signed: "Neue Version in diesem Beispiel signiert",
      syncing: "Die Beispielwebsites übernehmen die Änderung",
      disclaimer:
        "Diese Simulation sendet und signiert nichts. In der Praxis hängen Verarbeitung und Sichtbarkeit vom Relay, der Website und deren Regeln ab.",
    },
    buyers: {
      eyebrow: "Für Käufer",
      title: "Dasselbe Haus, zwei Preise?",
      description:
        "Ein offenes Inserat hilft dir, Quelle und Änderungen zu vergleichen. Teilnehmende Websites können dieselben Daten anzeigen, sich aber bei Zeitpunkt, Auswahl und Darstellung unterscheiden.",
      link: "Preisbeispiel ansehen",
      checks: [
        {
          title: "Die letzte Aktualisierung vergleichen",
          description:
            "Prüfe bei unterschiedlichen Preisen das Datum und die Quelle. Frage beim Makler nach, welcher Preis und welche Bedingungen aktuell gelten.",
        },
        {
          title: "Den Absender prüfen",
          description:
            "Vergleiche den öffentlichen Schlüssel mit dem auf der offiziellen Website des Maklerbüros. Eine gültige Signatur bestätigt den verwendeten Schlüssel, nicht die Richtigkeit des Angebots.",
        },
      ],
    },
    open: {
      eyebrow: "Offene Daten, neue Anwendungen",
      title: "Für Menschen lesbar.",
      accent: "Für Software nutzbar.",
      description:
        "Ein signiertes Nostr-Event ist strukturiertes JSON. So werden deine Inserate zu einer nutzbaren Quelle für eigene Websites, Suchwerkzeuge und intelligente Anwendungen.",
      cards: [
        {
          title: "Eine eigene Übersicht erstellen",
          description:
            "Ein kompatibler Client kann Inserate abrufen, Versionen gruppieren und relevante Felder anzeigen. Filter und Darstellung bestimmst du selbst.",
        },
        {
          title: "KI eine klare Quelle geben",
          description:
            "Eine KI-Anwendung benötigt einen Client, Indexer oder einen anderen erlaubten Zugangsweg. JSON allein schafft weder automatischen Zugriff noch Berechtigung oder korrektes Verständnis.",
        },
        {
          title: "Unabhängig überprüfen",
          description:
            "Werkzeuge können Event-IDs und Signaturen unabhängig prüfen. Das hilft bei der Herkunftskontrolle, ersetzt aber keine Prüfung von Preis, Objektdaten oder Verkaufsberechtigung.",
        },
      ],
    },
    developers: {
      eyebrow: "Für Entwickler",
      title: "Binde die Quelle in deine eigene Website ein.",
      description:
        "Ein Nostr-Client kann Inserate über WebSocket von einem kompatiblen Relay abrufen. Diese NIP-01-Anfrage fordert bis zu zwanzig vorhandene NIP-99-Events des Typs 30402 an und wartet auf neue passende Events, soweit die Regeln des Relays dies erlauben.",
      request: "Inserate abrufen",
      copy: "JSON kopieren",
      copied: "JSON kopiert",
      copyError:
        "Kopieren fehlgeschlagen. Markiere das JSON, um es manuell zu kopieren.",
      note: "Prüfe Event-IDs und Signaturen; gruppiere Versionen nach Typ, öffentlichem Schlüssel und d-Tag. Verarbeite die neueste gültige Version und validiere ihre Felder. Jedes Relay legt seine eigenen Zugangs- und Speicherregeln fest.",
      protocol: "NIP-01 · Relay-Protokoll",
      format: "NIP-99 · Inseratsformat",
      tabRequest: "Anfrage",
      tabEvent: "Felder (Beispiel)",
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Über offene Immobilienangebote",
      items: [
        {
          q: "Was sind Nostr und ein Relay?",
          a: "Nostr ist ein offenes Protokoll für signierte Nachrichten. Ein Immobilieninserat kann eine solche Nachricht sein. Ein Relay ist ein Server, der diese Nachrichten empfängt, speichert und an Anwendungen weitergibt, die sie anfordern. Jedes Relay entscheidet selbst, welche Nachrichten es annimmt und wie lange es sie speichert.",
        },
        {
          q: "Was bringt das einem Maklerbüro?",
          a: "Eine signierte Quelle kann deine eigene Website und teilnehmende Portale versorgen. Das kann doppelte Eingaben verringern und den Wechsel zu anderen kompatiblen Diensten erleichtern. Du wählst die Kanäle und zusätzliche Sichtbarkeit, die zu deinem Büro passen. Teilnehmende Anwendungen entscheiden, wie sie deine Angebote aufnehmen und darstellen.",
        },
        {
          q: "Brauche ich einen Schlüssel, um Immobilien anzusehen?",
          a: "Für öffentliche Angebote in einem offenen Client brauchst du keinen eigenen Schlüssel. Eine bestimmte Website kann dennoch Zugangsregeln festlegen. Um unter deiner Nostr-Identität zu veröffentlichen oder zu aktualisieren, musst du signieren, etwa mit einer vertrauenswürdigen Browsererweiterung oder einem anderen Signaturwerkzeug. Teile niemals deinen privaten Schlüssel.",
        },
        {
          q: "Braucht jede Immobilie einen eigenen Schlüssel?",
          a: "Nein. Ein Schlüssel kann alle Inserate eines Eigentümers oder Maklerbüros signieren. Jedes Inserat erhält eine eigene Kennung im d-Tag. Versionen werden anhand von Typ, öffentlichem Schlüssel und d-Tag unterschieden. So ersetzt die Aktualisierung eines Inserats kein anderes.",
        },
        {
          q: "Was unterscheidet Vastgoed.org von Vastgoed.net?",
          a: "Vastgoed.org erklärt, wie offene Immobilienangebote funktionieren. Vastgoed.net ist die Plattform, die wir für Eigentümer und Makler entwickeln, mit kostenlosem Veröffentlichen und optionaler bezahlter Hervorhebung als Grundidee. Für Mitgliedschaften ist eine Anmeldung über Ghost geplant, die deine E-Mail-Adresse mit deinem öffentlichen Nostr-Schlüssel verknüpft. Deine E-Mail-Adresse gehört nicht in das öffentliche Inserat.",
        },
        {
          q: "Wo werden Fotos gespeichert?",
          a: "Die geplante Architektur trennt Fotos und Inserate. Bilder werden über Blossom bei einem Speicherdienst wie nostr.build abgelegt; das Nostr-Event enthält die Links. Uploads können mit deinem eigenen Schlüssel autorisiert werden. So bleibt das Inserat kompakt und kompatible Anwendungen können die Bilder abrufen. Die Speicherbedingungen legt der gewählte Dienst fest.",
        },
        {
          q: "Beweist eine Signatur das Eigentum an der Immobilie?",
          a: "Nein. Eine gültige Signatur zeigt, dass das Event mit dem zugehörigen privaten Schlüssel signiert und seitdem nicht verändert wurde. Sie beweist weder die bürgerliche Identität noch Eigentum, Maklerauftrag oder die Richtigkeit des Inhalts. Diese Punkte müssen gesondert geprüft werden.",
        },
        {
          q: "Welche Daten sollte ich öffentlich machen?",
          a: "Behandle ein öffentliches Inserat als frei einsehbar und kopierbar. Veröffentliche nur Daten und Bilder, die du teilen darfst. Lade keine Ausweisdokumente, privaten Schlüssel, persönlichen Daten von Bewohnern oder andere sensible Informationen hoch. Kopien können auch nach einer Löschanfrage anderswo bestehen bleiben. Ein privates Konto macht das Inserat selbst nicht privat.",
        },
        {
          q: "Kann KI Inserate automatisch finden und prüfen?",
          a: "Nicht von allein. KI benötigt Zugriff über einen Client, Indexer oder eine Integration, mit den nötigen Berechtigungen und unter Beachtung der Zugangsregeln. Strukturiertes JSON erleichtert die Verarbeitung, verhindert aber keine Fehler oder veralteten Angaben. Lass Werkzeuge Signaturen unabhängig prüfen und bestätige wichtige Objektdaten bei der Quelle.",
        },
      ],
    },
    cta: {
      eyebrow: "Vom Prinzip zur Praxis",
      title: "Eine offenere Immobilienwelt beginnt hier.",
      description:
        "Du besitzt eine Immobilie oder führst ein Maklerbüro? Entdecke Vastgoed.net und gehe den nächsten Schritt, um deine Angebote mit deinem eigenen Schlüssel in einem offenen Netzwerk zu veröffentlichen.",
      button: "Zu Vastgoed.net",
      note: "Entdecke die Plattform für Eigentümer und Makler.",
    },
    footer: {
      description: "Entdecke, wie offene Immobilienangebote funktionieren.",
      standard: "Der Nostr-Standard für Inserate",
      top: "Nach oben",
      credit:
        "Auf offenen Standards aufgebaut. Die Kontrolle bleibt beim Absender.",
    },
  },
} as const;

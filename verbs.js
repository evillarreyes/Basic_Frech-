// Base de datos de verbos.
// Para Passé Composé: `pp` es el participio pasado.
// `aux` es el auxiliar ('avoir' o 'être').
// Los pronombres para la conjugación: je, tu, il/elle/on, nous, vous, ils/elles

const pronoms = ["je/j'", "tu", "il/elle/on", "nous", "vous", "ils/elles"];

const spanishToFrench = {
    "abrir": "ouvrir",
    "acabar": "finir",
    "acostarse": "se coucher",
    "amar": "aimer",
    "andar": "marcher",
    "aprender": "apprendre",
    "ayudar": "aider",
    "beber": "boire",
    "buscar": "chercher",
    "caer": "tomber",
    "caminar": "marcher",
    "cantar": "chanter",
    "cerrar": "fermer",
    "coger": "prendre",
    "comer": "manger",
    "comenzar": "commencer",
    "comprar": "acheter",
    "comprender": "comprendre",
    "conocer": "connaître",
    "continuar": "continuer",
    "correr": "courir",
    "creer": "croire",
    "dar": "donner",
    "deber": "devoir",
    "decidir": "décider",
    "decir": "dire",
    "dejar": "laisser",
    "descansar": "se reposer",
    "desear": "désirer", // también "souhaiter"
    "dormir": "dormir",
    "elegir": "choisir",
    "empezar": "commencer",
    "encontrar": "trouver",
    "enviar": "envoyer",
    "escribir": "écrire",
    "escuchar": "écouter",
    "esperar (hope)": "espérer",
    "esperar (wait)": "attendre",
    "estar": "être",
    "estudiar": "étudier",
    "gustar": "aimer", // también "plaire" (más complejo)
    "haber": "avoir",
    "hablar": "parler",
    "hacer": "faire",
    "intentar": "essayer",
    "ir": "aller",
    "irse": "partir", // también s'en aller
    "jugar": "jouer",
    "lavar": "laver",
    "lavarse": "se laver",
    "leer": "lire",
    "levantar": "lever",
    "levantarse": "se lever",
    "llegar": "arriver",
    "llevar (ropa, objeto)": "porter",
    "llevar puesto": "mettre",
    "llamarse": "s'appeler",
    "marchar": "marcher",
    "mirar": "regarder",
    "morir": "mourir",
    "mostrar": "montrer",
    "nacer": "naître",
    "necesitar": "avoir besoin de", // Expresión, no un solo verbo
    "oír": "entendre",
    "olvidar": "oublier",
    "pagar": "payer",
    "parecer": "paraître", // también "sembler"
    "partir": "partir",
    "pasar": "passer",
    "pasearse": "se promener",
    "pedir": "demander",
    "pensar": "penser",
    "perder": "perdre",
    "permanecer": "rester",
    "poder": "pouvoir",
    "poner": "mettre",
    "preguntar": "demander", // también "poser une question"
    "preparar": "préparer",
    "presentar": "présenter",
    "probar": "essayer", // también "goûter" (comida), "tester" (objeto)
    "quedarse": "rester",
    "querer": "vouloir",
    "recordar": "se souvenir de",
    "regresar": "rentrer", // también "revenir"
    "reír": "rire",
    "responder": "répondre",
    "saber": "savoir",
    "salir": "sortir",
    "seguir": "suivre",
    "sentarse": "s'asseoir",
    "sentir": "sentir",
    "sentirse": "se sentir",
    "ser": "être",
    "servir": "servir",
    "subir": "monter",
    "tener": "avoir",
    "terminar": "finir",
    "tocar (instrumento)": "jouer de", // Expresión
    "tomar": "prendre",
    "trabajar": "travailler",
    "traducir": "traduire",
    "traer": "apporter", // también "amener" (personas)
    "usar": "utiliser",
    "utilizar": "utiliser",
    "vender": "vendre",
    "venir": "venir",
    "ver": "voir",
    "vestirse": "s'habiller",
    "viajar": "voyager",
    "vivir": "vivre",
    "volver": "rentrer", // también "revenir"
};

const verbsDB = {
    "acheter": {
        meaning: "comprar",
        type: "regular (-er, e->è)", // j'achète
        aux: "avoir",
        pp: "acheté",
        present: ["achète", "achètes", "achète", "achetons", "achetez", "achètent"],
        imparfait: ["achetais", "achetais", "achetait", "achetions", "achetiez", "achetaient"],
        futur: ["achèterai", "achèteras", "achètera", "achèterons", "achèterez", "achèteront"], // stem change e->è
        examples: {
            present: "J'achète du pain.",
            passeCompose: "Nous avons acheté une nouvelle voiture.",
            imparfait: "Elle achetait toujours des fleurs.",
            futur: "Tu achèteras des cadeaux."
        }
    },
    "aider": {
        meaning: "ayudar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "aidé",
        present: ["aide", "aides", "aide", "aidons", "aidez", "aident"],
        imparfait: ["aidais", "aidais", "aidait", "aidions", "aidiez", "aidaient"],
        futur: ["aiderai", "aideras", "aidera", "aiderons", "aiderez", "aideront"],
        examples: {
            present: "Je t'aide volontiers.",
            passeCompose: "Il m'a aidé à déménager.",
            imparfait: "Vous aidiez souvent vos voisins.",
            futur: "Nous aiderons les plus démunis."
        }
    },
    "aimer": {
        meaning: "amar, gustar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "aimé",
        present: ["aime", "aimes", "aime", "aimons", "aimez", "aiment"],
        imparfait: ["aimais", "aimais", "aimait", "aimions", "aimiez", "aimaient"],
        futur: ["aimerai", "aimeras", "aimera", "aimerons", "aimerez", "aimeront"],
        examples: {
            present: "J'aime le chocolat.",
            passeCompose: "Nous avons aimé ce film.",
            imparfait: "Elle aimait danser quand elle était jeune.",
            futur: "Vous aimerez cette ville."
        }
    },
    "aller": {
        meaning: "ir",
        type: "irregular",
        aux: "être",
        pp: "allé", // Nota: requiere acuerdo (allé, allée, allés, allées)
        present: ["vais", "vas", "va", "allons", "allez", "vont"],
        imparfait: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
        futur: ["irai", "iras", "ira", "irons", "irez", "iront"],
        examples: {
            present: "Nous allons au cinéma.",
            passeCompose: "Elle est allée à Paris.",
            imparfait: "Vous alliez souvent à la plage.",
            futur: "J'irai te voir demain."
        }
    },
    "s'appeler": {
        meaning: "llamarse",
        type: "pronominal (-er, -eler -> elle/elles)",
        aux: "être",
        pp: "appelé",
        present: ["m'appelle", "t'appelles", "s'appelle", "nous appelons", "vous appelez", "s'appellent"],
        imparfait: ["m'appelais", "t'appelais", "s'appelait", "nous appelions", "vous appeliez", "s'appelaient"],
        futur: ["m'appellerai", "t'appelleras", "s'appellera", "nous appellerons", "vous appellerez", "s'appelleront"],
        examples: {
            present: "Comment tu t'appelles ?",
            passeCompose: "Elle s'est appelée au secours (llamó pidiendo ayuda).", // "s'est fait appeler" para nombre
            imparfait: "Il s'appelait Jean.",
            futur: "Notre enfant s'appellera Léo."
        }
    },
    "apporter": {
        meaning: "traer (algo), llevar (algo)",
        type: "regular (-er)",
        aux: "avoir",
        pp: "apporté",
        present: ["apporte", "apportes", "apporte", "apportons", "apportez", "apportent"],
        imparfait: ["apportais", "apportais", "apportait", "apportions", "apportiez", "apportaient"],
        futur: ["apporterai", "apporteras", "apportera", "apporterons", "apporterez", "apporteront"],
        examples: {
            present: "J'apporte le dessert.",
            passeCompose: "Tu as apporté les boissons ?",
            imparfait: "Elle apportait toujours de bonnes nouvelles.",
            futur: "Nous apporterons notre contribution."
        }
    },
    "apprendre": {
        meaning: "aprender",
        type: "irregular (-re, como prendre)",
        aux: "avoir",
        pp: "appris",
        present: ["apprends", "apprends", "apprend", "apprenons", "apprenez", "apprennent"],
        imparfait: ["apprenais", "apprenais", "apprenait", "apprenions", "appreniez", "apprenaient"],
        futur: ["apprendrai", "apprendras", "apprendra", "apprendrons", "apprendrez", "apprendront"],
        examples: {
            present: "J'apprends le français.",
            passeCompose: "Nous avons appris beaucoup de choses.",
            imparfait: "Il apprenait vite.",
            futur: "Vous apprendrez à coder."
        }
    },
    "arriver": {
        meaning: "llegar",
        type: "regular (-er)",
        aux: "être",
        pp: "arrivé",
        present: ["arrive", "arrives", "arrive", "arrivons", "arrivez", "arrivent"],
        imparfait: ["arrivais", "arrivais", "arrivait", "arrivions", "arriviez", "arrivaient"],
        futur: ["arriverai", "arriveras", "arrivera", "arriverons", "arriverez", "arriveront"],
        examples: {
            present: "Le train arrive à l'heure.",
            passeCompose: "Ils sont arrivés hier soir.",
            imparfait: "J'arrivais toujours en retard.",
            futur: "Elle arrivera demain."
        }
    },
    "s'asseoir": {
        meaning: "sentarse",
        type: "pronominal (irregular)",
        aux: "être",
        pp: "assis", // Nota acuerdo: assis, assise, assis, assises
        present: ["m'assieds", "t'assieds", "s'assied", "nous asseyons", "vous asseyez", "s'asseyent"],
        // Alternativa frecuente: m'assois, t'assois, s'assoit, nous assoyons, vous assoyez, s'assoient
        imparfait: ["m'asseyais", "t'asseyais", "s'asseyait", "nous asseyions", "vous asseyiez", "s'asseyaient"],
        futur: ["m'assiérai", "t'assiéras", "s'assiéra", "nous assiérons", "vous assiérez", "s'assiéront"],
        // Alternativa: m'assoirai...
        examples: {
            present: "Asseyez-vous, s'il vous plaît.",
            passeCompose: "Elle s'est assise sur la chaise.",
            imparfait: "Nous nous asseyions toujours à la même table.",
            futur: "Je m'assiérai près de la fenêtre."
        }
    },
    "attendre": {
        meaning: "esperar (a alguien/algo)",
        type: "regular (-re)",
        aux: "avoir",
        pp: "attendu",
        present: ["attends", "attends", "attend", "attendons", "attendez", "attendent"],
        imparfait: ["attendais", "attendais", "attendait", "attendions", "attendiez", "attendaient"],
        futur: ["attendrai", "attendras", "attendra", "attendrons", "attendrez", "attendront"],
        examples: {
            present: "J'attends le bus.",
            passeCompose: "Nous avons attendu longtemps.",
            imparfait: "Elle attendait son ami.",
            futur: "Ils attendront notre signal."
        }
    },
    "avoir": {
        meaning: "tener, haber",
        type: "irregular",
        aux: "avoir",
        pp: "eu",
        present: ["ai", "as", "a", "avons", "avez", "ont"],
        imparfait: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
        futur: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
        examples: {
            present: "Tu as un chien.",
            passeCompose: "Ils ont eu de la chance.",
            imparfait: "J'avais faim.",
            futur: "Elle aura une surprise."
        }
    },
    "boire": {
        meaning: "beber",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "bu",
        present: ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
        imparfait: ["buvais", "buvais", "buvait", "buvions", "buviez", "buvaient"],
        futur: ["boirai", "boiras", "boira", "boirons", "boirez", "boiront"],
        examples: {
            present: "Je bois de l'eau.",
            passeCompose: "Nous avons bu du vin rouge.",
            imparfait: "Il buvait son café lentement.",
            futur: "Tu boiras un jus d'orange."
        }
    },
    "chanter": {
        meaning: "cantar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "chanté",
        present: ["chante", "chantes", "chante", "chantons", "chantez", "chantent"],
        imparfait: ["chantais", "chantais", "chantait", "chantions", "chantiez", "chantaient"],
        futur: ["chanterai", "chanteras", "chantera", "chanterons", "chanterez", "chanteront"],
        examples: {
            present: "Elle chante très bien.",
            passeCompose: "Nous avons chanté toute la nuit.",
            imparfait: "Tu chantais sous la douche.",
            futur: "Ils chanteront à la fête."
        }
    },
    "chercher": {
        meaning: "buscar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "cherché",
        present: ["cherche", "cherches", "cherche", "cherchons", "cherchez", "cherchent"],
        imparfait: ["cherchais", "cherchais", "cherchait", "cherchions", "cherchiez", "cherchaient"],
        futur: ["chercherai", "chercheras", "cherchera", "chercherons", "chercherez", "chercheront"],
        examples: {
            present: "Je cherche mes clés.",
            passeCompose: "Avez-vous cherché partout ?",
            imparfait: "Il cherchait une solution.",
            futur: "Nous chercherons une nouvelle maison."
        }
    },
    "choisir": {
        meaning: "elegir",
        type: "regular (-ir)",
        aux: "avoir",
        pp: "choisi",
        present: ["choisis", "choisis", "choisit", "choisissons", "choisissez", "choisissent"],
        imparfait: ["choisissais", "choisissais", "choisissait", "choisissions", "choisissiez", "choisissaient"],
        futur: ["choisirai", "choisiras", "choisira", "choisirons", "choisirez", "choisiront"],
        examples: {
            present: "Tu choisis quel film ?",
            passeCompose: "J'ai choisi la robe bleue.",
            imparfait: "Nous choisissions toujours la même place.",
            futur: "Elle choisira son destin."
        }
    },
    "commencer": {
        meaning: "empezar, comenzar",
        type: "regular (-er, -cer)", // nous commençons
        aux: "avoir",
        pp: "commencé",
        present: ["commence", "commences", "commence", "commençons", "commencez", "commencent"],
        imparfait: ["commençais", "commençais", "commençait", "commencions", "commenciez", "commençaient"],
        futur: ["commencerai", "commenceras", "commencera", "commencerons", "commencerez", "commenceront"],
        examples: {
            present: "Le film commence à 20h.",
            passeCompose: "Nous avons commencé le projet.",
            imparfait: "Il commençait à pleuvoir.",
            futur: "Vous commencerez demain."
        }
    },
    "comprendre": {
        meaning: "comprender, entender",
        type: "irregular (-re, como prendre)",
        aux: "avoir",
        pp: "compris",
        present: ["comprends", "comprends", "comprend", "comprenons", "comprenez", "comprennent"],
        imparfait: ["comprenais", "comprenais", "comprenait", "comprenions", "compreniez", "comprenaient"],
        futur: ["comprendrai", "comprendras", "comprendra", "comprendrons", "comprendrez", "comprendront"],
        examples: {
            present: "Je ne comprends pas la question.",
            passeCompose: "Elle a enfin compris.",
            imparfait: "Nous ne comprenions pas pourquoi il était triste.",
            futur: "Tu comprendras plus tard."
        }
    },
    "connaître": {
        meaning: "conocer (a alguien, un lugar)",
        type: "irregular (-aître)",
        aux: "avoir",
        pp: "connu",
        present: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
        imparfait: ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
        futur: ["connaîtrai", "connaîtras", "connaîtra", "connaîtrons", "connaîtrez", "connaîtront"],
        examples: {
            present: "Tu connais Marie ?",
            passeCompose: "J'ai connu mon mari à l'université.",
            imparfait: "Il connaissait bien la ville.",
            futur: "Vous connaîtrez de nouvelles personnes."
        }
    },
    "continuer": {
        meaning: "continuar",
        type: "regular (-er)",
        aux: "avoir", // ou être (l'action continue)
        pp: "continué",
        present: ["continue", "continues", "continue", "continuons", "continuez", "continuent"],
        imparfait: ["continuais", "continuais", "continuait", "continuions", "continuiez", "continuaient"],
        futur: ["continuerai", "continueras", "continuera", "continuerons", "continuerez", "continueront"],
        examples: {
            present: "Il continue de pleuvoir.",
            passeCompose: "Nous avons continué notre chemin.",
            imparfait: "Elle continuait à parler.",
            futur: "Tu continueras tes études."
        }
    },
    "courir": {
        meaning: "correr",
        type: "irregular",
        aux: "avoir",
        pp: "couru",
        present: ["cours", "cours", "court", "courons", "courez", "courent"],
        imparfait: ["courais", "courais", "courait", "courions", "couriez", "couraient"],
        futur: ["courrai", "courras", "courra", "courrons", "courrez", "courront"],
        examples: {
            present: "Je cours tous les matins.",
            passeCompose: "Il a couru un marathon.",
            imparfait: "Nous courions dans le parc.",
            futur: "Vous courrez plus vite la prochaine fois."
        }
    },
    "se coucher": {
        meaning: "acostarse",
        type: "pronominal (-er)",
        aux: "être",
        pp: "couché",
        present: ["me couche", "te couches", "se couche", "nous couchons", "vous couchez", "se couchent"],
        imparfait: ["me couchais", "te couchais", "se couchait", "nous couchions", "vous couchiez", "se couchaient"],
        futur: ["me coucherai", "te coucheras", "se couchera", "nous coucherons", "vous coucherez", "se coucheront"],
        examples: {
            present: "Je me couche tard le week-end.",
            passeCompose: "Elle s'est couchée tôt hier soir.",
            imparfait: "Les enfants se couchaient à 20h.",
            futur: "Nous nous coucherons après le film."
        }
    },
    "croire": {
        meaning: "creer",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "cru",
        present: ["crois", "crois", "croit", "croyons", "croyez", "croient"],
        imparfait: ["croyais", "croyais", "croyait", "croyions", "croyiez", "croyaient"],
        futur: ["croirai", "croiras", "croira", "croirons", "croirez", "croiront"],
        examples: {
            present: "Je te crois.",
            passeCompose: "Elle n'a pas cru mon histoire.",
            imparfait: "Autrefois, les gens croyaient aux fantômes.",
            futur: "Ils ne croiront jamais cela."
        }
    },
    "décider": {
        meaning: "decidir",
        type: "regular (-er)",
        aux: "avoir",
        pp: "décidé",
        present: ["décide", "décides", "décide", "décidons", "décidez", "décident"],
        imparfait: ["décidais", "décidais", "décidait", "décidions", "décidiez", "décidaient"],
        futur: ["déciderai", "décideras", "décidera", "déciderons", "déciderez", "décideront"],
        examples: {
            present: "Que décides-tu ?",
            passeCompose: "Nous avons décidé de partir.",
            imparfait: "Elle décidait toujours rapidement.",
            futur: "Tu décideras plus tard."
        }
    },
    "demander": {
        meaning: "pedir, preguntar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "demandé",
        present: ["demande", "demandes", "demande", "demandons", "demandez", "demandent"],
        imparfait: ["demandais", "demandais", "demandait", "demandions", "demandiez", "demandaient"],
        futur: ["demanderai", "demanderas", "demandera", "demanderons", "demanderez", "demanderont"],
        examples: {
            present: "Je demande de l'aide.",
            passeCompose: "Il a demandé son chemin.",
            imparfait: "Elle demandait toujours la permission.",
            futur: "Nous demanderons des explications."
        }
    },
    "désirer": {
        meaning: "desear",
        type: "regular (-er)",
        aux: "avoir",
        pp: "désiré",
        present: ["désire", "désires", "désire", "désirons", "désirez", "désirent"],
        imparfait: ["désirais", "désirais", "désirait", "désirions", "désiriez", "désiraient"],
        futur: ["désirerai", "désireras", "désirera", "désirerons", "désirerez", "désireront"],
        examples: {
            present: "Que désirez-vous ?",
            passeCompose: "J'ai toujours désiré visiter ce pays.",
            imparfait: "Il désirait ardemment la revoir.",
            futur: "Nous désirerons la paix."
        }
    },
    "devoir": {
        meaning: "deber, tener que",
        type: "irregular",
        aux: "avoir",
        pp: "dû", // dû, due, dus, dues
        present: ["dois", "dois", "doit", "devons", "devez", "doivent"],
        imparfait: ["devais", "devais", "devait", "devions", "deviez", "devaient"],
        futur: ["devrai", "devras", "devra", "devrons", "devrez", "devront"],
        examples: {
            present: "Je dois partir.",
            passeCompose: "Il a dû travailler tard.",
            imparfait: "Nous devions étudier pour l'examen.",
            futur: "Vous devrez être patients."
        }
    },
    "dire": {
        meaning: "decir",
        type: "irregular",
        aux: "avoir",
        pp: "dit",
        present: ["dis", "dis", "dit", "disons", "dites", "disent"],
        imparfait: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
        futur: ["dirai", "diras", "dira", "dirons", "direz", "diront"],
        examples: {
            present: "Que dis-tu ?",
            passeCompose: "Il a dit la vérité.",
            imparfait: "Elle disait toujours des bêtises.",
            futur: "Je te dirai un secret."
        }
    },
    "donner": {
        meaning: "dar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "donné",
        present: ["donne", "donnes", "donne", "donnons", "donnez", "donnent"],
        imparfait: ["donnais", "donnais", "donnait", "donnions", "donniez", "donnaient"],
        futur: ["donnerai", "donneras", "donnera", "donnerons", "donnerez", "donneront"],
        examples: {
            present: "Je te donne un conseil.",
            passeCompose: "Elle m'a donné un cadeau.",
            imparfait: "Mon grand-père me donnait des bonbons.",
            futur: "Nous donnerons notre avis."
        }
    },
    "dormir": {
        meaning: "dormir",
        type: "irregular (-ir, como sentir, partir)",
        aux: "avoir",
        pp: "dormi",
        present: ["dors", "dors", "dort", "dormons", "dormez", "dorment"],
        imparfait: ["dormais", "dormais", "dormait", "dormions", "dormiez", "dormaient"],
        futur: ["dormirai", "dormiras", "dormira", "dormirons", "dormirez", "dormiront"],
        examples: {
            present: "Le chat dort sur le canapé.",
            passeCompose: "J'ai bien dormi cette nuit.",
            imparfait: "Nous dormions profondément.",
            futur: "Tu dormiras mieux après ça."
        }
    },
    "écouter": {
        meaning: "escuchar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "écouté",
        present: ["écoute", "écoutes", "écoute", "écoutons", "écoutez", "écoutent"],
        imparfait: ["écoutais", "écoutais", "écoutait", "écoutions", "écoutiez", "écoutaient"],
        futur: ["écouterai", "écouteras", "écoutera", "écouterons", "écouterez", "écouteront"],
        examples: {
            present: "J'écoute de la musique.",
            passeCompose: "Avez-vous écouté les nouvelles ?",
            imparfait: "Elle écoutait attentivement.",
            futur: "Nous écouterons vos suggestions."
        }
    },
    "écrire": {
        meaning: "escribir",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "écrit",
        present: ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
        imparfait: ["écrivais", "écrivais", "écrivait", "écrivions", "écriviez", "écrivaient"],
        futur: ["écrirai", "écriras", "écrira", "écrirons", "écrirez", "écriront"],
        examples: {
            present: "J'écris une lettre.",
            passeCompose: "Il a écrit une chanson.",
            imparfait: "Nous écrivions des poèmes.",
            futur: "Tu m'écriras bientôt ?"
        }
    },
    "entendre": {
        meaning: "oír",
        type: "regular (-re)",
        aux: "avoir",
        pp: "entendu",
        present: ["entends", "entends", "entend", "entendons", "entendez", "entendent"],
        imparfait: ["entendais", "entendais", "entendait", "entendions", "entendiez", "entendaient"],
        futur: ["entendrai", "entendras", "entendra", "entendrons", "entendrez", "entendront"],
        examples: {
            present: "Tu entends ce bruit ?",
            passeCompose: "J'ai entendu une bonne nouvelle.",
            imparfait: "On entendait les oiseaux chanter.",
            futur: "Vous entendrez bientôt parler de nous."
        }
    },
    "envoyer": {
        meaning: "enviar",
        type: "regular (-er, -yer change y->i)",
        aux: "avoir",
        pp: "envoyé",
        present: ["envoie", "envoies", "envoie", "envoyons", "envoyez", "envoient"],
        imparfait: ["envoyais", "envoyais", "envoyait", "envoyions", "envoyiez", "envoyaient"],
        futur: ["enverrai", "enverras", "enverra", "enverrons", "enverrez", "enverront"], // Irregular future stem
        examples: {
            present: "J'envoie une lettre.",
            passeCompose: "Tu as envoyé le colis.",
            imparfait: "Elle envoyait des cartes postales.",
            futur: "Nous enverrons des invitations."
        }
    },
    "espérer": {
        meaning: "esperar (tener esperanza)",
        type: "regular (-er, é->è)", // j'espère
        aux: "avoir",
        pp: "espéré",
        present: ["espère", "espères", "espère", "espérons", "espérez", "espèrent"],
        imparfait: ["espérais", "espérais", "espérait", "espérions", "espériez", "espéraient"],
        futur: ["espérerai", "espéreras", "espérera", "espérerons", "espérerez", "espéreront"],
        examples: {
            present: "J'espère qu'il viendra.",
            passeCompose: "Nous avons espéré jusqu'au bout.",
            imparfait: "Elle espérait le revoir.",
            futur: "Tu espéreras de bonnes nouvelles."
        }
    },
    "essayer": {
        meaning: "intentar, probar",
        type: "regular (-er, -yer change y->i)",
        aux: "avoir",
        pp: "essayé",
        present: ["essaie", "essaies", "essaie", "essayons", "essayez", "essaient"],
        imparfait: ["essayais", "essayais", "essayait", "essayions", "essayiez", "essayaient"],
        futur: ["essaierai", "essaieras", "essaiera", "essaierons", "essaierez", "essaieront"],
        examples: {
            present: "J'essaie de comprendre.",
            passeCompose: "Elle a essayé une nouvelle recette.",
            imparfait: "Nous essayions de l'aider.",
            futur: "Tu essaieras ce plat demain."
        }
    },
    "être": {
        meaning: "ser, estar",
        type: "irregular",
        aux: "avoir",
        pp: "été",
        present: ["suis", "es", "est", "sommes", "êtes", "sont"],
        imparfait: ["étais", "étais", "était", "étions", "étiez", "étaient"],
        futur: ["serai", "seras", "sera", "serons", "serez", "seront"],
        examples: {
            present: "Je suis étudiant.",
            passeCompose: "J'ai été très occupé hier.",
            imparfait: "Nous étions amis.",
            futur: "Tu seras un grand artiste."
        }
    },
    "étudier": {
        meaning: "estudiar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "étudié",
        present: ["étudie", "étudies", "étudie", "étudions", "étudiez", "étudient"],
        imparfait: ["étudiais", "étudiais", "étudiait", "étudiions", "étudiiez", "étudiaient"],
        futur: ["étudierai", "étudieras", "étudiera", "étudierons", "étudierez", "étudieront"],
        examples: {
            present: "J'étudie l'histoire.",
            passeCompose: "Elle a étudié toute la journée.",
            imparfait: "Nous étudiions ensemble.",
            futur: "Vous étudierez ce chapitre pour demain."
        }
    },
    "faire": {
        meaning: "hacer",
        type: "irregular",
        aux: "avoir",
        pp: "fait",
        present: ["fais", "fais", "fait", "faisons", "faites", "font"],
        imparfait: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
        futur: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
        examples: {
            present: "Qu'est-ce que tu fais ?",
            passeCompose: "J'ai fait mes devoirs.",
            imparfait: "Il faisait beau.",
            futur: "Nous ferons un gâteau."
        }
    },
    "fermer": {
        meaning: "cerrar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "fermé",
        present: ["ferme", "fermes", "ferme", "fermons", "fermez", "ferment"],
        imparfait: ["fermais", "fermais", "fermait", "fermions", "fermiez", "fermaient"],
        futur: ["fermerai", "fermeras", "fermera", "fermerons", "fermerez", "fermeront"],
        examples: {
            present: "Ferme la porte, s'il te plaît.",
            passeCompose: "J'ai fermé les fenêtres.",
            imparfait: "Le magasin fermait à 18h.",
            futur: "Ils fermeront l'usine."
        }
    },
    "finir": {
        meaning: "terminar, acabar",
        type: "regular (-ir)",
        aux: "avoir",
        pp: "fini",
        present: ["finis", "finis", "finit", "finissons", "finissez", "finissent"],
        imparfait: ["finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"],
        futur: ["finirai", "finiras", "finira", "finirons", "finirez", "finiront"],
        examples: {
            present: "Tu finis ton travail.",
            passeCompose: "J'ai fini le livre.",
            imparfait: "Vous finissiez toujours en retard.",
            futur: "On finira ce projet la semaine prochaine."
        }
    },
    "s'habiller": {
        meaning: "vestirse",
        type: "pronominal (-er)",
        aux: "être",
        pp: "habillé",
        present: ["m'habille", "t'habilles", "s'habille", "nous habillons", "vous habillez", "s'habillent"],
        imparfait: ["m'habillais", "t'habillais", "s'habillait", "nous habillions", "vous habilliez", "s'habillaient"],
        futur: ["m'habillerai", "t'habilleras", "s'habillera", "nous habillerons", "vous habillerez", "s'habilleront"],
        examples: {
            present: "Je m'habille rapidement.",
            passeCompose: "Elle s'est habillée en rouge.",
            imparfait: "Nous nous habillions chaudement en hiver.",
            futur: "Tu t'habilleras pour la fête."
        }
    },
    "jouer": {
        meaning: "jugar, tocar (un instrumento)",
        type: "regular (-er)",
        aux: "avoir",
        pp: "joué",
        present: ["joue", "joues", "joue", "jouons", "jouez", "jouent"],
        imparfait: ["jouais", "jouais", "jouait", "jouions", "jouiez", "jouaient"],
        futur: ["jouerai", "joueras", "jouera", "jouerons", "jouerez", "joueront"],
        examples: {
            present: "Les enfants jouent dans le jardin. / Je joue du piano.",
            passeCompose: "Nous avons joué aux cartes. / Elle a joué de la guitare.",
            imparfait: "Tu jouais au football. / Il jouait du violon.",
            futur: "Ils joueront ensemble. / Vous jouerez un morceau."
        }
    },
    "laisser": {
        meaning: "dejar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "laissé",
        present: ["laisse", "laisses", "laisse", "laissons", "laissez", "laissent"],
        imparfait: ["laissais", "laissais", "laissait", "laissions", "laissiez", "laissaient"],
        futur: ["laisserai", "laisseras", "laissera", "laisserons", "laisserez", "laisseront"],
        examples: {
            present: "Laisse-moi tranquille !",
            passeCompose: "Il a laissé un message.",
            imparfait: "Elle laissait toujours la porte ouverte.",
            futur: "Nous ne vous laisserons pas tomber."
        }
    },
    "se laver": {
        meaning: "lavarse",
        type: "pronominal (-er)",
        aux: "être",
        pp: "lavé",
        present: ["me lave", "te laves", "se lave", "nous lavons", "vous lavez", "se lavent"],
        imparfait: ["me lavais", "te lavais", "se lavait", "nous lavions", "vous leviez", "se lavaient"], // Corregido leviez -> laviez
        futur: ["me laverai", "te laveras", "se lavera", "nous laverons", "vous laverez", "se laveront"],
        examples: {
            present: "Je me lave les mains.",
            passeCompose: "Ils se sont lavés avant de dîner.",
            imparfait: "Autrefois, on se lavait moins souvent.",
            futur: "Tu te laveras après le sport."
        }
    },
    "lever": { // Verbo no pronominal
        meaning: "levantar (algo)",
        type: "regular (-er, e->è)", // je lève
        aux: "avoir",
        pp: "levé",
        present: ["lève", "lèves", "lève", "levons", "levez", "lèvent"],
        imparfait: ["levais", "levais", "levait", "levions", "leviez", "levaient"],
        futur: ["lèverai", "lèveras", "lèvera", "lèverons", "lèverez", "lèveront"],
        examples: {
            present: "Je lève la main.",
            passeCompose: "Il a levé des fonds.",
            imparfait: "Nous levions l'ancre.",
            futur: "Tu lèveras ce poids facilement."
        }
    },
    "se lever": {
        meaning: "levantarse",
        type: "pronominal (-er, e->è)", // je me lève
        aux: "être",
        pp: "levé",
        present: ["me lève", "te lèves", "se lève", "nous levons", "vous levez", "se lèvent"],
        imparfait: ["me levais", "te levais", "se levait", "nous levions", "vous leviez", "se levaient"],
        futur: ["me lèverai", "te lèveras", "se lèvera", "nous lèverons", "vous lèverez", "se lèveront"],
        examples: {
            present: "Je me lève à 7 heures.",
            passeCompose: "Elle s'est levée tard.",
            imparfait: "Nous nous levions tôt pour aller pêcher.",
            futur: "Demain, tu te lèveras plus tôt."
        }
    },
    "lire": {
        meaning: "leer",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "lu",
        present: ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
        imparfait: ["lisais", "lisais", "lisait", "lisions", "lisiez", "lisaient"],
        futur: ["lirai", "liras", "lira", "lirons", "lirez", "liront"],
        examples: {
            present: "Je lis un roman.",
            passeCompose: "As-tu lu ce livre ?",
            imparfait: "Elle lisait le journal tous les matins.",
            futur: "Nous lirons votre rapport attentivement."
        }
    },
    "manger": {
        meaning: "comer",
        type: "regular (-er, -ger)", // nous mangeons
        aux: "avoir",
        pp: "mangé",
        present: ["mange", "manges", "mange", "mangeons", "mangez", "mangent"],
        imparfait: ["mangeais", "mangeais", "mangeait", "mangions", "mangiez", "mangeaient"],
        futur: ["mangerai", "mangeras", "mangera", "mangerons", "mangerez", "mangeront"],
        examples: {
            present: "Nous mangeons une pomme.",
            passeCompose: "J'ai mangé au restaurant hier.",
            imparfait: "Quand j'étais petit, je mangeais beaucoup de sucreries.",
            futur: "Demain, ils mangeront du poisson."
        }
    },
    "marcher": {
        meaning: "caminar, andar, funcionar",
        type: "regular (-er)",
        aux: "avoir", // para funcionar o si se camina una distancia
        // aux: "être", // si es simplemente el acto de caminar sin especificar distancia (menos común para la conjugación básica)
        pp: "marché",
        present: ["marche", "marches", "marche", "marchons", "marchez", "marchent"],
        imparfait: ["marchais", "marchais", "marchait", "marchions", "marchiez", "marchaient"],
        futur: ["marcherai", "marcheras", "marchera", "marcherons", "marcherez", "marcheront"],
        examples: {
            present: "Je marche tous les jours. / L'ordinateur marche bien.",
            passeCompose: "Nous avons marché 10 kilomètres. / Ça n'a pas marché.",
            imparfait: "Elle marchait lentement. / Mon vieux téléphone marchait encore.",
            futur: "Tu marcheras jusqu'au village. / J'espère que ça marchera."
        }
    },
    "mettre": {
        meaning: "poner, llevar puesto",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "mis",
        present: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
        imparfait: ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
        futur: ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"],
        examples: {
            present: "Tu mets ton manteau.",
            passeCompose: "J'ai mis les clés sur la table.",
            imparfait: "Elle mettait toujours une robe rouge.",
            futur: "Nous mettrons la table."
        }
    },
    "monter": {
        meaning: "subir",
        type: "regular (-er)",
        aux: "être", // para el movimiento de subir
        // aux: "avoir", // para subir algo (J'ai monté la valise)
        pp: "monté",
        present: ["monte", "montes", "monte", "montons", "montez", "montent"],
        imparfait: ["montais", "montais", "montait", "montions", "montiez", "montaient"],
        futur: ["monterai", "monteras", "montera", "monterons", "monterez", "monteront"],
        examples: {
            present: "Je monte dans le bus.",
            passeCompose: "Elle est montée au sommet. / Il a monté les escaliers.",
            imparfait: "Nous montions souvent cette colline.",
            futur: "Vous monterez par l'ascenseur."
        }
    },
    "montrer": {
        meaning: "mostrar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "montré",
        present: ["montre", "montres", "montre", "montrons", "montrez", "montrent"],
        imparfait: ["montrais", "montrais", "montrait", "montrions", "montriez", "montraient"],
        futur: ["montrerai", "montreras", "montrera", "montrerons", "montrerez", "montreront"],
        examples: {
            present: "Je te montre mes photos.",
            passeCompose: "Elle m'a montré sa nouvelle robe.",
            imparfait: "Le guide nous montrait les monuments.",
            futur: "Ils montreront leurs talents."
        }
    },
    "mourir": {
        meaning: "morir",
        type: "irregular",
        aux: "être",
        pp: "mort",
        present: ["meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
        imparfait: ["mourais", "mourais", "mourait", "mourions", "mouriez", "mouraient"],
        futur: ["mourrai", "mourras", "mourra", "mourrons", "mourrez", "mourront"],
        examples: {
            present: "La plante meurt sans eau.",
            passeCompose: "Son grand-père est mort l'année dernière.",
            imparfait: "Les soldats mouraient au combat.",
            futur: "Un jour, nous mourrons tous."
        }
    },
    "naître": {
        meaning: "nacer",
        type: "irregular (-aître)",
        aux: "être",
        pp: "né",
        present: ["nais", "nais", "naît", "naissons", "naissez", "naissent"],
        imparfait: ["naissais", "naissais", "naissait", "naissions", "naissiez", "naissaient"],
        futur: ["naîtrai", "naîtras", "naîtra", "naîtrons", "naîtrez", "naîtront"],
        examples: {
            present: "Un bébé naît chaque minute.",
            passeCompose: "Je suis né en 1990.",
            imparfait: "De nouvelles idées naissaient chaque jour.",
            futur: "Un nouvel espoir naîtra."
        }
    },
    "oublier": {
        meaning: "olvidar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "oublié",
        present: ["oublie", "oublies", "oublie", "oublions", "oubliez", "oublient"],
        imparfait: ["oubliais", "oubliais", "oubliait", "oubliions", "oubliiez", "oubliaient"],
        futur: ["oublierai", "oublieras", "oubliera", "oublierons", "oublierez", "oublieront"],
        examples: {
            present: "N'oublie pas tes clés !",
            passeCompose: "J'ai oublié son nom.",
            imparfait: "Elle oubliait souvent ses rendez-vous.",
            futur: "Nous n'oublierons jamais ce moment."
        }
    },
    "ouvrir": {
        meaning: "abrir",
        type: "irregular (-ir, como offrir, couvrir)",
        aux: "avoir",
        pp: "ouvert",
        present: ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
        imparfait: ["ouvrais", "ouvrais", "ouvrait", "ouvrions", "ouvriez", "ouvraient"],
        futur: ["ouvrirai", "ouvriras", "ouvrira", "ouvrirons", "ouvrirez", "ouvriront"],
        examples: {
            present: "Pouvez-vous ouvrir la fenêtre ?",
            passeCompose: "J'ai ouvert la porte.",
            imparfait: "Le magasin ouvrait à 9 heures.",
            futur: "Elle ouvrira son cadeau demain."
        }
    },
    "paraître": {
        meaning: "parecer",
        type: "irregular (-aître)",
        aux: "avoir", // être pour sembler
        pp: "paru",
        present: ["parais", "parais", "paraît", "paraissons", "paraissez", "paraissent"],
        imparfait: ["paraissais", "paraissais", "paraissait", "paraissions", "paraissiez", "paraissaient"],
        futur: ["paraîtrai", "paraîtras", "paraîtra", "paraîtrons", "paraîtrez", "paraîtront"],
        examples: {
            present: "Il paraît fatigué.",
            passeCompose: "Un article a paru dans le journal.",
            imparfait: "Elle paraissait plus jeune.",
            futur: "Cela paraîtra étrange."
        }
    },
    "parler": {
        meaning: "hablar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "parlé",
        present: ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
        imparfait: ["parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"],
        futur: ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"],
        examples: {
            present: "Je parle français.",
            passeCompose: "Elle a parlé avec son ami.",
            imparfait: "Nous parlions de nos vacances.",
            futur: "Ils parleront au directeur."
        }
    },
    "partir": {
        meaning: "irse, partir",
        type: "irregular (-ir, como sentir, dormir)",
        aux: "être",
        pp: "parti",
        present: ["pars", "pars", "part", "partons", "partez", "partent"],
        imparfait: ["partais", "partais", "partait", "partions", "partiez", "partaient"],
        futur: ["partirai", "partiras", "partira", "partirons", "partirez", "partiront"],
        examples: {
            present: "Je pars en vacances demain.",
            passeCompose: "Elle est partie tôt ce matin.",
            imparfait: "Nous partions toujours à l'aventure.",
            futur: "Ils partiront quand le soleil se lèvera."
        }
    },
    "passer": {
        meaning: "pasar (tiempo, un examen, por un lugar)",
        type: "regular (-er)",
        aux: "avoir", // pasar tiempo/examen
        // aux: "être", // pasar por un lugar
        pp: "passé",
        present: ["passe", "passes", "passe", "passons", "passez", "passent"],
        imparfait: ["passais", "passais", "passait", "passions", "passiez", "passaient"],
        futur: ["passerai", "passeras", "passera", "passerons", "passerez", "passeront"],
        examples: {
            present: "Je passe mes vacances ici. / Il passe un examen.",
            passeCompose: "Nous avons passé un bon moment. / Elle est passée chez moi.",
            imparfait: "Le temps passait vite. / Vous passiez souvent par cette rue.",
            futur: "Tu passeras me voir. / Ils passeront la frontière."
        }
    },
    "payer": {
        meaning: "pagar",
        type: "regular (-er, -yer change y->i or y->i)", // je paie / paye
        aux: "avoir",
        pp: "payé",
        present: ["paie", "paies", "paie", "payons", "payez", "paient"], // "paye", "payes", "paye" also common
        imparfait: ["payais", "payais", "payait", "payions", "payiez", "payaient"],
        futur: ["paierai", "paieras", "paiera", "paierons", "paierez", "paieront"], // "payerai" also common
        examples: {
            present: "Je paie l'addition.",
            passeCompose: "As-tu payé la facture ?",
            imparfait: "Il payait toujours en espèces.",
            futur: "Nous paierons demain."
        }
    },
    "penser": {
        meaning: "pensar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "pensé",
        present: ["pense", "penses", "pense", "pensons", "pensez", "pensent"],
        imparfait: ["pensais", "pensais", "pensait", "pensions", "pensiez", "pensaient"],
        futur: ["penserai", "penseras", "pensera", "penserons", "penserez", "penseront"],
        examples: {
            present: "Je pense à toi.",
            passeCompose: "J'ai pensé que c'était une bonne idée.",
            imparfait: "Elle pensait souvent à ses vacances.",
            futur: "Tu y penseras plus tard."
        }
    },
    "perdre": {
        meaning: "perder",
        type: "regular (-re)",
        aux: "avoir",
        pp: "perdu",
        present: ["perds", "perds", "perd", "perdons", "perdez", "perdent"],
        imparfait: ["perdais", "perdais", "perdait", "perdions", "perdiez", "perdaient"],
        futur: ["perdrai", "perdras", "perdra", "perdrons", "perdrez", "perdront"],
        examples: {
            present: "Je perds toujours mes clés.",
            passeCompose: "Nous avons perdu le match.",
            imparfait: "Il perdait patience.",
            futur: "Tu ne perdras rien."
        }
    },
    "porter": {
        meaning: "llevar (ropa, un objeto)",
        type: "regular (-er)",
        aux: "avoir",
        pp: "porté",
        present: ["porte", "portes", "porte", "portons", "portez", "portent"],
        imparfait: ["portais", "portais", "portait", "portions", "portiez", "portaient"],
        futur: ["porterai", "porteras", "portera", "porterons", "porterez", "porteront"],
        examples: {
            present: "Elle porte une belle robe.",
            passeCompose: "J'ai porté ce sac toute la journée.",
            imparfait: "Il portait toujours un chapeau.",
            futur: "Nous porterons des vêtements chauds."
        }
    },
    "pouvoir": {
        meaning: "poder",
        type: "irregular",
        aux: "avoir",
        pp: "pu",
        present: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
        imparfait: ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
        futur: ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
        examples: {
            present: "Je peux t'aider.",
            passeCompose: "Il n'a pas pu venir.",
            imparfait: "Autrefois, on ne pouvait pas voyager si facilement.",
            futur: "Nous pourrons sortir ce soir."
        }
    },
    "prendre": {
        meaning: "tomar, coger",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "pris",
        present: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
        imparfait: ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
        futur: ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"],
        examples: {
            present: "Je prends le bus.",
            passeCompose: "Elle a pris des photos.",
            imparfait: "Nous prenions notre temps.",
            futur: "Vous prendrez une décision."
        }
    },
    "préparer": {
        meaning: "preparar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "préparé",
        present: ["prépare", "prépares", "prépare", "préparons", "préparez", "préparent"],
        imparfait: ["préparais", "préparais", "préparait", "préparions", "prépariez", "préparaient"],
        futur: ["préparerai", "prépareras", "préparera", "préparerons", "préparerez", "prépareront"],
        examples: {
            present: "Je prépare le dîner.",
            passeCompose: "Nous avons préparé une surprise.",
            imparfait: "Elle préparait son voyage.",
            futur: "Tu prépareras tes affaires."
        }
    },
    "présenter": {
        meaning: "presentar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "présenté",
        present: ["présente", "présentes", "présente", "présentons", "présentez", "présentent"],
        imparfait: ["présentais", "présentais", "présentait", "présentions", "présentiez", "présentaient"],
        futur: ["présenterai", "présenteras", "présentera", "présenterons", "présenterez", "présenteront"],
        examples: {
            present: "Je vous présente mon ami.",
            passeCompose: "Il a présenté son projet.",
            imparfait: "Elle présentait le journal télévisé.",
            futur: "Nous présenterons nos condoléances."
        }
    },
    "se promener": {
        meaning: "pasearse",
        type: "pronominal (-er, e->è)", // je me promène
        aux: "être",
        pp: "promené",
        present: ["me promène", "te promènes", "se promène", "nous promenons", "vous promenez", "se promènent"],
        imparfait: ["me promenais", "te promenais", "se promenait", "nous promenions", "vous promeniez", "se promenaient"],
        futur: ["me promènerai", "te promèneras", "se promènera", "nous promènerons", "vous promènerez", "se promèneront"],
        examples: {
            present: "Nous nous promenons dans le parc.",
            passeCompose: "Je me suis promené au bord de la mer.",
            imparfait: "Elle se promenait souvent avec son chien.",
            futur: "Dimanche, vous vous promènerez en forêt."
        }
    },
    "regarder": {
        meaning: "mirar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "regardé",
        present: ["regarde", "regardes", "regarde", "regardons", "regardez", "regardent"],
        imparfait: ["regardais", "regardais", "regardait", "regardions", "regardiez", "regardaient"],
        futur: ["regarderai", "regarderas", "regardera", "regarderons", "regarderez", "regarderont"],
        examples: {
            present: "Tu regardes la télévision.",
            passeCompose: "J'ai regardé un documentaire intéressant.",
            imparfait: "Nous regardions les étoiles.",
            futur: "Elle regardera par la fenêtre."
        }
    },
    "rentrer": {
        meaning: "volver, regresar (a casa)",
        type: "regular (-er)",
        aux: "être",
        pp: "rentré",
        present: ["rentre", "rentres", "rentre", "rentrons", "rentrez", "rentrent"],
        imparfait: ["rentrais", "rentrais", "rentrait", "rentrions", "rentriez", "rentraient"],
        futur: ["rentrerai", "rentreras", "rentrera", "rentrerons", "rentrerez", "rentreront"],
        examples: {
            present: "Je rentre à la maison.",
            passeCompose: "Ils sont rentrés tard.",
            imparfait: "Nous rentrions de vacances.",
            futur: "Tu rentreras avant minuit."
        }
    },
    "répondre": {
        meaning: "responder",
        type: "regular (-re)",
        aux: "avoir",
        pp: "répondu",
        present: ["réponds", "réponds", "répond", "répondons", "répondez", "répondent"],
        imparfait: ["répondais", "répondais", "répondait", "répondions", "répondiez", "répondaient"],
        futur: ["répondrai", "répondras", "répondra", "répondrons", "répondrez", "répondront"],
        examples: {
            present: "Tu ne réponds pas à ma question.",
            passeCompose: "J'ai répondu à son email.",
            imparfait: "Il répondait toujours poliment.",
            futur: "Nous répondrons dès que possible."
        }
    },
    "se reposer": {
        meaning: "descansar",
        type: "pronominal (-er)",
        aux: "être",
        pp: "reposé",
        present: ["me repose", "te reposes", "se repose", "nous reposons", "vous reposez", "se reposent"],
        imparfait: ["me reposais", "te reposais", "se reposait", "nous reposions", "vous reposiez", "se reposaient"],
        futur: ["me reposerai", "te reposeras", "se reposera", "nous reposerons", "vous reposerez", "se reposeront"],
        examples: {
            present: "Je me repose après le travail.",
            passeCompose: "Elle s'est reposée toute la journée.",
            imparfait: "Nous nous reposions au soleil.",
            futur: "Tu te reposeras bien pendant les vacances."
        }
    },
    "rester": {
        meaning: "quedarse, permanecer",
        type: "regular (-er)",
        aux: "être",
        pp: "resté",
        present: ["reste", "restes", "reste", "restons", "restez", "restent"],
        imparfait: ["restais", "restais", "restait", "restions", "restiez", "restaient"],
        futur: ["resterai", "resteras", "restera", "resterons", "resterez", "resteront"],
        examples: {
            present: "Je reste ici.",
            passeCompose: "Ils sont restés à la maison.",
            imparfait: "Elle restait silencieuse.",
            futur: "Nous resterons amis."
        }
    },
    "rire": {
        meaning: "reír",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "ri",
        present: ["ris", "ris", "rit", "rions", "riez", "rient"],
        imparfait: ["riais", "riais", "riait", "riions", "riiez", "riaient"],
        futur: ["rirai", "riras", "rira", "rirons", "rirez", "riront"],
        examples: {
            present: "Tu ris beaucoup.",
            passeCompose: "Nous avons bien ri.",
            imparfait: "Elle riait aux éclats.",
            futur: "Vous rirez de cette histoire."
        }
    },
    "savoir": {
        meaning: "saber",
        type: "irregular",
        aux: "avoir",
        pp: "su",
        present: ["sais", "sais", "sait", "savons", "savez", "savent"],
        imparfait: ["savais", "savais", "savait", "savions", "saviez", "savaient"],
        futur: ["saurai", "sauras", "saura", "saurons", "saurez", "sauront"],
        examples: {
            present: "Je ne sais pas.",
            passeCompose: "Elle a su la réponse.",
            imparfait: "Nous savions que tu viendrais.",
            futur: "Vous saurez bientôt la vérité."
        }
    },
    "sentir": {
        meaning: "sentir (oler, palpar, experimentar una emoción)",
        type: "irregular (-ir, como dormir, partir)",
        aux: "avoir",
        pp: "senti",
        present: ["sens", "sens", "sent", "sentons", "sentez", "sentent"],
        imparfait: ["sentais", "sentais", "sentait", "sentions", "sentiez", "sentaient"],
        futur: ["sentirai", "sentiras", "sentira", "sentirons", "sentirez", "sentiront"],
        examples: {
            present: "Je sens une bonne odeur. / Je sens le froid.",
            passeCompose: "Elle a senti le danger.",
            imparfait: "Nous sentions la fatigue.",
            futur: "Tu sentiras la différence."
        }
    },
    "se sentir": {
        meaning: "sentirse",
        type: "pronominal (-ir, como sentir)",
        aux: "être",
        pp: "senti",
        present: ["me sens", "te sens", "se sent", "nous sentons", "vous sentez", "se sentent"],
        imparfait: ["me sentais", "te sentais", "se sentait", "nous sentions", "vous sentiez", "se sentaient"],
        futur: ["me sentirai", "te sentiras", "se sentira", "nous sentirons", "vous sentirez", "se sentiront"],
        examples: {
            present: "Comment te sens-tu ?",
            passeCompose: "Elle s'est sentie malade.",
            imparfait: "Je me sentais fatigué après le voyage.",
            futur: "Tu te sentiras mieux demain."
        }
    },
    "servir": {
        meaning: "servir",
        type: "irregular (-ir, como sentir, dormir)",
        aux: "avoir",
        pp: "servi",
        present: ["sers", "sers", "sert", "servons", "servez", "servent"],
        imparfait: ["servais", "servais", "servait", "servions", "serviez", "servaient"],
        futur: ["servirai", "serviras", "servira", "servirons", "servirez", "serviront"],
        examples: {
            present: "À quoi ça sert ?",
            passeCompose: "Le garçon nous a servi rapidement.",
            imparfait: "Elle servait le café.",
            futur: "Ce projet servira à beaucoup de gens."
        }
    },
    "sortir": {
        meaning: "salir",
        type: "irregular (-ir, como sentir, dormir)",
        aux: "être", // Cuando es 'salir de un lugar' / 'salir con amigos'
        // aux: "avoir", // Cuando es 'sacar algo' (J'ai sorti la poubelle)
        pp: "sorti",
        present: ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
        imparfait: ["sortais", "sortais", "sortait", "sortions", "sortiez", "sortaient"],
        futur: ["sortirai", "sortiras", "sortira", "sortirons", "sortirez", "sortiront"],
        examples: {
            present: "Tu sors ce soir ?",
            passeCompose: "Nous sommes sortis hier soir. / J'ai sorti le chien.",
            imparfait: "Elle sortait souvent avec ses amis.",
            futur: "Je sortirai plus tard."
        }
    },
    "se souvenir de": { // Nota: verbo + preposición
        meaning: "recordar",
        type: "pronominal (irregular, como venir)",
        aux: "être",
        pp: "souvenu",
        present: ["me souviens de", "te souviens de", "se souvient de", "nous souvenons de", "vous souvenez de", "se souviennent de"],
        imparfait: ["me souvenais de", "te souvenais de", "se souvenait de", "nous souvenions de", "vous souveniez de", "se souvenaient de"],
        futur: ["me souviendrai de", "te souviendras de", "se souviendra de", "nous souviendrons de", "vous souviendrez de", "se souviendront de"],
        examples: {
            present: "Je me souviens de toi.",
            passeCompose: "Elle s'est souvenue de son nom.",
            imparfait: "Nous nous souvenions de notre enfance.",
            futur: "Tu te souviendras de ce jour."
        }
    },
    "suivre": {
        meaning: "seguir",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "suivi",
        present: ["suis", "suis", "suit", "suivons", "suivez", "suivent"],
        imparfait: ["suivais", "suivais", "suivait", "suivions", "suiviez", "suivaient"],
        futur: ["suivrai", "suivras", "suivra", "suivrons", "suivrez", "suivront"],
        examples: {
            present: "Suivez-moi !",
            passeCompose: "J'ai suivi tes conseils.",
            imparfait: "Elle suivait des cours de danse.",
            futur: "Nous suivrons le guide."
        }
    },
    "tomber": {
        meaning: "caer(se)",
        type: "regular (-er)",
        aux: "être",
        pp: "tombé",
        present: ["tombe", "tombes", "tombe", "tombons", "tombez", "tombent"],
        imparfait: ["tombais", "tombais", "tombait", "tombions", "tombiez", "tombaient"],
        futur: ["tomberai", "tomberas", "tombera", "tomberons", "tomberez", "tomberont"],
        examples: {
            present: "Attention, tu vas tomber !",
            passeCompose: "Il est tombé dans les escaliers.",
            imparfait: "Les feuilles tombaient des arbres.",
            futur: "La pluie tombera demain."
        }
    },
    "travailler": {
        meaning: "trabajar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "travaillé",
        present: ["travaille", "travailles", "travaille", "travaillons", "travaillez", "travaillent"],
        imparfait: ["travaillais", "travaillais", "travaillait", "travaillions", "travailliez", "travaillaient"],
        futur: ["travaillerai", "travailleras", "travaillera", "travaillerons", "travaillerez", "travailleront"],
        examples: {
            present: "Je travaille dans un bureau.",
            passeCompose: "Nous avons travaillé dur.",
            imparfait: "Elle travaillait comme infirmière.",
            futur: "Vous travaillerez sur ce projet."
        }
    },
    "traduire": {
        meaning: "traducir",
        type: "irregular (-uire)",
        aux: "avoir",
        pp: "traduit",
        present: ["traduis", "traduis", "traduit", "traduisons", "traduisez", "traduisent"],
        imparfait: ["traduisais", "traduisais", "traduisait", "traduisions", "traduisiez", "traduisaient"],
        futur: ["traduirai", "traduiras", "traduira", "traduirons", "traduirez", "traduiront"],
        examples: {
            present: "Je traduis un texte.",
            passeCompose: "Elle a traduit ce livre.",
            imparfait: "Nous traduisions des documents.",
            futur: "Tu traduiras cette phrase."
        }
    },
    "trouver": {
        meaning: "encontrar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "trouvé",
        present: ["trouve", "trouves", "trouve", "trouvons", "trouvez", "trouvent"],
        imparfait: ["trouvais", "trouvais", "trouvait", "trouvions", "trouviez", "trouvaient"],
        futur: ["trouverai", "trouveras", "trouvera", "trouverons", "trouverez", "trouveront"],
        examples: {
            present: "Je ne trouve pas mes lunettes.",
            passeCompose: "Nous avons trouvé une solution.",
            imparfait: "Elle trouvait toujours les bons mots.",
            futur: "J'espère que tu trouveras ce que tu cherches."
        }
    },
    "utiliser": {
        meaning: "utilizar, usar",
        type: "regular (-er)",
        aux: "avoir",
        pp: "utilisé",
        present: ["utilise", "utilises", "utilise", "utilisons", "utilisez", "utilisent"],
        imparfait: ["utilisais", "utilisais", "utilisait", "utilisions", "utilisiez", "utilisaient"],
        futur: ["utiliserai", "utiliseras", "utilisera", "utiliserons", "utiliserez", "utiliseront"],
        examples: {
            present: "J'utilise mon ordinateur tous les jours.",
            passeCompose: "Avez-vous utilisé cet outil ?",
            imparfait: "Avant, on utilisait des cartes routières.",
            futur: "Nous utiliserons cette méthode."
        }
    },
    "vendre": {
        meaning: "vender",
        type: "regular (-re)",
        aux: "avoir",
        pp: "vendu",
        present: ["vends", "vends", "vend", "vendons", "vendez", "vendent"],
        imparfait: ["vendais", "vendais", "vendait", "vendions", "vendiez", "vendaient"],
        futur: ["vendrai", "vendras", "vendra", "vendrons", "vendrez", "vendront"],
        examples: {
            present: "Il vend sa voiture.",
            passeCompose: "J'ai vendu ma maison.",
            imparfait: "Ils vendaient des fruits au marché.",
            futur: "Tu vendras tes tableaux."
        }
    },
    "venir": {
        meaning: "venir",
        type: "irregular",
        aux: "être",
        pp: "venu",
        present: ["viens", "viens", "vient", "venons", "venez", "viennent"],
        imparfait: ["venais", "venais", "venait", "venions", "veniez", "venaient"],
        futur: ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
        examples: {
            present: "Tu viens avec nous ?",
            passeCompose: "Ils sont venus nous voir.",
            imparfait: "Elle venait souvent ici.",
            futur: "Je viendrai te chercher."
        }
    },
    "vivre": {
        meaning: "vivir",
        type: "irregular (-re)",
        aux: "avoir",
        pp: "vécu",
        present: ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
        imparfait: ["vivais", "vivais", "vivait", "vivions", "viviez", "vivaient"],
        futur: ["vivrai", "vivras", "vivra", "vivrons", "vivrez", "vivront"],
        examples: {
            present: "Je vis à Paris.",
            passeCompose: "Elle a vécu une expérience incroyable.",
            imparfait: "Mes grands-parents vivaient à la campagne.",
            futur: "Nous vivrons heureux."
        }
    },
    "voir": {
        meaning: "ver",
        type: "irregular",
        aux: "avoir",
        pp: "vu",
        present: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
        imparfait: ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
        futur: ["verrai", "verras", "verra", "verrons", "verrez", "verront"],
        examples: {
            present: "Je vois un oiseau.",
            passeCompose: "Nous avons vu un bon film.",
            imparfait: "On ne voyait rien à cause du brouillard.",
            futur: "Tu verras, ce sera amusant."
        }
    },
    "vouloir": {
        meaning: "querer",
        type: "irregular",
        aux: "avoir",
        pp: "voulu",
        present: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
        imparfait: ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
        futur: ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
        examples: {
            present: "Elle veut un café.",
            passeCompose: "J'ai toujours voulu visiter le Japon.",
            imparfait: "Tu voulais être pompier.",
            futur: "Ils voudront des explications."
        }
    },
    "voyager": {
        meaning: "viajar",
        type: "regular (-er, -ger)", // nous voyageons
        aux: "avoir",
        pp: "voyagé",
        present: ["voyage", "voyages", "voyage", "voyageons", "voyagez", "voyagent"],
        imparfait: ["voyageais", "voyageais", "voyageait", "voyagions", "voyagiez", "voyageaient"],
        futur: ["voyagerai", "voyageras", "voyagera", "voyagerons", "voyagerez", "voyageront"],
        examples: {
            present: "Je voyage souvent pour le travail.",
            passeCompose: "Nous avons voyagé en Italie.",
            imparfait: "Elle voyageait autour du monde.",
            futur: "Tu voyageras beaucoup."
        }
    }
};

// Para el Passé Composé de être/avoir (auxiliares)
const auxAvoirPresent = ["ai", "as", "a", "avons", "avez", "ont"];
const auxEtrePresent = ["suis", "es", "est", "sommes", "êtes", "sont"];

// Lista de los verbos en la DB (se actualiza automáticamente)
const commonVerbs = Object.keys(verbsDB).sort();

// --- FUNCIONES EJEMPLO (para que puedas probar) ---

function conjugate(verb, tense) {
    const verbData = verbsDB[verb];
    if (!verbData) return `Verbo '${verb}' no encontrado.`;
    
    // Para "se souvenir de", el tiempo está en la conjugación
    if (verb === "se souvenir de") {
        if (!verbData.present || !verbData.imparfait || !verbData.futur || !verbData.examples[tense]) {
             return `Tiempo '${tense}' no disponible para '${verb}'.`;
        }
    } else if (!verbData[tense]) {
        return `Tiempo '${tense}' no disponible para '${verb}'.`;
    }


    let result = `\n--- ${verb.toUpperCase()} (${tense}) ---\n`;
    
    if (tense === "passeCompose") {
        const auxVerb = verbData.aux;
        const pp = verbData.pp;
        const auxConjugation = auxVerb === "avoir" ? auxAvoirPresent : auxEtrePresent;

        for (let i = 0; i < pronoms.length; i++) {
            let pronoun = pronoms[i];
            let conjugatedAux = auxConjugation[i];
            let fullConjugation = `${conjugatedAux} ${pp}`;
            
            if (pronoun === "je/j'" && /^[aeiouh]/i.test(conjugatedAux.charAt(0))) {
                pronoun = "j'";
            } else if (pronoun === "je/j'") {
                pronoun = "je";
            }

            let agreementNote = "";
            if (auxVerb === "être") {
                agreementNote = " (+ acuerdo: e, s, es)";
                 if (verb === "s'asseoir") agreementNote = " (+ acuerdo: e, es)"; // pp: assis(e)(s)
            }
             if (verb === "devoir" && pp === "dû") agreementNote = " (dû, due, dus, dues)";


            // Manejo especial para "se souvenir de" en passé composé
            if (verb === "se souvenir de") {
                let basePronoun = "";
                if (i === 0) basePronoun = "me";
                else if (i === 1) basePronoun = "t'";
                else if (i === 2) basePronoun = "s'";
                else if (i === 3) basePronoun = "nous";
                else if (i === 4) basePronoun = "vous";
                else if (i === 5) basePronoun = "se";
                
                let displayPronoun = pronoun;
                 if (pronoun === "je/j'" && basePronoun === "me") displayPronoun = "je"; // je me suis
                 if (pronoun === "je/j'" && basePronoun === "m'" && conjugatedAux.startsWith("e")) displayPronoun = "j'"; // je me suis -> j'me suis (coloquial), mejor je me suis

                fullConjugation = `${basePronoun} ${conjugatedAux} ${pp} de`;
                 if (displayPronoun === "j'" && conjugatedAux.startsWith("e")) { // j' + es = j'es -> je suis
                     displayPronoun = "je";
                     fullConjugation = `${basePronoun} ${conjugatedAux} ${pp} de`;
                 } else if (displayPronoun === "j'") {
                     fullConjugation = `${basePronoun.substring(1)} ${conjugatedAux} ${pp} de`; // t'es souvenu
                 }


                result += `${displayPronoun} ${fullConjugation}${agreementNote}\n`;

            } else {
                result += `${pronoun} ${fullConjugation}${agreementNote}\n`;
            }
        }
    } else { // Present, Imparfait, Futur
        const conjugations = verbData[tense];
         for (let i = 0; i < pronoms.length; i++) {
            let pronoun = pronoms[i];
            let conjugation = conjugations[i];
            
            if (pronoun === "je/j'" && /^[aeiouh]/i.test(conjugation.charAt(0)) && !(verbData.type && verbData.type.startsWith("pronominal") && conjugation.startsWith("m'"))) {
                pronoun = "j'";
            } else if (pronoun === "je/j'") {
                pronoun = "je";
            }

            if (verbData.type && verbData.type.startsWith("pronominal")) {
                 if (pronoun === "j'" && conjugation.startsWith("m'")) { 
                     result += `${pronoun}${conjugation.substring(1)}\n`; 
                 } else {
                     result += `${pronoun} ${conjugation}\n`;
                 }
            } else {
                result += `${pronoun} ${conjugation}\n`;
            }
        }
    }
    result += `Ejemplo: ${verbData.examples[tense] || 'No disponible'}\n`;
    return result;
}

function translateToFrench(spanishVerb) {
    return spanishToFrench[spanishVerb.toLowerCase()] || `Traducción para '${spanishVerb}' no encontrada.`;
}

// --- PRUEBAS ---
console.log("Total de verbos en la DB:", commonVerbs.length);
// console.log("Verbos disponibles:", commonVerbs); // Descomentar para ver la lista completa

console.log("\nTraducción de 'intentar':", translateToFrench("intentar"));
const verboIntentar = translateToFrench("intentar");
if (verbsDB[verboIntentar]) {
    console.log(conjugate(verboIntentar, "present"));
    console.log(conjugate(verboIntentar, "passeCompose"));
}

console.log("\nTraducción de 'recordar':", translateToFrench("recordar"));
const verboRecordar = translateToFrench("recordar");
if (verbsDB[verboRecordar]) {
    console.log(conjugate(verboRecordar, "present"));
    console.log(conjugate(verboRecordar, "passeCompose"));
    console.log(conjugate(verboRecordar, "futur"));
}


console.log(conjugate("s'asseoir", "present"));
console.log(conjugate("s'asseoir", "passeCompose"));

console.log(conjugate("devoir", "passeCompose"));


// Para encontrar un verbo específico y mostrar toda su info:
const buscarVerbo = "payer";
if (verbsDB[buscarVerbo]) {
    console.log(`\n--- INFO COMPLETA PARA: ${buscarVerbo.toUpperCase()} ---`);
    console.log("Significado:", verbsDB[buscarVerbo].meaning);
    console.log("Tipo:", verbsDB[buscarVerbo].type);
    console.log("Auxiliar (P.C.):", verbsDB[buscarVerbo].aux);
    console.log("Participio Pasado:", verbsDB[buscarVerbo].pp);
    console.log(conjugate(buscarVerbo, "present"));
    console.log(conjugate(buscarVerbo, "imparfait"));
    console.log(conjugate(buscarVerbo, "futur"));
    console.log(conjugate(buscarVerbo, "passeCompose"));
} else {
    console.log(`\nEl verbo '${buscarVerbo}' no está en la base de datos.`);
}
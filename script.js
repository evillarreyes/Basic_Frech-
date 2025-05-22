document.addEventListener('DOMContentLoaded', () => {
    const verbInput = document.getElementById('verbInput');
    const verbSelect = document.getElementById('verbSelect');
    const searchButton = document.getElementById('searchButton');
    const verbInfoDiv = document.getElementById('verbInfo');
    const errorMessageDiv = document.getElementById('errorMessage');
    const speakVerbNameButton = document.getElementById('speakVerbNameButton');

    let frenchVoice = null; // Variable para almacenar la voz francesa si se encuentra

    // --- Lógica de Síntesis de Voz ---
    function initializeSpeechSynthesis() {
        if ('speechSynthesis' in window) {
            const AWAIT_VOICES_TIMEOUT = 2000; // Esperar máx 2 segundos por las voces

            const loadVoices = () => {
                const voices = speechSynthesis.getVoices();
                frenchVoice = voices.find(voice => voice.lang === 'fr-FR' || voice.lang === 'fr_FR');
                if (!frenchVoice) { // Intenta un fallback más genérico si no encuentra 'fr-FR'
                    frenchVoice = voices.find(voice => voice.lang.startsWith('fr'));
                }
                if (frenchVoice) {
                    console.log("Voz francesa encontrada:", frenchVoice.name);
                } else {
                    console.warn("No se encontró una voz francesa específica. Se usará la voz predeterminada del sistema (puede no ser francés).");
                }
            };

            // Las voces a veces no se cargan inmediatamente.
            // Intentar cargar las voces inmediatamente
            loadVoices();
            // Y también escuchar el evento 'voiceschanged'
            if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = loadVoices;
            }

            // Como a veces onvoiceschanged no se dispara, o las voces tardan, se puede hacer un intento después de un timeout
            // Esto es un workaround para algunos navegadores/casos
            setTimeout(loadVoices, AWAIT_VOICES_TIMEOUT);

        } else {
            console.error("Tu navegador no soporta la síntesis de voz.");
            // Podrías deshabilitar los botones de hablar aquí si lo deseas
            const speakButtons = document.querySelectorAll('.speak-btn');
            speakButtons.forEach(btn => btn.style.display = 'none');
        }
    }

    function speakText(textToSpeak) {
        if (!('speechSynthesis'in window) || !textToSpeak) return;

        // Si ya está hablando, cancelar lo anterior para evitar colas largas
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'fr-FR'; // Especificar el idioma

        if (frenchVoice) {
            utterance.voice = frenchVoice; // Usar la voz francesa si se encontró
        }
        // Opcional: ajustar velocidad y tono
        // utterance.rate = 0.9; // Un poco más lento para claridad
        // utterance.pitch = 1;

        speechSynthesis.speak(utterance);
    }
    // --- Fin Lógica de Síntesis de Voz ---

    initializeSpeechSynthesis(); // Inicializar al cargar la página

    // Poblar el select
    commonVerbs.forEach(verb => {
        const option = document.createElement('option');
        option.value = verb;
        option.textContent = verb.charAt(0).toUpperCase() + verb.slice(1);
        verbSelect.appendChild(option);
    });

    searchButton.addEventListener('click', searchVerb);
    verbInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchVerb();
        }
    });
    verbSelect.addEventListener('change', () => {
        verbInput.value = ''; 
        if (verbSelect.value) {
             searchVerb();
        } else {
            hideVerbInfo();
            hideError();
        }
    });

    speakVerbNameButton.addEventListener('click', () => {
        const verbName = document.getElementById('verbName').textContent;
        if (verbName) {
            speakText(verbName);
        }
    });

    function searchVerb() {
        hideError();
        let query = verbInput.value.trim().toLowerCase();
        const selectedVerb = verbSelect.value;

        if (!query && selectedVerb) {
            query = selectedVerb;
        } else if (!query && !selectedVerb) {
            showError("Por favor, escribe un verbo o selecciónalo de la lista.");
            hideVerbInfo();
            return;
        }
        
        if (spanishToFrench[query]) {
            query = spanishToFrench[query];
            verbInput.value = query; 
            if (commonVerbs.includes(query)) {
                verbSelect.value = query;
            } else {
                verbSelect.value = ""; 
            }
        }

        const verbData = verbsDB[query];

        if (verbData) {
            displayVerbInfo(query, verbData);
        } else {
            showError(`Verbo "${query}" no encontrado en la base de datos.`);
            hideVerbInfo();
        }
    }

    function displayVerbInfo(verbName, data) {
        const verbNameSpan = document.getElementById('verbName');
        verbNameSpan.textContent = verbName.charAt(0).toUpperCase() + verbName.slice(1);
        
        document.getElementById('verbMeaning').textContent = data.meaning;
        document.getElementById('verbRegularity').textContent = data.type;
        document.getElementById('verbAuxiliary').textContent = data.aux + (data.aux === 'être' ? " (¡Recuerda el acuerdo del participio pasado!)" : "");

        populateConjugationList('presentConjugation', data.present);
        populateConjugationList('passeComposeConjugation', null, data.pp, data.aux, data.aux === 'avoir' ? auxAvoirPresent : auxEtrePresent);
        populateConjugationList('imparfaitConjugation', data.imparfait);
        populateConjugationList('futurConjugation', data.futur);
        
        document.getElementById('presentExample').textContent = data.examples.present;
        document.getElementById('passeComposeExample').textContent = data.examples.passeCompose;
        document.getElementById('imparfaitExample').textContent = data.examples.imparfait;
        document.getElementById('futurExample').textContent = data.examples.futur;

        verbInfoDiv.style.display = 'block';
    }

    function populateConjugationList(ulId, conjugations, pastParticiple, auxiliaryType, auxiliaryConjugations) {
        const ul = document.getElementById(ulId);
        ul.innerHTML = ''; 

        for (let i = 0; i < pronoms.length; i++) {
            const li = document.createElement('li');
            let fullConjugatedForm = "";
            let textToSpeakForVerb = ""; // Texto específico para la pronunciación del verbo/participio

            if (ulId === 'passeComposeConjugation') {
                const auxConjugation = auxiliaryConjugations[i];
                let pronomFinal = pronoms[i];
                if (i === 0 && (auxConjugation.startsWith('a') || auxConjugation.startsWith('e') || auxConjugation.startsWith('é'))) {
                    pronomFinal = "j'";
                } else {
                     pronomFinal = pronoms[i].split('/')[0]; 
                }
                fullConjugatedForm = `${pronomFinal} ${auxConjugation} ${pastParticiple}`;
                textToSpeakForVerb = pastParticiple; // Pronunciar solo el participio pasado
            } else {
                let pronomFinal = pronoms[i];
                if (i === 0 && conjugations[i] && (conjugations[i].startsWith('a') || conjugations[i].startsWith('e') || conjugations[i].startsWith('é') || conjugations[i].startsWith('h'))) {
                    pronomFinal = "j'";
                } else {
                     pronomFinal = pronoms[i].split('/')[0]; 
                }
                fullConjugatedForm = `${pronomFinal} ${conjugations[i]}`;
                textToSpeakForVerb = conjugations[i]; // Pronunciar la forma conjugada del verbo
            }
            
            const textNode = document.createTextNode(fullConjugatedForm + " "); // Espacio antes del botón
            li.appendChild(textNode);

            // Botón para escuchar
            const speakButton = document.createElement('button');
            speakButton.classList.add('speak-btn');
            speakButton.innerHTML = '🔊 <span class="sr-only">Escuchar ' + textToSpeakForVerb + '</span>'; // Para accesibilidad
            speakButton.title = "Escuchar " + textToSpeakForVerb;
            speakButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Evitar que otros eventos se disparen si li tiene alguno
                speakText(textToSpeakForVerb);
            });
            li.appendChild(speakButton);
            ul.appendChild(li);
        }
    }
    
    function showError(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block';
    }

    function hideError() {
        errorMessageDiv.style.display = 'none';
    }

    function hideVerbInfo() {
        verbInfoDiv.style.display = 'none';
    }
});
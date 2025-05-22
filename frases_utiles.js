const phrasesData = {
    "Saludos": [
        { fr: "Bonjour", es: "Buenos días / Hola (formal/durante el día)" },
        { fr: "Salut", es: "Hola (informal)" },
        { fr: "Bonsoir", es: "Buenas tardes / Buenas noches (al llegar, desde aprox. 6 PM)" },
        { fr: "Bonne nuit", es: "Buenas noches (al despedirse para ir a dormir)" },
        { fr: "Au revoir", es: "Adiós" },
        { fr: "À bientôt", es: "Hasta pronto" },
        { fr: "À plus tard", es: "Hasta luego (si se ven el mismo día)" },
        { fr: "À demain", es: "Hasta mañana" },
        { fr: "Comment allez-vous ?", es: "¿Cómo está usted? (formal)" },
        { fr: "Comment vas-tu ?", es: "¿Cómo estás? (informal)" },
        { fr: "Ça va ?", es: "¿Qué tal? / ¿Cómo va? (informal)" },
        { fr: "Très bien, merci. Et vous ?", es: "Muy bien, gracias. ¿Y usted?" },
        { fr: "Très bien, merci. Et toi ?", es: "Muy bien, gracias. ¿Y tú?" },
        { fr: "Bienvenue", es: "Bienvenido/a" }
    ],
    "Frases de Cortesía": [
        { fr: "S'il vous plaît", es: "Por favor (formal)" },
        { fr: "S'il te plaît", es: "Por favor (informal)" },
        { fr: "Merci (beaucoup)", es: "Gracias (muchas)" },
        { fr: "De rien", es: "De nada" },
        { fr: "Je vous en prie", es: "De nada (formal) / Se lo ruego" },
        { fr: "Je t'en prie", es: "De nada (informal)" },
        { fr: "Excusez-moi", es: "Discúlpeme (formal)" },
        { fr: "Excuse-moi", es: "Discúlpame (informal)" },
        { fr: "Pardon", es: "Perdón" },
        { fr: "Avec plaisir", es: "Con gusto" }
    ],
    "Acuerdo y Desacuerdo": [
        { fr: "Oui", es: "Sí" },
        { fr: "Non", es: "No" },
        { fr: "D'accord", es: "De acuerdo" },
        { fr: "Je suis d'accord", es: "Estoy de acuerdo" },
        { fr: "Je ne suis pas d'accord", es: "No estoy de acuerdo" },
        { fr: "Bien sûr", es: "Por supuesto / Claro que sí" },
        { fr: "Exactement", es: "Exactamente" },
        { fr: "Peut-être", es: "Quizás / Tal vez" },
        { fr: "Je ne pense pas", es: "No creo / No pienso así" },
        { fr: "C'est vrai", es: "Es verdad" },
        { fr: "C'est faux", es: "Es falso" }
    ],
    "Familia": [
        { fr: "La famille", es: "La familia" },
        { fr: "Le père", es: "El padre" },
        { fr: "La mère", es: "La madre" },
        { fr: "Les parents", es: "Los padres" },
        { fr: "Le fils", es: "El hijo" },
        { fr: "La fille", es: "La hija" },
        { fr: "L'enfant / Les enfants", es: "El niño/a / Los niños/as (o hijos)" },
        { fr: "Le frère", es: "El hermano" },
        { fr: "La sœur", es: "La hermana" },
        { fr: "Le grand-père", es: "El abuelo" },
        { fr: "La grand-mère", es: "La abuela" },
        { fr: "Les grands-parents", es: "Los abuelos" },
        { fr: "L'oncle", es: "El tío" },
        { fr: "La tante", es: "La tía" },
        { fr: "Le cousin / La cousine", es: "El primo / La prima" },
        { fr: "Le neveu", es: "El sobrino" },
        { fr: "La nièce", es: "La sobrina" },
        { fr: "Le mari / L'époux", es: "El esposo / marido" },
        { fr: "La femme / L'épouse", es: "La esposa / mujer" }
    ],
    "Comidas Comunes": [
        { fr: "Le pain", es: "El pan" },
        { fr: "Le fromage", es: "El queso" },
        { fr: "Le lait", es: "La leche" },
        { fr: "L'eau", es: "El agua" },
        { fr: "Le vin", es: "El vino" },
        { fr: "Le café", es: "El café" },
        { fr: "Le thé", es: "El té" },
        { fr: "Le poulet", es: "El pollo" },
        { fr: "Le poisson", es: "El pescado" },
        { fr: "La viande", es: "La carne" },
        { fr: "Les légumes", es: "Las verduras" },
        { fr: "Les fruits", es: "Las frutas" },
        { fr: "Le riz", es: "El arroz" },
        { fr: "Les pâtes", es: "La pasta" },
        { fr: "Le dessert", es: "El postre" },
        { fr: "Le petit-déjeuner", es: "El desayuno" },
        { fr: "Le déjeuner", es: "El almuerzo" },
        { fr: "Le dîner", es: "La cena" }
    ],
    "Colores": [
        { fr: "Rouge", es: "Rojo" },
        { fr: "Bleu / Bleue", es: "Azul" },
        { fr: "Vert / Verte", es: "Verde" },
        { fr: "Jaune", es: "Amarillo" },
        { fr: "Noir / Noire", es: "Negro" },
        { fr: "Blanc / Blanche", es: "Blanco" },
        { fr: "Gris / Grise", es: "Gris" },
        { fr: "Orange", es: "Naranja" },
        { fr: "Rose", es: "Rosa" },
        { fr: "Violet / Violette", es: "Violeta / Morado" },
        { fr: "Marron", es: "Marrón" },
        { fr: "Beige", es: "Beige" }
    ],
    "Números (básicos)": [
        { fr: "Un / Une", es: "Uno / Una" },
        { fr: "Deux", es: "Dos" },
        { fr: "Trois", es: "Tres" },
        { fr: "Quatre", es: "Cuatro" },
        { fr: "Cinq", es: "Cinco" },
        { fr: "Six", es: "Seis" },
        { fr: "Sept", es: "Siete" },
        { fr: "Huit", es: "Ocho" },
        { fr: "Neuf", es: "Nueve" },
        { fr: "Dix", es: "Diez" },
        { fr: "Onze", es: "Once" },
        { fr: "Douze", es: "Doce" },
        { fr: "Vingt", es: "Veinte" },
        { fr: "Trente", es: "Treinta" },
        { fr: "Cent", es: "Cien" },
        { fr: "Mille", es: "Mil" }
    ],
    "Días de la Semana": [
        { fr: "Lundi", es: "Lunes" },
        { fr: "Mardi", es: "Martes" },
        { fr: "Mercredi", es: "Miércoles" },
        { fr: "Jeudi", es: "Jueves" },
        { fr: "Vendredi", es: "Viernes" },
        { fr: "Samedi", es: "Sábado" },
        { fr: "Dimanche", es: "Domingo" }
    ],
    "Meses del Año": [
        { fr: "Janvier", es: "Enero" },
        { fr: "Février", es: "Febrero" },
        { fr: "Mars", es: "Marzo" },
        { fr: "Avril", es: "Abril" },
        { fr: "Mai", es: "Mayo" },
        { fr: "Juin", es: "Junio" },
        { fr: "Juillet", es: "Julio" },
        { fr: "Août", es: "Agosto" },
        { fr: "Septembre", es: "Septiembre" },
        { fr: "Octobre", es: "Octubre" },
        { fr: "Novembre", es: "Noviembre" },
        { fr: "Décembre", es: "Diciembre" }
    ],
    "Estaciones del Año": [
        { fr: "Le printemps", es: "La primavera" },
        { fr: "L'été", es: "El verano" },
        { fr: "L'automne", es: "El otoño" },
        { fr: "L'hiver", es: "El invierno" }
    ],
    "Frases de Comparación": [
        { fr: "Plus ... que", es: "Más ... que (ej: plus grand que - más grande que)" },
        { fr: "Moins ... que", es: "Menos ... que (ej: moins cher que - menos caro que)" },
        { fr: "Aussi ... que", es: "Tan ... como (ej: aussi rapide que - tan rápido como)" },
        { fr: "Le/La/Les plus ...", es: "El/La/Los más ... (superlativo, ej: le plus intelligent)" },
        { fr: "Le/La/Les moins ...", es: "El/La/Los menos ... (superlativo, ej: la moins chère)" },
        { fr: "Meilleur(e) que", es: "Mejor que (adjetivo)" },
        { fr: "Mieux que", es: "Mejor que (adverbio)" },
        { fr: "Pire que / Plus mauvais(e) que", es: "Peor que" }
    ],
    "Unidades de Medida (básicas)": [
        { fr: "Un mètre", es: "Un metro" },
        { fr: "Un kilomètre", es: "Un kilómetro" },
        { fr: "Un centimètre", es: "Un centímetro" },
        { fr: "Un litre", es: "Un litro" },
        { fr: "Un kilo(gramme)", es: "Un kilo(gramo)" },
        { fr: "Une heure", es: "Una hora" },
        { fr: "Une minute", es: "Un minuto" },
        { fr: "Une seconde", es: "Un segundo" }
    ],
    "Preposiciones y Adverbios de Lugar": [
        { fr: "Dans", es: "En, dentro de" },
        { fr: "Sur", es: "Sobre, encima de" },
        { fr: "Sous", es: "Debajo de" },
        { fr: "Devant", es: "Delante de" },
        { fr: "Derrière", es: "Detrás de" },
        { fr: "À côté de", es: "Al lado de" },
        { fr: "Près de", es: "Cerca de" },
        { fr: "Loin de", es: "Lejos de" },
        { fr: "Entre", es: "Entre" },
        { fr: "Ici", es: "Aquí" },
        { fr: "Là / Là-bas", es: "Ahí / Allá" },
        { fr: "En haut", es: "Arriba" },
        { fr: "En bas", es: "Abajo" },
        { fr: "À gauche", es: "A la izquierda" },
        { fr: "À droite", es: "A la derecha" }
    ],
    "Adverbios de Tiempo": [
        { fr: "Aujourd'hui", es: "Hoy" },
        { fr: "Hier", es: "Ayer" },
        { fr: "Demain", es: "Mañana" },
        { fr: "Maintenant", es: "Ahora" },
        { fr: "Toujours", es: "Siempre" },
        { fr: "Souvent", es: "A menudo / Frecuentemente" },
        { fr: "Parfois / Quelquefois", es: "A veces" },
        { fr: "Jamais", es: "Nunca" },
        { fr: "Tôt", es: "Temprano" },
        { fr: "Tard", es: "Tarde" },
        { fr: "Bientôt", es: "Pronto" }
    ],
    "Ropa Común": [
        { fr: "Un pantalon", es: "Un pantalón" },
        { fr: "Une chemise", es: "Una camisa" },
        { fr: "Un T-shirt", es: "Una camiseta" },
        { fr: "Une robe", es: "Un vestido" },
        { fr: "Une jupe", es: "Una falda" },
        { fr: "Un pull / Un chandail", es: "Un suéter / jersey" },
        { fr: "Une veste", es: "Una chaqueta" },
        { fr: "Un manteau", es: "Un abrigo" },
        { fr: "Des chaussures", es: "Zapatos" },
        { fr: "Des chaussettes", es: "Calcetines" },
        { fr: "Un chapeau", es: "Un sombrero" },
        { fr: "Une écharpe", es: "Una bufanda" }
    ],
    "Preguntas Frecuentes": [
        { fr: "Comment vous appelez-vous ?", es: "¿Cómo se llama usted? (formal)" },
        { fr: "Comment t'appelles-tu ?", es: "¿Cómo te llamas? (informal)" },
        { fr: "Quel âge avez-vous ?", es: "¿Qué edad tiene usted?" },
        { fr: "Quel âge as-tu ?", es: "¿Qué edad tienes?" },
        { fr: "D'où venez-vous ?", es: "¿De dónde es usted?" },
        { fr: "D'où viens-tu ?", es: "¿De dónde eres?" },
        { fr: "Où habitez-vous ?", es: "¿Dónde vive usted?" },
        { fr: "Où habites-tu ?", es: "¿Dónde vives?" },
        { fr: "Parlez-vous anglais / espagnol ?", es: "¿Habla usted inglés / español?" },
        { fr: "Qu'est-ce que c'est ?", es: "¿Qué es esto?" },
        { fr: "Combien ça coûte ?", es: "¿Cuánto cuesta?" },
        { fr: "Où sont les toilettes ?", es: "¿Dónde está el baño?" },
        { fr: "Pouvez-vous m'aider ?", es: "¿Puede ayudarme? (formal)" },
        { fr: "Peux-tu m'aider ?", es: "¿Puedes ayudarme? (informal)" },
        { fr: "Quelle heure est-il ?", es: "¿Qué hora es?" }
    ]
};

const phrasesContainer = document.getElementById('phrasesContainer');

function speak(text, lang = 'fr-FR') {
    if ('speechSynthesis' in window) {
        // Cancelar cualquier habla anterior para evitar colas largas
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        
        // Opcional: intentar seleccionar una voz francesa si hay varias
        const voices = window.speechSynthesis.getVoices();
        const frenchVoice = voices.find(voice => voice.lang === 'fr-FR');
        if (frenchVoice) {
            utterance.voice = frenchVoice;
        }
        // Ajustes opcionales de la voz
        // utterance.pitch = 1; // 0 to 2
        // utterance.rate = 1; // 0.1 to 10
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Tu navegador no soporta la síntesis de voz.');
    }
}

// Asegurarse de que las voces estén cargadas antes de intentar usarlas
// Algunas veces, getVoices() retorna un array vacío inicialmente.
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => { /* console.log("Voices loaded"); */ };
}


function renderPhrases() {
    for (const category in phrasesData) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        ['Francés', 'Español', 'Escuchar'].forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        phrasesData[category].forEach(item => {
            const row = document.createElement('tr');

            const frCell = document.createElement('td');
            frCell.textContent = item.fr;
            row.appendChild(frCell);

            const esCell = document.createElement('td');
            esCell.textContent = item.es;
            row.appendChild(esCell);

            const pronounceCell = document.createElement('td');
            const pronounceButton = document.createElement('button');
            pronounceButton.classList.add('pronounce-btn');
            pronounceButton.textContent = '🔊'; // Icono de altavoz
            pronounceButton.onclick = () => speak(item.fr);
            pronounceCell.appendChild(pronounceButton);
            row.appendChild(pronounceCell);

            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        categoryDiv.appendChild(table);
        phrasesContainer.appendChild(categoryDiv);
    }
}

// Botón para volver arriba
const backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Renderizar el contenido cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderPhrases);
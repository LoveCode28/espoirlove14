// Initialisation de la taille du bouton "Oui"
let ouiScale = 1;

// Bouton "Non" fuyant et transformation en "Oui"
document.getElementById('nonBtn').addEventListener('mouseover', function () {
    const nonBtn = this;
    const container = nonBtn.parentElement.parentElement;
    const containerRect = container.getBoundingClientRect();
    const nonBtnRect = nonBtn.getBoundingClientRect();

    const maxX = containerRect.width - nonBtnRect.width;
    const maxY = containerRect.height - nonBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    nonBtn.style.position = 'absolute';
    nonBtn.style.left = `${randomX}px`;
    nonBtn.style.top = `${randomY}px`;
});

document.getElementById('nonBtn').addEventListener('click', function () {
    const nonBtn = this;
    const ouiBtn = document.getElementById('ouiBtn');

    // Transforme le bouton "Non" en "Oui"
    nonBtn.textContent = 'Oui';
    nonBtn.style.backgroundColor = '#4caf50'; // Change la couleur en vert
    nonBtn.style.cursor = 'default'; // Désactive le curseur
    nonBtn.removeEventListener('mouseover', arguments.callee); // Arrête de fuir

    // Déclenche la pluie de cœurs
    startHeartRain();

    // Affiche un message romantique
    alert("Tu as essayé de dire Non, mais je savais que tu voulais dire Oui ! 💖");
});

// Réaction quand on clique sur "Oui"
document.getElementById('ouiBtn').addEventListener('click', function () {
    startHeartRain();
    alert('Youpi ! Tu as dit Oui ! Joyeuse Saint-Valentin ! 💖');
});

// Fonction pour créer la pluie de cœurs
function startHeartRain() {
    const heartRain = document.getElementById('heartRain');
    const numHearts = 50; // Nombre de cœurs à créer

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💖';
        heart.style.left = `${Math.random() * 100}vw`; // Position horizontale aléatoire
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Vitesse de chute aléatoire
        heart.style.fontSize = `${Math.random() * 2 + 1}em`; // Taille aléatoire
        heartRain.appendChild(heart);

        // Supprime le cœur après la fin de l'animation
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Bouton "Non" fuyant
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

// Réaction quand on clique sur "Oui"
document.getElementById('ouiBtn').addEventListener('click', function () {
    const container = document.querySelector('.container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '💖';
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.top = `${Math.random() * 80 + 10}%`;
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000); // Supprime le cœur après 2 secondes

    alert('Youpi ! Tu as dit Oui ! Joyeuse Saint-Valentin ! 💖');
});

// Réaction quand on clique sur "Non"
document.getElementById('nonBtn').addEventListener
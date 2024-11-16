let spreadEnabled = true; // Default to spread effect being enabled

function toggleSpread() {
    const container = document.getElementById('galleryContainer');
    const items = container.querySelectorAll('.gallery-item');

    if (!spreadEnabled) {
        container.classList.add('spread');
        items.forEach(item => {
            const randomX = `${Math.random() * 400 - 200}px`;
            const randomY = `${Math.random() * 400 - 200}px`;
            const randomRotate = `${Math.random() * 30 - 15}deg`;

            item.style.setProperty('--random-x', randomX);
            item.style.setProperty('--random-y', randomY);
            item.style.setProperty('--random-rotate', randomRotate);
        });
    } else {
        container.classList.remove('spread');
        items.forEach(item => {
            item.style.removeProperty('--random-x');
            item.style.removeProperty('--random-y');
            item.style.removeProperty('--random-rotate');
        });
    }

    spreadEnabled = !spreadEnabled;
}

// Initialize spread effect on page load
window.onload = function() {
    const container = document.getElementById('galleryContainer');
    const items = container.querySelectorAll('.gallery-item');
    items.forEach(item => {
        const randomX = `${Math.random() * 400 - 200}px`;
        const randomY = `${Math.random() * 400 - 200}px`;
        const randomRotate = `${Math.random() * 30 - 15}deg`;

        item.style.setProperty('--random-x', randomX);
        item.style.setProperty('--random-y', randomY);
        item.style.setProperty('--random-rotate', randomRotate);
    });
};
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    audio.muted = false; // Unmute audio if allowed by the browser
});
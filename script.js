let isNight = false;

function toggleMode() {
    isNight = !isNight;

    const btn = document.getElementById('toggle-btn');
    const dayContent = document.getElementById('day-content');
    const nightContent = document.getElementById('night-content');

    if (isNight) {
        dayContent.classList.remove('active');
        nightContent.classList.add('active');
        document.body.classList.add('night');
        btn.textContent = '☀️ Switch to Day';
    } else {
        nightContent.classList.remove('active');
        dayContent.classList.add('active');
        document.body.classList.remove('night');
        btn.textContent = '🌙 Switch to Night';
    }
}
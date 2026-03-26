const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const updateButton = (isLight) => {
    themeToggle.textContent = isLight ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
};

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialLight = savedTheme === 'light' || (!savedTheme && !prefersDark);

if (initialLight) {
    body.classList.add('light-mode');
}

updateButton(initialLight);

themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateButton(isLight);
});
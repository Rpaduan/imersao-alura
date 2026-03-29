// Salva o perfil ativo em localStorage (para uso em catalogo/catalogo.html)

document.addEventListener('DOMContentLoaded', () => {
    const perfis = document.querySelectorAll('.perfil');

    perfis.forEach((link) => {
        link.addEventListener('click', () => {
            const img = link.querySelector('img');
            const nome = link.querySelector('p');

            if (!img || !nome) return;

            const imageUrl = new URL(img.getAttribute('src'), window.location.href).href;

            localStorage.setItem('perfilAtivoNome', nome.textContent.trim());
            localStorage.setItem('perfilAtivoImagem', imageUrl);
        });
    });
});

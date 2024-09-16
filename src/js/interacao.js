const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const menuToggle = document.querySelector('#menuToggle'); // Seleção pelo ID correto
const nav = document.querySelector('#nav'); // Seleção pelo ID correto

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active'); // Adiciona ou remove a classe 'active'
});

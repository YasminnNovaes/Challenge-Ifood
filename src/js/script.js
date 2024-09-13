document.getElementById('open_btn').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo_ifood');
    
    sidebar.classList.toggle('open-sidebar');

    // Verifica se a sidebar está aberta ou fechada para alterar o src da imagem
    if (sidebar.classList.contains('open-sidebar')) {
        logo.src = 'src/images/ifood-logo.svg'; // Logo completo quando aberta
    } else {
        logo.src = 'src/images/sorriso-ifood.svg'; // Sorriso do iFood quando fechada
    }
});

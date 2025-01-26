const button = document.getElementById('scrollButton');
const targetSection = document.getElementById('musicas');

  window.addEventListener('scroll', () => {
        const body = document.body;
        if (window.scrollY > 180) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });
function rudder() {
    window.open('https://distrokid.com/hyperfollow/cosmus3/rudder', '_blank');
}
function dance() {
    window.open('https://offstep.link/622550476683')
}
function ninehundredninety() {
    window.open('https://distrokid.com/hyperfollow/cosmus3/990', '_blank');
}
function scrollar(sectionNumber) {
    // Gera o ID da seção com base no número passado
    const sectionId = `section${sectionNumber}`;
    
    // Seleciona a seção correspondente
    const section = document.getElementById(sectionId);
    
    // Verifica se a seção existe antes de tentar rolar
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Rola suavemente
        block: 'center'      // Alinha ao topo
      });
    } else {
      console.error(`Seção com ID '${sectionId}' não encontrada.`);
    }
  }

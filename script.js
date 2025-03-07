const button = document.getElementById('scrollButton');
const targetSection = document.getElementById('musicas');

  window.addEventListener('scroll', () => {
        const body = document.body;
        if (window.scrollY > 100) {
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
  let indiceAtual = 0;
  let touchInicioX = 0;
  let touchFimX = 0;
  
  const carrosselContainer = document.querySelector('.carrossel-container');
  const imagens = document.querySelectorAll('.carrossel-container img');
  const indicadoresContainer = document.querySelector('.indicadores');
  
  // Array para armazenar a largura de cada imagem
  const largurasDasImagens = [];
  
  // Calcula a largura de cada imagem e armazena no array
  imagens.forEach((imagem) => {
    imagem.addEventListener('load', () => {
      largurasDasImagens.length = 0; // Limpa o array
      imagens.forEach((img) => largurasDasImagens.push(img.clientWidth));
    });
  });

  function moverCarrossel(direcao) {
    indiceAtual += direcao;
  
    if (indiceAtual >= imagens.length) {
      indiceAtual = 0;
    } else if (indiceAtual < 0) {
      indiceAtual = imagens.length - 1;
    }
  
    atualizarCarrossel();
  }
  
  function moverParaImagem(index) {
    indiceAtual = index;
    atualizarCarrossel();
  }
  
  function atualizarCarrossel() {
    // Calcula o deslocamento com base na largura das imagens anteriores
    let offset = 0;
    for (let i = 0; i < indiceAtual; i++) {
      offset += largurasDasImagens[i];
    }
  
    // Aplica o deslocamento ao carrossel
    carrosselContainer.style.transform = `translateX(-${offset}px)`;
  
    // Atualiza os indicadores
    document.querySelectorAll('.indicadores .ponto').forEach((ponto, index) => {
      ponto.classList.toggle('ativo', index === indiceAtual);
    });
  }
  
  // Navegação por toque (swipe)
  carrosselContainer.addEventListener('touchstart', (e) => {
    touchInicioX = e.touches[0].clientX;
  });
  
  carrosselContainer.addEventListener('touchmove', (e) => {
    touchFimX = e.touches[0].clientX;
  });
  
  carrosselContainer.addEventListener('touchend', () => {
    const deltaX = touchFimX - touchInicioX;
    if (Math.abs(deltaX) > 50) { // Ajuste a sensibilidade do swipe
      if (deltaX < 0) {
        moverCarrossel(1); // Deslizou para a esquerda'
      } else if (deltaX > 0) {
        moverCarrossel(-1); // Deslizou para a direita
      }
    }
  });
  
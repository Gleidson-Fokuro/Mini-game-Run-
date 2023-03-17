
const naruto = document.querySelector('.naruto');
const shuriken = document.querySelector('.shuriken');
const flora = document.querySelector('.flora');
const scoreSpan = document.querySelector('.score'); // seleciona o elemento span pelo ID

let score = 0;

const jump = () => {
  naruto.classList.add('jump');

  setTimeout(() => {
    naruto.classList.remove('jump');
  }, 500);
}
const startGame = () => {
  let gameStarted = false;

  const loop = setInterval(() => {
    // código do loop do jogo aqui
    
  const shurikenPosition = shuriken.offsetLeft;
  const narutoPosition =+ window.getComputedStyle(naruto).bottom.replace('px', '');

  if (shurikenPosition <= 145 && shurikenPosition > 0 && narutoPosition < 80) {
    // personagem colidiu com o obstáculo
    shuriken.style.animation = 'none';
    shuriken.style.left = `${shurikenPosition}px`;
    naruto.style.animation = 'none';
    naruto.style.bottom = `${narutoPosition}px`;
    naruto.src = 'images/explosão.gif';
    naruto.style.marginLeft = '50px';
    flora.src ='images/flora3.jpg';
    clearInterval(loop);
  } else if (shurikenPosition <= 0 && shurikenPosition > -20) {
    // personagem pulou sobre o obstáculo
    if (!shuriken.hasAttribute("scored")) { // verifica se o obstáculo já foi contado
      score++; // incrementa a contagem de pontos
      scoreSpan.textContent = score; // atualiza o conteúdo do elemento span
      shuriken.setAttribute("scored", true); // marca o obstáculo como contado
    }
  } else {
    shuriken.removeAttribute("scored"); // remove a marcação do obstáculo se o personagem não passou por ele
  }

  console.log(score); // mostra a contagem de pontos no console


document.addEventListener('keydown', jump);
}, 10);

}

startGame();

// const restartButton = document.querySelector('.restart');
// restartButton.addEventListener('click', () => {
//   resetGame();
// });





const restart = () => {
  // Recarrega a página para reiniciar o jogo
  location.reload();
};

// Adiciona um evento de clique ao botão de recomeçar
const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', restart);

// Adiciona um evento de tecla pressionada à página
document.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    if (naruto.classList != 'jump') {
      // Se o personagem colidiu e o Enter for pressionado, recarrega a página
      restart();
    } else {
      // Se o jogo estiver em andamento, pula com o personagem
      jump();
    }
  }
});


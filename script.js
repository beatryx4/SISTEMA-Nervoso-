function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (!music) return;
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function respostaQuiz(botao, correto) {
  if (correto) {
    botao.style.backgroundColor = '#0f0'; // verde
    alert('Resposta correta!');
  } else {
    botao.style.backgroundColor = '#f00'; // vermelho
    alert('Resposta errada!');
  }
}

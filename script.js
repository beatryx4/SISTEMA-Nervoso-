// Função para tocar/parar trilha sonora (opcional)
function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (!music) return;
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Função do quiz com destaque visual
function respostaQuiz(botao, correto) {
  // Desativa os outros botões da mesma pergunta
  const grupo = botao.parentElement.querySelectorAll("button");
  grupo.forEach(b => {
    b.disabled = true;
    b.classList.remove("correto", "errado");
  });

  // Destaca a resposta
  if (correto) {
    botao.classList.add("correto");
  } else {
    botao.classList.add("errado");
  }
}

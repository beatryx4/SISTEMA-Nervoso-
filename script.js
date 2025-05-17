// Função para mostrar a seção selecionada e esconder as outras
function mostrarSecao(id) {
  const secoes = document.querySelectorAll('main .section');
  secoes.forEach(secao => secao.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Função do quiz com feedback visual
function respostaQuiz(botao, correto) {
  // Desativa os botões da mesma pergunta
  const grupo = botao.parentElement.querySelectorAll("button");
  grupo.forEach(b => {
    b.disabled = true;
    b.classList.remove("correto", "errado");
  });

  // Marca o botão clicado com cor verde ou vermelha
  if (correto) {
    botao.classList.add("correto");
    alert('Resposta correta!');
  } else {
    botao.classList.add("errado");
    alert('Resposta errada!');
  }
}

// Ao carregar a página, mostra a introdução
window.onload = () => mostrarSecao('introducao');

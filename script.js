// Navegação entre abas
function mostrarSecao(id) {
  const secoes = document.querySelectorAll('main .section');
  secoes.forEach(secao => secao.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Quiz
function respostaQuiz(botao, correto) {
  const grupo = botao.parentElement.querySelectorAll("button");
  grupo.forEach(b => {
    b.disabled = true;
    b.classList.remove("correto", "errado");
  });

  if (correto) {
    botao.classList.add("correto");
    alert('Resposta correta!');
  } else {
    botao.classList.add("errado");
    alert('Resposta errada!');
  }
}

// Mostra a introdução por padrão ao abrir o site
window.onload = () => mostrarSecao('introducao');

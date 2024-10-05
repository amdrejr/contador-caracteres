console.log('iniciando script.js');

// Seleciona o textarea e os spans que irão mostrar os resultados
const textarea = document.getElementById('texto-entrada');
const palavrasSpan = document.getElementById('quant-palavras');
const letrasSpan = document.getElementById('quant-letras');
const espacosSpan = document.getElementById('quant-espacos');

// Função que faz a contagem de palavras, letras e espaços
function atualizarContagem() {
    const texto = textarea.value;

    // Conta as palavras - separando por espaços em branco e removendo entradas vazias
    const palavras = texto.trim().split(/\s+/).filter(Boolean).length;

    // Conta todas as letras - removendo espaços para contar só caracteres alfabéticos
    const letras = texto.replace(/\s+/g, '').length;

    // Conta os espaços
    const espacos = (texto.match(/\s/g) || []).length;

    // Atualiza os valores nos elementos HTML
    palavrasSpan.textContent = palavras;
    letrasSpan.textContent = letras;
    espacosSpan.textContent = espacos;

    console.log('Atualizando contagem');
}

// Adiciona um evento para quando o usuário digitar no textarea
textarea.addEventListener('input', atualizarContagem);
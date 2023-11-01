var validade = new Date('2026-12-31T00:00:00'); 
var situacao = '';
// Obtenha a data atual
var dataAtual = new Date();

// Defina a data de comparação (no formato "Ano-Mês-Dia")
var dataComparacao = validade;

// Verifique se a data atual é menor ou igual à data de comparação
if (dataAtual <= dataComparacao) { 
//Se for verdade, defina o fundo como verde 
document.body.style.backgroundColor='#198754' ; 
situacao = 'Carteirinha válida até '+ validade.toLocaleDateString(); } 
else { 
//Caso contrário, defina o fundo como vermelho 
document.body.style.backgroundColor='#dc3545' ; 
situacao = 'Carteirinha venceu em ' + validade.toLocaleDateString(); }
document.getElementById("resultadoParagrafo").textContent = situacao;
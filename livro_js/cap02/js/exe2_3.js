const frm = document.querySelector("form");
const resp1 = document.querySelector("#outTitle");
const resp2 = document.querySelector("#outEntrada");
const resp3 = document.querySelector("#outParcelas")

frm.addEventListener("submit", (e)=>{
    const veiculo = frm.inVeiculo.value; // entrada de dados 
    const preco = frm.inPreco.value; // entrada de dados

    const entrada = preco / 2; // processamento
    const parcelas = (preco - entrada) / 12 // processamento

    resp1.innerText = `Promoção: ${veiculo}`; // saida de dados
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`; // saida de dados 
    resp3.innerText = `+ 12x de R$ ${parcelas.toFixed(2)}`;
    
    e.preventDefault();
})
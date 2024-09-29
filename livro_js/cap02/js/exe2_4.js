const frm = document.querySelector("Form");
const resp = document.querySelector("#outValor");


frm.addEventListener("submit", (e)=>{
    const quilo = frm.inQuilo.value; // entrada de dados 
    const consumo = frm.inConsumo.value; // entrada de dados

    const valor = ((consumo /1000) * quilo).toFixed(2) // processamento

    resp.innerText = `Valor a pagar: ${valor}`; // saida de dados
    
    e.preventDefault();
})
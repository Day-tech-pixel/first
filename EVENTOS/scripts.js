//ACIONANDO EVENTOS

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log ("Clicou aqui!");
});

//REMOVENDO EVENTOS

const secondBtn = document.querySelector("#btn")
function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem);
});


// ARGUMENTO DE EVENTOS

const myTitle = document.querySelector("#my-title");

        myTitle.addEventListener("click", (event) => {
       console.log (event);
});

// switch 

/*let idade = null;

switch(idade) {
    case 18:
        console.log("Você tem 18 anos");
        break;
    case 19:
        console.log("Você tem 19 anos");
        break;
    case 33:
        console.log("Você tem 33 anos");
        break;
    default:
        console.log("Idade não especificada.");
}  */

console.log(2+4);
console.log(10-3);
console.log(5*2);
console.log(10/2);

// Concatenação

console.log("Oi," + "tudo bem?");
console.log("Estou " + "bem!");

// Template Strings: Interpolação - escrever tudo na mesma string - Podemos executar código JS com ${algum código} ESCRITA ENTRE CRASES

console.log(`A soma de 2+2 é: ${2+2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// Boolean

console.log(true);
console.log(5>20);
console.log(30>10);

// Comparações: == igual; != diferente; === identico
 
console.log(true && true);
console.log(5>2 && 2<10 );

//Mudança de tipos:

console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);

//Estruturas variáveis

let nome = "Daya"
console.log(nome);
nome = "Doane Daya";
console.log(nome);
const idade = 33; 
console.log(idade);

console.log(Math.max(5,2, 1, 10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

//Console if and else and else if

/*const m = 10;
if(m>5){
console.log("M é maior que 5!");
}*/

const user = "João";
if(user === "João"){
console.log("Olá, João");
}

if (user === "João"){
console.log("Olá, Maria!");
}

const loggedIn = false;
if (loggedIn){
    console.log("Está autenticado!");
    }

    else{
    console.log("Não está autenticado!");
    }

    const q = 10
    const w = 15

    if(q > 5 && w > 20){
        console.log("Números mais altos");
    }
    else{
        console.log("Os números não são mais altos");
    }

    if(1 > 2){
        console.log("Teste")
    }

    else if(2 > 3){
        console.log("Teste 2")
    }

    else if(5 > 1){
console.log("Agora sim!!!")
    }

    //Estruturas de repetição: While (Ação até que uma condição seja atendida) - Do While() - For()
    let p = 0
    while(p < 5){
        console.log(`Repetindo ${p}`);
        p = p + 1;
    }

   for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`);
   }
   
   //Funções

   function minhaFuncao () {
    console.log("Testando");
   }

   minhaFuncao();

   const a = 10;
   const b = 20;
   const c = 30;
   const d = 40;

   function soma(n1, n2){
    return n1 + n2;
   }

   const resultado = soma(a, b);
   console.log(resultado);
   console.log(soma(c,d));

   //Escopo da função
   let y = 15;

   function testandoEscopo(){
    let y = 40;
    console.log(`Y dentro da função é: ${y}`);
   }

   testandoEscopo()
    console.log(`Y fora da função é: ${y}`);
    
    testandoEscopo();

    // Escopo aninhado

    let m = 10;

    function escopoAninhado(){
        let m = 20;

        if(true){
            let m = 30;

            if (true){
                let m = 40;
                console.log(m);
            }
            console.log(m);
        }
        console.log(m);
    }

    escopoAninhado();

    console.log(m); 

    // ARROW FUNCTION

    const testeArrow = () => {
        console.log("Esta é uma arrow function");
    }

    testeArrow ();

    const parOuImpar = (n) => {
        if (n % 2 === 0) {
            console.log("Par");
            return;
        }
        console.log("Impar");
    }

    parOuImpar(5);

    parOuImpar(10);

    const raizQuadrada = (x) => {
        return x * x;
    }

    console.log(raizQuadrada(4));

    const raizQuadrada2 = (x) => x * x;
    console.log(raizQuadrada2(6));

    //PARÂMETRO OPCIONAL

    


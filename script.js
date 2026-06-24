
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

    const multiplication = function (m, n) {
    if (m === undefined){
        return m * 2;    
    } else {
        return m * n;
       
    }
};
    console.log(multiplication(5));

    console.log (multiplication(2, 4));

    const greeting = (name) => {
        if (!name) {
            console.log("Olá!")
            return
        }
        console.log(`Olá ${name}!`)
    };

    greeting();
    greeting("Day"); 

    const customGreeting = (name, greet = "Olá") => {
        return `${greet}, ${name}!`;
    };


        // VALOR DEFAULT


    console.log(customGreeting("Day"));
    console.log(customGreeting( "Doane", "Bom dia"));

    const repeatText = (text, repeat = 2 ) => {
        for (let i = 0; i < repeat; i++){
            console.log(text);
        }
    }

     repeatText ("Testando");
    repeatText("Agora repete 5 vezes");

    //Closure --- Há funções internas que aproveitam o escopo  


    function someFunction(){
        let txt = "Alguma coisa"  

    function display (){
        console.log(txt )
    }
    display()
    }
    someFunction();

    const multiplicationClosure = (n) =>{
        return (m) => {
            return n * m;
        };
    }

    const c1 = multiplicationClosure(5);
    const c2 = multiplicationClosure(10);
    console.log(c1);
    console.log(c2);
    console.log(c1(5));
    console.log(c2(10));



    //RECURSÃO - Permite que a função se autoinvoque continuamente - uma espécie de LOOP
    //  É interessante definir uma condição final para parar a execução


    const untilTen = (n, m) => {
        if(n < 10) {
            console.log("A função parou de executar!");
        }else {
    const x = n - m;
    console.log(x);
    untilTen(x, m);
        }
    }
     untilTen(100, 7);

    function factorial (x){
        if (x === 0){
            return 1
        }else {
            return x * factorial(x - 1);
        }

    }

    const num = 6;
    const result = factorial(num);
    console.log(`O fatorial do número ${num} é ${result}`); 



    // ARRAYS são listas - Valores inseridos entre [] - Cada valor separado do outro por vírgula

    const lista = [1, 2, 3, 4, 5];
    console.log(lista);

    const itens =["Day", true, 2, 4, 8, []];
     console.log(itens);

     //PROPRIEDADES ARRAYS --> Length: para saber a quantidade de elementos que tenho na lista

    const numbers = [5, 3, 4];
    console.log(numbers.length);
    console.log(numbers['length']);

    const myName = "Day";
    console.log(myName.length);

    //MÉTODOS

    const otherNumbers = [1, 2, 3];
    const allNumbers = numbers.concat(otherNumbers);
    console.log(allNumbers);

    const text = "algum texto";
    console.log(text.split ());




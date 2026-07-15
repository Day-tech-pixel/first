
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

   /* const num = 6;
    const result = factorial(num);
    console.log(`O fatorial do número ${num} é ${result}`); */



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

    //MÉTODOS -- uma concatenação de arrays com concat 

    const otherNumbers = [1, 2, 3];
    const allNumbers = numbers.concat(otherNumbers);
    console.log(allNumbers);

    const text = "algum texto";
    console.log(text.split ());

    //OBJETOS -- Fica em um bloco de {} --

    const person = {
        Nome: "Day",
        Idade: 33,
        Profissão: "Policial"
    }
    console.log(person);
    console.log(person.Nome);
    console.log(person.Nome.length);

    person.Escolaridade = "Ensino Superior";
    console.log(person);

    delete person.Escolaridade;
    console.log(person);

    const obj = {
        a: "teste",
        b: true
    };

    console.log(obj instanceof Object);
    
    const obj2 = {
        c: []
    }

    Object.assign(obj2, obj );

    console.log(obj2); 

    console.log(Object.keys(obj));
    console.log(Object.keys(obj2));
    console.log(Object.keys(person));

    console.log(Object.entries(person)); //ALém da chave o valor


    //MUTAÇÃO - Uma referência de um objeto já criado

   /*
   
   const a = {
    nome: "Daya",
    };

    const b = a;

    console.log(a);
    console.log(b);

    console.log(a === b);
    
    */




    //Loops em ARRAYS - percorrer os elementos através de estruturas de repetição(for e while)

    const users = ["Doane", "Kin", "Andressa", "Patricia"]

    for(let i = 0; i < user.length; i++) {
        console.log(`Listando o usuário: ${users [i]}`);
    }

     //MÉTODOS: PUSH e POP

     const array = ["a", "b", "c", ];
     array.push("d");
     console.log(array);

     array.pop("d");
     console.log(array); 
     console.log(array.length);

     //MÉTODOS: SHIFT (Remove o primeiro elemento do array) e UNSHIFT (adiciona itens ao início do array)
     
     const letters = ["a", "b", "c"]; 
     const letter = letters.shift();
    console.log(letter);      
    console.log(letters);

    letters.unshift("d", "f", "g");
    console.log(letters);
  
    //MÉTODOS: indexOf (encontra o índice de um elemento que passamos como argumento para o método) 
    //lastIndexOf (quando há repetições de elementos e precisamos do índice da última ocorrência) --->>> A POSIÇÃO DO ELEMENTO NA LISTA
    
    const myElements = [ "Morango", "Maçã", "Maçã", "Maçã", "Maçã", "Maçã", "Maçã", "Maçã", "Abacate", "Pera", "Abacate"];

    console.log(myElements.indexOf("Pera"));
    console.log(myElements[8]);
    console.log(myElements.lastIndexOf("Pera"));
    

    // MÉTODOS: SLICE - Extrai um array menor e um array maior -- Intervalo de elementos é determinado pelos parâmetros: índice de início e índice de fim
    //Último elemento é ignorado, se quisermos ele devemos somar 1 ao índice final.


    const testSlice = ["a", "b", "c", "d", "e"];
    const subArray = testSlice.slice(2, 4 + 1);
    console.log(subArray);
    console.log(testSlice);


    // MÉTODOS: forEach --> como estrutura for ou while, porém é um método

    const nums = [1, 2, 3, 4, 5];
    nums.forEach((numero) => {
        console.log(`O número é ${numero}`);
    })

// MÉTODOS: INCLUDES -- Verifica se o array tem um elemento. Utiliza o include no array e como argumento coloca o elemento que quer buscar

const brands = ["BMW", "Fiat", "Hunday"];
console.log(brands.includes ("Fiat"));

if (brands.includes("BMW")){

console.log("Há carros da marca BMW!");
}

//MÉTODOS: REVERSE - Inverte os elementos de um array

const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();
console.log(reverseTest);


//STRINGS -
//MÉTODOS: TRIM - Remove tudo que não é texto em uma string
const trimTest = "testando\n";
console.log(trimTest); 

// PADSTART -- Insere um texto no começo da string

//SPLIT - Divide umaa string em uma array

const frase = "O rato roeu a roupa do Rei de Roma"
const arrayDaFrase = frase.split (" ");
console.log(arrayDaFrase);

// JOIN --- une um array em uma string , dá pra colocar um separador para formatar a string - O contrário do SPLIT

const FraseDenovo = arrayDaFrase.join(" ");
console.log(FraseDenovo);

//REPEAT -- Repete um texto n vezes, onde n é o número que colocamos como seu argumento. 

const palavra = "Testando ";

console.log(palavra.repeat(5));

//REST OPERATOR/ REST PARAMETERS -- caracterizado pelo símbolo ... Podemos utilizá-lo para receber indefinidos argumentos em uma função.
//Assim não precisamos declara exatamente o que vamos receber, deixando a função mais ampla. 

const somaInfinita = (...args) => {
let total = 0
for(let i = 0; i < args.length; i++) {
    total += args[i];
}

return total;

}

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(10, 15, 5000));
 
// ESTRUTURA for of

const somaInfinita2 = (...args) => {
    let total = 0;
    for (num of args){
        total += num;
    }
return total;
};

console.log(somaInfinita2(1, 2, 3, 10));
console.log (somaInfinita2(5, 6, 7, 23, 3, 5, 50));

//Destructuring - permite desestruturar algum dado

const userDetails = {
    firstName: "Day",
    lastName: "Augusto",
    job: "Policial Penal"
};

const{firstName, lastName, job} = userDetails;
console.log(firstName, lastName, job);

//RENOMEAR VARIÁVEIS

const{ firstName: primeiroNome } = userDetails;
console.log(firstName);

//JSON - Comunicação entre API e FrontendEm formato de texto - Formato lembra Objeto Literal

const myJson = '{"name": "Daya", "Idade": "33 anos ", "job": "Policial Penal" }';
console.log(myJson);
console.log(typeof myJson);

//JASON para objeto e objeto para JSON

/*const myObject = JSON.parse (myJson);
console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

const pessoa = {

    nome: "Matheus",

    getNome: function(){
        return this.nome;
    },
    setNome: Function() {


    }
};

console.log(pessoa.nome);
console.log(pessoa.getNome()); */


//PROTOTYPE - faz parte da arquitetura JS -Herança, onde objetos pais herdam propriedades e métodos aos filhos 
const bool = true;
console.log(Object.getPrototypeOf(bool));

const myObject = {
    a: "b",
};

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);

console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject === myObject));


//CLASSES BÁSICAS

const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão"

console.log (pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro)
bulldog.raca = "Bulldog";
console.log (bulldog);

// FUNÇÕES COMO CLASSES - Função Construtora

 function criarCachorro(nome, raca) {
    const cachorro = Object.create({})
    cachorro.nome = nome
    cachorro.raca = raca
    return cachorro;
 }

 const bob = criarCachorro("Bob", "Vira lata");
 console.log(bob);

const jack = criarCachorro("Jack", "Box");
console.log(jack);

// OVERRIDE - substituição de um valor por outro

class Humano{
    constructor (nome, idade) {

        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new Humano ("Matheus", 31);
console.log(matheus);


Humano.prototype.idade = "Não definida"

console.log(matheus.idade);
console.log(Humano.prototype.idade);


class Aviao {
    constructor (marca, turbinas){
this.marca = marca
this.turbinas = turbinas

}
}

const asas = Symbol();
Aviao.prototype[asas] = 2;
const boeing = new Aviao ("Boeing", 10);
console.log(boeing);


//GETTER - (GET exibe o valor de alguma propriedade) 
//SETTER - (SET altera o valor de uma propriedade) 


class Post {

constructor (titulo, descricao, tags){

    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
}

get exibirTitulo(){
    return `Você está lendo: ${this.titulo}`;

}

set adicionarTags(tags) {
    const tagsArray = tags.split(", ")
    this.tags = tagsArray
}

}

const myPost = new Post ("Algum post", "É um post sobre programação");

console.log(myPost);


console.log(myPost.exibirTitulo);

 myPost.adicionarTags = "programação, jascript, js";


 console.log(myPost);


 //HERANÇA --> semelhante ao prototype -- Utilizamos a palavra EXTENDS para adcionar a classe que vai trazer as propriedades e SUPER para enviar os valores para a classe pai


 class Mamifero {
    constructor (patas){
        this.patas = patas
    }
 }

class Lobo extends Mamifero {
    constructor (patas, nome) {
        super (patas, patas)
            this.nome = nome
    }
}

const shark = new Lobo (4, "Shark");
console.log (shark);

// instanceOf -- Verifica se um ojeto é pai de outro para ter certeza da ancestralidade - Verificado com objeto => classe

console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);

//STRICT - Deixa o JS mais rigoroso na hora de programar, deve ser declarado no topo do arquivo ou de funções - ele não limita apenas baliza a forma que você programa
// O MÉTODO LOG de console é muito utilizado para debug

/*
let f = 1;
let g = 2;

if (f == 1) {
f = g + 2;
}

console.log(f);

for (let i = 0; i < g; i++){
    f = f + 2;
    console.log (f);
}

if (f > 5) {
f = 25;
}

console.log(f);

let h = 1
let j = 2

if (h == 1) {
    h = j + 2;
}
    */

/*
debugger; // para pausar o código

 for (let i = 0; i < j; i++)
{
    h = h + 2;

}

console.log("Executou o loop");

debugger;

if (h < 5) {
    h = 25;
}

*/

//setTimeout

console.log ("Ainda não executou");

setTimeout(function(){

    console.log("Requisição assíncrona");

}, 2000);


console.log("Ainda não executou 2");


//setTimeInterval

/*
console.log("Ainda não começou");
setInterval(function(){
    console.log("Intervalo Assíncrono");

}, 4000);

    console.log("Ainda não começou 2");

 */


    //Promise- Uma promessa de um valor que pode chegar a um ponto futuro

    const promessa = Promise.resolve (5 + 5);
    console.log("Algum código");

    promessa.then((value) => {
        console.log (`A soma é ${value}`);
        return value; 
        })
        
        .then((value) => value - 1)
        .then((value) => console.log(`Agora é ${value}`)) ;

    console.log ("Outro código");


// PROMISE com Erro usamos CATCH

Promise.resolve (4 * "asd")
.then((n) => {
    if (Number.isNaN(n)){
        throw new Error ("Valores inválidos");
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`));


/*
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10){
            resolve (`O número é maior que 10`);
        } else {
            reject (new Error(`Número muito baixo`));
        }

    });
}

const s = chekNumber (20);
const z = checkNumber (10);

s.then((v) => console.log `O resultado é ${v}`).catch((err) => console.log(`Um erro ocorreu ${err}`));

z.then((v) => console.log `O resultado é ${v}`).catch((err) => console.log(`Um erro ocorreu ${err}`));


*/

const p1 = new Promise ((resolve, reject) => {
    setTimeout(function(){
        resolve(10)
    }, 3000)
});

const p2 = Promise.resolve(10 +10); 


const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve (30);
    } else {
        reject("Erro!");
    }
}); 

Promise.all([p1, p2, p3]) .then((values) => console.log(values));


//async functions

async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2, 4).then((value) =>{
    console.log(`O valor da soma é: ${value}`); 
})

console.log("Teste async"); 

//async await - //poderia ser uma chamada de API

function resolveComDelay () {  
    return new Promise (resolve => {
        setTimeout (() => {
            resolve ("Resolveu a Promise");
        }, 2000);
    });
}    

async function chamadaAsync() {
    console.log("Chamando a Promise, e esperando o resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);    
}
chamadaAsync();

// GENERATORS Operadores: function* e Yield

function* generator (){
yield 1; 
yield 2;
yield 3; 

}

const gen = generator();

console.log (gen.next().value);
console.log (gen.next().value);
console.log (gen.next().value);

//Selecionando elemento por ID

const title = document.getElementById ("title");
console.log (title);

//Selecionando elementos por classe:

const products = document.getElementsByClassName ("product");
console.log (products);

//Selecionando elementos por CSS
const productQuery = document.querySelectorAll(".product");
console.log(productQuery);
const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);


//Alterando o HTML com DOM - insertBefore (Inserir elemento antes do outro); appendChild(inserir elemento dentro do outro); replaceChild(trocar um elemento pelo outro);
/*
const l = document.createElement("l");
const header = title.parentElement;
header.insertBefore(l, title);



const navLinks = document.querySelector("nav ul");
const li = document.createElement ("li");
navLinks.appendChild
*/

// CRIANDO NÓS DE TEXTOS: createTextNode

const  myText = document.createTextNode("Agora vamos colocar mais um título");
console.log (myText);

const h3 = document.createElement ("h3");
h3.appendChild(myText);

console.log(h3);

const btn = document.querySelector("#my-button");
btn.addEventListener("click", function(){
    console.log("Clicou aqui!");
});


// Desaio 01
var numeros = [];

for (let index = 0; index < 5; index++) {
    numeros[index] = parseInt(prompt("Insira um número. Positivo ou Negativo. \n" + (index + 1) + "° número: "));
}
console.log("Entrada: " + numeros);

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] < 0) {
        numeros[index] = false;
    } else {
        numeros[index] = true;
    }   
}
console.log("Saída: " + numeros);

// Desafio 02
var numeros = [];

// Solicitando ao usuário que digite 5 números
for (var i = 0; i < 5; i++) {
    var numero  = parseInt(prompt("Insira um número: " + (i + 1) + ": " ));

    // Verificando se o número já foi inserido
    for (var j = 0; j < numeros.length; j++) {
        if (numeros[j] == numero) {
           alert("Esse número já foi inserido. Digite outro número. ");
           numero = parseInt(prompt("Digite o número " + (i + 1) + ": "));
           j = 0;
        }        

    }    
    numeros[i] = numero;
}

console.log(numeros);

// Desafio 03
let arrayA = [];
let arrayB = [];
let arrayC = [];
let condicao = true;
let contador = 0;
let contadorArrayC = 0;


while (condicao) {
    arrayA[contador] = parseInt(prompt("Insira um número no arrayA: "));
    arrayB[contador] = parseInt(prompt("Insira um número no arrayB: "));
    contador++;

    let pararOuNao = prompt("Deseja continuar?\n 1 - Sim\n 2 - Não");
    if (pararOuNao == "2") {
        condicao = false;
    }   
}

// Criando array C com os números em comuns e ímpares
for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayA.length; j++) {
    if (arrayB[i] == arrayA[j] || arrayB[i] % 2 != 0) {
      arrayC[contadorArrayC] = arrayB[i];
      contadorArrayC++;
      j = arrayA.length
    } else if (arrayA[j] % 2 != 0 ) {
      arrayC[contadorArrayC] = arrayA[j];
      contadorArrayC++;
      j = arrayA.length
    }
    
  }
  
}

// Exibindo os arrays 
console.log(arrayA);
console.log(arrayB);
console.log(arrayC);



// Desafio 04
let arrayUser = [];
let arraySup = [];
let contadorSup = 0;


for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt("Digite seu " + (i + 1) +"° número: "));
  arrayUser[i] = numero;
}

for (let index = 0; index < arrayUser.length; index++) {
  if (arrayUser[index] != 0) {
    arraySup[contadorSup] = arrayUser[index]
    contadorSup++;
  } 
  
}
console.log("Entrada: " + arrayUser);
console.log("Saída: " + arraySup);

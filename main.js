// NIVELL 1
// exercici 1

const add = (a, b) => a + b;
console.log(add(3, 6));

// exercici 2
const randomNumber = () => Math.round(Math.random() * 100);
console.log(randomNumber());

// ex 3

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => console.log(`Hola, ${this.name}`);
}

const person = new Person("Ada");
person.greet();

// NIVELL 2
// ex 4

const numbers = [1, 2, 3, 4, 5, 6, 67];

const printNumbers = (numbers) => {
  for (const number of numbers) {
    console.log(number);
  }
};

printNumbers(numbers);

//ex 5

const printMessage = () => console.log("Hola soy un mensaje!");
;

setTimeout(printMessage, 3000);

// Exercici 1.2: Operador ternari

// Nivell 1

const potConduir = (num) => {
  return num >= 18
    ? console.log("Pots conduir")
    : console.log("No pots conduir");
};

potConduir(3);

// Exercici 2

const compara = (num1, num2) => {
  num1 > num2
    ? console.log(`${num1} és més gran`)
    : console.log(`${num2} és més gran`);
};

compara(76, 89);

// Nivell 2

// Exercici 3

const sign = (num) => {
  num > 0
    ? console.log(`${num} es positiu`)
    : num < 0
    ? console.log(`${num} es negatiu`)
    : console.log(`${num} es zero`);
};

sign(-9);

const trobaMaxim = (a, b, c) => {
  a > b && a > c
    ? console.log(`${a} és el valor màxim`)
    : b > a && b > c
    ? console.log(`${b} és el valor màxim`)
    : console.log(`${c} és el valor màxim`);
};

trobaMaxim(10, 50, 9);

// Nivell 3

const numeros = [1, 2, 3, 4, 5, 6, 7];

const parOImpar = (array) => {
  for (i = 0; i < array.length; i++) {
    let resultado = array[i] % 2 === 0 ? `parell` : `imparell`;
    console.log(`${array[i]} és ${resultado}`);
  }
};

parOImpar(numeros);

// Exercici 1.3: Callbacks

// Nivell 1

function processar(num, callback) {
  callback(num);
}

function myCallback(num) {
  console.log(`el nombre és ${num}`);
}

processar(49, myCallback);

// Exercici 2

function calculadora(num1, num2, callback) {
  callback(num1, num2);
}

function myCallback2(num1, num2) {
  console.log(`${num1 + num2}`);
}

calculadora(2, 4, myCallback2);

// Nivell 2

// Exercici 3

function esperarISaludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
}

function myCallback3(nombre) {
  console.log(`Hola querido ${nombre}`);
}

esperarISaludar("Fabrizio", myCallback3);

// Exercici 4

function processarElements(array, callback) {
  callback(array);
}

function myCallback4(array) {
  array.forEach((element) => console.log(element));
}

processarElements([1, 2, 3, 4, 5, 6], myCallback4);

// Nivell 3
// Exercici 5

function processarCadena(string, callback) {
  callback(string.toUpperCase());
}

function myCallback5(string) {
  console.log(
    `El carácter en el índice 1 de la cadena "${string}" es ${string.charAt(1)}`
  );
}

processarCadena("la unica cosa", myCallback5);

// Exercici 1.4: Rest & Spread operators

// Nivell 1

const array1 = [1, 2, 3, 4, 5, 6, 7],
  array2 = [8, 9, 10, 11, 12];

const array3 = [...array1, ...array2];

console.log(array3);

// Exercici 2

const suma = (a, b, ...c) => {
  let resultado = a + b;

  c.forEach((el) => resultado += el);
  return resultado;
};

console.log(suma(2, 4, 9));

// Nivell 2

// Exercici 3

const Persona1 = {
  nombre: "Ada",
  edad: 25,
  altura: 165,
};

const Persona2 = { ...Persona1 };

Persona2.nombre = "Marta";

console.log(Persona1);
console.log(Persona2);

// Exercici 4

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, ...rest] = array;

console.log(a);
console.log(b);
console.log(rest);

// Nivell 3
// Exercici 5

const sumar = (num1, num2, num3) => num1 + num2 + num3;
;

const calculos = [2, 6, 9];

console.log(sumar(...calculos));

// Exercici 6

const PersonaA = {
  nombre: "Anna",
  edad: 24,
  altura: 175,
};

const actividades = {
  hobby: "pintura",
  deporte: "basket",
  profesion: "actriz",
};

const cliente = { ...PersonaA, ...actividades };

console.log(cliente);

// Exercici 1.5: Array transformations

// Nivell 1

const numerosA = [1, 2, 3, 4];

const cuadrado = numerosA.map((el) => el * el);

console.log(`Array original: ${numerosA}`);
console.log(cuadrado);

// Exercici 2

const numerosB = [1, 2, 3, 4];

const parell = numerosB.filter((el) => el % 2 == 0);

console.log(`Array original: ${numerosB}`);
console.log(parell);

// Exercici 3

const numerosC = [1, 10, 8, 11];

const major = numerosC.find((el) =>  el > 10);

console.log(`Array original: ${numerosC}`);
console.log(`El primer número mayor de 10 es ${major}`);

// Exercici 4

const numerosD = [13, 7, 8, 21];

const total = numerosD.reduce((total, b) => total + b, 0);

console.log(`Array original: ${numerosD}`);
console.log(`La suma total es ${total}`);

// Nivell 2

// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

const numerosE = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const combinado1 = numerosE.filter((el) => el >= 10);
const combinado2 = numerosE.filter((el) => el >= 10).map((el) => el * 2);
const combinado = numerosE
  .filter((el) => el >= 10)
  .map((el) => el * 2)
  .reduce((a, b) => a + b);

console.log(`Array original: ${numerosE}`);
console.log(combinado1);
console.log(combinado2);

console.log(combinado);

// Nivell 3
// Exercici 6

const numerosF = [11, 12, 13, 14];

const esMayorDeDiez = ((el) => el > 10)

console.log(numerosF.every(esMayorDeDiez));
console.log(numerosF.some(esMayorDeDiez));

// Exercici 1.6: Array loops

// Nivell 1

// Exercici 1

let noms = ["Anna", "Bernat", "Clara"];

noms.forEach((el) => console.log(el));

// Exercici 2
// for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

let nomsA = ["Anna", "Bernat", "Clara"];

for (let value of nomsA) {
  console.log(value);
}

// Exercici 3

let numerosG = [1, 2, 3, 4, 5, 6];

const numParell = numerosG.filter((el) => el % 2 == 0);

console.log(numParell);

// Nivell 2

// Exercici 4

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (let value in obj) {
  console.log(`${value}, ${obj[value]}`);
}

// Exercici 5

let numerosH = [1, 2, 3, 4, 5, 6];

for (let value of numerosH) {
  console.log(value);
  if (value === 5) {
    break;
  }
}

// Nivell 3
// Exercici 6

let nomsIndex = ["Anna", "Bernat", "Clara"];

for (let value of nomsIndex) {
  console.log(value, nomsIndex.indexOf(value));
}

// Exercici 1.7: Promises & Async/Await

// Nivell 1

// Exercici 1
function holaMon() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 2000);
  });
}

console.log(holaMon());

// Exercici 2

function holaMon() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hola, món`);
    }, 2000);
  });
}

holaMon().then((result) => {
  console.log(result);
});

// Exercici 3

function holaMon(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === "Hola") {
        resolve("Palabra correcta");
      } else {
        reject(`La palabra introducida es diferente a "Hola"`);
      }
    }, 2000);
  });
}

holaMon("Hola")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

// Exercici 4

async function imprimirHolaMon() {
  {
    const resultat = await holaMon();
    console.log(resultat);
  }
}

imprimirHolaMon();

// Exercici 5

async function imprimirHolaMon() {
  try {
    const resultat = await holaMon();
    console.log(resultat);
  } catch (error) {
    console.error("Error:", error);
  }
}
imprimirHolaMon();

// Exercici 6
// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hola Promise1");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hola Promise2");
  }, 3000);
});

Promise.all([p1, p2]).then((resolve) => {
  console.log(resolve);
});

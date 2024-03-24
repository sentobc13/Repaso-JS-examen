
// Repaso clase JS 1

//VARIABLES 

//alert ('JavaScript funcionando correctamente');

let variableSinValor;
console.log(variableSinValor);

let booleano1 = true
console.log(booleano1);

let booleano2 = false
console.log(booleano2);

const PI = 3.14
console.log(PI);

const TAU = PI * 2
console.log(TAU);

const miNombre = "Sento"
console.log(miNombre);

const miNumFav = 13
console.log(miNumFav);

let booleano = true

console.log(miNombre.length);

console.log(typeof miNumFav);

console.log("Mi nombre es " + miNombre + " y mi numero fav el " + miNumFav);

let text = "Seré un crack en JS al terminar el bootcamp"
console.log(text.toUpperCase());

let variable = "Hola soy un crack"
console.log(variable.substring(0, 5));

console.log(miNumFav.toString());

let variable1 = "JavaScript"
let variable2 = `Estoy aprendiendo ${variable1}`
console.log(variable2);

console.log(PI.toFixed(2));

// ARRAYS

let arrayVacio = [];
console.log(arrayVacio);

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let arrayPares = [0, 2, 4, 6, 8];
let arrayNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ["hola", "mundo"];

let loGuardoTodo = ["hola", "que", 23, 43.55, "tal"];
console.log(loGuardoTodo);

console.log(loGuardoTodo.length);

loGuardoTodo.push('estás')
console.log(loGuardoTodo);

console.log(loGuardoTodo[1]);

loGuardoTodo.unshift("Euralio");
console.log(loGuardoTodo);

// OBJETOS

let coche = {
    marca: "Volvo",
    modelo: "XC60",
    matricula: "9768 KVB"

};

let casa = {
    codPostal: 46023,
    calle: "Av de Francia",
    portal: 65,
    piso: 11,
};

let fullStackDeveloper = {
    lenguajes: ["JavaScript", "php"],
    proyectos: ["Pagina web", "Carta CSS"],
};

let persona = {
    nombre: "Sento",
    apellido: "Berlanga",
    edad: 24,
};
console.log(persona);

console.log(fullStackDeveloper.lenguajes[0]);

let portatil = {
    marca: "Asus",
    modelo: "Rog Strix",
};
console.log(portatil.marca);
console.log(portatil["modelo"]);

let led = {
    lampara1: "rojo",
    lampara2: "verde",
    lampara3: "azul",
};
let arrayRGB = [led.lampara1, led.lampara2, led.lampara3]
console.log(arrayRGB);

let concierto = {
    grupos: ['Infinity song', 'sakanaction', 'jungle']
};
console.log(concierto.grupos);

const grupo = {
    integrantes: ['Paco', 'Carla', 'Alba', 'Javi'],
};
console.log(grupo.integrantes[1]);

let impresora = {
    tinta: ["rojo","verde","azul"]
};
let nivelesTinta = impresora.tinta
console.log(nivelesTinta);

let movil = {
    especificaciones: ["iPhone","128GB","negro"]
};
console.log(movil["especificaciones"]);

portatil.marca = "MSI";
console.log(portatil.marca);

concierto.grupos.push("Guns N Roses");
console.log(concierto.grupos);

concierto.fecha = "11 de febrero";
console.log(concierto.fecha);
concierto.fecha = new Date();
console.log(concierto.fecha);


grupo.integrantes.pop()
console.log(grupo.integrantes.length);







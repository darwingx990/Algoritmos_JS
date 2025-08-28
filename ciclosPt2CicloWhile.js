// 1. Algoritmo para imprimir números del 1 al 10
let i = 1;
console.log("---- Numeros del 1 al 10 ----");
while (i <= 10) {
    console.log("           Numero " + i);
    i++;
}

// 2. Algoritmo para sumar los primeros 10 números
let number1 = 10;
let iterator = 0;
let totalSuma = 0;
while (iterator <= number1) {
    totalSuma += iterator;
    console.log(totalSuma);
    iterator++;
}
console.log("La suma de los numeros del 1 al 10 es igual a: " + totalSuma);

// 3. Algoritmo para generar la tabla de un numero dado por argumento en una función
function tablaDeMultiplicar(number) {
    console.log("---------------------------------------------");
    console.log("     Tabla de multiplicar del " + number);
    console.log("---------------------------------------------");
    for (let i = 1; i <= 10; i++) {
        console.log("           " + number + " X " + i + " = " + number * i);
    }
}
tablaDeMultiplicar(5);

// 4. Algoritmo para contar ocurrencias de 'a' en un texto
let cantidadDeAs = 0;
let texto = "Mi mamá me mima. Mi mamá me ama. Amo a mamá"
let contador = 0
while (contador < texto.length) {
    if (texto[contador] == "a" || texto[contador] == "A" || texto[contador] == "á") {
        cantidadDeAs++;
        console.log("Se encontró una letra 'a'.");
    }
    contador++
}
console.log("El texto '" + texto + "', tiene un total de " + cantidadDeAs + " letras 'a'.");

// 5. Algoritmo para calcular el factorial de un número






let number = 6;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
    console.log(factorial);
}
console.log("El factorial de " + number + " es " + factorial);

// 6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.
function numerosPares(arrayNumeros) {
    let numerosPares = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 == 0) {
            numerosPares.push(arrayNumeros[i]);
            // console.log(numerosPares);
        }
    }
    console.log("Los numeros pares que hay en el arry son: " + numerosPares);
}
let arrayPares = [2, 35, 66, 12, 53, 9, 78];
numerosPares(arrayPares);

// 7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.



// 8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.
function potenciacion(base, exponente) {
    let potencia = 1;
    for (let i = 0; i < exponente; i++) {
        potencia *= base;
    }
    console.log("El resultado de la portenciacion es: " + potencia);
}

potenciacion(8, 2);

// 9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.
function Fibonacci(numero) {
    let serieFibonacci = [0, 1];
    let resultado = 0;
    let container = 1
    for (let i = 2; i < numero; i++) {
        serieFibonacci[i] = serieFibonacci[i - 1] + serieFibonacci[i - 2]
    }
    console.log("La serie fibonacci del numero " + numero + " es " + serieFibonacci);
}

Fibonacci(9);

// 10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
function totalTablasIterativo(numero, hasta = 10) {
    let total = 0;
    for (let a = 1; a <= numero; a++) {
        for (let b = 1; b <= hasta; b++) {
            total += a * b;
        }
    }
    console.log(total);;
}

totalTablasIterativo(5)
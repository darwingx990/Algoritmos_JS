// 1. Algoritmo para imprimir números del 1 al 10
console.log("---- Numeros del 1 al 10 ----");
for (let i = 1; i < 11; i++) {
    console.log("           Numero " + i);
}

// 2. Algoritmo para sumar los primeros 10 números
let numbers = 0
for (let i = 0; i <= 10; i++) {
    numbers = numbers + i;
}
console.log("La suma de los numeros del 1 al 10 es igual a: " + numbers);

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
for (let i = 0; i <= texto.length; i++) {
    if (texto[i] == "a" || texto[i] == "A" || texto[i] == "á") {
        can | tidadDeAs++;
    }
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



// 10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.


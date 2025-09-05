// e.x. Calcular media aritmetica de un array de numeros
let numeros = [4, 10, 20, 15, 3, 6];
let option = 0;
let suma = 0;
do {
    suma += numeros[option];
    console.log(suma);
    option++;
} while (option < numeros.length);
let mediaAtitmetica = suma / numeros.length
console.log("La media aritmetica del array es " + mediaAtitmetica); 3

// 1. Algoritmo para imprimir números del 1 al 10
function numbersFrom1To10() {
    let i = 1;
    console.log("---- Numero del 1 al 10 ----");
    do {
        console.log("          Numero " + i);

        i++;
    } while (i <= 10)
}

numbersFrom1To10();

// 2. Algoritmo para sumar los primeros 10 números
function sumarNumeros(numero) {
    let i = 0;
    let totalSuma = 0;
    do {
        totalSuma += i;
        i++;
    } while (i <= numero);
    return totalSuma;
}
let numero = 100
console.log("La suma de los numeros del 1 al " + numero + " es igual a: " + sumarNumeros(numero));

// 3. Algoritmo para generar la tabla de un numero dado por argumento en una función
function tablaDeMultiplicar(number) {
    let i = 0;
    console.log("---------------------------------------------");
    console.log("     Tabla de multiplicar del " + number);
    console.log("---------------------------------------------");
    do {
        console.log("           " + number + " X " + i + " = " + number * i);
        i++;
    } while (i <= 10);
}
tablaDeMultiplicar(50);

// 4. Algoritmo para contar ocurrencias de 'a' en un texto
function contarOcurrenciasDeA(texto) {
    let cantidadDeAs = 0;
    let contador = 0
    do {
        if (texto[contador] == "a" || texto[contador] == "A" || texto[contador] == "á") {
            cantidadDeAs++;
            // console.log("Se encontró una letra 'a'.");
        }
        contador++
    } while (contador < texto.length)
    console.log("El texto '" + texto + "', tiene un total de " + cantidadDeAs + " letras 'a'.");
}
let texto = "Mi mamá me mima. Mi mamá me ama. Amo a mamá";
contarOcurrenciasDeA(texto);

// 5. Algoritmo para calcular el factorial de un número
function factorial(number) {
    let contad = 1;
    let factorial = 1;
    do {
        factorial *= contad;
        contad++;
        console.log(factorial);
    } while (contad <= number)
    console.log("El factorial de " + number + " es " + factorial);
}
let number = 6;
factorial(number);


// 6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.
function numerosPares(arrayNumeros) {
    let numerosPares = [];
    let contador = 0;
    do {
        if (arrayNumeros[contador] % 2 == 0) {
            numerosPares.push(arrayNumeros[contador])
        }
        contador++;
    } while (contador < arrayNumeros.length) {
        console.log("Los numeros pares que hay en el arry son: " + numerosPares);
    }
}
let arrayPares = [2, 35, 66, 12, 53, 9, 78];
numerosPares(arrayPares);

// 7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.
function sumaCuadrados(numero) {
    let sumaNumeros = 0;
    let contador = 1;
    do {
        console.log(Math.pow(contador, 2));
        sumaNumeros += contador * contador;
        console.log(sumaNumeros + " + ");
        contador++;
    }
    while (contador <= numero)
    console.log("La suma de los numeros al cuadrado del 1 al " + numero + " es de " + sumaNumeros);
}
sumaCuadrados(6);

// 8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.
function potenciacion(base, exponente) {
    let potencia = 1;
    let i = 1;
    while (i <= exponente) {
        potencia *= base;
        i++;
    }
    console.log("El resultado de la portenciacion es: " + potencia);
}

potenciacion(2, 8);

// 9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.
function Fibonacci(numero) {
    let serieFibonacci = [0, 1];
    let i = 2;
    while (i < numero) {
        serieFibonacci[i] = serieFibonacci[i - 1] + serieFibonacci[i - 2]
        i++;
    }
    console.log("La serie fibonacci del numero " + numero + " es " + serieFibonacci);
}

Fibonacci(9);

// 10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
function totalTablasIterativo(numero, hasta = 10) {
    let total = 0;
    let i = 1;
    let cont = 1;
    while (i <= numero) {
        while (cont <= hasta) {
            total += i * cont;
            cont++;
        }
        i++
    }
    console.log("El total de tablas de multiplicar del " + numero + " hasta el " + hasta + " es de " + total);;
}

totalTablasIterativo(5)
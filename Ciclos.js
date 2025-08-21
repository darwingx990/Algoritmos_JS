/* let nombre = ["Darwing", "David", "Gabriel", "Henry", "Ayda", "Luz", "Vanessa", "Yuseth", "Dayan", "Joseth", "Ana", "Ninfa", "Melania", "Julio", "Cesar"];
let nombresPares = [];
for (let i = 0; i <= nombre.length; i++) {
    if (i % 2 == 0) {
        nombresPares.push(nombre[i]);
        console.log("El nombre del estudiante es: " + i + ". " + nombre[i]);
    }
}

for (let i = 0; i < nombresPares.length; i++){
    console.log(i + ". " + nombresPares[i]);
} */

/* let fullName = "Darwing David Mosquera Andrade";
let lettersA = 0;

for (let i = 0; i < fullName.length; i++) {
    if (fullName[i].toLowerCase() == "a") {
        lettersA++;
    };
}
console.log(lettersA); */7

// **** Tablas de multiplicar ****

/* function tablasDeMultiplicar(number) {
    console.log("------------------------------------");
    console.log("Tabla de Multiplicar del " + number);
    console.log("------------------------------------");
    for (i = 0; i <= 12; i++) {
        console.log(number + " X " + i + " = " + i * number);
    };
}

tablasDeMultiplicar(3); */

function tablasDeMultiplicar(number) {
    for (let i = 1; i <= number; i++) {
        console.log("------------------------------------");
        console.log("Tabla de Multiplicar del " + i);
        console.log("------------------------------------");
        for (let x = 1; x <= 10; x++) {
            console.log(i + " X " + x + " = " + i * x);
        }
    }
}

tablasDeMultiplicar(3);
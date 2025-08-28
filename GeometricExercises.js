// 1.Calcula el área de un círculo dado su radio
let radio = 20;
const pi = Math.PI;
let areaCirculo = pi * (Math.pow(radio, 2));
console.log("El area del circulo es: " + areaCirculo);

// 2.Encuentra la hipotenusa de un triángulo rectángulo
let lado1 = 10;
let lado2 = 20;
let hipotenusa = Math.sqrt((Math.pow(lado1, 2)) + Math.pow(lado2, 2))
console.log("La hipotenusa tiene un valor de " + hipotenusa + "CM.");

// 3.Convierte grados a radianes
let grados = 70;
radianes = (grados * Math.PI) / 180;
console.log(grados + " grados equivalen a " + radianes + " radianes.");

// 4.Calcula seno y coseno de un ángulo en grados
let angulo = (90 * Math.PI) / 180;
let seno = Math.sin(angulo);
let coseno = Math.cos(angulo);
console.log("El Seno del angulo es " + seno);
console.log("EL coseno del angulo es " + coseno);

// 5.Calcula la distancia recorrida por un objeto en caída libre. h = 1/2*g*t^2
let gravedad = 9.8;
let tiempo = 3;
let distancia = 0.5 * gravedad * tiempo * tiempo;
console.log("La distancia recorrida del objeto X en caida libre es de: " + distancia + " metros");

// 6.Calcula el volumen de una esfera - (V = 4/3* PI * radio^2).
let radioEsfera = 15;
let volumen = 4 / 3 * Math.PI * Math.pow(radioEsfera, 2);
console.log("El volumen de la esfera es de: " + volumen + " CM.");

// 7.Encuentra la distancia entre dos puntos en el plano
function calcularDistancia(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distancia = Math.sqrt(dx * dx + dy * dy);
    return distancia;
}

let puntoA_x = 1;
let puntoA_y = 2;
let puntoB_x = 4;
let puntoB_y = 6;

let resultado = calcularDistancia(puntoA_x, puntoA_y, puntoB_x, puntoB_y);

console.log("La distancia entre los dos puntos en el plano cartesiano es de: " + resultado + " CM.");

// 8.Calcula la energía cinética de un objeto
let masa = 15;
let velocidad = 3;
let energiaCinetica = 1 / 2 * masa * Math.pow(velocidad, 2);
console.log("La energia Cinética del objeto es de " + energiaCinetica);

// 9.Calcula el área de un rectángulo conociendo su diagonal y un lado
let diagonal = 21;
let lado = 14;
let altura = Math.sqrt(Math.pow(diagonal, 2) - Math.pow(lado, 2))
console.log(altura);
let areaRectangulo = lado * altura;
console.log("El area del rectangulo es de: " + areaRectangulo + " metros.");

// 10.Calcula el área de un triángulo conociendo sus tres lados (formula de Heron)
let base = 20;
let alturaTriangulo = 12;
let areaTriangulo = (base * alturaTriangulo) / 2;
console.log("El area del triangulo es de " + areaTriangulo + " metros.");
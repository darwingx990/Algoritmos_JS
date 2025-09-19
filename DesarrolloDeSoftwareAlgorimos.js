// Definir IVA dinámico (porcentaje)
let iva = 19;

// Array de 10 productos 
let productos = [
    { nombre: "Altavoz inteligente . Alexa", precio: 50000 },
    { nombre: "Camara de acción - DJI Osmo Action 4", precio: 750000 },
    { nombre: "Tablet - iPad Pro", precio: 100000 },
    { nombre: "Auriculares inalámbricos - AirPods Pro", precio: 120000 },
    { nombre: "Consola de videojuegos - PlayStation 5", precio: 3580000 },
    { nombre: "iPhone 15 Pro", precio: 2150000 },
    { nombre: "MacBook Air M2 16GB RAM 512GB ROM", precio: 1900000 },
    { nombre: "Apple Watch Series", precio: 410000 },
    { nombre: "Samsung Galaxy Watch 6", precio: 513000 },
    { nombre: "Nintendo Switch OLED", precio: 950000 }
];

// Función para calcular subtotal (precio + IVA)
function calcularSubtotal(precio, iva) {
    if (typeof precio !== 'number' || typeof iva !== 'number') {
        return "El precio e IVA deben ser números";
    }
    return precio + (precio * iva / 100);
}

// Función para calcular la suma total de todos los subtotals
function calcularTotal(productos, iva) {
    let total = 0;
    for (let producto of productos) {
        total += calcularSubtotal(producto.precio, iva);
    }
    return total;
}

// Función para calcular el promedio de los precios
function calcularPromedio(productos) {
    let sumaPrecios = 0;
    for (let producto of productos) {
        sumaPrecios += producto.precio;
    }
    return sumaPrecios / productos.length;
}

// Función para verificar y mostrar mensaje sobre retención en la fuente
function verificarRetencion(promedio) {
    if (promedio > 1000000) {
        console.log("Advertencia: Hay que aplicar retención en la fuente.");
    } else {
        console.log("No es necesario aplicar retención en la fuente.");
    }
}

// Codigo para llamar las Funciones
console.log("IVA aplicado:", iva + "%");
console.log("Lista de productos:");
productos.forEach(producto => {
    console.log(`${producto.nombre}: $${producto.precio} - Subtotal: $${calcularSubtotal(producto.precio, iva).toFixed(2)}`);
});

let total = calcularTotal(productos, iva);
console.log("Suma total con IVA:", total.toFixed(2));

let promedio = calcularPromedio(productos);
console.log("Promedio de precios:", promedio.toFixed(2));

verificarRetencion(promedio);

// Juegos disponibles en inventario
const juegosDisponibles = ["The Legend of Zelda: Breath of the Wild", "Super Mario Odyssey", "Animal Crossing: New Horizons", "Minecraft", "Fortnite"];

// Precios de los videojuegos
const precios = [59.99, 49.99, 39.99, 26.95, 0.00];

// Array con mezcla de tipos de datos
const mezcla = ["Hola mundo", 42, true, null, "Ejemplo", 10, false, "Final"];

// Crear una matriz vacía con una longitud inicial de 3
const matrizVacia = new Array(3);

// Asignar valores a la matriz vacía
matrizVacia[3] = "Primer elemento manual";
matrizVacia[4] = 100;

console.log(matrizVacia);

// Acceder a elementos específicos
console.log(juegosDisponibles.length)
console.log(juegosDisponibles[2])

//Cambiar el segundo videojuego de juegosDisponibles 
juegosDisponibles[1] = "Super Mario Galaxy";
console.log(juegosDisponibles);

// Cambiar el precio del quinto videojuego
precios[4] = 19.99;
console.log(precios);

// Agregar un nuevo videojuego al final del inventario

juegosDisponibles.push("Cyberpunk 2077");

// agregar un nuevo videojuego al inicio del inventario
juegosDisponibles.unshift("Elden Ring");

// Eliminar el último videojuego del inventario
juegosDisponibles.pop();

// Eliminar el primer videojuego del inventario
juegosDisponibles.shift();

console.log(juegosDisponibles);

// mostrar cada precio con ciclo for
for (let i = 0; i < precios.length; i++) {
    console.log(`El precio del videojuego ${i + 1} es $${precios[i]}`);
}

// Mostrar cada precio  con for...of
for (const precio of precios) {
    console.log(`Precio del videojuego: $${precio}`);
}

// Mostrar cada precio con for each
precios.forEach((precio, index) => {
    console.log(`El precio del videojuego ${index + 1} es $${precio}`);
});

// Nueva Matriz

const juegos = [
    { Nombre: "Zelda", Precio: 60, Genero: "Aventura", stock: 10 },
    { Nombre: "Mario Kart", Precio: 50, Genero: "Carreras", stock: 3 },
    { Nombre: "Dark Souls", Precio: 40, Genero: "RPG", stock: 0 },
    { Nombre: "Fifa", Precio: 70, Genero: "Deportes", stock: 12 },
    { Nombre: "Halo", Precio: 55, Genero: "Shooter", stock: 5 }
];

// indexOf y includes para verificar si cierto tulo está en la lista de nombres.

const indiceJuego = juegos.findIndex(juego => juego.Nombre === "Mario Kart");
console.log(indiceJuego);

// find para obtener el primer juego agotado. 
const juegoAgotado = juegos.find(juego => juego.stock === 0);
console.log(juegoAgotado.Nombre);

// findIndex para obtener la posición del primer juego con precio mayor a 60

const precioAlto = juegos.findIndex(juego => juego.Precio > 60);
console.log(precioAlto);

//  filter para obtener solo los juegos con stock mayor a 5

const stockAlto = juegos.filter(juego => juego.stock > 5);
console.log(stockAlto);

// Crear una matriz con todos los precios conver dos a dólares (tasa 0.13). 

const preciosDolares = juegos.map(juego => {
    return {
        ...juego,
        Precio: (juego.Precio * 0.13).toFixed(2)
    };
});

console.log(preciosDolares);

// Crear una matriz con solo los nombres en mayúsculas. 

const nombresMayusculas = juegos.map(juego => juego.Nombre.toUpperCase());
console.log(nombresMayusculas);

// Calcular el total del inventario en dólares usando reduce. 

const totalInventario = preciosDolares.reduce((total, juego) => {
    const precioFinal = parseFloat(juego.Precio); 
    return total + (precioFinal * juego.stock);
}, 0); 

console.log(`Total del inventario en dólares: $${totalInventario.toFixed(2)}`);

// sort() para ordenar nombres alfabeticamente

const ordenAlfabetico = juegos.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
console.log(ordenAlfabetico);

// Ordenar precios de menor a mayor.

const ordenPrecios = juegos.sort((a, b) => a.Precio - b.Precio);
console.log(ordenPrecios);

// Ordenar objetos por: precio ascendente y por género alfabético usando localeCompare 

const ordenDoble = juegos.sort((a, b) => {
    const comparacionPrecio = a.Precio - b.Precio;
    if (comparacionPrecio !== 0) {
        return comparacionPrecio;
    }
    return a.Genero.localeCompare(b.Genero);
});

console.log(ordenDoble);

//  Ordenar por múltiples criterios: 1. Primero por género 2. Si coinciden, por precio 

const ordenMultiple = juegos.sort((a, b) => {
    const generoComparacion = a.Genero.localeCompare(b.Genero);
    if (generoComparacion !== 0) {
        return generoComparacion;
    } else {
        return a.Precio - b.Precio;
    }
});

console.log(ordenMultiple);

// Arrays multidimensionales - Estructura por plataforma 

const plataformas = [
    ["PC", "Steam", "Epic Games", "Ubisoft Connect"],
    ["Nintendo", "Switch"],
    ["Xbox", "Series X", "Game Pass"],
    ["PlayStation", "PS4", "PS5"]
];

// Mostrar cada plataforma con doble for ... of 

console.log("--- Plataformas Individuales ---");

for (const grupo of plataformas) {
    for (const elemento of grupo) {
        console.log(elemento);
    }
    console.log("---");
}

// Acceder específicamente a "Game Pass" 

console.log(plataformas[2][2]);

// Convertir la matriz en un solo array plano usando flat() 

const plataformasFlat = plataformas.flat();
console.log(plataformasFlat);

// Ejercicio final — Análisis completo de ventas 

// Array ventas

const ventas = [
    { titulo: "Zelda", unidades: 120, precio: 60 },
    { titulo: "Mario Kart", unidades: 200, precio: 50 },
    { titulo: "Halo", unidades: 80, precio: 55 },
    { titulo: "Fifa", unidades: 150, precio: 70 },
];

// Total de ingresos por videojuego (unidades x precio) 

const ingresosPorJuego = ventas.map(venta => {
    return {
        titulo: venta.titulo,
        ingresos: venta.unidades * venta.precio
    };
});

console.log(ingresosPorJuego);

// Top 3 juegos más vendidos usando sort() 

const topJuegos = [...ventas].sort((a, b) => b.unidades - a.unidades).slice(0, 3);
console.log(topJuegos);

// Total global de ingresos con reduce() 

const totalIngresos = ventas.reduce((total, venta) => {
    return total + (venta.unidades * venta.precio);
}, 0);

console.log(`Total global de ingresos: $${totalIngresos}`);

// Una lista única de todos los tulos vendidos usando new Set() 

const titulosVendidos = [...new Set(ventas.map(venta => venta.titulo))];
console.log(titulosVendidos);

// Un reporte mostrado en la terminal, como este: 
// Reporte de Ventas: 
// Zelda -> Q7200 
// Mario Kart -> Q10000 
// Halo -> Q4400 
// FIFA -> Q10500 
// Total global: Q32100 
// Top 3: Mario Kart, FIFA, Zelda 

console.log("Reporte de Ventas:");
ingresosPorJuego.forEach(juego => {
    console.log(`${juego.titulo} -> $${juego.ingresos}`);
});
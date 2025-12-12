# README -- Gestión de Inventario y Análisis en JavaScript

Este proyecto contiene ejemplos prácticos de manipulación de arrays,
objetos, ordenamiento, filtrado y análisis de datos utilizando
JavaScript, aplicados a un inventario de videojuegos y a un sistema
simple de ventas.

## Contenido del código

### Arrays iniciales

-   juegosDisponibles: Lista de videojuegos.
-   precios: Lista de precios.
-   mezcla: Array con varios tipos de datos.
-   matrizVacia: Matriz creada con new Array() y valores asignados
    posteriormente.

## Operaciones principales

### Acceso y modificación

-   Lectura de elementos por índice.
-   Obtención de longitud de un array.
-   Modificación de elementos del inventario.
-   Actualización de precios específicos.

### Agregar y eliminar elementos

-   push para agregar al final.
-   unshift para agregar al inicio.
-   pop para eliminar el último elemento.
-   shift para eliminar el primero.

## Recorridos de arrays

### For tradicional

Recorrido secuencial usando índices.

### for...of

Iteración directa sobre valores.

### forEach

Iteración con callback que permite acceder a valor e índice.

## Matriz de objetos

La matriz juegos contiene objetos con la estructura:

Nombre, Precio, Genero, stock

# Métodos Aplicados

## findIndex

Obtiene la posición del primer elemento que cumpla una condición.

## find

Devuelve el primer objeto que cumpla una condición.

## filter

Crea un nuevo arreglo filtrando elementos.

## map

Genera nuevos arreglos transformando elementos.

## reduce

Acumula valores para producir un resultado total.

# Ordenamiento

## Orden por nombre

Uso de localeCompare para ordenar alfabéticamente.

## Orden por precio

Orden ascendente según Precio.

## Orden múltiple

Primero por precio y luego por género.

# Arrays multidimensionales

Incluye estructura con plataformas y recorrido doble, además de
conversión con flat.

# Análisis de ventas

Incluye: - ingresos por videojuego - top 3 - total global - títulos
únicos - reporte en consola

# Ejecución

node index.js

# Propósito

Práctica integral del uso de arrays, objetos y análisis de datos en
JavaScript.

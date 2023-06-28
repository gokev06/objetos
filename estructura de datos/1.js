/*
1. Cree un objeto donde se almacenen los productos de un supermercado con su
 respectivo precio. Los productos son:
Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados 
en el objeto anterior con su respectivo producto.
*/

let almacenar = {papa:"1.000/libra", arroz:"3.000/libra", lentejas:"3.500/libra" , aceite:"10.000"}

for (index in almacenar){
    console.log("producto:",index);
    console.log("valor:", almacenar[index]);
    console.log("---------------------------");
}
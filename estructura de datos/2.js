/*
2. Cree un objeto vacío, p.e. let objeto = {} y agregue tres pares clave-valor. 
Imprima todo el objeto para verificar que se han agregado las nuevos pares clave-valor
*/

let objeto = {}

objeto.clave1 = "valor1";
objeto.clave2 = "valor2";
objeto.clave3 = "valor3";

for (index in objeto){
    console.log(index, objeto[index]);
}


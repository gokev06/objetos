/*
8. Dado el objeto {
162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
}
Use dos ciclos for-in para recorrer los objetos más internos y mostrar sus llaves y valores
*/

let objeto ={
    162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
    4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
    786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
    }
for (key1 in objeto) {
      let valor=objeto[key1]
    for (key2 in objeto[key1]) {
        console.log(key2, valor[key2]);
        
    }
      console.log("--------------------");
}    
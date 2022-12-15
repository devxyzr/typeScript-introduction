
// Motor de inferencia vs forma explicita

// Tipos inferidos en TypeScript, el propio vscode infiere el tipo. Tamabien se puede hacer de manera explicitamente

let myProductName = "Producto 1"
let myProductPrice = 777

// Como estamos utilizado let, podemos re asignar el valor de la variable, pero debe ser del mismo tipo.

myProductName = "Producto 0"

// Permite autocompletar codigo de manera mas eficiente


myProductName.toLocaleLowerCase()
myProductPrice.toFixed()

// Como se esta utilizando Const, no se puede reasignar ni el valor ni el tipo.

const myProductStock = 1000
myProductStock = 200

const myProductName2 = "Producto x"
myProductName2 = "x"

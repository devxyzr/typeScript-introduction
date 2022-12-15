

// Error cuando utilizamos las misma variables en distintos archivos. Para que esto no suceda utilizamos un funcion anonima autoejecutada.

(() => {
  let myProductPrice = 777
  let myProductName = "Producto 1"
})();



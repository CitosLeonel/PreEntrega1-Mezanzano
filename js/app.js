/* SIMULADOR CARRITO DE COMPRAS */

let carrito = [];

while (true) {
  let opcion = prompt('Ingrese una opción:\n\n- Salir\n- Agregar producto\n- Ver carrito');

  if (opcion === 'Salir') {
    break;
  }

  switch (opcion) {
    case 'Agregar producto':
      let producto = prompt('Ingrese el nombre del producto');
      carrito.push(producto);
      alert(`El producto "${producto}" ha sido agregado al carrito.`);
      break;

    case 'Ver carrito':
      if (carrito.length === 0) {
        alert('El carrito está vacío.');
      } else {
        alert('Productos en el carrito:');
        for (let i = 0; i < carrito.length; i++) {
          alert(`${i + 1}. ${carrito[i]}`);
        }
      }
      break;

    default:
      alert('La opción ingresada no es válida.');
      break;
  }
}

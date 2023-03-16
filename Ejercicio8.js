/*La cajera de un super mercado necesita implementar un algoritmo que le imprima en pantalla el 
precio con descuento de un producto, Si el precio del producto es 100 y el porcentaje de descuento es 20,
el precio del producto con descuento es 80. El programa debe imprimir en pantalla: su producto tiene un precio 
de 80, el descuento fue del 20%*/
let precio = 100;
let descuento = 20;
let nuevoPrecio = precio * (100-descuento)/100;
console.log ("Su producto tiene un precio de " + nuevoPrecio + ", el descuento fue del " + descuento + "%");

/*
var numero1 = 10;
var numero2 = 5;
var resultado = numero1*numero2;

console.log(resultado);

console.log("hola Mundo");

var nombre = 'Luis Gabriel Samudio';
var profesion = " Desarrollador Full Stack"

console.log(nombre+profesion);

var tiene_mascota = true;
console.log(tiene_mascota);

var datos = ["juan",26,false,25,78,"Desarrollador"]
console.log(datos[0]);
console.log(datos[2]);

var edad = 41

if(edad>=18 && edad<=40){
	console.log("eres un adulto joven");
}else{
	console.log("No eres adulto joven");
}

var dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

for(var i=0;i<7;i++){
	console.log(dias[i]);
}
*/
/*
function suma(numero1,numero2){
	var resultado = numero1+numero2;
	return resultado;// body...
}

var res = suma(88,55);
console.log(res);
*/
/*
Hacer una funcion que entregue el IVA de un producto.
*/
function iva(precio_producto){
	var iva_producto = precio_producto* 0.19;
	return iva_producto;
}

var resultado= iva(67000)
console.log(resultado);

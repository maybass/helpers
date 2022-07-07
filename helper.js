const hbs = require('hbs')

//                 nombre funcion 
hbs.registerHelper('descuento', function (numero) {
	return numero -10
	
	
})



hbs.registerHelper('mayusculas' , function (texto) {
	return texto.toUpperCase()
	
})
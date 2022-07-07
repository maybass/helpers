const express = require('express')
const app = express()
const hbs = require('hbs')


app.set('view engine' , 'hbs');

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

require('./views/helper/helper')

//registrar parciales {{ > }}

hbs.registerPartials(__dirname + '/views/partials')


app.get('/' , (req,res) => {
	res.render('index', {
		titulo : 'mi pagina web',
		persona : {
			nombre: 'John',
			edad: 23
			
		},
		promocion : true,
		texto: 'Este producto esta en promocion',
		
		descuento : {
			activo : true,
			leyenda : 'el descuento esta activo'
			
			
		},
		talle : {
			hay : false,
			leyendaPositiva : 'hay talle'
		},
		
		productos : {
			disponibilidad: true,
			compu : 'novax',
			cpu:'ctrl',
			mouse:'origin'
			
			
		},
		
		remeras : [
			'rojas',
			'azules',
			'amarillas'
		
		
		
		
		] , 
		
		
		computadoras : [
		
		
		{
			item: 'Dell',
			precio : 499
			
			
		}, 
		{
			item : 'Packard',
			precio : 899
			
			
		},
		{
			item :' windows',
			precio :1009
			
			
			
		}
		
		
		
		
		]
	})
	
})


app.get ('/productos', (req, res) => {

res.render('productos', {

	titulo: 'Productos',
	computadoras : [
		
		
		{
			item: 'Dell',
			precio : 499,
			hayStock: true,
			cantidad : 40
			
			
		}, 
		{
			item : 'Packard',
			precio : 899,
			hayStock:false,
			cantidad : 0
			
			
		},
		{
			item :' windows',
			precio :1009,
			hayStock: true,
			cantidad : 100
			
			
			
		}
		
		
		
		
		]
	
})

})


hbs.registerHelper('status' , function (nota) {
	if(nota>=6) {
		return 'Aprobo';
	}else {
		return 'No aprobo';
	}
	
})

app.get('/notas' , (req,res)=> {
	res.render('notas', {
		titulo: 'NOTAS',
		estudiantes : [
		{
			nombre: 'Pedro',
			nota: 7
			
		},
		{
			nombre: 'paula',
			nota: 5
			
			
		}
		
		
		
		]
		
		
	})
	
	
})



app.listen(3000, ()=> {
	console.log('servidor ok');
	
})
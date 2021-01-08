var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '3148719225',
   database: 'tienda_online',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});


//insertar
var query = connection.query('INSERT INTO cliente(nombre, apellido, direccion, num_cedula, correo, pais) VALUES(?, ?, ?,?,?,?)', ['ivan', 'sanchez', 'carrera 65',1007784299,'sanchez@gmail.com','colombia'], function(error, result){
    if(error){
       throw error;
    }else{
       console.log(result);
    }
  }
 );



 //seleccionar


 var query = connection.query('SELECT * FROM cliente WHERE cliente_id = ?', [1], function(error, result){
    if(error){
       throw error;
    }else{
       var resultado = result;
       if(resultado.length > 0){
          console.log(resultado[0].nombre + ' ' + resultado[0].apellido + ' / ' + resultado[0].direccion);
       }else{
          console.log('Registro no encontrado');
       }
    }       
 }
);
connection.end();
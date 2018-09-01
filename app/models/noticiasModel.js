
// function Noticias(){


// }
// Noticias.prototype.getNoticias= function (connection, callback){
//     connection.query("SELECT * FROM noticias", callback);
//   }

// Noticias.prototype.getNoticia= function(connection, callback){
//   	connection.query("SELECT * FROM noticias where id=1", callback);
//   }

// Noticias.prototype.salvarNoticia= function(noticia, connection, callback){
//   connection.query('insert into noticias set ?', noticia, callback); //o  modulo mysql pega o json trasforma em string e armazena 
//   }

// module.exports= function(){



// return Noticias;
// }

function Noticias(connection){
 this._connection= connection; //indica que e  um atributo de classe

}
Noticias.prototype.getNoticias= function (callback){
    this._connection.query("SELECT * FROM noticias", callback);
  }

Noticias.prototype.getNoticia= function(callback){
  	this._connection.query("SELECT * FROM noticias where id=1", callback);
  }

Noticias.prototype.salvarNoticia= function(noticia,callback){
  this._connection.query('insert into noticias set ?', noticia, callback); //o  modulo mysql pega o json trasforma em string e armazena 
  }

module.exports= function(){



return Noticias;
}
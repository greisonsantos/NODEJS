module.exports= function(){


  this.getNoticias= function (connection, callback){
    connection.query("SELECT * FROM noticias", callback);
  }

  this.getNoticia= function(connection, callback){
  	connection.query("SELECT * FROM noticias where id=1", callback);
  }

  this.salvarNoticia= function(noticia, connection, callback){
  connection.query('insert into noticias set ?', noticia, callback); //o  modulo mysql pega o json trasforma em string e armazena 
  }

return this;
}
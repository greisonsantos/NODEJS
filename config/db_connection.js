var mysql = require('mysql');


//e retornado um variavel que contem uma função com a conexão
//assim a conexão não e estabelecida somente por iniciar o serviço
 var conMysql= function(){
    console.log('Conexao com o bd foi estabelecida');
	return  mysql.createConnection({

            host: 'localhost',
            user: 'greison',
            password: '160597',
            database: 'portal_noticias'
  });
}
module.exports= function(){
	console.log('O autoload carregou o módulo de conexão com o bd');
	return conMysql;
}
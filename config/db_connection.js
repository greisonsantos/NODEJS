var mysql = require('mysql');

module.exports= function(){
	return  mysql.createConnection({

            host: 'localhost',
            user: 'greison',
            password: '160597',
            database: 'portal_noticias'
  });
}
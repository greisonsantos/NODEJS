var http= require('http'); //incorpora biblioteca http no script

//http.createServe(functionn(req, res){   //sobe um servidor

//   res.end("<html><body>POrtal de noticias </body> </html>");    //resposta da requisição geralmente arquivos html
//}).listen(3000); 


//tratanto requisições da url
 var server = http.createServer(function(req, res){   //sobe um servidor

var categoria= req.url;

if (categoria=='/tecnologia'){

	    res.end("<html><body>Noticias de Tecnologias</body> </html>");    //resposta da requisição geralmente arquivos html

}else if(categoria=='/moda'){
	   res.end("<html><body>Noticias de Moda</body> </html>");    //resposta da requisição geralmente arquivos html

}else if(categoria=='/beleza'){
	      res.end("<html><body>Noticias de Beleza </body> </html>");    //resposta da requisição geralmente arquivos html
}else{
	   res.end("<html><body>Portal de notícias 1 </body> </html>");    //resposta da requisição geralmente arquivos html

}
 
}).listen(3000);
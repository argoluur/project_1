const http = require("http");
const dateEt = require("./src/dateTimeET");
const pageHead = '<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>Argo Luur</title><head><body>'
const pageBody = '<hr><h1>Argo</h1><h2>Olen Argo! Õpin <a href="https://www.tlu.ee">Tallinna Ülikoolis</a></h2><hr><p>Lisasin kodust läbi tunneli teksti enda leheküljele!!<p><p><a href="https://greeny.cs.tlu.ee/~argoluur/">tagasi</a></p>'
const pageFoot = '</body></html>'


http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write(pageHead);
	res.write(pageBody);
	res.write("<p>Täna on " + dateEt.fullDate() + ".</p>");
	res.write(pageFoot);
	return res.end();
	
}).listen(5115);

//<ol>
//	<li>vanasõna</li>
//	<li>vanasõna</li>
//	<li>vanasõna</li>
//</ol>
const http = require("http");
const dateEt = require("./src/dateTimeET");
const pageHead = '<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>Argo Luur</title><head><body>'
const pageBody = '<hr><h1>Argo</h1><h2>Olen Argo! Õpin <a href="https://www.tlu.ee">Tallinna Ülikoolis</a></h2><hr><p>Lisasin kodust läbi tunneli teksti enda leheküljele!!<p><p><a href="https://greeny.cs.tlu.ee/~argoluur/">tagasi</a></p>'
const pageFoot = '</body></html>'

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	fs.readFile(textRef, "utf8", (err, data)=>{
		if(err){
			res.write(pageHead);
			res.write(pageBody);
			res.write("\n\t<p>Täna on " + dateEt.weekDay() + " " + dateEt.fullDate() + ".</p><p>Kahjuks tänaseks ühtki vanasõna välja pakkuda pole!</p>");
			res.write(pageFoot);
			return res.end();
		} else {
			let folkWisdom = data.split(";");
			let folkWisdomOutput = "\n\t<ol>";
			for (let i = 0; i < folkWisdom.length; i ++){
				folkWisdomOutput += "\n\t\t<li>" + folkWisdom[i] + "</li>";
			}
			folkWisdomOutput += "\n\t</ol>";
			res.write(pageHead);
			res.write(pageBody);
			res.write("\n\t<p>Täna on " + dateEt.weekDay() + " " + dateEt.fullDate() + ".</p>");
			res.write("\n\t<h2>Valik Eesti vanasõnu</h2>")
			res.write(folkWisdomOutput);
			res.write(pageFoot);
			return res.end();
		}
	});
}).listen(5115);
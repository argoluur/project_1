const http = require("http");
const fs = require("fs");
//url haldamise moodul
const url = require("url");
//failitee haldamise moodul
const path = require("path");
const dateEt = require("./src/dateTimeET");
const textRef = "txt/vanasonad.txt";
const pageHead = '<!DOCTYPE html><html lang="et"><head><meta charset="utf-8"><title>Argo Luur</title><head><body>'
const pageBanner = '<img src="/vp_banner.jpg" alt="kursuse bänner">'
const pageBody = '<hr><h1>Argo Luur</h1><h2>normaljok! Õpin <a href="https://www.tlu.ee">Tallinna Ülikoolis</a></h2><hr> <p>Lisasin kodust läbi tunneli teksti enda leheküljele!!<p> <p><a href="https://greeny.cs.tlu.ee/~argoluur/">Tagasi kausta</a></p> <p><a href="http://greeny.cs.tlu.ee:5115">Tagasi esilehele</a></p>'
const pageLink = '\n\t\<p><a href="/vanasonad">Vanasõnad</a></p>'
const pageFoot = '</body></html>'

//http://greeny.cs.tlu.ee:5115/
http.createServer(function(req, res){
	//parsin URL-i
	console.log("Päring: " + req.url);
	let currentUrl = url.parse(req.url, true);
	console.log("Parsituna: " + currentUrl.pathname);
	
	if(currentUrl.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write(pageLink);
		res.write(pageFoot);
		return res.end();
	}
	
	else if(currentUrl.pathname === "/vanasonad"){
		res.writeHead(200, {"Content-type": "text/html"});
		fs.readFile(textRef, "utf8", (err, data)=>{
			if(err){
				res.write(pageHead);
				res.write(pageBanner);
				res.write(pageBody);

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
				res.write(pageBanner);
				res.write(pageBody);

				res.write("\n\t<h2>Valik Eesti vanasõnu</h2>")
				res.write(folkWisdomOutput);
				res.write(pageFoot);
				return res.end();
			}
		});	
	}
	
	else if(currentUrl.pathname === "/vp_banner.jpg"){
		//liidame kättesaamatu piltide kausta meie veebi failiteega
		let bannerPath = path.join(__dirname, "images")
		fs.readFile(bannerPath + currentUrl.pathname, (err, data)=>{
			if(err){
				throw(err);
			} else {
				res.writeHead(200, {"Content-type": "image/jpeg"});
				res.end(data);
			}
		});
		
	}
	
	else {
		res.end("Viga 404, ei leia sellist lehte")
	}
	
}).listen(5115);
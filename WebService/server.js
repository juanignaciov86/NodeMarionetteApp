var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	// Let's scrape Anchorman 2
	var url = 'http://www.imdb.com/title/tt1229340/';

	url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;
	var json = { degrees : "", type : "Fahrenheit", url : url};

	request(url, function (error, response, body) {
	  if (!error) {
	    var $ = cheerio.load(body),

			temperature = $("[data-variable='temperature'] .wx-value").html();

			json.degrees = temperature;

			fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
						console.log('File successfully written! - Check your project directory for the output.json file');
			});

	    console.log("It’s " + temperature + " degrees Fahrenheit.");

			res.send(json);
	  } else {
	    console.log("We’ve encountered an error: " + error);
	  }
	});

});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;

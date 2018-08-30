const dgt = require('./dgt.js');
const request = require('request');
const queryString = require('query-string');
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');

const fields = ['PK', 'alias', 'carretera', 'codEle', 'estado', 'lat', 'lng', 'sentido', 'tipo'];
const opts = { fields };

dgt.params.Camaras = true;

const stringified = queryString.stringify(dgt.params);

request(`${dgt.urlBase}?${stringified}`, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  if(!error){
      let csv;
      try {
          const response = JSON.parse(body);
          const parser = new Json2csvParser(opts);
          csv = parser.parse(response);
          //console.log(csv);
        } catch (err) {
          console.error(err);
        }

      fs.writeFile("cameras.csv", csv, function(err) {
          if(err) {
              return console.log(err);
          }

          console.log("The file was saved!");
      });
  }
});

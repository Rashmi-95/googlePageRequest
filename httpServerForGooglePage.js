let http = require('http');
let axios = require('axios');
const getGoogle = () => axios.get(`https://www.google.com`);

let server = http.createServer(function (request, res) {
  getGoogle()
    .then(function (response) {
      res.end(response.data);
    })
    .catch(function (response) {
      res.end(response);
    });

});
server.listen(3002);
console.log("Server is listening");
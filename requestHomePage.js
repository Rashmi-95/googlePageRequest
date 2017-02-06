let axios = require('axios');
//let url = process.argv[2];
let url = `https://www.google.com`
const getGoogle = () => axios.get(url);

getGoogle()
  .then(function(response){
    console.log(response.data);
  })
  .catch(function(response){
    console.log(response);
  });

module.exports = getGoogle
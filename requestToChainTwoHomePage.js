let axios = require('axios');
//let url = process.argv[2];
let url =``
const getGoogle = () => axios.get(`https://www.google.com/`);

getGoogle()
  .then(function(response){
    console.log(response.statusText);
    const getFacebook = () => axios.get(`https://wwww.facebook.com/`);
    return getFacebook();
})
  .then(function(response){
    console.log(response.statusText);
  })
  .catch(function(response){
  console.log(response+``);
  });

module.exports = getGoogle
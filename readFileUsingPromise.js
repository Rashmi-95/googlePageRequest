let fs = require('fs')
let path = require('path')
let fileName = './readdme.txt'

const fileReadPromise = new Promise(function (resolve, reject) {
  fs.readFile(fileName, function doneReading (error, fileContents) {
    if (error) {
      reject(error)
    } else {
      // console.log(fileContents.toString());
      resolve(fileContents)
    }
  })
})
  .then(function (response) {
    console.log(response.toString())
  })
  .catch(function (response) {
    console.log(response.code)
  })

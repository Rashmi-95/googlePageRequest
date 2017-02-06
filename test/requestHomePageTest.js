chai = require('chai');
assert = chai.assert;
expect = chai.expect;
let functionToTest = require('../requestHomePage.js');

describe('Requesting a HTTP page', function () {
  it('gets google, ', (done)=>{
    getGoogle()
    .then(result => {
        expect(result).to.equal('<html>')
    })
    .then(done, done)
})
});


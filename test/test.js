var path = require('path');
var should = require('chai').should();
var Cheers = require(path.join(process.cwd(), '/cheer'))
describe('Mocha + Chai', function() {
  it('truthyness', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

const Chai = require('chai');
const Expect = Chai.expect;
const pigLatin = require('../pig-latin');
const myPig = pigLatin();

describe ('PigLatin', () => {

it('should return a pig word', () =>{
  Expect(myPig.pigWord('eat')).to.equal('eatay');
  Expect(myPig.pigWord('omelet')).to.equal('omeletay');
  Expect(myPig.pigWord('are')).to.equal('areay');
  Expect(myPig.pigWord('pig')).to.equal('ig-pay');
  Expect(myPig.pigWord('banana')).to.equal('anana-bay');
  Expect(myPig.pigWord('trash')).to.equal('ash-tray');

});

});
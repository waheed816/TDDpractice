const chai = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');
const expect = chai.expect;


describe('returns 3', function () {
    it('function should return 3', function () {
        expect(returnsThree()).to.equal(3)
    })
})

describe('return a reciprocal of the number', function () {
    it('should return reciprocal of given number', function () {
        let number = 3;
        expect(reciprocal(number)).to.equal(1 / 3);
    })
})

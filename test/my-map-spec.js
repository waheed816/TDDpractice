// Your code here
const chai = require("chai");
const expect = chai.expect;

const myMap = require('../problems/my-map');

describe("call the passed in function on each element of the array", function(){
    let array;
    let newArray;
    let result;

    beforeEach(() => {
        array = [1, 2, 3];
        const callback = (el) => el * 2;
        result = myMap(array, callback);
    })

    it('should not mutate the array', function() {
        expect(array).to.deep.equal([1, 2, 3]);

    })

    it('the callback should be applied in myMap', function() {
        expect(result).to.deep.equal([2, 4, 6]);
    })

})

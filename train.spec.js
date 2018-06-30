const mocha = require('mocha')
const assert = require('chai').assert

const howManySundays = require('./train');

describe('howManySundays', function(){
    it("It should return count Of Sundays-> Test 1: ", function() {
        assert.equal(howManySundays(9, "Saturday"), 2);
    });

    it("It should return count Of Sundays-> Test 2: ", function() {
        assert.equal(howManySundays(7, "Sunday"), 1);
    });
    
    it("It should return count Of Sundays-> Test 3: ", function() {
        assert.equal(howManySundays(6, "Monday"), 1);
    });

    it("It should return count Of Sundays-> Test 4: ", function() {
        assert.equal(howManySundays(3, "Wednesday"), 0);
    });

});

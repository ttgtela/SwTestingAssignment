import difference from '../difference.js'
import { expect } from 'chai'

describe("difference.js", () => {
    describe("positive tests", function(){
        it('Excluding values ["apple", "banana"] from array ["apple", "banana", "orange"], expecting ["orange"] as result.', () =>{
            expect(difference(["apple", "banana", "orange"], ["apple", "banana"])).to.deep.equal(["orange"])
        });
    });

    describe("negative tests", function(){
        it('Giving a non-array value as parameter for the array to be reduced, expecting []', () =>{
            expect(difference("apple", ["banana"])).to.deep.equal([])
        });
    });

});
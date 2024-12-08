import isArrayLikeObject from '../isArrayLikeObject.js'
import { expect } from 'chai'

describe("isArrayLikeObject.js", () => {
    describe("Positive tests", function(){
        it('Giving an array of strings as a parameter, expecting true.', () =>{
            expect(isArrayLikeObject(["apple", "banana", "orange"])).to.be.true
        });

        it('Giving an empty array as a parameter, expecting true.', () =>{
            expect(isArrayLikeObject([])).to.be.true
        });

        it('Giving an empty array as a parameter, expecting true.', () =>{
            expect(isArrayLikeObject([null])).to.be.true
        });
    });

    describe("Negative tests", function(){
        it('Giving a non-array value as parameter, expecting false.', () =>{
            expect(isArrayLikeObject(123)).to.be.false
        });

        it('Giving null as parameter, expecting false.', () =>{
            expect(isArrayLikeObject(null)).to.be.false
        });
    });

});
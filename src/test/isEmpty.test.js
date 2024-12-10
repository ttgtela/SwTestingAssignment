import isEmpty from '../isEmpty.js'
import { expect } from 'chai'

describe("isEmpty.js", () => {
    describe("positive tests", function(){
        it('Giving an empty map as a parameter, expecting true.', () =>{
            expect(isEmpty({})).to.be.true
        });

        it('Giving an integer as a parameter, expecting true.', () =>{
            expect(isEmpty(3)).to.be.true
        });

        it('Giving a string as a parameter, expecting false.', () =>{
            expect(isEmpty('apple')).to.be.false
        });

        it('Giving an array as a parameter, expecting false.', () =>{
            expect(isEmpty([1, 2, 3])).to.be.false
        });

        it('Giving a key-value pair as a parameter, expecting false.', () =>{
            expect(isEmpty({'key' : 3})).to.be.false
        });
    });

    describe("negative tests", function(){
        it('Giving null as a parameter, expecting true.', () =>{
            expect(isEmpty(null)).to.be.true
        });

        it('Giving undefined as a parameter, expecting true.', () =>{
            expect(isEmpty(undefined)).to.be.true
        });
    });

});
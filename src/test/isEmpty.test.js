import isEmpty from '../isEmpty.js'
import { expect } from 'chai'

describe("isEmpty.js", () => {
    describe("positive tests", function(){
        it('Giving an empty map as a parameter, expecting true', () =>{
            expect(isEmpty({})).to.be.true
        });

        it('Giving a string as a parameter, expecting false', () =>{
            expect(isEmpty('apple')).to.be.false
        });
    });

    describe("negative tests", function(){

    });

});
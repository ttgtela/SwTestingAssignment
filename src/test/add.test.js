import add from '../add.js'
import { expect } from 'chai'


describe("add.js", () => {
    describe("positive tests", function(){
        it("Adding positive 3 and 5, expecting positive 8.", () =>{
            expect(add(3,5)).to.equal(8)
        });

        it("Adding chars 'a' and 'b', expecting string 'ab'.", () =>{
            expect(add(3,5)).to.equal(8)
        });
    });

    describe("negative tests", function(){
        it("Adding two arrays, expecting Nan.", () =>{
            expect(add(['3', '2'],['2'])).to.deep.equal(NaN)
        });
    });
});
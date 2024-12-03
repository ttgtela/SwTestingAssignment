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
        it('should return 0 when no arguments are provided', () => {
            expect(add()).to.equal(0);
        });
        it("Adding two arrays, expecting Nan.", () =>{
            expect(add(['3', '2'],['2'])).to.deep.equal(NaN)
        });
        it('should handle `null` as 0', () => {
            expect(add(4, null)).to.equal(4);
            expect(add(null, null)).to.equal(0);
        });
        it('should return NaN when one or both arguments are non-numeric', () => {
            expect(add('a', 4)).to.be.NaN;
            expect(add(4, 'b')).to.be.NaN;
            expect(add('a', 'b')).to.be.NaN;
        });
    });
});
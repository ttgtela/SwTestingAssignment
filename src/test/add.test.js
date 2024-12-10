import add from '../add.js'
import { expect } from 'chai'


describe("add.js", () => {
    describe("positive tests", function(){
        it("Adding positive 3 and 5, expecting positive 8.", () =>{
            expect(add(3,5)).to.equal(8)
        });

        it("Adding -2 and -2, expecting -4.", () =>{
            expect(add(-2,-2)).to.equal(-4)
        });

        it("Adding -2 and 2, expecting 0.", () =>{
            expect(add(-2,2)).to.equal(0)
        });

        it("Adding 4 and -2, expecting 2.", () =>{
            expect(add(4,-2)).to.equal(2)
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
            expect(add('a', 4)).to.equal(0);
            expect(add(4, 'b')).to.equal(0);
            expect(add('a', 'b')).to.equal(0);
        });

    });
});
import add from '../add.js'
import { expect } from 'chai'


describe("Add", () => {
    it("Adding positive 3 and 5, expecting positive 8", () =>{
        expect(add(3,5)).to.equal(8)
    });
});
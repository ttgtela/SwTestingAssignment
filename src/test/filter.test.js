import filter from '../filter.js'
import { expect } from 'chai'

describe("filter.js", () => {
    describe("positive tests", function(){
        it('Giving array ["apple", "banana", "orange"] and a function accepts only strings starting with b, expecting ["banana"].', () =>{
            expect(filter(["apple", "banana", "orange"], x => x.startsWith('b'))).to.deep.equal(["banana"])
        });
    });

    describe("negative tests", function(){

    });

});
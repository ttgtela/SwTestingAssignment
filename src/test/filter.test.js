import filter from '../filter.js'
import { expect } from 'chai'

describe("filter.js", () => {
    describe("positive tests", function(){
        it('Giving array ["apple", "banana", "orange"] and a function accepts only strings starting with b, expecting ["banana"].', () =>{
            expect(filter(["apple", "banana", "orange"], x => x.startsWith('b'))).to.deep.equal(["banana"])
        });

        it('should return an empty array if no elements satisfy the predicate', () => {
            const numbers = [1, 2, 3, 4];
            const result = filter(numbers, (n) => n > 10);
            expect(result).to.deep.equal([[]]);
        });

        it('should filter elements with indices and the original array passed to the predicate', () => {
            const numbers = [0, 1, 2, 3];
            const result = filter(numbers, (value, index) => index % 2 === 0);
            expect(result).to.deep.equal([0, 2]);
        });


        it('should work with complex predicates', () => {
            const items = ['apple', 'banana', 'cherry'];
            const result = filter(items, (str) => str.includes('a'));
            expect(result).to.deep.equal(['apple', 'banana']);
        });
    });

    describe("negative tests", function(){
        it('Giving an empty array with arbitrary function, expecting a nested empty array as a result.', () =>{
            expect(filter([], ({isFruit}) => isFruit)).to.deep.equal([[]])
        });

        it('should return a nested empty array if the input array is null or undefined', () => {
            expect(filter(null, () => true)).to.deep.equal([[]]);
            expect(filter(undefined, () => true)).to.deep.equal([[]]);
        });

        it('should handle non-array inputs by returning a nested empty array', () => {
            expect(filter(12345, () => true)).to.deep.equal([[]]);
            expect(filter({ a: 1, b: 2 }, () => true)).to.deep.equal([[]]);
        });

    });

});
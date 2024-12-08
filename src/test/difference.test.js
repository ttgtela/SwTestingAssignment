import difference from '../difference.js'
import { expect } from 'chai'

describe("difference.js", () => {
    describe("positive tests", function(){
        it('Excluding values ["apple", "banana"] from array ["apple", "banana", "orange"], expecting ["orange"] as result.', () =>{
            expect(difference(["apple", "banana", "orange"], ["apple", "banana"])).to.deep.equal(["orange"])
        });

        it('should handle multiple arrays to exclude values from', () => {
            expect(difference([2, 1, 4], [2], [4, 5])).to.deep.equal([1]);
        });

        it('should handle arrays with duplicate values', () => {
            expect(difference([2, 2, 1, 4], [2, 4])).to.deep.equal([1]);
        });

        it('should return the original array when no exclusion arrays are provided', () => {
            expect(difference([2, 1])).to.deep.equal([2, 1]);
        });

        it('should handle empty arrays correctly', () => {
            expect(difference([], [1, 2])).to.deep.equal([]);
            expect(difference([1, 2], [])).to.deep.equal([1, 2]);
        });

        it('should use `SameValueZero` for equality comparisons', () => {
            expect(difference([NaN, 2, 1], [NaN])).to.deep.equal([2, 1]);
        });

    });

    describe("negative tests", function(){
        it('Giving a non-array value as parameter for the array to be reduced, expecting [].', () =>{
            expect(difference("apple", ["banana"])).to.deep.equal([])
        });

        it('should return an empty array if the first argument is an empty array, regardless of other inputs', () => {
            expect(difference([], [1, 2])).to.deep.equal([]);
            expect(difference([], [])).to.deep.equal([]);
        });


    });

});
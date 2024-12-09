import { expect } from 'chai';
import endsWith from '../endsWith.js';

describe('endsWith', () => {
    describe('Positive Tests', () => {
        it('should return true if the string ends with the target string', () => {
            expect(endsWith('abc', 'c')).to.be.true;
        });

        it('should return true if the string ends with the target string at the specified position', () => {
            expect(endsWith('abc', 'b', 2)).to.be.true;
        });

        it('should handle cases where position is beyond string length', () => {
            expect(endsWith('abc', 'c', 5)).to.be.true;
        });

        it('should handle empty strings correctly', () => {
            expect(endsWith('', '')).to.be.true;
            expect(endsWith('abc', '')).to.be.true;
        });

        it('should return true when both the string and target are empty', () => {
            expect(endsWith('', '')).to.be.true;
        });

        it('should return true when position exceeds the string length and the target matches the end', () => {
            expect(endsWith('abc', 'c', 10)).to.be.true;
        });

        it('should handle strings with special characters', () => {
            expect(endsWith('abc!@#', '!@#')).to.be.true;
        });

    });

    describe('Negative Tests', () => {
        it('should return false if the string does not end with the target string', () => {
            expect(endsWith('abc', 'b')).to.be.false;
        });

        it('should return false if position is negative', () => {
            expect(endsWith('abc', 'a', -1)).to.be.false;
        });

        it('should return false when the position is less than the target length', () => {
            expect(endsWith('abc', 'c', 1)).to.be.false;
        });

        it('should return false if the target is longer than the string', () => {
            expect(endsWith('abc', 'abcd')).to.be.false;
        });

        it('should handle cases where an empty string does not end with a non-empty target', () => {
            expect(endsWith('', 'a')).to.be.false;
        });

        it('should handle NaN as position by treating it as 0', () => {
            expect(endsWith('abc', 'a', NaN)).to.be.false;
        });

        it('should return false when the string or target is not a string', () => {
            expect(endsWith(123, '3')).to.be.false;
            expect(endsWith('123', 3)).to.be.false;
        });

        it('should return false when position is explicitly set to 0', () => {
            expect(endsWith('abc', 'a', 0)).to.be.false;
        });


        /*
        it('should handle undefined or null values for the target gracefully', () => {
            expect(endsWith('abc', null)).to.be.false;
            expect(endsWith('abc', undefined)).to.be.false;
        });
        */



    });
});
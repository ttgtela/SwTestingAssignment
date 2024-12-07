import { expect } from 'chai';
import eq from '../eq.js';

describe('eq', () => {
    describe('Positive Tests', () => {
        it('should return true for the same object reference', () => {
            const object = { a: 1 };
            expect(eq(object, object)).to.be.true;
        });

        it('should return true for identical values', () => {
            expect(eq('a', 'a')).to.be.true;
            expect(eq(42, 42)).to.be.true;
        });

        it('should return true for NaN compared to NaN', () => {
            expect(eq(NaN, NaN)).to.be.true;
        });

        it('should return true for null compared to null', () => {
            expect(eq(null, null)).to.be.true;
        });

        it('should return true for undefined compared to undefined', () => {
            expect(eq(undefined, undefined)).to.be.true;
        });
    });

    describe('Negative Tests', () => {
        it('should return false for different objects with the same structure', () => {
            const object1 = { a: 1 };
            const object2 = { a: 1 };
            expect(eq(object1, object2)).to.be.false;
        });

        it("should return false for different values",()=>{
            expect(eq(1, 2)).to.be.false;
            expect(eq("one", "two")).to.be.false;
        });

        it('should handle cases where one value is `NaN` and the other is not', () => {
            expect(eq(NaN, 0)).to.be.false;
            expect(eq(NaN, undefined)).to.be.false;
        });

        /*
        it('should return false for primitive and object-wrapped equivalents', () => {
            expect(eq('a', Object('a'))).to.be.false;
            expect(eq(1, Object(1))).to.be.false;
        });
         */
    });
});
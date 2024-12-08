import { expect } from 'chai';
import toString from '../toString.js';

describe('toString()', () => {
    describe('Positive Tests', () => {
        it('should handle string inputs without modification', () => {
            expect(toString('hello')).to.equal('hello');
            expect(toString('')).to.equal('');
        });

        it('should handle numbers and preserve the sign of `-1`', () => {
            expect(toString(42)).to.equal('42');
            expect(toString(-1)).to.equal('-1');
        });

        it('should handle arrays and recursively convert elements to strings', () => {
            expect(toString([1, 2, 3])).to.equal('1,2,3');
            expect(toString(['a', null, undefined, [4, 5]])).to.equal('a,,,4,5');
        });

        it('should handle functions by converting them to their string representation', () => {
            const func = function () { return 'test'; };
            expect(toString(func)).to.equal(func.toString());
        });

        it('should handle symbols using their `toString` method', () => {
            const symbol = Symbol('test');
            expect(toString(symbol)).to.equal('Symbol(test)');
        });

        it('should handle objects by converting them to their string representation', () => {
            const obj = { key: 'value' };
            expect(toString(obj)).to.equal('[object Object]');
        });

        it('should handle boolean values', () => {
            expect(toString(true)).to.equal('true');
            expect(toString(false)).to.equal('false');
        });
    });

    describe('Negative Tests', () => {
        it('should handle NaN and Infinity correctly', () => {
            expect(toString(NaN)).to.equal('NaN');
            expect(toString(Infinity)).to.equal('Infinity');
            expect(toString(-Infinity)).to.equal('-Infinity');
        });

        it('should handle null values', () => {
            expect(toString(null)).to.equal('null');
        });

        it('should handle undefined values', () => {
            expect(toString(undefined)).to.equal('undefined');
        });

    });
});
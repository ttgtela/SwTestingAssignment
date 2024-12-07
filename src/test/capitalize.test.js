import { expect } from 'chai';
import capitalize from '../capitalize.js';
import toString from "../toString.js";

describe('capitalize', () => {
    describe('Positive Tests', () => {
        it('should capitalize the first character and lowercase the rest', () => {
            const result = capitalize('SOMEONE');
            expect(result).to.equal('Someone');
        });

        it('should handle strings with special characters', () => {
            const result = capitalize('@example');
            expect(result).to.equal('@example');
        });

        it('should handle mixed case strings', () => {
            const result = capitalize('sOmeOnE');
            expect(result).to.equal('Someone');
        });
        it('should handle strings with spaces', () => {
            const result = capitalize(' hello');
            expect(result).to.equal(' hello');
        });

    });

    describe('Negative Tests', () => {
        it('should handle empty strings gracefully', () => {
            const result = capitalize('');
            expect(result).to.equal('');
        });

        it('should handle non-string inputs by converting them to strings', () => {
            const result = capitalize(123);
            expect(result).to.equal('123');
        });

        it('should handle non-string objects', () => {
            const result = capitalize({ key: 'value' });
            expect(result).to.equal('[object object]');
        });

        it('should handle null or undefined values gracefully', () => {
            expect(capitalize(null)).to.equal('Null');
            expect(capitalize(undefined)).to.equal('Undefined');
        });



    });
});
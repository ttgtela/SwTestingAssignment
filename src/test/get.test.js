import { expect } from 'chai';
import get from '../get.js';

describe('get', () => {
    describe('Positive Tests', () => {
        it('should return the value at the specified path', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }] };
            expect(get(object, 'a[0].b.c')).to.equal(3);
            expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
        });

        it('should return the default value when the resolved value is undefined', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }] };
            expect(get(object, 'a[0].b.d', 'default')).to.equal('default');
            expect(get(object, ['a', '0', 'b', 'd'], 'default')).to.equal('default');
        });

        it('should handle paths that are arrays of indices and strings correctly', () => {
            const object = { 'a': [ { 'b': { 'c': 3 } } ] };
            expect(get(object, ['a', 0, 'b', 'c'])).to.equal(3);
        });

        it('should handle paths with nested objects correctly', () => {
            const object = { 'a': { 'b': { 'c': 3 } } };
            expect(get(object, 'a.b.c')).to.equal(3);
            expect(get(object, ['a', 'b', 'c'])).to.equal(3);
        });

        it('should handle path as a string and array interchangeably', () => {
            const object = { 'a': { 'b': { 'c': 3 } } };
            expect(get(object, 'a.b.c')).to.equal(3);
            expect(get(object, ['a', 'b', 'c'])).to.equal(3);
        });
    });

    describe('Negative Tests', () => {
        it('should return undefined when no default value is provided and the path does not exist', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }] };
            expect(get(object, 'a[0].b.d')).to.be.undefined;
        });

        it('should return the default value when the object is null or undefined', () => {
            expect(get(null, 'a.b.c', 'default')).to.equal('default');
            expect(get(undefined, 'a.b.c', 'default')).to.equal('default');
        });

        it('should return the default value when the path is an empty string or array', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }] };
            expect(get(object, '', 'default')).to.equal('default');
            expect(get(object, [], 'default')).to.equal('default');
        });

        it('should handle cases where target path does not exist in the object', () => {
            const object = { 'a': { 'b': { 'c': 3 } } };
            expect(get(object, 'a.x.y', 'default')).to.equal('default');
        });

        it('should return the default value when path includes invalid indices', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }] };
            expect(get(object, 'a[10].b.c', 'default')).to.equal('default');
        });
    });
});
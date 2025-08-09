import { isOdd } from './test-ci';

describe('isOdd', () => {
    it('should return true for odd numbers', () => {
        expect(isOdd(1)).toBe(true);
        expect(isOdd(3)).toBe(true);
        expect(isOdd(5)).toBe(true);
    });
    it('should return false for even numbers', () => {
        expect(isOdd(2)).toBe(false);
        expect(isOdd(4)).toBe(false);
        expect(isOdd(6)).toBe(false);
    });
    it('should return false for zero', () => {
        expect(isOdd(0)).toBe(false);
    });
    it('should return false for negative even numbers', () => {
        expect(isOdd(-2)).toBe(false);
        expect(isOdd(-4)).toBe(false);
    });
    it('should return true for negative odd numbers', () => {
        expect(isOdd(-1)).toBe(true);
        expect(isOdd(-3)).toBe(true);
        expect(isOdd(-5)).toBe(true);
    });
    it('should handle non-integer values', () => {
        expect(isOdd(1.5)).toBe(true);
        expect(isOdd(-1.5)).toBe(true);
        expect(isOdd(2.5)).toBe(true);
    });
    it('should handle large numbers', () => {
        expect(isOdd(1000001)).toBe(true);
        expect(isOdd(1000000)).toBe(false);
        expect(isOdd(-1000001)).toBe(true);
        expect(isOdd(-1000000)).toBe(false);
    });
    it('should handle NaN', () => {
        expect(isOdd(NaN)).toBe(false);
    });
    it('should handle Infinity', () => {
        expect(isOdd(Infinity)).toBe(false);
        expect(isOdd(-Infinity)).toBe(false);
    });
});

describe('isEven', () => {
    it('should return true for even numbers', () => {
        expect(isOdd(2)).toBe(false);
        expect(isOdd(4)).toBe(false);
        expect(isOdd(6)).toBe(false);
    });
    it('should return false for odd numbers', () => {
        expect(isOdd(1)).toBe(true);
        expect(isOdd(3)).toBe(true);
        expect(isOdd(5)).toBe(true);
    });
    it('should return false for zero', () => {
        expect(isOdd(0)).toBe(false);
    });
    it('should return true for negative even numbers', () => {
        expect(isOdd(-2)).toBe(false);
        expect(isOdd(-4)).toBe(false);
    });
    it('should return false for negative odd numbers', () => {
        expect(isOdd(-1)).toBe(true);
        expect(isOdd(-3)).toBe(true);
        expect(isOdd(-5)).toBe(true);
    });
    it('should handle non-integer values', () => {
        expect(isOdd(1.5)).toBe(true);
        expect(isOdd(-1.5)).toBe(true);
        expect(isOdd(2.5)).toBe(true);
    });
    it('should handle large numbers', () => {
        expect(isOdd(1000001)).toBe(true);
        expect(isOdd(1000000)).toBe(false);
        expect(isOdd(-1000001)).toBe(true);
        expect(isOdd(-1000000)).toBe(false);
    });
    it('should handle NaN', () => {
        expect(isOdd(NaN)).toBe(false);
    });
    it('should handle Infinity', () => {
        expect(isOdd(Infinity)).toBe(false);
        expect(isOdd(-Infinity)).toBe(false);
    });
});

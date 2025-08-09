import { ciTest, power } from './ci-test';

describe('ciTest', () => {
    it('should return the same argument', () => {
        const input = { key: 'value' };
        const result = ciTest(input);
        expect(result).toBe(input);
    });

    it('should handle different types of arguments', () => {
        expect(ciTest(42)).toBe(42);
        expect(ciTest('test')).toBe('test');
        expect(ciTest([1, 2, 3])).toEqual([1, 2, 3]);
    });
});

describe('power', () => {
    it('should calculate power correctly for positive exponents', () => {
        expect(power(2, 3)).toBe(8);
        expect(power(5, 0)).toBe(1);
        expect(power(10, 2)).toBe(100);
    });

    it('should throw an error for negative exponents', () => {
        expect(() => power(2, -1)).toThrow('Exponent must be a non-negative integer');
        expect(() => power(3, -2)).toThrow('Exponent must be a non-negative integer');
    });
});

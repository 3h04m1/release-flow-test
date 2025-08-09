/**
 * This file is part of the RealWorld project.
 * @param arg - A generic argument of type T.
 * @returns The same argument of type T.
 */
export function ciTest<T>(arg: T): T {
    // This function is a placeholder for CI tests.
    // It simply returns the argument passed to it.
    return arg;
}

/**
 * Calculates the power of a base number raised to an exponent.
 * Throws an error if the exponent is negative.
 * @param base - The base number.
 * @param exponent - The exponent to raise the base to.
 * @returns The result of base raised to the exponent.
 * @throws {Error} If the exponent is negative.
 */
export function power(base: number, exponent: number): number {
    if (exponent < 0) {
        throw new Error('Exponent must be a non-negative integer');
    }
    return base ** exponent;
}

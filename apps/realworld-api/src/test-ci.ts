/**
 * Checks if a number is odd.
 * @param num - The number to check.
 * @returns `true` if the number is odd, `false` otherwise.
 */
export function isOdd(num: number): boolean {
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
        return false; // Handle NaN and Infinity
    }
    return num % 2 !== 0;
}

/**
 * Checks if a number is even.
 * @param num - The number to check.
 * @returns `true` if the number is even, `false` otherwise.
 */
export function isEven(num: number): boolean {
    return !isOdd(num);
}

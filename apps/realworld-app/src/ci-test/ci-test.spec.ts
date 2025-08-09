import { ciTest } from './ci-test'

describe('ciTest', () => {
  it('should return the same argument', () => {
    const input = { key: 'value' }
    const result = ciTest(input)
    expect(result).toBe(input)
  })

  it('should handle different types of arguments', () => {
    expect(ciTest(42)).toBe(42)
    expect(ciTest('test')).toBe('test')
    expect(ciTest([1, 2, 3])).toEqual([1, 2, 3])
  })
})

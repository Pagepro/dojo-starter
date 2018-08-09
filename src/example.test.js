import {
  testMethod
} from './example'

describe('Global test case', () => {
  describe('test method', () => {
    it('should be equal to true', () => {
      expect(testMethod()).toBe(true)
      expect(testMethod(1)).toBe(true)
      expect(testMethod('12asf ')).toBe(true)
      expect(testMethod({ a: 123 })).toBe(true)
      expect(testMethod([1, 2, 3])).toBe(true)
      expect(testMethod(false)).toBe(true)
    })
  })
})

import {add} from './add'


describe('add()', () => {
  it('adds 2+3 to be 5', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('adds a+b to be ab', () => {
    expect(add('a', 'b')).toBe('ab')
  })

  it('throws an error when passed undefined as a parameter', () => {
    expect(() => add(1, undefined)).toThrowError('Two numbers should be defined!')
  })

  it('throws an error when only one parameter is passed', () => {
    expect(() => add(1)).toThrowError('Two numbers should be defined!')
  })
})

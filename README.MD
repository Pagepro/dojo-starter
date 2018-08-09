## Globally injected variables
* describe(name, fn)
* it(name, fn)
* expect(val)

## expect(value)
* .not inverse the next comparison
* .toThrow(?message)
* .toBe(value) comparison using ===
* .toEqual(value) deep comparison. Use jasmine.any(type) to be softer
* .toBeFalsy()
* .toBeTruthy()
* .toBeNull()
* .toBeUndefined()
* .toBeDefined()
* .toMatch(regexp)
* .toContain(string)
* .toBeCloseTo(number, delta)
* .toBeGreaterThan(number)
* .toBeLessThan(number)
* .toBeCalled()
* .toBeCalledWith(arg, um, ents)
* .lastCalledWith(arg, um, ents)

## modules
* import { name } from 'path'
* import defaultName from 'path'
* export { name: name }
* export const name = fn/variable/value
* export default name

## scripts
* npm run test
* npm run test:watch
* npm run lint


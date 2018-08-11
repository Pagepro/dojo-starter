# JavaScript Coding Dojo Starter

> A starter for JavaScript Coding Dojo sessions by Pagepro.

## Globally injected variables
* describe(name, fn)
* it(name, fn)
* expect(val)

## expect(value)
* .not inverse the next comparison
* .toThrow(?message)
* .toBe(value) comparison using ===
* .toEqual(value) deep comparison (objects, arrays)
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

## Using JS Modules

```javascript
import { name } from 'path'
```

```javascript
import defaultName from 'path'
```

```javascript
export { name: name }
```

```javascript
export const name = fn/variable/value
```

```javascript
export default name
```


## Scripts

```shell
npm run test
```

```shell
npm run test:watch
```

```shell
npm run lint
```

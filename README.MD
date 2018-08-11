# Coding Dojo Starter

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

## modules

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


## scripts

```shell
npm run test
```

```shell
npm run test:watch
```

```shell
npm run lint
```


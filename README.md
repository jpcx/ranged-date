# ranged-date

Converts a given string, number, or date to the number of milliseconds since the Unix epoch, provided that it can be recognized as seconds, milliseconds, or microseconds within a specified range in years from the current date.

Useful for parsing timestampted data from external APIs.

## Getting Started

### Prerequisites

Node.JS version 6.0.0 or above.

### Installing

```
npm i ranged-date
```

### Testing

The following command will test the package for errors.

```
npm test
```

### Deployment

```js
const rangedDate = require('ranged-date')
```

### Usage

```js
const time   = ~~(Date.now() / 1000) // Test unixtime in seconds
const past   = time - 31536000       // One year prior
const future = time + 31536000       // One year after

console.log(rangedDate(time))               // converted time in ms
console.log(rangedDate(time * 1000))        // converted time in ms
console.log(rangedDate(time * 1000 * 1000)) // converted time in ms
console.log(rangedDate(String(time)))       // converted time in ms
console.log(rangedDate(past))               // false
console.log(rangedDate(past, 2))            // converted time in ms
console.log(rangedDate(future))             // false
console.log(rangedDate(future, null, 2))    // converted time in ms
```

## Documentation

### rangedDate ⇒ <code>number</code> \| <code>boolean</code>

**Returns**: <code>number</code> \| <code>boolean</code> - Converted ms or false if outside range.  

| Param | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| data | <code>Date &#124; number &#124; string</code> |  |  | Data to attempt to match. |
| low | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Years before current date as lower bound. |
| up | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Years after current date as upper bound. |

Please refer to the [API docs](https://github.com/jpcx/ranged-date/blob/master/docs/API.md) for more detailed usage examples.
Global functions are documented [here](https://github.com/jpcx/ranged-date/blob/master/docs/global.md).

## Versioning

Versioning using [SemVer](http://semver.org/). For available versions, see the [tags on this repository](https://github.com/jpcx/ranged-date/tags).

## Author

* **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the ISC License - see the [LICENSE.md](https://github.com/jpcx/ranged-date/blob/master/LICENSE.md) file for details

# ranged-date

Converts a given input to the number of milliseconds since the Unix epoch, provided that it can be parsed and recognized as seconds, milliseconds, or microseconds within a specified range in years.

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

```
const rangedDate = require('ranged-date')
```

### Usage

```
const time   = ~~(Date.now() / 1000) // Test unixtime in seconds
const past   = time - 31536000       // One year prior
const future = time + 31536000       // One year after

console.log(rangedDate(time))               // converted ms
console.log(rangedDate(time * 1000))        // converted ms
console.log(rangedDate(time * 1000 * 1000)) // converted ms
console.log(rangedDate(String(time)))       // converted ms
console.log(rangedDate(past))               // false
console.log(rangedDate(past, 2))            // converted ms
console.log(rangedDate(future))             // false
console.log(rangedDate(future, null, 2))    // converted ms
```

## Documentation

### rangedDate ⇒ <code>number</code> \| <code>boolean</code>

**Returns**: <code>number</code> \| <code>boolean</code> - Converted ms or false if outside range.  

| Param | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| data | <code>Date &#124; number &#124; string</code> | | | Data to attempt to match. |
| low | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Lower bound, in years. |
| up | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Upper bound, in years. |

Please refer to the [docs](https://github.com/jpcx/ranged-date/blob/master/docs/API.md) for more in-depth documentation.

## Versioning

Versioning using [SemVer](http://semver.org/). For available versions, see the [tags on this repository](https://github.com/jpcx/ranged-date/tags).

## Authors

* **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the ISC License - see the [LICENSE.md](https://github.com/jpcx/ranged-date/blob/master/LICENSE.md) file for details

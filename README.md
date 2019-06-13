# ranged-date

[![NPM](https://nodei.co/npm/ranged-date.png)](https://nodei.co/npm/ranged-date/)

Converts a given string, number, or Date object to the number of milliseconds since the Unix epoch, provided that it can be recognized as millisecond, second, or microsecond time within a specified range from the current date.

Milliseconds, seconds, or microseconds may be excluded as possibilities for range matching.

Useful for:

-   Parsing timestampted data from external APIs.
-   Integrating collections containing mixed timestamp formats.

**MIGRATION NOTICE:**

-   _ranged-date 2.0.0: back and forward ranges are now mandatory (were 0.5 each by default in 1.x.x)._
-   _ranged-date 2.0.0: Date Objects with values outside of the specified range will return false (would return Date Object in 1.x.x)._

## Getting Started

### Prerequisites

Node.JS version 6.0.0 or above.

### Installing

    npm i ranged-date

### Testing

The following commands will test the package for errors.

    cd /path/to/node_modules/ranged-date
    npm test

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [ranged-date](#ranged-date)
    -   [Parameters](#parameters)
    -   [Examples](#examples)

### ranged-date

[index.js:142-167](https://github.com/jpcx/ranged-date/blob/01b4dd75ac9962e596d491a54d088aff8cff1e98/index.js#L142-L167 "Source code on GitHub")

Converts a given string, number, or Date object to the number of milliseconds since the Unix epoch, provided that it can be recognized as millisecond, second, or microsecond time within a specified range from the current date.

#### Parameters

-   `data` **([Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** Data to attempt to recognize as valid date.
-   `yrBack` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Years before current date as lower bound.
-   `yrFwd` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Years after current date as upper bound.
-   `exclusions` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Specifies interpretation exclusions, if any.
    -   `exclusions.us` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Exclude microseconds interpretation.
    -   `exclusions.ms` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Exclude milliseconds interpretation.
    -   `exclusions.s` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Exclude seconds interpretation.

#### Examples

```javascript
// All return current time in ms
rangedDate(new Date(), 1, 1)
rangedDate(Date.now(), 1, 1)
rangedDate(new Date().toString(), 1, 1)
rangedDate(String(Date.now()), 1, 1)

// All return false
rangedDate(Date.now() - 10000000, 0.0000001, 0.0000001)
rangedDate(Date.now(), 1, 1, {ms: true})

// All throw cert-is TypeAssertionErrors
rangedDate()
rangedDate(new Date())
rangedDate({})
rangedDate(328385)

// Throws cert-is RangeAssertionError
rangedDate(Date.now(), -1, -1)
```

-   Throws **(cert-is.TypeAssertionError | cert-is.RangeAssertionError)** Throws an assertion error if parameter requirements are not met.

Returns **([number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) \| [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean))** Converted time in ms or false if outside range.

## Versioning

Versioning using [SemVer](http://semver.org/). For available versions, see the [tags on this repository](https://github.com/jpcx/ranged-date/tags).

## Author

-   **Justin Collier** - [jpcx](https://github.com/jpcx)

## License

This project is licensed under the ISC License - see the [LICENSE.md](https://github.com/jpcx/ranged-date/blob/master/LICENSE.md) file for details

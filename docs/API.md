## Module

### <a name="rangedDate"></a> rangedDate ⇒ <code>number</code> \| <code>boolean</code>
Converts a given string, number, or Date object to the number of milliseconds since the Unix epoch, provided that it can be recognized as millisecond, second, or microsecond time within a specified time range from the current date.

| Param | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| data | <code>Date</code> \| <code>number</code> \| <code>string</code> |  |  | Data to attempt to recognize as valid date. |
| back | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Years before current date as lower bound. |
| fwd | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Years after current date as upper bound. |
| exclude | <code><a href="#rangedDate~exclude">rangedDate~exclude</a></code> | <code>&#60;optional&#62;</code> | <code>{}</code> | Specifies type exclusions, if any. |

> Source: [index.js](https://github.com/jpcx/ranged-date/blob/master/index.js), [line 109](https://github.com/jpcx/ranged-date/blob/master/index.js#L109)

**Returns**: <code>number</code> \| <code>boolean</code> - Converted time in ms or false if outside range.  

**Example**  
```js
// returns current time in ms
rangedDate(new Date())
```
**Example**  
```js
// returns current time in ms
rangedDate(String(new Date()))
```
**Example**  
```js
// returns current time in ms
rangedDate(Date.now())
```
**Example**  
```js
// returns current time in ms
rangedDate(String(Date.now()))
```
**Example**  
```js
// returns current time in ms
rangedDate(Date.now() / 1000)
```
**Example**  
```js
// returns current time in ms
rangedDate(Date.now() * 1000)
```
**Example**  
```js
// returns false
rangedDate(Date.now() - 10000, 0.0000001, 0.0000001)
```
**Example**  
```js
// returns current time in ms - 10000
rangedDate(Date.now() - 10000, 0.000001, 0.000001)
```
**Example**  
```js
// returns false
rangedDate(10)
```
**Example**  
```js
// returns 10
const yrSince1970 = new Date().getUTCFullYear() - 1970
rangedDate(10, yrSince1970 + 2)
```
**Example**  
```js
// returns false
rangedDate(Date.now() + 100000000000)
```
**Example**  
```js
// returns current time in ms + 100000000000
rangedDate(Date.now() + 100000000000, 0.1, 5)
```
**Example**  
```js
// returns -946771200000
const yrSince1940 = new Date().getUTCFullYear() - 1940
rangedDate(-946771200, yrSince1940 + 2, -(yrSince1940 - 2))
```
**Example**  
```js
// returns false
rangedDate(Date.now(), 0.5, 0.5, { ms: true })
```
**Example**  
```js
// returns current time in ms
rangedDate(Date.now(), 0.5, 0.5, { s: true, us: true })
```
**Example**  
```js
// returns false
rangedDate(Date.now() / 1000, 0.5, 0.5, { s: true })
```
**Example**  
```js
// returns current time in ms
rangedDate(Date.now() / 1000, 0.5, 0.5, { ms: true, us: true })
```
**Example**  
```js
// returns false
rangedDate(Date.now() * 1000, 0.5, 0.5, { us: true })
```
**Example**  
```js
// returns current time in ms
rangedDate(Date.now() * 1000, 0.5, 0.5, { ms: true, s: true })
```
**Example**  
```js
// returns false
rangedDate(Date.now(), 0.5, 0.5, { ms: true, s: true, us: true })
```
**Example**  
```js
// returns current time in ms
rangedDate(new Date(), 0.5, 0.5, { ms: true, s: true, us: true })
```
**Example**  
```js
// returns false
rangedDate(String(new Date()), 0.5, 0.5, { ms: true, s: true, us: true })
```

## Typedefs

### <a name="rangedDate~exclude"></a> <code>rangedDate~exclude</code>
Settings for exclusion of milliseconds, seconds, or microseconds as possibilities for type matching.

**Properties**

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| ms | <code>boolean</code> | <code>&#60;optional&#62;</code> | Exclude milliseconds. |
| s | <code>boolean</code> | <code>&#60;optional&#62;</code> | Exclude seconds. |
| us | <code>boolean</code> | <code>&#60;optional&#62;</code> | Exclude microseconds. |

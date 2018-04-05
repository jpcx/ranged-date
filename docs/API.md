## Module

### rangedDate ⇒ <code>number</code> \| <code>boolean</code>
Converts a given input to the number of milliseconds since the Unix epoch, provided that it can be parsed and recognized as seconds, milliseconds, or microseconds within a specified range in years from the current date.

**Returns**: <code>number</code> \| <code>boolean</code> - Converted time in ms or false if outside range.

| Param | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| data | <code>Date &#124; number &#124; string</code> |  |  | Data to attempt to match. |
| low | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Years before current date as lower bound. |
| up | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Years after current date as upper bound. |

**Example**  
```js
//returns current time in ms
rangedDate(new Date())
```
**Example**  
```js
//returns current time in ms
rangedDate(String(new Date()))
```
**Example**  
```js
//returns current time in ms
rangedDate(Date.now())
```
**Example**  
```js
//returns current time in ms
rangedDate(String(Date.now()))
```
**Example**  
```js
//returns current time in ms
rangedDate(Date.now() * 1000)
```
**Example**  
```js
//returns current time in ms
rangedDate(Date.now() / 1000)
```
**Example**  
```js
//returns false
rangedDate(Date.now() - 10000, 0.0000001, 0.0000001)
```
**Example**  
```js
//returns current time in ms - 10000
rangedDate(Date.now() - 10000, 0.000001, 0.000001)
```
**Example**  
```js
//returns false
rangedDate(10)
```
**Example**  
```js
//returns 10
const yrSince1970 = new Date().getUTCFullYear() - 1970
rangedDate(10, yrSince1970 + 2)
```
**Example**  
```js
//returns false
rangedDate(Date.now() + 100000000000)
```
**Example**  
```js
//returns current time in ms + 100000000000
rangedDate(Date.now() + 100000000000, 0.1, 5)
```

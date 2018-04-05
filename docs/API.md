## Modules

<dl>
<dt><a href="#module_rangedDate">rangedDate</a> ⇒ <code>number</code> | <code>boolean</code></dt>
<dd><p>Converts a given input to the number of milliseconds since the Unix epoch, provided that it can be parsed and recognized as seconds, milliseconds, or microseconds within a specified range in years.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#inRange">inRange(t, l, u)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true only if value falls within range.</p>
</dd>
<dt><a href="#yrDist">yrDist(t)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the difference of a number and the current date in ms, in years.</p>
</dd>
<dt><a href="#bound">bound(t, l, u)</a> ⇒ <code>number</code> | <code>boolean</code></dt>
<dd><p>Returns the given number only if it falls within a given range in years.</p>
</dd>
<dt><a href="#check">check(t, l, u)</a> ⇒ <code>number</code> | <code>boolean</code></dt>
<dd><p>Returns time in ms if number itself, seconds equivalent, or microseconds equivalent falls within a given range in years.</p>
</dd>
</dl>

<a name="module_rangedDate"></a>

## rangedDate ⇒ <code>number</code> \| <code>boolean</code>
Converts a given input to the number of milliseconds since the Unix epoch, provided that it can be parsed and recognized as seconds, milliseconds, or microseconds within a specified range in years.

**Returns**: <code>number</code> \| <code>boolean</code> - Converted ms or false if outside range.

| Param | Type | Attributes | Default | Description |
| --- | --- | --- | --- | --- |
| data | <code>Date &#124; number &#124; string</code> | | | Data to attempt to match. |
| low | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Lower bound, in years. |
| up | <code>number</code> | <code>&#60;optional&#62;</code> | <code>0.5</code> | Upper bound, in years. |

**Example**
```js
//returns 1522892170000
rangedDate(new Date())
```
**Example**
```js
//returns 1522892170000
rangedDate(String(new Date()))
```
**Example**
```js
//returns 1522892170000
rangedDate(Date.now())
```
**Example**
```js
//returns 1522892170000
rangedDate(String(Date.now()))
```
**Example**
```js
//returns 1522892170000
rangedDate(Date.now() * 1000)
```
**Example**
```js
//returns 1522892170000
rangedDate(Date.now() / 1000)
```
**Example**
```js
//returns false
rangedDate(Date.now() - 10000, 0.0000001, 0.0000001)
```
**Example**
```js
//returns 1522892160000
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
//returns 1622892170000
rangedDate(Date.now() + 100000000000, 0.1, 5)
```
<a name="inRange"></a>

## inRange(t, l, u) ⇒ <code>boolean</code>
Returns true only if value falls within range.

**Kind**: global function
**Returns**: <code>boolean</code> - True if number falls within range, false if not.

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | Number being tested. |
| l | <code>number</code> | Lower bound, in years. |
| u | <code>number</code> | Upper bound, in years. |

**Example**
```js
//returns true
inRange(0, -1, 1)
```
**Example**
```js
//returns false
inRange(-1, 0, 1)
```
**Example**
```js
//returns false
inRange(0)
```
<a name="yrDist"></a>

## yrDist(t) ⇒ <code>number</code>
Returns the difference of a number and the current date in ms, in years.

**Kind**: global function
**Returns**: <code>number</code> - Difference in years.

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | Number to subtract from. |

**Example**
```js
//returns -48.28991549001142 or equivalent
yrDist(0)
```
**Example**
```js
//returns 2.4457499878868596 or equivalent
yrDist(1600000000000)
```
<a name="bound"></a>

## bound(t, l, u) ⇒ <code>number</code> \| <code>boolean</code>
Returns the given number only if it falls within a given range in years.

**Kind**: global function
**Returns**: <code>number</code> \| <code>boolean</code> - Number falls within range.

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | Number being tested. |
| l | <code>number</code> | Lower bound, in years. |
| u | <code>number</code> | Upper bound, in years. |

**Example**
```js
//returns 1514764800000
bound(1514764800000, 0.5, 0.5)
```
**Example**
```js
//returns false
bound(1483228800000, 0.5, 0.5)
```
<a name="check"></a>

## check(t, l, u) ⇒ <code>number</code> \| <code>boolean</code>
Returns time in ms if number itself, seconds equivalent, or microseconds equivalent falls within a given range in years.

**Kind**: global function
**Returns**: <code>number</code> \| <code>boolean</code> - Converted ms or false if outside range.

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | Number being tested. |
| l | <code>number</code> | Lower bound, in years. |
| u | <code>number</code> | Upper bound, in years. |

**Example**
```js
//returns 1514764800000
check(1514764800000000, 0.5, 0.5)
```
**Example**
```js
//returns false
check(1483228800, 0.5, 0.5)
```
**Example**
```js
//returns 1483228800000
check(1483228800, 2, 0.5)
```
**Example**
```js
//returns false
check(1546300800, 2, 0.5)
```
**Example**
```js
//returns 1546300800000
check(1546300800, 2, 2)
```

## Global Functions

<dl>
<dt><a href="#inRange">inRange(t, l, u)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true only if value falls within range.</p>
</dd>
<dt><a href="#yrDist">yrDist(t)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the difference of a number and the current date in ms, in years from the current date.</p>
</dd>
<dt><a href="#bound">bound(t, l, u)</a> ⇒ <code>number</code> | <code>boolean</code></dt>
<dd><p>Returns the given number only if it falls within a given range in years from the current date.</p>
</dd>
<dt><a href="#check">check(t, l, u)</a> ⇒ <code>number</code> | <code>boolean</code></dt>
<dd><p>Returns time in ms if number itself, seconds equivalent, or microseconds equivalent falls within a given range in years from the current date.</p>
</dd>
</dl>

<a name="inRange"></a>

### inRange(t, l, u) ⇒ <code>boolean</code>
Returns true only if value falls within range.

**Returns**: <code>boolean</code> - True if number falls within range, false if not.  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | Number being tested. |
| l | <code>number</code> | Lower bound. |
| u | <code>number</code> | Upper bound. |

> Source: [index.js](https://github.com/jpcx/ranged-date/blob/master/index.js), [line 17](https://github.com/jpcx/ranged-date/blob/master/index.js#L17)

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

<a name="yrDist"></a>

### yrDist(t) ⇒ <code>number</code>
Returns the difference of a number and the current date in ms, in years from the current date.

**Returns**: <code>number</code> - Years until given time in ms.  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | Number to subtract from. |

> Source: [index.js](https://github.com/jpcx/ranged-date/blob/master/index.js), [line 30](https://github.com/jpcx/ranged-date/blob/master/index.js#L30)

**Example**  
```js
//returns years until unix epoch (negative)
yrDist(0)
```
**Example**  
```js
//returns 1
yrDist(Date.now() + 31536000000)
```
<a name="bound"></a>

### bound(t, l, u) ⇒ <code>number</code> \| <code>boolean</code>
Returns the given number only if it falls within a given range in years from the current date.

**Returns**: <code>number</code> \| <code>boolean</code> - Number falls within range.  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | Number being tested. |
| l | <code>number</code> | Years before current date as lower bound. |
| u | <code>number</code> | Years after current date as upper bound. |

> Source: [index.js](https://github.com/jpcx/ranged-date/blob/master/index.js), [line 45](https://github.com/jpcx/ranged-date/blob/master/index.js#L45)

**Example**  
```js
//returns current time in ms
bound(Date.now(), 0.5, 0.5)
```
**Example**  
```js
//returns false
bound(Date.now() * 1000, 0.5, 0.5)
```
<a name="check"></a>

### check(t, l, u) ⇒ <code>number</code> \| <code>boolean</code>
Returns time in ms if number itself, seconds equivalent, or microseconds equivalent falls within a given range in years from the current date.

**Returns**: <code>number</code> \| <code>boolean</code> - Converted ms or false if outside range.  

| Param | Type | Description |
| --- | --- | --- |
| t | <code>number</code> | Number being tested. |
| l | <code>number</code> | Years before current date as lower bound. |
| u | <code>number</code> | Years after current date as upper bound. |

> Source: [index.js](https://github.com/jpcx/ranged-date/blob/master/index.js), [line 66](https://github.com/jpcx/ranged-date/blob/master/index.js#L66)

**Example**  
```js
//returns current time in ms
check(Date.now() * 1000, 0.5, 0.5)
```
**Example**  
```js
//returns current time in ms
check(Date.now() / 1000, 0.5, 0.5)
```
**Example**  
```js
//returns false
check(Date.now() - 100000000000, 0.5, 0.5)
```
**Example**  
```js
//returns current time in ms - 100000000000
check(Date.now() - 100000000000, 5, 0.5)
```

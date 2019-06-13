'use strict'

const cert = require('cert-is')

/**
 * Returns true only if value falls within range.
 *
 * @private
 * @param {number} t - Number being tested.
 * @param {number} l - Lower bound.
 * @param {number} u - Upper bound.
 * @returns {boolean} True if number falls within range, false if not.
 * @example
 * // returns true
 * inRange(0, -1, 1)
 * @example
 * // returns false
 * inRange(-1, 0, 1)
 */
const inRange = (t, l, u) => cert(t, l, u).isType('number') && t > l && t < u
/**
 * Returns the difference of a number and the current date in ms as years from the current date.
 *
 * @private
 * @param {number} target - Number to subtract from.
 * @returns {number} Years until given time in ms.
 * @example
 * // returns years until unix epoch
 * yrDist(0)
 * @example
 * // returns 1
 * yrDist(Date.now() + 31536000000)
 */
const yrDist = target =>
  cert(target).isType('number') && (target - Date.now()) / +'31536e6'
/**
 * Returns the given number only if it falls within a given range in years from the current date.
 *
 * @private
 * @param {number} target - Number being tested.
 * @param {number} yrBack   - Years before current date as lower bound.
 * @param {number} yrFwd    - Years after current date as upper bound.
 * @returns {(number|boolean)} Number falls within range.
 * @example
 * // returns current time in ms
 * bound(Date.now(), 5, 5)
 * @example
 * // returns false
 * bound(Date.now() * 1000, 5, 5)
 */
const bound = (target, yrBack, yrFwd) =>
  cert(target, yrBack, yrFwd).isType('number') &&
  inRange(yrDist(target), -yrBack, yrFwd) &&
  target
/**
 * Returns time in ms if number itself, seconds equivalent, or microseconds equivalent falls within a given range in years from the current date.
 *
 * @private
 * @param   {number} target - Number being tested.
 * @param   {number} yrBack   - Years before current date as lower bound.
 * @param   {number} yrFwd    - Years after current date as upper bound.
 * @param   {ranged-date~exclude} exclude - Specifies range exclusions, if any.
 * @returns {(number|boolean)} Converted ms or false if outside range.
 * @example
 * // returns current time in ms
 * check(Date.now(), 5, 5, {})
 * @example
 * // returns current time in ms
 * check(Date.now() / 1000, 5, 5, {})
 * @example
 * // returns current time in ms
 * check(Date.now() * 1000, 5, 5, {})
 * @example
 * // returns false
 * check(Date.now() - 100000000000, 5, 5, {})
 * @example
 * // returns current time in ms - 100000000000
 * check(Date.now() - 100000000000, 5, 5, {})
 * @example
 * // returns false
 * check(Date.now(), 5, 5, { ms: true })
 * @example
 * // returns current time in ms
 * check(Date.now(), 5, 5, { s: true, us: true })
 * @example
 * // returns false
 * check(Date.now() / 1000, 5, 5, { s: true })
 * @example
 * // returns current time in ms
 * check(Date.now() / 1000, 5, 5, { ms: true, us: true })
 * @example
 * // returns false
 * check(Date.now() * 1000, 5, 5, { us: true })
 * @example
 * // returns current time in ms
 * check(Date.now() * 1000, 5, 5, { ms: true, s: true })
 * @example
 * // returns false
 * check(Date.now(), 5, 5, { ms: true, s: true , us: true })
 */
const check = (target, yrBack, yrFwd, exclusions) =>
  cert(target, yrBack, yrFwd).isType('number') &&
  isFinite(target) &&
  ((!exclusions.ms && bound(target, yrBack, yrFwd)) ||
    (!exclusions.s && bound(target * 1000, yrBack, yrFwd)) ||
    (!exclusions.us && bound(target / 1000, yrBack, yrFwd)))

/**
 * Converts a given string, number, or Date object to the number of milliseconds since the Unix epoch, provided that it can be recognized as millisecond, second, or microsecond time within a specified range from the current date.
 *
 * @public
 * @module ranged-date
 * @param {(Date|number|string)} data - Data to attempt to recognize as valid date.
 * @param   {number}  yrBack     - Years before current date as lower bound.
 * @param   {number}  yrFwd      - Years after current date as upper bound.
 * @param   {Object}  exclusions - Specifies interpretation exclusions, if any.
 * @param   {boolean} exclusions.us - Exclude microseconds interpretation.
 * @param   {boolean} exclusions.ms - Exclude milliseconds interpretation.
 * @param   {boolean} exclusions.s  - Exclude seconds interpretation.
 * @returns {(number|boolean)} Converted time in ms or false if outside range.
 * @throws  {(cert-is.TypeAssertionError|cert-is.RangeAssertionError)} Throws an assertion error if parameter requirements are not met.
 * @example
 * // All return current time in ms
 * rangedDate(new Date(), 1, 1)
 * rangedDate(Date.now(), 1, 1)
 * rangedDate(new Date().toString(), 1, 1)
 * rangedDate(String(Date.now()), 1, 1)
 *
 * // All return false
 * rangedDate(Date.now() - 10000000, 0.0000001, 0.0000001)
 * rangedDate(Date.now(), 1, 1, {ms: true})
 *
 * // All throw cert-is TypeAssertionErrors
 * rangedDate()
 * rangedDate(new Date())
 * rangedDate({})
 * rangedDate(328385)
 *
 * // Throws cert-is RangeAssertionError
 * rangedDate(Date.now(), -1, -1)
 */
module.exports = (
  data,
  yrBack,
  yrFwd,
  exclusions = { us: false, ms: false, s: false }
) => {
  cert(data)
    .message('ranged-date data must be a Date, number, or a string')
    .isType(Date, 'number', 'string')
  cert(yrBack, yrFwd)
    .message('ranged-date year boundaries must be specified with numbers > 0')
    .isType('number')
    .isGT(0)
  cert(exclusions.s, exclusions.ms, exclusions.us)
    .message('ranged-date exclusions must be booleans')
    .isType('boolean', 'undefined')
  if (data instanceof Date) {
    return check(data.valueOf(), yrBack, yrFwd, {})
  }
  if (typeof data === 'number') return check(data, yrBack, yrFwd, exclusions)
  // data is string
  return (
    check(Date.parse(data), yrBack, yrFwd, {}) ||
    check(+data, yrBack, yrFwd, exclusions)
  )
}

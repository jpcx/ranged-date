'use strict'

/**
 * Returns true only if value falls within range.
 *
 * @param {number} t - Number being tested.
 * @param {number} l - Lower bound, in years.
 * @param {number} u - Upper bound, in years.
 * @example
 * //returns true
 * inRange(0, -1, 1)
 * @example
 * //returns false
 * inRange(-1, 0, 1)
 * @example
 * //returns false
 * inRange(0)
 * @returns {boolean} True if number falls within range, false if not.
 */
const inRange = (t, l, u) => t > l && t < u
/**
 * Returns the difference of a number and the current date in ms, in years.
 *
 * @param {number} t - Number to subtract from.
 * @example
 * //returns -48.28991549001142 or equivalent
 * yrDist(0)
 * @example
 * //returns 2.4457499878868596 or equivalent
 * yrDist(1600000000000)
 * @returns {number} Difference in years.
 */
const yrDist = t => (t - Date.now()) / +'31536e6'
/**
 * Returns the given number only if it falls within a given range in years.
 *
 * @param {number} t - Number being tested.
 * @param {number} l - Lower bound, in years.
 * @param {number} u - Upper bound, in years.
 * @example
 * //returns 1514764800000
 * bound(1514764800000, 0.5, 0.5)
 * @example
 * //returns false
 * bound(1483228800000, 0.5, 0.5)
 * @returns {(number|boolean)} Number falls within range.
 */
const bound = (t, l, u) => inRange(yrDist(t), -l, u) && t
/**
 * Returns time in ms if number itself, seconds equivalent, or microseconds equivalent falls within a given range in years.
 *
 * @param {number} t - Number being tested.
 * @param {number} l - Lower bound, in years.
 * @param {number} u - Upper bound, in years.
 * @example
 * //returns 1514764800000
 * check(1514764800000000, 0.5, 0.5)
 * @example
 * //returns false
 * check(1483228800, 0.5, 0.5)
 * @example
 * //returns 1483228800000
 * check(1483228800, 2, 0.5)
 * @example
 * //returns false
 * check(1546300800, 2, 0.5)
 * @example
 * //returns 1546300800000
 * check(1546300800, 2, 2)
 * @returns {(number|boolean)} Converted ms or false if outside range.
 */
const check = (t, l, u) => isFinite(t) && (
  bound(t, l, u) || bound(t * 1000, l, u) || bound(t / 1000, l, u)
)
/**
 * Converts a given input to the number of milliseconds since the Unix epoch, provided that it can be parsed and recognized as seconds, milliseconds, or microseconds within a specified range in years.
 *
 * @exports rangedDate
 * @param {(Date|number|string)} data - Data to attempt to match.
 * @param {number} [low=0.5] - Lower bound, in years.
 * @param {number} [up=0.5]  - Upper bound, in years.
 * @example
 * //returns 1522892170000
 * rangedDate(new Date())
 * @example
 * //returns 1522892170000
 * rangedDate(String(new Date()))
 * @example
 * //returns 1522892170000
 * rangedDate(Date.now())
 * @example
 * //returns 1522892170000
 * rangedDate(String(Date.now()))
 * @example
 * //returns 1522892170000
 * rangedDate(Date.now() * 1000)
 * @example
 * //returns 1522892170000
 * rangedDate(Date.now() / 1000)
 * @example
 * //returns false
 * rangedDate(Date.now() - 10000, 0.0000001, 0.0000001)
 * @example
 * //returns 1522892160000
 * rangedDate(Date.now() - 10000, 0.000001, 0.000001)
 * @example
 * //returns false
 * rangedDate(10)
 * @example
 * //returns 10
 * const yrSince1970 = new Date().getUTCFullYear() - 1970
 * rangedDate(10, yrSince1970 + 2)
 * @example
 * //returns false
 * rangedDate(Date.now() + 100000000000)
 * @example
 * //returns 1622892170000
 * rangedDate(Date.now() + 100000000000, 0.1, 5)
 * @returns {(number|boolean)} Converted ms or false if outside range.
 */
module.exports = (data, low = 0.5, up = 0.5) => {
  if (data instanceof Date) return data.valueOf()
  if (typeof data == 'number') return check(data, low, up)
  return check(Date.parse(data), low, up) || check(+data, low, up)
}

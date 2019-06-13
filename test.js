/**
 * @author Justin Collier <jpcxme@gmail.com>
 * @license ISC
 * @see {@link http://github.com/jpcx/ranged-date|GitHub}
 */

/* .--------------------------------------------------------------------------,
  /                                  Setup                                   /
 '--------------------------------------------------------------------------' */

'use strict'

/* global describe it */

const rangedDate = require('./')
const cert = require('cert-is')

/* .--------------------------------------------------------------------------,
  /                                Test Data                                 /
 '--------------------------------------------------------------------------' */

const testData = (() => {
  const self = {}
  const now = {}
  const later = {}
  now.obj = new Date()
  now.ms = now.obj.valueOf()
  now.s = ~~(now.ms / 1000)
  now.us = now.ms * 1000
  later.obj = new Date(now.ms + 31536000000)
  later.ms = later.obj.valueOf()
  later.s = ~~(later.ms / 1000)
  later.us = later.ms * 1000
  self.obj = {
    name: 'Date Object',
    now: now.obj,
    expected: now.ms,
    later: later.obj
  }
  self.ms = {
    name: 'Date Milliseconds',
    now: now.ms,
    expected: now.ms,
    later: later.ms
  }
  self.s = {
    name: 'Date Seconds',
    now: now.s,
    expected: now.s * 1000,
    later: later.s
  }
  self.us = {
    name: 'Date Microseconds',
    now: now.us,
    expected: now.ms,
    later: later.us
  }
  self.str = {
    name: 'Date Object String',
    now: now.obj.toString(),
    expected: now.s * 1000,
    later: later.obj.toString()
  }
  self.msStr = {
    name: 'Date Milliseconds String',
    now: String(now.ms),
    expected: now.ms,
    later: String(later.ms)
  }
  self.sStr = {
    name: 'Date Seconds String',
    now: String(now.s),
    expected: now.s * 1000,
    later: String(later.s)
  }
  self.usStr = {
    name: 'Date Microseconds String',
    now: String(now.us),
    expected: now.ms,
    later: String(later.us)
  }
  return self
})()

/* .--------------------------------------------------------------------------,
  /                                  Tests                                   /
 '--------------------------------------------------------------------------' */

describe('Range-Match Tests', () => {
  for (let key in testData) {
    const data = testData[key]
    describe(data.name, () => {
      it('should pass adequate ranges', () => {
        cert(rangedDate(data.now, 0.1, 0.1)).is(data.expected)
        cert(rangedDate(data.now, 15, 1)).is(data.expected)
      })
      it('should fail inadequate ranges', () => {
        cert(rangedDate(data.later, 0.5, 0.5)).is(false)
        cert(rangedDate(data.later, 15, 0.5)).is(false)
      })
    })
  }
})

describe('Exclusion Tests', () => {
  for (let key in testData) {
    const data = testData[key]
    describe(data.name, () => {
      const testCase = selfKey => {
        if (!selfKey) {
          // value should always pass
          it('should pass regardless of exclusions', () => {
            cert(
              rangedDate(data.now, 0.1, 0.1, { us: false, ms: false, s: false })
            ).is(data.expected)
            cert(
              rangedDate(data.now, 0.1, 0.1, { us: true, ms: true, s: true })
            ).is(data.expected)
          })
        } else {
          const goodObj = { us: true, ms: true, s: true }
          const badObj = { us: true, ms: true, s: true }
          goodObj[selfKey] = false
          it('should pass when others are excluded', () => {
            cert(rangedDate(data.now, 0.1, 0.1, goodObj)).is(data.expected)
          })
          it('should fail when self is excluded', () => {
            cert(rangedDate(data.now, 0.1, 0.1, badObj)).is(false)
          })
        }
      }
      if (data.name.match(/milliseconds/i)) {
        testCase('ms')
      } else if (data.name.match(/microseconds/i)) {
        testCase('us')
      } else if (data.name.match(/object/i)) {
        testCase(false)
      } else {
        testCase('s')
      }
    })
  }
})

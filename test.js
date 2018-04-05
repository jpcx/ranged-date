'use strict'
process.env.TZ = 'UTC'

const rangedDate = require('./rangedDate.js')

const ANSI_RED   = '\x1b[31m'
const ANSI_GREEN = '\x1b[32m'
const ANSI_RESET = '\x1b[0m'

const now = ~~(Date.now() / 1000) * 1000
const yrSince1970 = new Date(now).getUTCFullYear() - 1970

console.log(`Using ${now} as argument for current date in ms.`)
console.log('Using ' + process.env.TZ + ' as current timezone.')

console.log('---')

const tests = []

tests.push({
  operate: 'rangedDate(new Date(now))',
  expects: now,
  results: rangedDate(new Date(now))
})
tests.push({
  operate: 'rangedDate(String(new Date(now)))',
  expects: now,
  results: rangedDate(String(new Date(now)))
})
tests.push({
  operate: 'rangedDate(now)',
  expects: now,
  results: rangedDate(now)
})
tests.push({
  operate: 'rangedDate(String(now))',
  expects: now,
  results: rangedDate(String(now))
})
tests.push({
  operate: 'rangedDate(now * 1000)',
  expects: now,
  results: rangedDate(now * 1000)
})
tests.push({
  operate: 'rangedDate(now / 1000)',
  expects: now,
  results: rangedDate(now / 1000)
})
tests.push({
  operate: 'rangedDate(now - 10000, 0.0000001, 0.0000001)',
  expects: false,
  results: rangedDate(now - 10000, 0.0000001, 0.0000001)
})
tests.push({
  operate: 'rangedDate(now - 10000, 0.000001, 0.000001)',
  expects: now - 10000,
  results: rangedDate(now - 10000, 0.000001, 0.000001)
})
tests.push({
  operate: 'rangedDate(10)',
  expects: false,
  results: rangedDate(10)
})
tests.push({
  operate: 'rangedDate(10, ' + (yrSince1970 + 2) + ')',
  expects: 10,
  results: rangedDate(10, yrSince1970 + 2)
})
tests.push({
  operate: 'rangedDate(now + 100000000000)',
  expects: false,
  results: rangedDate(now + 100000000000)
})
tests.push({
  operate: 'rangedDate(now + 100000000000, 0.1, 5)',
  expects: now + 100000000000,
  results: rangedDate(now + 100000000000, 0.1, 5)
})

const errors = []
for (let test of tests) {
  console.log('Operation: ' + test.operate)
  if (test.expects !== test.results) {
    console.log('Expected:  ' + ANSI_RED + test.expects + ANSI_RESET)
    console.log('Result:    ' + ANSI_RED + test.results + ANSI_RESET)
    errors.push(test.operate)
  } else {
    console.log('Expected:  ' + test.expects)
    console.log('Result:    ' + test.results)
  }
  console.log('---')
}

if (errors.length > 0) {
  console.log(ANSI_RED, '\n[FAIL]' , ANSI_RESET)
  for (let e of errors) {
    console.log('Bad: ' + e)
  }
} else {
  console.log(ANSI_GREEN, '\n[PASS]', ANSI_RESET)
}

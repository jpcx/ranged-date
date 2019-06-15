/**
 * Formats documentation.js generated Table of Contents for brevity. Fixes source code links and commit-dependent hash links.
 *
 * @private
 * @author  Justin Collier <jpcxist@gmail.com>
 * @license MIT
 * @see {@link http://github.com/jpcx/ranged-date|GitHub}
 */

const fs = require('fs')
const path = require('path')

const pkgVer = require('../package.json').version
const README_PATH = path.join(__dirname, '../README.md')

const README = fs.readFileSync(README_PATH, 'utf8').split('\n')

let section = ''
for (let i = 0; i < README.length; i++) {
  if (README[i].match(/^#+/m)) {
    // Set the section identifier (heading)
    section = README[i].match(/#+ (.*)/m)[1]
  }

  if (section === 'Table of Contents') {
    // Remove Table of Contents Parameters/Properties/Examples
    if (README[i].match(/^ +- +\[(?:Parameters|Properties|Examples)]\(/m)) {
      // Splice README and decrement i
      README.splice(i--, 1)
    }
  } else {
    // Fix source code links
    let sourceCodeMatch
    const updateMatch = () => {
      sourceCodeMatch = README[i].match(
        /^\[.*?.js:(\d+)-(\d+)]\(https:\/\/github.com\/.*?#L(\d+)-L(\d+)/m
      )
    }
    updateMatch()
    if (sourceCodeMatch) {
      // Line is a source code link

      if (sourceCodeMatch[3] === sourceCodeMatch[4]) {
        // Unnecessary from and to line distinction; merge into one line
        README[i] = README[i].replace(
          /^(\[.*?.js:)(\d+)-(\d+)(]\(https:\/\/github.com\/.*?#L)(\d+)-L(\d+)/m,
          '$1$5$4$5'
        )
        updateMatch()
      } else {
        if (sourceCodeMatch[1] !== sourceCodeMatch[3]) {
          // Invalid source code link; match with github
          README[i] = README[i].replace(
            /^(\[.*?.js:)(\d+)/m,
            `$1${sourceCodeMatch[3]}`
          )
          updateMatch()
        }
        if (sourceCodeMatch[2] !== sourceCodeMatch[4]) {
          // Invalid source code link; match with github
          README[i] = README[i].replace(
            /^(\[.*?.js:)(\d+)-(\d+)/m,
            `$1$2-${sourceCodeMatch[4]}`
          )
          updateMatch()
        }
      }
      // fix blob/hash/ -> blob/tag/
      README[i] = README[i].replace(
        /\/blob\/[0-9a-z]+?\//g,
        '/blob/' + pkgVer + '/'
      )
      updateMatch()
    }
  }
}

// Write the new README
fs.writeFileSync(README_PATH, README.join('\n'))

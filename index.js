const { inspect } = require('util')
const wordList = require('./wordlist.json')

/**
 * Acronym Resolver
 *
 * Resolve acronyms randomly
 * @param {String} input An acronym (e.g. SMS, BBC)
 * @returns {String} randomly resolved acronym
 */
function acronyms (input = 'EXAMPLE') {
  const args = inspect(input)
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase()
    .split('') // filter non-letter characters

  return generateOutput(args)
}

function generateOutput (args) {
  const acronym = findWords(args)
  for (const i in acronym) {
    acronym[i] = acronym[i].charAt(0).toUpperCase() + acronym[i].slice(1).toLowerCase() // Uppercase every first letter
  }
  return acronym.join(' ')
}

/**
 * Get a word for every letter in the input
 * @param {String} inputString The input to find an acronym for.
 */
function findWords (inputString) {
  const output = []

  for (const letter in inputString) {
    const l = inputString[letter].toLowerCase()
    output.push(wordList[l][~~(Math.random() * wordList[l].length)])
  }
  return output
}

module.exports = acronyms

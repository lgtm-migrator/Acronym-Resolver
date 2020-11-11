#!/usr/bin/env node
const resolver = require('./acronym.js')

const word = process.argv.slice(2)

// eslint-disable-next-line no-console
console.log(resolver(word))

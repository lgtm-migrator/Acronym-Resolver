# Acronym Resolver

<div>
	<p align="center">
		<a href="https://github.com/TMUniversal/Acronym-Resolver/blob/master/package.json#L3">
			<img src="https://img.shields.io/github/package-json/v/TMUniversal/Acronym-Resolver?style=flat" />
		</a>
		<a href="https://app.codacy.com/manual/Uni/Acronym-Resolver?utm_source=github.com&utm_medium=referral&utm_content=TMUniversal/Acronym-Resolver&utm_campaign=Badge_Grade_Settings">
			<img src="https://api.codacy.com/project/badge/Grade/60b7ec455e754dbdaf93e38673dfb008" />
		</a>
		<a href="https://tmuniversal.eu/redirect/patreon">
			<img src="https://img.shields.io/badge/Patreon-support_me-fa6956.svg?style=flat&logo=patreon" />
		</a>
		<a href="https://www.npmjs.com/package/acronymresolver">
			<img src="https://img.shields.io/npm/dt/acronymresolver" />
		</a>
		<br />
		<a href="https://www.npmjs.com/package/acronymresolver">
			<img src="https://img.shields.io/bundlephobia/min/acronymresolver?label=packge%20size" />
		</a>
		<a href="https://github.com/TMUniversal/Acronym-Resolver/issues">
			<img src="https://img.shields.io/github/issues/TMUniversal/Acronym-Resolver.svg?style=flat">
		</a>
		<a href="https://github.com/TMUniversal/Acronym-Resolver/graphs/contributors">
			<img src="https://img.shields.io/github/contributors/TMUniversal/Acronym-Resolver.svg?style=flat">
		</a>
		<a href="https://github.com/TMUniversal/Acronym-Resolver/blob/stable/LICENSE.md">
			<img src="https://img.shields.io/github/license/TMUniversal/Acronym-Resolver.svg?style=flat">
		</a>
	</p>
</div>

[Acronym Resolver](https://github.com/TMUniversal/Acronym-Resolver) can turn acronyms into randomly picked words.

Example: `TEST` would turn into four words corresponding to a letter in `TEST`.
These words are randomized, but here is an example: `TEST` -> `The Encyclopedia Shoes Textile`

This is entirely meant for fun.

## Installation

```sh
npm install --save acronymresolver
```

This will install the module into your project

## Usage

### In your program

```js
const acronymResolver = require('acronymresolver')

console.log(acronymResolver('<your text>'))
```

The acronym-resolver module returns a function that accepts one argument.
### Command Line

In a terminal of your choice: `node cli.js [your text]`


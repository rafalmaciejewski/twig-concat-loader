# twig-concat-loader

[![npm version](https://badge.fury.io/js/twig-concat-loader.svg)](https://badge.fury.io/js/twig-concat-loader)
[![Build Status](https://travis-ci.com/rafalmaciejewski/twig-concat-loader.svg?branch=master)](https://travis-ci.com/rafalmaciejewski/twig-concat-loader)
[![Dependencies](https://img.shields.io/david/rafalmaciejewski/twig-concat-loader.svg)](https://david-dm.org/rafalmaciejewski/twig-concat-loader)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://badges.mit-license.org)

---

*This plugin is under development!*

---

This loader addresses a specific use case when you're using [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
with [html-loader](https://github.com/webpack-contrib/html-loader) to output twig templates. This templates
can be compiled on a server with additional data and webpack is used to preprocess them (to inline assets, generate checksums etc.).

This loader will find `include` usage in your processed twig files and will merge all templates into one.

### Installation

```bash
npm install twig-concat-loader --save-dev
```

## Usage

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(twig|html)$/i,
        use: [
          'html-loader',
          'twig-concat-loader',
        ],
      },
    ],
  },
};
```

# gatsby-plugin-web-font-loader

A Gatsby plugin to asynchronously load webfonts using [Web Font Loader](https://github.com/typekit/webfontloader). Can load fonts from [Google Fonts](http://www.google.com/fonts/), [Typekit](http://www.typekit.com/),  [Fonts.com](http://www.fonts.com/), and [Fontdeck](http://fontdeck.com/), as well as self-hosted web fonts.

## Installation

With npm:

```bash
npm install --save gatsby-plugin-web-font-loader
```

Or with Yarn:

```bash
yarn add gatsby-plugin-web-font-loader
```

## Usage

In your `gatsby-config.js` file, load in the plugin along with which web fonts to load. For example, loading Google Fonts could look like this:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    }
  ]
}
```

For a list of all available options, consult the [Web Font Loader readme](https://github.com/typekit/webfontloader).
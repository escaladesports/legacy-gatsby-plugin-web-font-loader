const WebFont = require('webfontloader')

exports.onInitialClientRender = (a, options) => {
	options = { ...options }
	delete options.plugins
	WebFont.load(options)
}
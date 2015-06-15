// IMPORTS /////////////////////////////////////////////////////////////////////

var ngAnnotate  = require('ng-annotate');

// GOBBLE GOBBLE GOBBLE ////////////////////////////////////////////////////////

function gobbleAnnotate(input, opts) {
	opts = opts || {};

	if (!('map' in opts))
		opts.map = true;

	if (!('add' in opts) && !('remove' in opts))
		opts.add = true;

	var res = ngAnnotate(input, opts);

	return {
		code: res.src,
		map: res.map
	};
};

gobbleAnnotate.defaults = {
	accept: [ '.js', '.es', '.es5', '.es6' ]
};

module.exports = gobbleAnnotate;

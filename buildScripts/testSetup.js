// This files is not transpiled so it most use commonjs or es5

//register babel to transpile before our tests run
require('babel-register')();

// disable webpack features that mocha does not understand
require.extensions['.css'] = function() {};


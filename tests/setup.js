require('jsdom-global')();

// make expect available globally
global.expect = require('expect');

global.toast = {
    error() {
    },
    success() {
    },
}

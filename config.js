'use strict';

var convict = require('convict');

var config = convict({
        port: { default: 1337, format: 'port', env: 'PORT' },
        images: { default: 'http://dl.dropboxusercontent.com/u/3596778/blog/', env: 'IMAGE_SOURCE' }
});

config.validate();

exports = module.exports = config;
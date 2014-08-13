'use strict';

var convict = require('convict');

var config = convict({
        port: { default: 1337, format: 'port', env: 'PORT' },
        images: { default: 'http://assets.mshanken.com/', env: 'IMAGE_SOURCE' }
});

config.validate();

exports = module.exports = config;

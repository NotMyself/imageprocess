'use strict';

var convict = require('convict');

var config = convict({
        port: { default: 80, format: 'port', env: 'PORT' },
        images: { default: 'http://assets.mshanken.com/', env: 'IMAGE_SOURCE' },
        mw_images: { default: 'https://wineapi.s3.amazonaws.com/', env: 'MW_IMAGE_SOURCE' }
});

config.validate();

exports = module.exports = config;

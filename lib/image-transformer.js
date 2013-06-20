var gm = require('gm').subClass({ imageMagick: true });

exports = module.exports = function(stream, options) {
    if(options.q) {
        return gm(stream)
                .compress('JPEG')
                .quality(options.q)
                .stream();
    } else {
        return gm(stream).stream();
    }
};
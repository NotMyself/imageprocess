var gm = require('gm').subClass({ imageMagick: true }),
    _ = require('lodash');

var transformMap = {
    // route example: /d/<img id>?w=100&h=100
    w: function(item, options) {
        return item.resize(options.w, options.h);
    },
    // route example: /d/<img id>?s=50
    s: function(item, options) {
        return item.resize(options.s, null, '%');
    },
    // route example: /d/<img id>?c=true&q=50
    q: function(item, options){
        return item
                .compress('JPEG')
                .quality(options.q);

    },
    default: function(item){ return item;}
};

exports = module.exports = function(stream, options) {
    var item = gm(stream);

    _.each(_.keys(options), function(key){
        var transform = transformMap[key] || transformMap['default'];
        item = transform(item, options);
    });

    return item.stream();
};
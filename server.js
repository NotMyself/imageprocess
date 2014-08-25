var express = require('express'),
    request = require('request'),
    transform = require('./lib/image-transformer'),
    config  = require('./config'),
    app     = express(),
    server;

app.get('/mu-79d650c0-34ab024a-0c011143-8d223b6f', function( req, res ){

        res.send('42');

});

app.get(/d\/(.+)/, function(req, res) {
    var url = config.get('images') + req.params[0];
    request({ url: url })
        .on('response', function(image_stream) {
            transform(image_stream, req.query)
            .pipe(res);
        });
});

app.listen(config.get('port'), function(){
    console.log('server started on port ' + config.get('port'));
});

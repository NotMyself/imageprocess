var express = require('express'),
    request = require('request'),
    config  = require('./config'),
    app     = express(),
    server;

app.get(/d\/(.+)/, function(req, res) {
    var url = config.get('images') + req.params[0];
    request({ url: url })
    .pipe(res)
});

app.listen(config.get('port'), function(){
    console.log('server started on port ' + config.get('port'));
});
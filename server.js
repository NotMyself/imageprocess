var toobusy = require('toobusy-js'),
    express = require('express'),
    request = require('request'),
    transform = require('./lib/image-transformer'),
    config  = require('./config'),
    app     = express(),
    server;

// middleware which blocks requests when we're too busy
app.use(function(req, res, next) {
  if (toobusy()) {
    res.send(503, "The server is busy right now, please try your request again.");
  } else {
    next();
  }
});

app.get(/d\/(.+)/, function(req, res) {
    var url = config.get('images') + req.params[0];
    request(
        { uri: url }
        , function (error, response, body) {
            if(response.statusCode !== 200) {
                res.status(response.statusCode).send('not-found');
            }
        }
    )
    .on('response', function(image_stream) {
        transform(image_stream, req.query)
        .pipe(res);
    });
});

app.listen(config.get('port'), function(){
    console.log('server started on port ' + config.get('port'));
});

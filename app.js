const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

var webserver = app.listen(process.env.PORT || 3000, function () {
   console.log('Example app listening on port %s!',         webserver.address().port);
});


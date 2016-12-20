var express = require('express');

//create an app

var app = express();

const PORT = process.env.PORT || 3000;

app.use(function(){
  if(req.headers['x-forwarded-proto']==='http'){
    next();
  } else {
    res.redirect('http://'+req.hostname+ req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('express server is up on port ' + PORT);
});

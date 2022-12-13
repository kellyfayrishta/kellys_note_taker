//Import express
const express = require("express");
const apiRoutes =  require('./routes/backend')
const frontEndRoutes =  require('./routes/frontend')

//Use express to instantiate/create a copy of a web server
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));

// app.use('/api', apiRoutes)
app.use('/', frontEndRoutes);


app.listen(PORT, () => console.log("listening on port " + PORT));

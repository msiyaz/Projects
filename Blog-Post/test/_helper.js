const mongoose = require('mongoose')

mongoose.connect('mongodb://locahost/testDabase', {useNewUrlParser : true})

mongoose.connection
.once('open', () => console.log("Connected"))
.on('error', error => {
    console.log(error)
})
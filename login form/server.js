// backend server
/* be sure to install: express
						mongoose
						body-parser
						expressValidator
						cors
*/
const path = require('path')
const express = require('express');
const cors = require('cors')

// app
const app = express();
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(cors());

// import routes
const logRoutes = require('./backend/logRoutes.js');

// routes middleware 
app.use('/api', logRoutes);

// Initialize DB
require('./backend/initdb')();  

//port connection
const port = 5000;
app.listen(port, () => {
    console.log('Server listening on 5000');
})
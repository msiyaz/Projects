const express = require('express');
const router = express.Router();

const { change_pass,
		login,
        register} = require('./controller.js');
        
router.put('/change-password', change_pass);

router.get('/login', login);

router.post('/register', register);

module.exports = router;
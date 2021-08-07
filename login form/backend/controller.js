
const LoginDets = require('./log.model.js');

// change password 
exports.change_pass = async (req, res) => {
    const { token, newpassword: plainTextPassword } = req.body
    
        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({ status: 'error', error: 'Invalid password' })
        }
    
        if (plainTextPassword.length < 5) {
            return res.json({
                status: 'error',
                error: 'Password too small. Should be atleast 6 characters'
            })
        }
    
        try {
            const user = jwt.verify(token, JWT_SECRET)
    
            const _id = user.id
    
            const password = await bcrypt.hash(plainTextPassword, 10)
    
            await LoginDets.updateOne(
                { _id },
                {
                    $set: { password }
                }
            )
            res.json({ status: 'ok' })
        } catch (error) {
            console.log(error)
            res.json({ status: 'error', error: ';))' })
        }
    }
    
    exports.login = async (req, res ) => {
        const { username, password } = req.body
        const user = await LoginDets.findOne({ username }).lean()
    
        if (!user) {
            return res.json({ status: 'error', error: 'Invalid username/password' })
        }
    
        if (await bcrypt.compare(password, user.password)) {
            // the username, password combination is successful
    
            const token = jwt.sign(
                {
                    id: user._id,
                    username: user.username
                },
                JWT_SECRET
            )
    
            return res.json({ status: 'ok', data: token })
        }
    
        res.json({ status: 'error', error: 'Invalid username/password' })
    }
    
    exports.register = async (req, res) => {
        const { username, password: plainTextPassword } = req.body
    
        if (!username || typeof username !== 'string') {
            return res.json({ status: 'error', error: 'Invalid username' })
        }
    
        if (!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({ status: 'error', error: 'Invalid password' })
        }
    
        if (plainTextPassword.length < 5) {
            return res.json({
                status: 'error',
                error: 'Password too small. Should be atleast 6 characters'
            })
        }
    
        const password = await bcrypt.hash(plainTextPassword, 10)
    
        try {
            const response = await LoginDets.create({
                username,
                password
            })
            console.log('User created successfully: ', response)
        } catch (error) {
            if (error.code === 11000) {
                // duplicate key
                return res.json({ status: 'error', error: 'Username already in use' })
            }
            throw error
        }
    
        res.json({ status: 'ok' })
    }
const User = require('../model/User');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try{
        const { user, pwd, pwdRe, eml } = req.body;
        if (!user || !pwd || !pwdRe || !eml ) {
            console.log("email/password/email required")
            return res.status(400).json({"message": "Username/password required"})}
        if(pwd !== pwdRe) {
            console.log("Passwords don't match")
            return;
        }
        const duplicateUsername = await User.findOne({"username": user})
        if(duplicateUsername){
            console.log("Username/email is already registered!");
            return res.sendStatus(401);
        }
        
        const newUser = new User({
            username: user,
            email: eml,
            password: pwd,
            "roles": ["user"],
            "status": "active",
            "refreshToken": "12345"
        })

        newUser.save()
            .then(doc => {
                console.log('User created successfully: ', doc);
            })
            .catch(err => {
                console.log('Error creating user: ', err);
            })
        window.location.reload();
    } catch (err) {
        console.log("Error creating user user: ", err)
        res.json({"Error": "Failed to authenticate user"})
    }
    
}

module.exports = register;
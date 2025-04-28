const User = require('../model/User');
const bcrypt = require('bcrypt');

const authUser = async (req, res) => {
    try{
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({"message": "Username/password required"})
    
        const foundUser = await User.findOne({ "username": username }).exec();
        if (!foundUser) return res.sendStatus(401);
    
        const match = await bcrypt.compare(password, foundUser.password);
    
        if(match) {1
            console.log(foundUser)
            res.json({"You are logged in! ": foundUser.username})
        }
    } catch (err) {
        console.log("Error authenticating user: ", err)
        res.json({"Error": "Failed to authenticate user"})
    }
    
}

module.exports = authUser;
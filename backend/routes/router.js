const express = require('express');
const app = express();
const router = express.Router()
const authUser = require('../controllers/authController')
const register = require('../controllers/registerController')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
router.get('/', ()=> {
    console.log("Got the router!")
})

router.post('/auth', authUser);
router.post('/register', register)

module.exports = router;
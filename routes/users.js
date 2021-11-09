const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

router.post("/register", async (req, res) => {
    try {
        console.log(req.body)
        //generate password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            surname: req.body.surname,
            otherName: req.body.otherName
        })

        //save user
        const user = await newUser.save()
        res.status(200).json(user)
        console.log(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.post("/login", async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).json("User not found")


        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).json("wrong password")
        res.status(200).json(user)
    } catch (err) {
        console.log(err, "React")
        res.status(500).json(err)
    }
})




module.exports = router
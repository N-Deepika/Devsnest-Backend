const User = require('../models/user');
// check if email already exists
// password Hash
// email lowercase
// save
const bcrypt = require('bcrypt');
const saltRounds = 10;

const register = async(req, res) => {
    const { email, password } = req.body;
    try {
        const alreadyExists = await User.findOne({ where: { email } });
        if (alreadyExists) {
            res.status(401).send("Email already exists");
        } else {
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);

            const newUser = new User({
                email: email.toLowerCase(),
                password: hash,
            });
            const savedUser = await newUser.save();
            res.status(201).send("User Registered");
        }
    } catch (err) {
        console.log("Error", err);
        res.status(500).send("Something Went Wrong");
    }
};


module.exports = register;
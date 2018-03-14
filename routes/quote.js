const User = require('../models/user');
const Quote = require('../models/quote');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const config = require('../config/db');
module.exports = (router) => {
    /*


    router.post('/loginAdmin', function (req, res) {
        if (!req.body.username) {
            res.json({ success: false, message: 'Pseudo provided' });
        } else {
            if (!req.body.password) {
                res.json({ success: false, message: 'Password provided' });
            } else {
                Admin.findOne({ username: req.body.username.toLowerCase() }, (err, admin) => {

                    if (err) {
                        res.json({ success: false, message: err });
                    } else {

                        if (!admin) {
                            res.json({ success: false, message: 'No user has been found ' });
                        } else {

                            const validPassword = admin.comparePassword(req.body.password);

                            if (!validPassword) {
                                res.json({ success: false, message: 'Incorrect password' });
                            } else {

                                const token = jwt.sign({ adminId: admin._id }, config.secret, { expiresIn: '24h' });
                                res.json({ success: true, message: 'Success!', token: token, user: admin.username });
                            }
                        }
                    }
                });
            }
        }
    });


    router.use((req, res, next) => {
        
        const token = req.headers['authorization'];
        if (!token) {
            res.json({ success: false, message: 'Please Login' });
            next();
        } else {
            jwt.verify(token, config.secret, (err, decoded) => {
                if (err) {
                    res.json({ success: false, message: 'Please Login: ' + err });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    });

    */
    return router;
}
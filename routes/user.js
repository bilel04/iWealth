const User = require('../models/user');
const Admin = require('../models/admin');
const config = require('../config/db');
const jwt = require('jsonwebtoken');
module.exports = (router) => {
    router.post('/register', (req, res) => {
        if (!req.body.email) {
            res.json({ success: false, message: 'Email provided' });
        }
        else {
            if (!req.body.username) {
                res.json({ success: false, message: 'Username provided' });
            }
            else {
                if (!req.body.password) {
                    res.json({ success: false, message: 'Password provided' });
                }
                else {
                    let user = new User({
                        email: req.body.email.toLowerCase(),
                        username: req.body.username.toLowerCase(),
                        password: req.body.password,
                    });
                    user.save((err) => {
                        if (err) {
                            if (err.code == 11000) {
                                console.log(err);
                                res.json({ success: false, message: 'Please choose another username or email' });
                            }
                            else {
                                if (err.errors) {
                                    if (err.errors.email) {
                                        res.json({ success: false, message: err.errors.email.message });
                                    } else {
                                        if (err.errors.username) {
                                            res.json({ success: false, message: err.errors.username.message });
                                        } else {
                                            if (err.errors.password) {
                                                res.json({ success: false, message: err.errors.password.message });
                                            } else {
                                                res.json({ success: false, message: err });
                                            }
                                        }
                                    }
                                } else {
                                    res.json({ success: false, message: 'An error has been occured, please try again!' })
                                }
                            }
                        } else {
                            res.json({ success: true, message: 'You are registered successfully!' })
                        }
                    });
                }
            }
        }
    });

    router.put('/newQuote', (req, res) => {
        if (!req.body.user) {
            res.json({ success: false, message: 'User provided' });
        } else {
            if (!req.body.title) {
                res.json({ success: false, message: 'Title provided' });
            }
            else {
                if (!req.body.desc) {
                    res.json({ success: false, message: 'Desc provided' });
                } else {
                    User.findOne({ username: req.body.user }, (err, user) => {
                        if (err) {
                            res.json({ success: false, message: err });
                        } else {

                            if (!user) {
                                res.json({ success: false, message: 'No user has been found' });
                            } else {
                                user.quotes.push({
                                    title: req.body.title,
                                    desc: req.body.desc,
                                });
                                user.save((err) => {
                                    if (err) {
                                        res.json({ success: false, message: err });
                                    } else {
                                        res.json({ success: true, message: 'The quote is sent' });
                                    }
                                });

                            }
                        }
                    });

                }
            }
        }

    });


    router.post('/login', function (req, res) {


        if (!req.body.username) {
            res.json({ success: false, message: 'Username provided' });
        } else {
            if (!req.body.password) {
                res.json({ success: false, message: 'Password provided' });
            } else {
                User.findOne({ username: req.body.username }, (err, user) => {

                    if (err) {
                        res.json({ success: false, message: err });
                    } else {

                        if (!user) {
                            res.json({ success: false, message: 'No user has been found' });
                        } else {
                            const validPassword = user.comparePassword(req.body.password);

                            if (!validPassword) {
                                res.json({ success: false, message: 'Incorrect password' });
                            } else {
                                const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '24h' });
                                res.json({ success: true, message: 'Success!', token: token, user: user });

                            }
                        }
                    }
                });
            }
        }
    });

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


    router.get('/allUsers', (req, res) => {

        User.find({}, (err, users) => {

            if (err) {
                res.json({ success: false, message: err });
            } else {
                if (!users) {
                    res.json({ success: false, message: 'No users had been found' });
                } else {
                    res.json({ success: true, users: users });
                }
            }
        }).sort({ '_id': -1 });
    });

    router.get('/allAdmins', (req, res) => {

        Admin.find({}, (err, admins) => {

            if (err) {
                res.json({ success: false, message: err });
            } else {
                if (!admins) {
                    res.json({ success: false, message: 'No admins had been found' });
                } else {
                    res.json({ success: true, admins: admins });
                }
            }
        }).sort({ '_id': -1 });
    });

    router.use((req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) {
            res.json({ success: false, message: 'Please connect to the app' });

        } else {

            jwt.verify(token, config.secret, (err, decoded) => {

                if (err) {
                    res.json({ success: false, message: 'Please connect to the app' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    });

    router.post('/registerAdmin', (req, res) => {
            if (!req.body.username) {
                res.json({ success: false, message: 'Username provided' });
            }
            else {
                if (!req.body.password) {
                    res.json({ success: false, message: 'Password provided' });
                }
                else {
                    let admin = new Admin({                      
                        username: req.body.username.toLowerCase(),
                        password: req.body.password,
                    });
                    admin.save((err) => {
                        if (err) {
                            if (err.code == 11000) {
                                console.log(err);
                                res.json({ success: false, message: 'Please choose another username' });
                            }
                            else {
                                if (err.errors) {
                                        if (err.errors.username) {
                                            res.json({ success: false, message: err.errors.username.message });
                                        } else {
                                            if (err.errors.password) {
                                                res.json({ success: false, message: err.errors.password.message });
                                            } else {
                                                res.json({ success: false, message: err });
                                            }
                                        }
                                    
                                } else {
                                    res.json({ success: false, message: 'An error has been occured, please try again!' })
                                }
                            }
                        } else {
                            res.json({ success: true, message: 'You are registered successfully!' })
                        }
                    });
                }
            }
    });


    router.get('/profile', (req, res) => {

        User.findOne({ _id: req.decoded.userId }).select('username email quotes').exec((err, user) => {

            if (err) {
                res.json({ success: false, message: err });
            } else {

                if (!user) {
                    res.json({ success: false, message: 'User does not exist' });
                } else {
                    res.json({ success: true, user: user });
                }
            }
        });
    });

    router.put('/updateQuote', (req, res) => {
        if (!req.body) {
            res.json({ success: false, message: 'No quote has been sent' });
        }
        else {
            User.find({ _id: req.decoded.userId }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    if (!user) {
                        res.json({ success: false, message: 'You need to authenticate' });
                    } else {
                        User.findOne({ 'quotes._id': req.body._id }, (err, quote) => {
                            if (!quote) {
                                res.json({ success: false, message: 'Expired quote' });
                            } else {
                                var i = 0;
                                while (i < quote.quotes.length) {
                                    if (quote.quotes[i]._id == req.body._id) {
                                        quote.quotes[i].status = true
                                        quote.save((err) => {
                                            if (err) {
                                                res.json({ success: false, message: err });
                                            } else {
                                                res.json({ success: true, message: 'You have declined this offer' });
                                            }
                                        });
                                        break;
                                    }

                                    i++;
                                }

                            }
                        });
                    }
                }
            });
        }
    });
    router.put('/updateUser', (req, res) => {

        if (!req.body._id) {
            res.json({ success: false, message: 'User provided' });
        } else {

            User.findOne({ _id: req.body._id }, (err, user) => {

                if (err) {
                    res.json({ success: false, message: 'Invalid, please try again' });
                } else {

                    if (!user) {
                        res.json({ success: false, message: 'No user has been found' });
                    } else {
                        user.username = req.body.username;
                        user.email = req.body.email;
                        user.save((err) => {
                            if (err) {
                                if (err.errors) {
                                    res.json({ success: false, message: 'Not saved yet, try again' });
                                } else {
                                    res.json({ success: false, message: err });
                                }
                            } else {
                                res.json({ success: true, message: 'Saved' });
                            }
                        });
                    }
                }
            });
        }
    });

    router.delete('/deleteUser/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'User provided' });
        }
        else {
            User.findOne({ _id: req.params.id }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: 'Invalid' });
                } else {
                    if (!user) {
                        res.json({ success: false, message: 'No user has been found' });
                    } else {
                        user.remove((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            }
                            else {
                                res.json({ success: true, message: 'User deleted' });
                            }
                        });
                    }
                }
            });
        }
    });


    router.put('/updateAdmin', (req, res) => {

        if (!req.body._id) {
            res.json({ success: false, message: 'User provided' });
        } else {

            Admin.findOne({ _id: req.body._id }, (err, admin) => {

                if (err) {
                    res.json({ success: false, message: 'Invalid, please try again' });
                } else {

                    if (!admin) {
                        res.json({ success: false, message: 'No user has been found' });
                    } else {
                        admin.username = req.body.username;
                        admin.save((err) => {
                            if (err) {
                                if (err.errors) {
                                    res.json({ success: false, message: 'Not saved yet, try again' });
                                } else {
                                    res.json({ success: false, message: err });
                                }
                            } else {
                                res.json({ success: true, message: 'Saved' });
                            }
                        });
                    }
                }
            });
        }
    });

    router.delete('/deleteAdmin/:id', (req, res) => {
        if (!req.params.id) {
            res.json({ success: false, message: 'User provided' });
        }
        else {
            Admin.findOne({ _id: req.params.id }, (err, admin) => {
                if (err) {
                    res.json({ success: false, message: 'Invalid' });
                } else {
                    if (!admin) {
                        res.json({ success: false, message: 'No user has been found' });
                    } else {
                        admin.remove((err) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            }
                            else {
                                res.json({ success: true, message: 'User deleted' });
                            }
                        });
                    }
                }
            });
        }
    });


    return router;
}
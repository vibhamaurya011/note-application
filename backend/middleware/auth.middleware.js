const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        jwt.verify(token, "masai", (err, decoded) => {
            if (decoded) {
                req.body.userID=decoded.userID
                req.body.name=decoded.name
                next();
            } else {
                res.status(403).json({ "msg": "You are not authorized!" });
            }
        });
    } else {
        res.status(401).json({ "msg": "Please log in!" });
    }
};

module.exports = { auth };

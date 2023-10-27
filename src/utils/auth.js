const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) { // para que serve o next
    const token = req.headers['authorization'];
    if (!token) {
        console.log('aqui verifyJWT')
        return res.status(401).json({auth: false, message: 'No token provided'});
    } 
    console.log(token)
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) {
            console.log(err);
            return res.status(500).json({auth: false, message: 'Auth failed'});
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = {
    verifyJWT
};
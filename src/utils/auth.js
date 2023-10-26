function verifyJWT(req, res, next) { // para que serve o next
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({auth: false, message: 'No token provided'});
    } 

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) {
            return res.status(500).json({auth: false, message: 'Auth failed'});

            req.userId = decoded.id;
            next();
        }
    });
}

module.exports = {
    verifyJWT
};
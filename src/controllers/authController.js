const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    if (req.body.user == 'Luiz' && req.body.pwd == '123') {
        const id = 1; // puxar do mongo esse id e entender melhor o q ele é
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300
        });
        return res.json({ auth: true, token: token});
    }
    res.status(500).json({message: 'Auth Failed'});
}

const logout = async (req, res) => {
    res.json({ auth: false, token: null});
}

module.exports = {
    login,
    logout
}
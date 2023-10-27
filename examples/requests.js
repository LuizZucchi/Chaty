const jwt = require('jsonwebtoken');

// Is there a way to use arrow function here and call then whenever I want?
function fetchMessages() {
    fetch('http://localhost:3000/messages', {
        method: 'POST',
        body: JSON.stringify({
            name: "Luiz",
            message: "teste"
        }),
        headers: {
            authorization: "mysecret"
        }
    }).then((response) => console.log(response));
}

function fetchLogin() {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify({
            user: "Luiz",
            pwd: "123"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => console.log(response.userId));
}


fetchLogin()
//fetchMessages()
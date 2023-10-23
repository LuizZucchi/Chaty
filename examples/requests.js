fetch('http://localhost:3000/messages', {
    method: 'POST',
    body: JSON.stringify({
        name: "Luiz",
        message: "teste"
    })
}).then((response) => console.log(response));
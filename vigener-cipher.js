const express = require('express');
const {Cipher, Decipher} = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const password = '123';

app.get('/encode/:text', (req, res) => {
    res.send(`${Cipher(password).crypt(req.params.text)}`);
});
app.get('/decode/:text', (req, res) => {
    res.send(`${Decipher(password).crypt(req.params.text)}`);
});

app.listen(port, () => {
    console.log(`We are live on ${port}`);
});

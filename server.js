const express = require('express');
const app = express();
const port = 8000;

app.get('/:text', (res, req) => {
    req.send(`${res.params.text}`);
});

app.listen(port, () => {
    console.log(`We are live on ${port}`);
});
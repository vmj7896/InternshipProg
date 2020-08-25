const express = require('express');
const app = express();
const port = 8900;

app.get('/',(req,res) => {
    res.status(200).send("Api is Running")
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
});
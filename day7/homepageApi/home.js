const express = require('express');
const app = express();
const port = 8900;

app.get('/',(req,res) => {
    //status(200) means things are working.
    res.status(200).send("This is my home page")
});

app.get('/about',(req,res) => {
    res.send('This is about page')
})


app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
});
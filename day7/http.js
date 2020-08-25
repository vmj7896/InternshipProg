var http = require('http');

var serve = http.createServer(function(req,res)
{
    res.write('<h1> Hi to node JS</h1>')
    res.end()
})

serve.listen(3400);

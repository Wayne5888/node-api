const express = require('express')
const app = express()

const port = 3000;

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)  
});

app.get('/', function(req, res){
    res.send('Welcome to api')
});


app.get('/getRequest', function(req, res){
    res.send('This is GET request api')
});

app.get('/getJson', function(req, res){
    res.send({"json": "sample"})
});

app.use(express.urlencoded({
    extended: true
}));

app.post('/postRequest', function(req, res){
    var body = req.body;
    console.log(req.body);  
    res.send(req.body.foo)
});

app.post('/postJson', express.json(), function(req, res){
    var body = req.body;
    console.log(body);
    if(!body.field1 || !body.field2){
        return res.status(400).json({error: 'field 1 and field 2 is required !'});
    }
    return res.status(201).json(body)
});











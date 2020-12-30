//chunk1
const express = require('express');
const sendMail = require('./mail');
const app = express();
const path = require('path');
const log = console.log;
app.use(express.static(__dirname));
var port =process.env.PORT || 8080;



//chunk2
//data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email',(req,res) =>{
    //onsole.log('Data: ', req.body.paname);
    var text= 'Dear '+req.body.paname+',\n'+req.body.chname+'\'s trail class at '+req.body.v3+' on '+req.body.v2+' for '+req.body.v1+' has been successfully booked.';
    var gmail= req.body.mail;
    console.log(text,gmail);
    sendMail(gmail, text, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});
app.listen(port, () => log('on server PORT',8080));
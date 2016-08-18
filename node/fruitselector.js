var http = require('http');
http.createServer(function (req,res){
    console.log("[200] "+req.method+" to "+req.url);

    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");

    setTimeout(function(){
        var origin = req.headers["origin"];
        if(origin.indexOf("localhost:63342") > -1){
            res.setHeader("Access-Control-Allow-Origin",origin)
        }
        res.write('<html><head><title>Fruit Total</title></head><body>');
        res.write('<p>');
        res.write('You selectd '+req.url.substring(1));
        res.write('</p></body></html>');
        res.end();
    },3000);


}).listen(8080);
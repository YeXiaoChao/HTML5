var http = require('http');
var querystring = require('querystring');

function writeResponse(res,data){
    var total = 0;
    for(fruit in data){
        total += Number(data[fruit]);
    }
    res.writeHead(200,"OK",{
        "Content-Type":"text/html",
        "Access-Control-Allow-Origin":"http://localhost:63342"
    });
    res.write('<html><head><title>Fruit Total</title></head><body>');
    res.write('<p>'+total+' item ordered</p></body></html>');
    res.end();
}

http.createServer(function(req,res){
    console.log("[200] "+req.method+" to "+req.url);
    if(req.method == "OPTIONS"){
        res.writeHead(200,"OK",{
            "Access-Control-Allow-Header":"Content-Type",
            "Access-Control-Allow-Methods":"*",
            "Access-Control-Allow-Origin":"*"
        });
        res.end();
    }else if(req.url == '/form'&& req.method == 'POST'){
        var dataObj = new Object();
        var contentType = req.headers["content-type"];
        var fullBody = '';

        if(contentType){
            if(contentType.indexOf("application/x-www-form-urlencode") > -1){
                req.on('data',function(chunk){
                    fullBody += chunk.toString();
                });
                req.on('end',function(){
                    var dBody = querystring.parse(fullBody);
                    dataObj.apples = dBody["apples"];
                    dataObj.bananas = dBody["bananas"];
                    dataObj.cherries = dBody["cherries"];
                    writeResponse(res,dataObj);
                });
            }else if(contentType.indexOf("application/json") > -1){
                req.on('data',function(chunk){
                    fullBody += chunk.toString();
                });
                req.on('end',function(){
                    dataObj = JSON.parse(fullBody);
                    writeResponse(res,dataObj);
                });
            }
        }
    }
}).listen(8080);
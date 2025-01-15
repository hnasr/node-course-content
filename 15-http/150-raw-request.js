const http = require("node:http");
const req = http.request("http://example.com", {"method": "GET"},
     (res => {
            console.log(res.headers)
            console.log(res.statusCode);
            //set the encoding
            res.setEncoding('utf-8')

            res.on("data", data => console.log("some data" + data))             
     }));
console.log(req.getHeaders());
req.end();// must call it to actually send the request 
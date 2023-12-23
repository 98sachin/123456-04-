const http = require("http");
const port = 8081;

http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/html"}); // 200 means OK
    res.write("<h6>hey! we got our server here...and its not running in browser<h6>");
    res.end();  
})

.listen(port,()=>{
    console.log(`NodeJS Server Started Running on Port ${port}`)
});


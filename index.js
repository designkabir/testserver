const http = require("http")

const server = http.createServer((re,res)=>{
res.writeHead(200,{'content-type':'text/plain'});
res.end("Hello Connected...");
});

const PORT = process.env.port || 5550;


server.listen(PORT,()=>{console.log("Server connected...")});
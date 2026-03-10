//Create first Node Script
// console.log("Hello From Node.js 🚀");

//create files using node File System Module
// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Hello, MERN Stack!");

//create first server
// const http = require("http");
// const server = http.createServer((req, res)=>{
//     res.end("Server running....");
// })

// server.listen(5000, ()=>{
//     console.log("Server running on port 5000");
// })



//Practice Task
//01.
// const fs = require("fs");
// fs.writeFileSync("name.txt", "Hi, My name is Ayman Kz.");

// //02. and 03.
// const http = require("http");
// const server = http.createServer((req, res)=>{
//     if(req.url === "/"){
//         res.writeHead(200, {"Content-Type": "text/plain"});
//         res.end(JSON.stringify({"message":"Welcome to my MERN Journey!"}));
//     }
//     else if(req.url === "/about") {
//         res.end("This is my backend learning Day 01.");
//     } 
//     else if(req.url === "/contact") {
//         res.end("Contact me at: aymankz@gmail.com");
//     }
//     else {
//         res.end("404 Page Not Found!");
//     }
// })

// server.listen(5000, ()=>{
//     console.log("Server is running on port 5000");
// });


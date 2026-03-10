// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome to my express server 🚀");
// });

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact Page");
// });

// app.use(express.json());

// app.post("/user", (req, res) => {
//   const user = req.body;
//   res.send({
//     message: "User Created Successfully!",
//     data: user,
//   });
// });

// app.listen(5000, () => {
//   console.log("express server is running on port 5000");
// });

//Practice Tasks
//01.
const express = require("express");
const app = express();
app.use(express.json());
let users = []

app.get("/users", (req, res)=>{
    res.send(users);
});

app.post("/users", (req, res)=>{
    const user = req.body;
    users.push(user);
    res.send({
        message: "User created successfully",
        data: user
    });
});

app.get("/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    let user = users.find(u=>u.id===id);
    if(!user){
        res.send("User not found!");
    }
    res.send(`User ${id} found`);
});

app.delete("/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    users = users.filter(u=>u.id!==id);
    res.send(`user ${id} has been removed!`);
});

app.listen(5000, ()=>{
    console.log("server running...");
})
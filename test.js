// // Create User
// // Store user in data.json


// // Get User
// // Find user and return from data.json

// // Update User
// // Find and update user

// const fs = require("fs/promises");


// async function readData(){
//     const d = await fs.readFile("./data.json")
//     return JSON.parse(d);
// }

// async function writeData({username, password, email, name}){
//     const d = await readData();
//     d.push({username, password, email, name});

//     console.log(d);
//     fs.writeFile("./data.json", JSON.stringify(d, undefined, 2))
// }

// writeData({username: "sachin02", name: "Sachin", email: "sachin@gmail.com", password: "password"})

// // readData()

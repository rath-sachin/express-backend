const express = require("express");

const data = require("./data")
const {cleanUser} = require("./utils")




const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const { name } = req.body;

  res.send(`Welcome ${name}`);
});

// create user 
app.post("/user" , async (req, res) => {
  const d = req.body ;
    var u = await data.addUser(d)
    if(!u){
        res.json({"error":"User alread exist"})
    }
    else{
      res.json(cleanUser(u))
    }
}) 

// delete user
app.delete("/user/:username" , async (req , res) => {
  const username = req.params.username;
  var u = await data.deleteUser({username})

  if(u){
    res.json(cleanUser(u))
  }
  else{
    res.json({"error":"User not found"})
  }
})

//update user

app.put("/user/:username" , async (req , res) => {
  const username = req.params.username;
  const newData = req.body;
  var u = await data.updateUser({username , newData})

  if(u){
    res.json(cleanUser(u))
  }
  else{
    res.json({"error":"User not found"})
  }
})

// Get user

app.get("/user/:username" , async (req, res) => {
  const username = req.params.username;
    var u = await data.getUser({username})
    
    if(u){
      res.json(cleanUser(u))
    }
    else{
      res.json({"error":"User not found"})
    }
}) 



app.listen(PORT, (error) => {
  if (!error) {
    console.log("server is running successfully", PORT);
  } else {
    console.log("Error , server can't Start", error);
  }
});

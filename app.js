
const express = require("express")


const app = express();
const cors = require("cors")

require("./db")
// require("./client")
const bp = require("body-parser")
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));


// testing
const indexTest = require("./controller/gamecontroller")

const port = process.env.PORT || 3030;

app.use(express.json());

app.use(cors())





 const server = app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
const websocket = require("ws")
const wss = new websocket.Server({server},()=>{
    console.log("server started");
})

wss.on("connection",(ws)=>{
  ws.send("connected")
  ws.on("message", (message)=>{
    let result = JSON.parse(message.toString());
    
    indexTest.addGameData(result._id,result.gamestate)
    ws.send("success")
    
  
  })
})
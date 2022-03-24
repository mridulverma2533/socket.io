
// http.listen(3000, () => {
//   console.log('Connected at 3000');
// });

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

const port = process.env.PORT || 3000;

app.use(express.json());
// const userroutes = require("./routes/theroroutes");
// const { emit } = require("./models/signupmodel");
app.use(cors())





 const server = app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
const websocket = require("ws")
const wss = new websocket.Server({server},()=>{
    console.log("server started");
})

wss.on("connection",(ws)=>{
  ws.on("message", (message)=>{
    let result = JSON.parse(message.toString());
    // indexTest.addGameData(result.userId, result.gamestate)
    indexTest.addGameData(result._id,result.gamestate)
    // console.log("gdfdg"+message);
  
  })
})

const game = require("../models/saveuser")

exports.addgamestate = async (req, res)=>{
    try{
        // const _id = req.body
        // console.log(_id);
        // console.log("i'm here----------------------------------");
        const { gamestate,_id } = req.body
        console.log(_id)
    //    const  result = await addGameData(_id, gamestate)/
    const result = addGameData(_id, gamestate)
    console.log(result);
        res.send(result)
    }catch(e){
        console.log(e);
    }
    
}

async function addGameData(_id, gamestate){
    try{

        let temp = {  userId:_id, gamestate }
        console.log(temp);
        const data = await game.findOne({userId:_id})
        if(data) {
            const gamedata = await game.findOneAndUpdate({userId:_id},{$set:{gamestate}},{new:true})
            // res.send(gamedata)
            return gamedata
        }else{
            const gamedata = await game.create(temp)
            // res.send(gamedata)
            return gamedata
        }
        // return gamedata
    }catch(e){
        console.log(e);
    }
}

module.exports={
    addGameData
    
}
const expressAsyncHandler = require("express-async-handler");


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// REGSTERING NEW USER MODEL "post method"
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


const registerUser = expressAsyncHandler( async(req, res)=>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields") 
    }
})

module.exports={
    registerUser,
}

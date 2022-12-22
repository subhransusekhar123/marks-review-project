const userController = require('../model/userModel');

const getUserData = async (req,res) => {
    const user = await userController.find()
    res.send(user)
}

const postUserData = async(req,res) => {
    let find_user = await userController.findOne({user:req.body.user});
    console.log(find_user,"find-user")
    // console.log(req.body)

    if(find_user?.user === req.body.user){
        res.send(find_user)
    }else{
        let user = userController({
            user:req.body.user
        })
        let saveUser =await user.save();
        res.send(saveUser)
    }
   
   
}



module.exports = { getUserData, postUserData };
import {Router} from 'express'
import { userModel } from '../model/user.model.js'

const userRouter = Router()

userRouter.post('/signup', async(req, res) => {
    const {name, email, password} = req.body

    try{
         const user = await userModel.create({
        name, email, password
    })
    } catch(e){
        console.log(e)
    }
  
    res.json({
        msg: "User signup successfully"
    })

})

export default userRouter
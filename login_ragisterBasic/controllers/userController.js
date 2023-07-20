import UserModal from '../models/User.js'
import bcrypt from 'bcrypt'
class UserController{
    static home=(req,res)=>{
        res.render("index")

    }

    static ragistration=(req,res)=>{
        res.render("ragistration")

    }

    // static createUserDoc=async(req,res)=>{
    //     try {
    //      const doc= new UserModal({
    //         name:req.body.name,
    //         email:req.body.email,
    //         password:req.body.password
    //      }) 
    //      //doc save

    //      await doc.save()
    //      res.redirect('/login')
            
    //     } catch (error) {
    //         console.log(error)
            
    //     }

    // }


    static createUserDoc=async(req,res)=>{
        const hashPassword= await bcrypt.hash(req.body.password,10)
        try {
         const doc= new UserModal({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword
         }) 
         //doc save

         await doc.save()
         res.redirect('/login')
            
        } catch (error) {
            console.log(error)
            
        }

    }


   




    static login=(req,res)=>{
        res.render("login")

    }
    
    // static verifyLogin= async(req,res)=>{
    //    try {
    //      const {email,password }=req.body
    //      const result=await UserModal.findOne({email:email})
    //      if(result !=null){
    //         if(result.email== email && result.password == password){
    //             res.send(`<h1>Deshboard-------${result} </h1>`)
    //         }
    //         else{
    //             res.send("<h1> email or password invalid</h1>")
    //         }
    //     }
    //     else{ 
    //         res.send("<h1> you are not ragisterd user</h1>")

        
    //      }
    //    } catch (error) {
        
    //    }

    // }


    static verifyLogin= async(req,res)=>{
        try {
          const {email,password }=req.body
          const result=await UserModal.findOne({email:email})
          if(result !=null){
            const isMatch= await bcrypt.compare(password,result.password)
             if(result.email== email && isMatch){
                 res.send(`<h1>Deshboard-------${result} </h1>`)
             }
             else{
                 res.send("<h1> email or password invalid</h1>")
             }
         }
         else{ 
             res.send("<h1> you are not ragisterd user</h1>")
 
         
          }
        } catch (error) {
         
        }
 
     }


}
export default UserController
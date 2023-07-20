import CrudModel from "../models/Crudapi.js"
class crudController{
   
   
   
   static createDoc= async(req,res)=>{
        
       
    try {
        const {name,age,fees}=req.body
        const doc=new CrudModel({
            name:name,
            age:age,
            fees:fees
        })
        
//seving document
   const result =await doc.save()
        res.status(201).send(result)
       } catch (error) {
        console.log(error)
       }
   
   } 

    static getAllDoc=async (req,res) =>{
        try {
            const result= await CrudModel.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
    
    static getSingleDocById=async(req,res) =>{

        try {
            const result= await CrudModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        }
       
    }

    static updateDocById= async(req,res) =>{
      try {
          const result=await CrudModel.findByIdAndUpdate(req.params.id,req.body)
          res.send(result)
      } catch (error) {
        console.log(error)
      }
       
    }

    static deleteDocById=async(req,res) =>{
       
        try {
            const result=await CrudModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result)
        } catch (error) {
          console.log(error)
        }
    }

}

export default crudController;
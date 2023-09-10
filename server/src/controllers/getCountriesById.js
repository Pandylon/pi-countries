
const { Country,Activity}=require("../db")





const getCountrById= async(req,res)=>{

   try {
    const {idPais}=req.params
    
    const countryId= await Country.findOne({where:{id:idPais},include:[Activity]})
    if(countryId){
        return res.status(200).json(countryId)
    
    }

   } catch (error) {
     res.status(500).json(error.message)
   }
    
}

module.exports=getCountrById;
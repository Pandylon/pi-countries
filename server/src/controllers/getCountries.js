const {Country,Activity}=require("../db")
const { Op } = require("sequelize");
const axios= require('axios')

const getCountries= async(req, res)=>{

    const {name}=req.query

  
    try {
     if(name){
     
     
     let countrybyName=  await Country.findAll({ where:{name:{[Op.iLike]:name}},
         include: Activity
     });
        if(countrybyName) return res.status(200).json(countrybyName)
        return res.satus(404).send("no se encontro")
         
       }else{const dbCountries= await Country.findAll()
    
         res.status(200).json(dbCountries)
 
       }
 
    } catch (error) {
      res.status(500).json(error.message)
    }  

}
module.exports=getCountries;


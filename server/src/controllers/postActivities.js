const { Country,Activity }=require("../db")

const postActivity= async(req,res)=>{

    
    try {
        const {id,name,difficulty,duration,season,countryName}=req.body;
       
     if(!name || !difficulty || !duration || !season || !countryName ) return res.status(400).send("faltan datos")
     
        const newActivity = await Activity.create({name,difficulty,duration,season})
        
        //encontrar los paises por nombre
        const countries=await Country.findAll({where:{name:countryName}})
        //agregar los paises realcionados a la actividad
        await newActivity.setCountries(countries);

        return res.status(201).json(newActivity)
    
    
    } catch (error) {
        return res.status(500).json(error.message)
     }
    }
    


module.exports=postActivity;
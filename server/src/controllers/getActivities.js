const { Country,Activity }=require("../db")


const getActivities= async(req, res)=>{
try {
   
    // obtener los datos de la base de datos
    const activities= await Activity.findAll({
        include:Country
    })
   
    res.status(200).json(activities)

} catch (error) {
    res.status(500).json({message:'error'})
}
}

module.exports=getActivities;
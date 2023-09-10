

const {Country}=require("../db")
const axios= require('axios')

const loadCountryapi= async(req, res)=>{
try {
    //obtener datos de la api externa
    const response= await axios.get('http://localhost:5000/countries')

    const countries = response.data;

    const countriesList = countries.map(country => {
        return {
            code:country.cca3,
            name: country.name.common,
            flag: country.flags.png,
            continent: country.continents ? country.continents[0] : 'capital no encontrada',
            capital: country.capital ? country.capital[0] : 'capital no encontrada',
            subregion: country.subregion,
            area: country.area,
            population: country.population,
            
        };
        
        
    })
    console.log(countriesList)
    await Country.bulkCreate(countriesList)
   
   return res.status(200).json({message:"se creo registro"})
   
    

} catch (error) {
    res.status(500).json({message:'error'})
}
}

module.exports=loadCountryapi;

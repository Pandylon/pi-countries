const router= require("express").Router();

const loadCountryapi=require("../controllers/loadDatabase")
const getCountries=require("../controllers/getCountries")
const getCountrById=require("../controllers/getCountriesById")
const getByName=require("../controllers/getByName")






router.get("/",getCountries)
router.get("/:idPais",getCountrById)
//router.get("/",getByName)


module.exports = router;

const loadRouter= require("express").Router();

const loadCountryapi=require("../controllers/loadDatabase")


//const { Router } = require("express");

//const router = Router();
loadRouter.get("/load",loadCountryapi)

module.exports=loadRouter;
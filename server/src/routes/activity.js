
const routeractivity= require("express").Router();
const postActivity=require("../controllers/postActivities")
const  getActivities=require("../controllers/getActivities")


routeractivity.post("/",postActivity)
routeractivity.get("/",getActivities)

module.exports=routeractivity;
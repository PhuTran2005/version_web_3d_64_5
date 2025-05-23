const routesModel = require("./model.routes") ;
const routesHotspot = require("./hotspot.routes") ;
const routesAuth = require("./auth.routes") ;
const routerAssignment = require("./assignment.routes") ;
const routerTrainingResults = require("./trainingResults.routes")
module.exports = (app) => {
    const version = "/api/v1" ;
    
    app.use(version + "/model" , routesModel)  ;
    app.use(version + "/hotspot" , routesHotspot) ;
    app.use(version + "/assignment" ,routerAssignment) ;
    app.use(version + "/trainingResults" , routerTrainingResults) ;
    app.use("/auth"  , routesAuth) ;
}
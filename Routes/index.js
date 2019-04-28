const Router = require("express").Router();
const indexController = require('../Controller/index');

Router.get("/", indexController.showIndex);

Router.get("/form", indexController.formShow);
Router.post("/form", indexController.formSubmit);

Router.get("/About", indexController.showAbout);

Router.delete("/form/:id", indexController.deleteGoal);

module.exports = Router;
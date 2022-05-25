// import controllers
const appareilController = require("../controllers/appareilController");

// router
const router = require("express").Router();

// fournisseurs routers
router.post("/addAppareil", appareilController.addAppareil);

router.get("/allAppareils", appareilController.getAllAppareils);

router.delete("/:id", appareilController.deleteAppareil);

module.exports = router;

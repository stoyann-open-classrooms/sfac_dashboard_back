// import controllers
const paysController = require("../controllers/paysController");

// router
const router = require("express").Router();

// fournisseurs routers
router.put("/addPays", paysController.addPays);

router.get("/allPays", paysController.getAllPays);

router.put("/:id", paysController.updatePays);

router.delete("/:id", paysController.deletePays);

module.exports = router;

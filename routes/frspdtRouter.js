// import controllers
const frspdtController = require("../controllers/frspdtController");

// router
const router = require("express").Router();

// fournisseurs routers
router.post("/addFrspdt", frspdtController.addFrspdt);

router.get("/allFrspdts", frspdtController.getAllFrspdts);

router.put("/:id", frspdtController.updateFrspdt);

router.delete("/:id", frspdtController.deleteFrspdt);

module.exports = router;

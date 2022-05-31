// import controllers
const uniteController = require("../controllers/uniteController");

// router
const router = require("express").Router();

// fournisseurs routers
router.post("/addUnite", uniteController.addUnite);

router.get("/allUnites", uniteController.getAllUnites);

router.get("/:id", uniteController.getOneUnite);
router.put("/:id", uniteController.updateUnite);

router.delete("/:id", uniteController.deleteUnite);

module.exports = router;

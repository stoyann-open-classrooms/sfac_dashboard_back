// import controllers
const demandeController = require("../controllers/demandeController");

// router
const router = require("express").Router();

// fournisseurs routers
router.post("/addDemande", demandeController.addDemande);

router.get("/allDemandes", demandeController.getAllDemandes);

router.put("/:id", demandeController.updateDemande);

router.delete("/:id", demandeController.deleteDemande);

module.exports = router;
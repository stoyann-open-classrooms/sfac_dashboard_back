// import controllers
const demandeController = require("../controllers/demandeController");

// router
const router = require("express").Router();

// fournisseurs routers
router.post("/addDemande", demandeController.addDemande);

router.get("/allDemandes", demandeController.getAllDemandes);
router.get("/urgentesDemandes", demandeController.getUrgentesDemande);
router.get("/DemandesAtraiter", demandeController.getDemandeAtraiter);
router.get("/DemandesEnCours", demandeController.getDemandesEnCours);

router.get("/:id", demandeController.getOneDemande);
router.put("/:id", demandeController.updateDemande);

router.delete("/:id", demandeController.deleteDemande);

module.exports = router;

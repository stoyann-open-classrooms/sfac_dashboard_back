// import controllers
const fournisseurController = require("../controllers/fournisseurController");

// router
const router = require("express").Router();

router.post(
  "/addFournisseur",
  fournisseurController.upload,
  fournisseurController.addFournisseur
);
router.get("/allFournisseurs", fournisseurController.getAllFournisseurs);

router.put("/:id", fournisseurController.updateFournisseur);

router.delete("/:id", fournisseurController.deleteFournisseur);

module.exports = router;

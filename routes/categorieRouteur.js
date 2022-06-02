// import controllers
const categorieController = require("../controllers/categorieController");

// router
const router = require("express").Router();

// fournisseurs routers
router.post("/addCategorie", categorieController.addCategorie);

router.get("/allCategories", categorieController.getAllCategories);

router.get("/:id", categorieController.getOneCategorie);
router.put("/:id", categorieController.updateCategorie);

router.delete("/:id", categorieController.deleteCategorie);

module.exports = router;

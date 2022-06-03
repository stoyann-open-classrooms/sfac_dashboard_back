// import controllers
const kanbanController = require("../controllers/kanbanController");
const checkTokenMiddleware = require("../jsonWebToken.js/check");
// router
const router = require("express").Router();

// fournisseurs routers
router.post("/addKanban", kanbanController.addKanban);

router.get("/allKanbans", kanbanController.getAllKanbans);

router.get("/:id", kanbanController.getOneKanban);
router.put("/:id", kanbanController.updateKanban);

router.delete("/:id", kanbanController.deleteKanban);

module.exports = router;

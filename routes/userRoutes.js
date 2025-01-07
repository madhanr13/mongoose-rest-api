const express = require("express");
const router = express.Router();
const {
  fetch,
  create,
  update,
  deleteUser,
} = require("../controllers/userControllers.js");

router.get("/users", fetch);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/user/delete/:id", deleteUser);

module.exports = router;

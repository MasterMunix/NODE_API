const express = require("express");

const router = express.Router();

const {checkAuthorization} = require('../middlewares/origin');

const {
  getDetail,
  getList,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/video");


router.get("", getList);
router.get("/:id", getDetail);
router.post("/create", createItem);
router.delete("/:id", checkAuthorization, deleteItem);
router.put("/:id", updateItem);

module.exports = { router };

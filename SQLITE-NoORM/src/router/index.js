const indexRouter = require("express").Router();
const Nilai = require("../controller/nilaiController");

indexRouter.get("/", Nilai.getAllNilai);

module.exports = indexRouter;

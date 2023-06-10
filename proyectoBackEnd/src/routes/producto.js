const productoCtrl = require('./../controllers/productoController');

const express = require('express');
const router = express.Router();

router.post("/",productoCtrl.createProducto);
router.get("/",productoCtrl.getProductos);
router.delete("/:id",productoCtrl.deleteProducto);
router.put("/:id",productoCtrl.editProducto);

module.exports = router;

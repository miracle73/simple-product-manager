const express = require('express');
const router  = express.Router();
const {getallProducts, createProduct, updateProduct, deleteProduct, getProduct} = require("../controllers/task.js")
router.route('/').get(getallProducts).post(createProduct)
router.route('/:id').delete(deleteProduct).get(getProduct).put(updateProduct)
module.exports = router
const express = require('express');
const services = require("../services");

const router = express.Router();

// url = "/api/items", "/api/items?q=query"
router.get("/items", async function(req, res) {
  try {
    const { query } = req;
    const data = await services.search(query.q);
    
    return res.json(data);
  } catch(err) {
    return res.status(500).json({error: err.message});
  }
});

// url = "/api/items"
router.get("/items/:id", async function(req, res) {
  try {
    const { params } = req;
    const productId = params.id;
    const data = await services.getProductDetail(productId);

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;

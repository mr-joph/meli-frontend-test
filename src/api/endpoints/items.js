const express = require('express');
const externalApi = require("../external-api");

const router = express.Router();

router.get("/items", async function(req, res) {
  try {
    const { query } = req;
    const data = await externalApi.search(query.q);
    
    return res.json(data);
  } catch(err) {
    return res.status(500).json({error: err.message});
  }
});

router.get("/items/:id", async function(req, res) {
  try {
    const { params } = req;
    const productId = params.id;
    const data = await externalApi.getProductDetail(productId);

    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;

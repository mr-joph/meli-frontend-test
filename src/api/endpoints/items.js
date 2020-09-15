const express = require('express');
const router = express.Router();

router.get("/items", function(req, res) {
  res.json({message: "result"});
});

router.get("/items/:id", function(req, res) {
  res.json({message: "product detail page"});
});

module.exports = router;

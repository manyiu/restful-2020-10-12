const express = require("express");
const { v1: uuid } = require("uuid");

const router = express.Router();

let data = {};

// router.get("/", (req, res) => {
//   res.send({ success: true, data });
// });

// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   res.send({ success: true, data });
// });

router.get("/:id?", (req, res) => {
  const { id } = req.params;

  if (id) {
    res.send({ success: true, data: data[id] });
  } else {
    res.send({ success: true, data });
  }
});

router.post("/", (req, res) => {
  const id = uuid();

  data[id] = req.body;

  res.send({ success: true, data: { id } });
});

router.delete("/", () => {
  data = {};

  res.send({ success: true });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const { [id]: elementToBeRemoved, ...elementsToBeKept } = data;

  data = elementsToBeKept;

  res.send({ success: true });
});

module.exports = router;

const express = require("express");
const knex = require("knex");
const knexfile = require("../knexfile.js");
const db = knex(knexfile.development);

const router = express.Router();

router.get("/", (req, res) => {  
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json({ data: cars });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
});

router.get("/:id", (req, res) => {  
  db("cars")
    .where({ id: req.params.id })    
    .first()
    .then(car => {
      res.status(200).json({ data: car });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "car does not exist" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData, "id")
    .then(ids => {
      const id = ids[0];
      db("cars")
        .where({ id })
        .first()
        .then(car => {
          res.status(201).json({ data: car });
        });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: error.message });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;  
  db("cars")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: "update successful" });
      } else {
        res.status(404).json({ message: "no cars by that id found" });
      }
    });
});

router.delete("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .del()
    .then(cars => {
        res.status(200).json({ data: 'car deleted successfully' });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: error.message });
      });
});

module.exports = router;

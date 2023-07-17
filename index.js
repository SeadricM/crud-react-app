const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: `employeesystem`,
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const code = req.body.code;
  const profession = req.body.profession;
  const color = req.body.color;
  const city = req.body.city;
  const branch = req.body.branch;
  const assigned = req.body.assigned;

  db.query(
    "INSERT INTO employees (name, code, profession, color, city, branch, assigned) VALUES (?,?,?,?,?,?,?)",
    [name, code, profession, color, city, branch, assigned],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/updateColor", (req, res) => {
  const id = req.body.id;
  const color = req.body.color;
  db.query(
    "UPDATE employees SET color = ? WHERE id = ?",
    [color, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateCity", (req, res) => {
  const id = req.body.id;
  const city = req.body.city;
  db.query(
    "UPDATE employees SET city = ? WHERE id = ?",
    [city, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateBranch", (req, res) => {
  const id = req.body.id;
  const branch = req.body.branch;
  db.query(
    "UPDATE employees SET branch = ? WHERE id = ?",
    [branch, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updateAssigned", (req, res) => {
  const id = req.body.id;
  const assigned = req.body.assigned;
  db.query(
    "UPDATE employees SET assigned = ? WHERE id = ?",
    [assigned, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

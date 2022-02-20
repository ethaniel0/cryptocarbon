const express = require('express');
const Database = require("@replit/database");
const db = new Database();

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/getOffset', (req, res) => {
  db.get("totalOffset").then(value => {
    if (!value) return res.send('0');
    else return res.send(value);
  });
})

app.post('/addOffset', (req, res) => {
  let num = req.body.tons;
  
  db.get("totalOffset").then(value => {
    if (!value) db.set("totalOffset", '0');
    else db.set("totalOffset", "" + (parseInt(value)+num));
  });
  res.json('success');
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


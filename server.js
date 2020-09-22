const express = require('express');

const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3300

//the code below is the same as this: const PORT = process.env.PORT || 3300

// if (process.env.PORT){
//     PORT = process.env.PORT;
// }else{
//     PORT= 3000;
// }

//Assets

app.use(express.static('public'));





//set Template engine

app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cart", (req, res) => {
  res.render("customers/cart");
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});
app.get("/register", (req, res) => {
  res.render("auth/register");
});

app.listen(3300, () => {
    console.log(`Listening on port ${PORT}`);
  });
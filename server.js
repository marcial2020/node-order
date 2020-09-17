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

app.get('/', (req,res) =>{
    res.render('home');
})

//set Template engine

app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
  });
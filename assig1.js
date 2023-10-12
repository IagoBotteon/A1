const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; 


require('dotenv').config();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/submit-contact', (req, res) => {
    let firstname = req.body.firstName;
    console.log(firstname);
    // let lastname = req.body.lastName
    // console.log(lastname)
    // let contactnumber = req.body.contactNumber
    // console.log(contactnumber)
    // let eml = req.body.email
    // console.log(eml)
    //res.render('submit-contact'); // Render the 'home.ejs' template
    res.redirect('/contact');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

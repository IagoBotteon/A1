const express = require('express');
const bodyparser = require('body-parser')
const app = express();

// Set up static files (CSS, images, JavaScript)
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}))


// Define routes for each page
app.get('/', (req, res) => {
    res.render('home'); // Render the 'home.ejs' template
  });
  
  app.get('/about', (req, res) => {
    res.render('about'); // Render the 'about.ejs' template
  });
  
  app.get('/projects', (req, res) => {
    res.render('projects'); // Render the 'projects.ejs' template
  });
  
  app.get('/services', (req, res) => {
    res.render('services'); // Render the 'services.ejs' template
  });
  
  app.get('/contact', (req, res) => {
    res.render('contact'); // Render the 'contact.ejs' template
  });

  app.post('/submit-contact', (req, res) => {
    let firstname = req.body.firstName
    console.log(firstname)
    //res.render('submit-contact'); // Render the 'home.ejs' template
    res.redirect('/contact')
  });

// Start the server
app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/');
 });
 
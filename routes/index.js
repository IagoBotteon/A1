const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
    res.render('home');
  });

  // AboutMe Page
  router.get('/about', (req, res) => {
    res.render('about');
  });

  // Project Page
  router.get('/project', (req, res) => {
    res.render('project');
  });

  // Service Page
  router.get('/service', (req, res) => {
    res.render('service');
  });

  // Contact Page
  router.get('/contact', (req, res) => {
    res.render('contact');
  });

module.exports = router;
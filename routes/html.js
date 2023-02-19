const path = require('path');
const router = require('express').Router();

// "/notes" use notes.html
router.get('/notes', (req, res) => {
  });

  // anything else, use index.html
router.get('*', (req, res) => {
  });
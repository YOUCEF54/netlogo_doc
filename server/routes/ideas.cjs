const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea'); // Import your Mongoose model

// GET all ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find(); // Fetch all ideas from the database
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching ideas', error: err.message });
  }
});

// POST a new idea
router.post('/', async (req, res) => {
  const { title, description, author } = req.body;
  const newIdea = new Idea({ title, description, author });

  try {
    const savedIdea = await newIdea.save(); // Save the idea to the database
    res.status(201).json(savedIdea);
  } catch (err) {
    res.status(400).json({ message: 'Error saving idea', error: err.message });
  }
});

module.exports = router;

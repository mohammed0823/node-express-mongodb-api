const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Create a new item
router.post('/', async (req, res) => {
  try {
    setTimeout(async () => {
      const newItem = await Item.create(req.body);
      res.status(201).json(newItem);
    }, 2000); // Simulate delay of 2 seconds
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an item
router.patch('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an item
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get an item
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Item = require('../models/item');

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create a new item
 *     responses:
 *       201:
 *         description: The item was created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
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

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Get an item by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The item ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The item was found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /items/{id}:
 *   patch:
 *     summary: Update an item
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The item ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The item was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
router.patch('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Delete an item
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The item ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The item was deleted
 */
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

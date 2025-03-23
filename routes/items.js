const express = require('express');
const router = express.Router();
const Item = require('../models/item');

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the item
 *         description:
 *           type: string
 *           description: Description of the item
 */

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Create a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: The item was created
 */
router.post('/items', async (req, res) => {
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
 * /api/items:
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
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/items/{id}:
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
 */
router.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/items/{id}:
 *   patch:
 *     summary: Update an item
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The item ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was updated
 */
router.patch('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: "Item not found" });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @swagger
 * /api/items/{id}:
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
router.delete('/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

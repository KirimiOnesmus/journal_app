const express = require('express');
const router = express.Router();

const {
  createEntry,
  getEntriesByUser,
  updateEntry,
  deleteEntry
} = require('../controllers/entriesController');

// Get all entries for a specific user
router.get('/user/:userId', getEntriesByUser);

// Create new entry
router.post('/', createEntry);

// Update existing entry
router.put('/:id', updateEntry);

// Delete entry
router.delete('/:id', deleteEntry);

module.exports = router;
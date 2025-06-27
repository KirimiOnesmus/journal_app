const db = require('../db/db');

// Create new entry
exports.createEntry = async (req, res) => {
  const { title, mood, content, user_id } = req.body;
//   const userId = req.user.id;

  if (!user_id || !title || !mood || !content) {
    return res.status(400).json({
      message: 'All fields are required.'
    });
  }

  try {
    const result = await db.execute(
      'INSERT INTO entries (title, mood, content, user_id) VALUES (?, ?, ?, ?)',
      [title, mood, content, user_id]
    );

    res.status(201).json({
      message: 'Entry Added Successfully',
      entryId: result.insertId
    });
     console.log('Insert result:', result); 
  } catch (error) {
    console.error('Failed Creating Entry:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all entries by user
exports.getEntriesByUser = async (req, res) => {
 const userId = req.params.userId;
    if (!userId || isNaN(userId)) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
     const result = await db.execute(
      
      'SELECT * FROM entries WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );

    const entries = result[0]; 
    
    res.status(200).json(entries);
  } catch (error) {
    console.error('Failed Getting Entries:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update entry
exports.updateEntry = async (req, res) => {
  const { id } = req.params;
  const { title, mood, content,user_id } = req.body;
    if (!user_id) {
    return res.status(400).json({ message: 'User ID is required' });
  }
  try {
    const [entryRows] = await db.execute(
      'SELECT * FROM entries WHERE id = ? AND user_id = ?',
      [id, user_id]
    );

    if (entryRows.length === 0) {
      return res.status(404).json({ message: 'Entry Not Found!' });
    }

    await db.execute(
      'UPDATE entries SET title = ?, mood = ?, content = ? WHERE id = ?',
      [title, mood, content, id]
    );

    res.status(200).json({ message: 'Entry Updated Successfully' });
  } catch (error) {
    console.error('Error Updating Entry:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete entry
exports.deleteEntry = async (req, res) => {
  const { id } = req.params;
  const {user_id} = req.body;

    if (!user_id || isNaN(user_id)) {
    return res.status(400).json({ message: 'User ID is required' });
  }



  try {
    const [entryRows] = await db.execute(
      'SELECT * FROM entries WHERE id = ? AND user_id = ?',
      [id, user_id]
    );

    if (entryRows.length === 0) {
      return res.status(404).json({ message: 'Entry Not Found!' });
    }

    await db.execute('DELETE FROM entries WHERE id = ?', [id]);

    res.status(200).json({ message: 'Entry Deleted Successfully' });
  } catch (error) {
    console.error('Error Deleting Entry:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const express = require('express');

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/users');

const router = express.Router();

router.get('/users', users);

// GET — / | displayHome()
// GET — /users | getUsers()
// GET — /users/:id | getUserById()
// POST — users | createUser()
// PUT — /users/:id | updateUser()
// DELETE — /users/:id | deleteUser()

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
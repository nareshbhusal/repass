const express = require('express');
const router = express.Router();
const getUsers = require('./getUsers');
const getUser = require('./getUser');
const editUser = require('./editUser');
const deleteUser = require('./deleteUser');

const requireLogin = require('../../middlewares/requireLogin');

router.get('/users/', getUsers);
router.get('/u/:username/', getUser);
router.put('/u/:username/edit', requireLogin, editUser);
router.delete('/u/:username/delete', requireLogin, deleteUser);

module.exports = router;
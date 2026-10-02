const express = require('express');
const router = express.Router();
const { getAllIssues, createIssue } = require('../controllers/issuesController');

// مسارات /api/issues
router.get('/', getAllIssues);
router.post('/', createIssue);

module.exports = router;

const express = require('express');
const router = express.Router();

// ACTIVITY: Create routes that call controller functions when requested

const pollController = require('../controllers/pollController');

router.get('/polls/id/:id', pollController.getPoll);

router.get('/polls', pollController.getPolls);

router.post('/polls', pollController.postPoll);

router.post('/vote', pollController.postVote);

module.exports = router;

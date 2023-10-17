const express = require('express');
const router = express.Router();
const messageController = require('../../controllers/messageController')

router.route('/')
    .get(messageController.getAllMessages)
    .post(messageController.pubMessage);

router.route('/:user')
    .get(messageController.getUserMessages)
    
module.exports = router;

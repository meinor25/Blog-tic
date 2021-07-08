const express = require('express')

const router = express.Router()

const controller = require('../controllers/blog')

const path = 'blog'

router.get(
    `/${path}`,
    controller.getData
)
router.post(
    `/${path}`,
    controller.postData
)
module.exports = router
const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    //Todo Routes
    const todooService = require('../api/todo/todoService')
    todooService.register(router, '/todos')
}
'use strict'
const router = require('express').Router();
const socketController = require('./socket/socketController');

router.get("/test", async(req, res)=>{
    try {
        const io = socketController.getIO();
        io.emit('chat message', {data:"hello"});
         return res.status(200).send("ok");
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

module.exports = router;
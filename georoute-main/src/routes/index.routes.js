const express = require('express')
const router= express.Router()



router.use('/routes',[],require('./route.routes'))



module.exports= router;
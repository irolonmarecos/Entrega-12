const express = require('express');
const {Router} = express
const { fork } = require('child_process')

const routerNumRandoms = Router()

routerNumRandoms.get('/',(req,res)=>{
    const cant = req.query.cant || 100000000
  
    const child = fork('./child')
    child.send(cant)
    child.on('message', result => {
        res.send({result})
    })
})


module.exports = routerNumRandoms


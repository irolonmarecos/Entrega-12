const express = require('express');
const {Router} = express

const routerInfo = Router()


routerInfo.get('/',(req,res)=>{
    res.send({
        'Directorio del trabajo actual ': process.cwd(),
        'ID del Proceso ': process.pid,
        'Version de Node ':process.version,
        'Titulo del proceso ': process.title,
        'Sistema Operativo ': process.platform,
        'Uso de la Memoria ': process.memoryUsage()
    })
})

module.exports = routerInfo






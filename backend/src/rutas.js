var mysql = require('mysql2')
var conexion = mysql.createConnection({
    host : 'localhost',
    database : 'prueba_tecnica',
    user : 'root',
    password : 'orbpone1403'
})

conexion.connect(function(err){
    if(err){
        console.log('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado a la bd');
})

const router = require('express').Router()

// OBTENER LOS NOMBRES
router.get('/getnombres', (req, res) => {
    conexion.query('SELECT * FROM Nombres', (err, result) => {
        if(err){
            console.log(err)
            res.status(500)
        }else{
            res.status(200).json({'nombres' : result})
        }
    })
})

module.exports = router
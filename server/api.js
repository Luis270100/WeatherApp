const express = require('express');
const router = express.Router();



router.get("/cities", (req, res) => {
    console.log("Hola");
    res.send("Estamos funcionando bien");
});



module.exports = router;
const express = require('express');
const router = express.Router();
const { 
    getTowns,
    getTownQuery,
    updateTown,
    deleteTown 
} = require('../controllers/towns.js');

router.get('/towns', getTowns);

router.get('/query', getTownQuery);

router.put('/towns/:recordID', updateTown); 

router.delete('/towns/:recordID', deleteTown);

module.exports = router;

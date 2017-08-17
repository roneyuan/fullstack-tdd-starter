const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jsonParser = require('body-parser').json();
const {YourObject} = require('../models/your-object');


router.use(jsonParser);

/*
router.get('/', (req, res) => {

});

router.put('/', (req, res) => {
		
});

router.post('/', (req, res) => {

});

router.delete('/', (req, res) => {		

});
*/

module.exports = router

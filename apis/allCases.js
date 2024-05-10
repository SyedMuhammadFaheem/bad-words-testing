const express = require("express");
var Filter = require('bad-words')

const router = express.Router()


router.post('/clean',(req,res)=>{
    const {stringWithBadWords} = req.body
    const filter = new Filter();
    result= filter.clean(stringWithBadWords)
    res.status(200).json({cleanedString: result})
})

router.post('/add-custom-words-clean',(req,res)=>{
    const {stringWithBadWords} = req.body
    const badWords=['blood', 'die', 'murder', 'childassault']
    const filter = new Filter();
    filter.addWords(...badWords)
    result= filter.clean(stringWithBadWords)
    res.status(200).json({cleanedString: result})
})

router.post('/remove-custom-words-clean',(req,res)=>{
    const {stringWithBadWords} = req.body
    const badWords=['ass', 'fuck', 'shit']
    const filter = new Filter();
    filter.removeWords(...badWords)
    result= filter.clean(stringWithBadWords)
    res.status(200).json({cleanedString: result})
})


// there is a way to use regex expressions to make the word patterns act as placeholders for badwords

module.exports= router
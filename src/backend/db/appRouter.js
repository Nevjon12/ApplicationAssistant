const express = require('express');
const router = express.Router();

//Controllers

const { jobCardController } = require('./dbControllers/jobCardController');

//jobCard Routes

router.get('/', jobCardController.getAllJobs, (req, res)=>{
  
  res.status(200).json({data : res.locals.cards});
})

router.post('/',jobCardController.add, (req, res)=>{

  res.status(200)
})



//note Routes




//


module.exports = router;
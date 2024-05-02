const mongoose = require('mongoose');


//DB Imports
const JobCard = require('../dbModels/jobCard')

const jobCardController = {};


//Fetch all data for jobs for front-end to render
jobCardController.getAllJobs = async ( req, res, next) => {
  res.locals.cards = await JobCard.find();
  next();
};

//Add a new job to the database

jobCardController.add = async ( req, res, next) => {
  console.log('Card Add')
  const job = new JobCard({
    position: `${req.body.position}`,
    companyName: `${req.body.companyName}`
  });
  await job.save();
  console.log(job)
  next();
};

//Edit an exisiting jobs values or status

jobCardController.edit = ( req, res, next) => {
  console.log('Card Edit');
  next();
};

//Delete an existing job from the database

jobCardController.delete = ( req, res, next) => {
  console.log('Card Delete')
  next();
};

//add a note to the specific jobCard

jobCardController.addNote = ( req, res, next) => {
  console.log('Note Add')
  next();
};


module.exports = {

    jobCardController
}
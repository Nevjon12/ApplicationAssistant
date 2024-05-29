const mongoose = require('mongoose');

const jobCardSchema = new mongoose.Schema({

  position : {
    type: String,
    minlength: 3,
  },
  companyName: {
    type: String,
    minlength: 3,
  },
  notes: {
    type: String,
    default: 'No notes yet'
  }
})


const JobCard = mongoose.model('JobCard', jobCardSchema );


module.exports = JobCard


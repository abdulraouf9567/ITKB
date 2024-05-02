const mongoose = require('mongoose')


const faqSchema = new mongoose.Schema({
  title: String,
  small_description: String,
  detailed_description: String,
  
},
{ timestamps: true ,collection: 'faqs'});


module.exports = mongoose.model('ITKB', faqSchema)

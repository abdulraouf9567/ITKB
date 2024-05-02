const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


// Connect to MongoDB
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define FAQ schema
const faqSchema = new mongoose.Schema({
  title: String,
  small_description: String,
  detailed_description: String,
  
},
{ timestamps: true });
const FAQ = mongoose.model('FAQ', faqSchema);

// Read JSON file
const jsonFilePath = path.resolve(__dirname, 'db.json');
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  const faqs = JSON.parse(data);

  // Save FAQs to MongoDB
  FAQ.insertMany(faqs)
    .then(() => {
      console.log('FAQs successfully imported to MongoDB.');
      db.close();
    })
    .catch(err => {
      console.error('Error importing FAQs to MongoDB:', err);
      db.close();
    });
});

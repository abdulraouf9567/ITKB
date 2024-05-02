const mongoose = require('mongoose');
const ITKB = require('../models/itkbmodel');

const getKb = async (req, res) => {
  try {
    // Retrieve documents from the 'faqs' collection in the 'ITKBDB' database
    const itkbs = await ITKB.find({}).sort({ createdAt: -1 });
    // console.log("itkbs", itkbs);
    res.status(200).json(itkbs);
  } catch (error) {
    console.error('Error fetching ITKB:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getKbById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such details for the specified ID' });
  }

  try {
    const details = await ITKB.findById(id);

    if (!details) {
      return res.status(404).json({ error: 'No such details for the specified ID' });
    }

    // If details are found, send them back in the response
    res.status(200).json(details);
  } catch (error) {
    console.error('Error fetching details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getKb,
  getKbById
};
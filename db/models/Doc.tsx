const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
  text: {
    type: String
  },
  created: {
    type: String
  }
});

const Doc = mongoose.model('Doc', docSchema);

export default Doc;

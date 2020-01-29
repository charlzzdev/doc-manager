const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
  text: {
    type: String
  },
  created: {
    type: String
  }
});

const docLoader = () => {
  if (mongoose.models.Doc) {
    return mongoose.model('Doc');
  } else {
    return mongoose.model('Doc', docSchema);
  }
}

const Doc = docLoader();

export default Doc;

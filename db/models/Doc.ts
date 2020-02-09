const mongoose = require('mongoose');

const docWithCollectionName = (collectionName: string) => {
  const docSchema = new mongoose.Schema({
    text: {
      type: String
    },
    created: {
      type: String
    }
  }, { collection: collectionName });

  const docLoader = () => {
    if (mongoose.models[collectionName]) {
      return mongoose.model(collectionName);
    } else {
      return mongoose.model(collectionName, docSchema);
    }
  }

  return docLoader();
}

export default docWithCollectionName;

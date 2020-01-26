require('dotenv').config();
const mongoose = require('mongoose');

const connectDb = async () => {
  await mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default connectDb;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const userLoader = () => {
  if (mongoose.models.User) {
    return mongoose.model('User');
  } else {
    return mongoose.model('User', userSchema);
  }
}

const User = userLoader();

export default User;

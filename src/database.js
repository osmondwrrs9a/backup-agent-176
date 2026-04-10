const mongoose = require('mongoose');

const connect = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb';
  await mongoose.connect(uri);
  console.log('Database connected');
};

module.exports = { connect };

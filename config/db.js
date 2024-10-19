const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config.env' });

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === 'test') {
      var dbName = 'auctionDB';
    } else {
      var dbName = 'auctionDB';
    }

    const MONGO_URI = "mongodb+srv://dhruv:mongoDBdhruv@cluster0.d7n8r.mongodb.net/auctionDB?retryWrites=true&w=majority"
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      dbName
    });

    console.log(`MongoDB Connected to ${dbName} DB...`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

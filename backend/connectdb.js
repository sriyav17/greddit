const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

// Connection URL and database name
const url = 'mongodb+srv://sriyavenepally:sriya123@greddit.0ftvtec.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'Greddit';

async function connectDb() {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const db = mongoose.connection.db; 

    return db;
  } catch (err) {
    console.log('Error connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = connectDb;

const mongoose = require('mongoose');
// const db = "mongodb+srv://jahirmashal:Jahirmashal@auth.3uriq.mongodb.net/user?retryWrites=true"

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose.connect(uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => console.log("DB is connected"))
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    });
};

module.exports = connectDB;

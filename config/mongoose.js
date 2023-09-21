// IMPORTING PACKAGE
const mongoose = require("mongoose");

// storing the db on mongo atlas
const DB = "mongodb+srv://rajeevkrs:rajeevkr.450@cluster0.xigfak7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>{
  console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

// MAKING CONNECTION 
// const DB = mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
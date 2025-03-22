const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://elissegomez24:Elisse24!@cluster1.lrsn3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');

module.exports = mongoose.connection;

const mongoose = require('mongoose');

// connects to MongoDB database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
// logs once connected
db.once('connected', () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
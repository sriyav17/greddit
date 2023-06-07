const express = require('express');
const app = express();
const port = 3001;
const connectDb = require('./connectdb');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json()); 
app.set("trust-proxy", 1);

app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true
}));

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});


const userRoute = require('./user_route');

// Mount user routes
// app.use('/', userRoute); 


try {
  connectDb();
  console.log('Connected to MongoDB');
}
catch (err) {
  console.log('Error connecting to MongoDB:', err);
}

app.use('/api', userRoute);
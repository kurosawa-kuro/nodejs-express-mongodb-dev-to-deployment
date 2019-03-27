const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

// DB Config
const user = "mongo";
const password = "mongo";
const dbName = "vidjot-dev";
const cloudDbUrl =
  "mongodb://" +
  user +
  ":" +
  password +
  "@cluster0-shard-00-00-jmygq.mongodb.net:27017,cluster0-shard-00-01-jmygq.mongodb.net:27017,cluster0-shard-00-02-jmygq.mongodb.net:27017/" +
  dbName +
  "?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

// Connect to mongoose
mongoose.connect(cloudDbUrl, {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

require("./models/Idea")
const Idea = mongoose.model('ideas');

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
});

const port = 5000;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
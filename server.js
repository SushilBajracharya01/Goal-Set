const express = require("express");
const routes = require("./Routes/index");
const app = express ();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Db = "mongodb+srv://sushil:sushil@123@node-cluster-e9nnw.mongodb.net/test?retryWrites=true";
const port = process.env.PORT || 3000;

//connecting to the database
mongoose.connect(Db, ({ useNewUrlParser: true }))
.then(console.log("Connected to the mongodb "));

// app.get("/", (req, res) => {
//     res.send("<a href= '/about'>About </a>");
// });

// app.get("/about", (req, res) => {
//     res.send("This is about page <a href= '/'>Home </a>");
// })

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//Client ko data server ma use garna 
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(methodOverride("_method"));
// app.get('/', (req, res) => {
//     res.render('index.ejs', {name: "Sushil", character: "Awesome" });
// })

app.use('/', routes);



app.listen(port, () => {
    console.log('Server is running in port: 3000')
});
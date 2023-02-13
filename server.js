require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

// const connection = require("./db");
const userRoutes = require("./app/routes/users");
const googleUserRoutes = require("./app/routes/googleUsers");

const authRoutes = require("./app/routes/auth");
const googleAuthRoutes = require("./app/routes/googleAuth");

const logoutRoutes = require("./app/routes/logout");
const notification = require("./app/routes/notification");


// database connection
// connection();

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/googleUsers", googleUserRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/googleAuth", googleAuthRoutes);
// require('./app/routes/googleAuth')(app)

app.use("/api/logout", logoutRoutes);
app.use("/api/notification", notification);

require('./app/routes/drives.router')(app)
require('./app/routes/rides.router')(app);
require('./app/routes/riderToDriverRequest.router')(app);
require('./app/routes/driverToRiderRequest.router')(app);

require('./app/routes/updateUserToken.routes')(app);
require('./app/routes/updateGoogleUserToken.routes')(app);

require('./app/routes/user.router')(app);
require('./app/routes/googleUser.router')(app);

require('./app/routes/favouriteRoutes.router')(app);
require('./app/routes/vehicle.router')(app);
require('./app/routes/group.router')(app);

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Successfully connected to MongoDB.");


    }).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});


// let port = process.env.PORT || 8080;
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// app.listen(port, console.log(`Listening on port ${port}...`));



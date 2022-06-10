require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const logoutRoutes = require("./routes/logout");
const notification = require("./routes/notification");


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/notification", notification);

require('./routes/drives.router')(app)
require('./routes/rides.router')(app);
require('./routes/riderToDriverRequest.router')(app);
require('./routes/driverToRiderRequest.router')(app);
require('./routes/updateUserToken.routes')(app);

// let port = process.env.PORT || 8080;
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// app.listen(port, console.log(`Listening on port ${port}...`));



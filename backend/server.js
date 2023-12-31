const express = require("express");
const cors = require("cors");
const dbConnection = require("../backend/config/dbConnection");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();

const app = express();
dbConnection();
const PORT = process.env.PORT || 5001;

//Node.js DOS
//Security Misconfigurations
app.use(cors());
app.use(express.json());
app.use(cookieParser());
//Express CSRF
app.use(
	session({
		secret: "key-fsdfsrfeg165654gregsdgreg1e1g6re546464g5r6",
		resave: false,
		saveUninitialized: true,
	})
);

app.use("/api/v1/employee", require("../backend/routes/EmpRoutes"));

app.listen(PORT, () => {
	console.log("server running");
});

module.exports = app;

const mongoose = require("mongoose");

const dbConnection = async () => {
	//mongodb injection
	try {
		const con = await mongoose.connect(
			"mongodb+srv://namal:namal@merncrudyt01.xrcuuxl.mongodb.net/?retryWrites=true&w=majority"
		);
		console.log("db connected success", con.connection.name);
	} catch (error) {
		console.log(error);
	}
};

module.exports = dbConnection;

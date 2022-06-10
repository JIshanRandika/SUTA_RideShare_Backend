const mongoose = require("mongoose");
//
// module.exports = () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };

module.exports = () => {
	// mongoose.connect('mongodb+srv://ishan:1998@cluster0.btqiz.mongodb.net/?retryWrites=true&w=majority')

	mongoose.connect('mongodb+srv://ishan:1998@cluster0.btqiz.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
		.then(async () => {
			console.log("Successfully connected to MongoDB.");

		}).catch(err => {
		console.log('Could not connect to MongoDB.');
		process.exit();
	});
}

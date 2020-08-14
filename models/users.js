var mongoose = require('mongoose')


userSchema = new mongoose.Schema({
	UserID: String,
	Name: String,
	Certificate: String,
	Credential: String,
	URL: String,
	EncodedURL: String,
	QRLink: String
			
});

module.exports = mongoose.model('Users',userSchema);
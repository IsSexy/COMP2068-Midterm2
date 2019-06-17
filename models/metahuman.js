// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
const MetaSchema = new mongoose.Schema({
	alias: {
		type: String,
		require: true
	},
	fullName: {
		type: String,
		require: true
	},
	affiliation: {
		type: String,
		require: true
	},
	metaType: {
		type: String,
		enum: ['Superhero', 'Villian', 'Antihero'],
		require: true
	}
});

// Exporting our resource model
module.exports = mongoose.model('MetaHuman', MetaSchema);
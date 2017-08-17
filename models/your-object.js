const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const YourObjectSchema = Schema({
	name : {
		type: String,
		require: true
	}
});

YourObjectSchema.methods.apiRepr = function() {
	return {
		id: this.id,
		name: this.name,
	}
}

const YourObject = mongoose.model('YourObject', YourObjectSchema)

module.exports = {YourObject}
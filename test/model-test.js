const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const should = chai.should();
const {TEST_DATABASE_URL} = require('../config');
const {YourObject} = require('../models/your-object');


chai.use(chaiHttp);

mongoose.Promise = global.Promise;

function seedUserData() {

	console.log("Seeding User Data...")
	const data = [];

	for (let i = 1; i <= 5; i++) {
		data.push('collectData');
	}

	return YourObject.insertMany(data)
}

describe('YourObject', function() {
	before(function() {
		return connectDB();
	});

	beforeEach(function() {
		return seedUserData();
	})

	afterEach(function() {
		return tearDownDb();
	})

	after(function() {
		return closeDB();
	});

	describe('Your Object', function() {
		it('should return something', function() {
			return YourObject
				.findOne({})
				.exec()
				.then(res => {
					/* Compare here */
					// EX: res.callApiRepr().should.be.a.('object')
				});
		});
	});
});

function tearDownDB() {
	return mongoose.connection.dropDatabase();
}

function connectDB() {
	return mongoose.connect(TEST_DATABASE_URL);
}

function closeDB() {
	return mongoose.disconnect();
}
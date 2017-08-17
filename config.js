exports.DATABASE_URL = process.env.DATABASE_URL ||
											global.DATABASE_URL ||
											'mongodb://localhost/fullstack-tdd-starter-app';
exports.TEST_DATABASE_URL = process.env.DATABASE_URL ||
											global.DATABASE_URL ||
											'mongodb://localhost/test-fullstack-tdd-starter-app';
exports.PORT = process.env.PORT || 8080;
